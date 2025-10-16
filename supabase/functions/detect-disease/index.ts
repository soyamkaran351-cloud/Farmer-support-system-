import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageUrl } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Call AI vision model for disease detection
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: `You are an expert agricultural pathologist. Analyze this crop image and identify any diseases or health issues.

Provide your response in this exact format:

**Disease Name:** [Name of the disease or "Healthy" if no disease detected]

**Confidence:** [Your confidence level as a percentage, e.g., 85%]

**Treatment:**
[Specific treatment steps and recommended pesticides/fungicides with application rates]

**Recommendations:**
[Additional care instructions, prevention tips, and follow-up actions]

Be specific, practical, and use terminology familiar to Indian farmers.`
              },
              {
                type: 'image_url',
                image_url: {
                  url: imageUrl
                }
              }
            ]
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Service temporarily unavailable. Please try again later.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.choices[0].message.content;

    // Parse the AI response
    const result = {
      disease: extractDiseaseName(analysis),
      confidence: extractConfidence(analysis),
      recommendations: analysis,
      treatment: extractTreatment(analysis)
    };

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Disease detection error:', error);
    return new Response(
      JSON.stringify({ error: (error as Error).message || 'Failed to detect disease' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

function extractDiseaseName(text: string): string {
  const match = text.match(/\*\*Disease Name:\*\*\s*([^\n]+)/i) || 
                text.match(/disease[:\s]+([^\n.]+)/i);
  return match ? match[1].trim() : 'Analysis completed';
}

function extractConfidence(text: string): number {
  const match = text.match(/\*\*Confidence:\*\*\s*(\d+)%/i) || 
                text.match(/(\d+)%/);
  return match ? parseInt(match[1]) : 85;
}

function extractTreatment(text: string): string {
  const treatmentMatch = text.match(/\*\*Treatment:\*\*\s*([\s\S]*?)(?=\*\*Recommendations:\*\*|$)/i);
  if (treatmentMatch) {
    return treatmentMatch[1].trim();
  }
  const altMatch = text.match(/treatment[:\s]+([^\n]+)/i);
  return altMatch ? altMatch[1].trim() : 'See full recommendations below';
}
