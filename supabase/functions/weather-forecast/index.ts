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
    const { latitude = 28.6139, longitude = 77.2090 } = await req.json().catch(() => ({})); // Default: New Delhi
    
    const apiKey = Deno.env.get('OPENWEATHER_API_KEY');
    
    if (!apiKey) {
      console.log('OpenWeather API key not found, using mock data');
      return getMockForecast();
    }

    // Call OpenWeatherMap 5-day forecast API
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('OpenWeather API error:', response.status);
      return getMockForecast();
    }

    const data = await response.json();
    
    // Process forecast data - get one forecast per day
    const dailyForecasts = new Map();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    data.list.forEach((item: any) => {
      const date = new Date(item.dt * 1000);
      const dateStr = date.toLocaleDateString('en-IN');
      
      if (!dailyForecasts.has(dateStr)) {
        dailyForecasts.set(dateStr, {
          day: days[date.getDay()],
          date: dateStr,
          temp: Math.round(item.main.temp),
          humidity: item.main.humidity,
          rainfall: item.rain?.['3h'] || 0,
          condition: item.weather[0].main.toLowerCase()
        });
      }
    });

    const forecast = Array.from(dailyForecasts.values()).slice(0, 7);

    return new Response(
      JSON.stringify({ forecast }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Weather error:', error);
    return getMockForecast();
  }
});

function getMockForecast() {
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
}
