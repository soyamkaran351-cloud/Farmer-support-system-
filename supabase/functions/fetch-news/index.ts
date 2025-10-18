import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const newsApiKey = Deno.env.get('NEWS_API_KEY');
    
    if (!newsApiKey) {
      return new Response(
        JSON.stringify({ error: 'News API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch agriculture-related news including pest and global news from NewsAPI
    const url = `https://newsapi.org/v2/everything?q=(agriculture OR farming OR crops OR pest OR pesticide OR "global agriculture" OR "agricultural technology")&language=en&sortBy=publishedAt&pageSize=30&apiKey=${newsApiKey}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('NewsAPI error:', response.status);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch news' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    
    // Transform and insert data into database with smart categorization
    const articles = data.articles.map((article: any) => {
      const titleLower = article.title?.toLowerCase() || '';
      const descLower = article.description?.toLowerCase() || '';
      let category = 'General';
      
      if (titleLower.includes('pest') || descLower.includes('pest') || 
          titleLower.includes('pesticide') || descLower.includes('insect')) {
        category = 'Pest Management';
      } else if (titleLower.includes('global') || descLower.includes('international') ||
                 titleLower.includes('world') || descLower.includes('export')) {
        category = 'Global Agriculture';
      } else if (titleLower.includes('technology') || titleLower.includes('innovation') ||
                 descLower.includes('tech') || descLower.includes('ai')) {
        category = 'Technology';
      } else if (titleLower.includes('crop') || descLower.includes('harvest')) {
        category = 'Crops';
      }
      
      return {
        title: article.title,
        content: article.description || article.content?.substring(0, 500) || '',
        category: category,
        image_url: article.urlToImage,
        published_at: article.publishedAt
      };
    });

    // Delete old records and insert new ones
    await supabase.from('farmer_news').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    
    const { error: insertError } = await supabase
      .from('farmer_news')
      .insert(articles.slice(0, 20)); // Limit to 20 articles

    if (insertError) {
      console.error('Insert error:', insertError);
    }

    return new Response(
      JSON.stringify({ success: true, count: articles.length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('News fetch error:', error);
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
