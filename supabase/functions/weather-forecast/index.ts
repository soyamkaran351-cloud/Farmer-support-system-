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
    // Generate mock 7-day forecast
    // In production, this would call a real weather API like OpenWeatherMap
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const conditions = ['sunny', 'cloudy', 'rainy'];
    
    const forecast = days.map((day, idx) => {
      const date = new Date();
      date.setDate(date.getDate() + idx);
      
      return {
        day,
        date: date.toLocaleDateString('en-IN'),
        temp: Math.round(25 + Math.random() * 12),
        humidity: Math.round(55 + Math.random() * 30),
        rainfall: Math.random() * 25,
        condition: conditions[Math.floor(Math.random() * conditions.length)]
      };
    });

    return new Response(
      JSON.stringify({ forecast }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Weather error:', error);
    return new Response(
      JSON.stringify({ error: (error as Error).message || 'Failed to fetch weather' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
