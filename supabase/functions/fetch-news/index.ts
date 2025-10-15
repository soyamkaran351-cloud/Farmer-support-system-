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

    // Fetch agriculture-related news from NewsAPI
    const url = `https://newsapi.org/v2/everything?q=agriculture OR farming OR crops&language=en&sortBy=publishedAt&pageSize=20&apiKey=${newsApiKey}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('NewsAPI error:', response.status);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch news' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    
    // Transform and insert data into database
    const articles = data.articles.map((article: any) => ({
      title: article.title,
      content: article.description || article.content?.substring(0, 500) || '',
      category: 'General',
      image_url: article.urlToImage,
      published_at: article.publishedAt
    }));

    // Delete old records and insert new ones
    await supabase.from('farmer_news').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    
    const { error: insertError } = await supabase
      .from('farmer_news')
      .insert(articles.slice(0, 15)); // Limit to 15 articles

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
