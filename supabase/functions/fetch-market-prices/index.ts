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

    // Fetch from government API (using data.gov.in agricultural market data)
    const apiUrl = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=100';
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      console.error('Government API error:', response.status);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch market data' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    
    // Transform and insert data into database
    const records = data.records.map((record: any) => ({
      crop_name: record.commodity || 'Unknown',
      market_name: record.market || 'Unknown',
      state: record.state || 'Unknown',
      price_per_quintal: parseFloat(record.modal_price) || 0,
      date: new Date().toISOString().split('T')[0]
    }));

    // Delete old records and insert new ones
    await supabase.from('market_prices').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    
    const { error: insertError } = await supabase
      .from('market_prices')
      .insert(records.slice(0, 50)); // Limit to 50 records

    if (insertError) {
      console.error('Insert error:', insertError);
    }

    return new Response(
      JSON.stringify({ success: true, count: records.length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Market prices error:', error);
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
