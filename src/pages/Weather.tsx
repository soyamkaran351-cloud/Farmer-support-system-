import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function Weather() {
  const { t } = useLanguage();
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('weather-forecast');
      
      if (error) throw error;
      
      if (data && data.forecast) {
        setForecast(data.forecast);
      }
    } catch (error: any) {
      console.error('Weather fetch error:', error);
      toast.error('Failed to load weather forecast');
      // Set mock data if API fails
      setForecast(getMockForecast());
    } finally {
      setLoading(false);
    }
  };

  const getMockForecast = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map((day, idx) => ({
      day,
      date: new Date(Date.now() + idx * 24 * 60 * 60 * 1000).toLocaleDateString(),
      temp: 25 + Math.random() * 10,
      humidity: 60 + Math.random() * 20,
      rainfall: Math.random() * 20,
      condition: idx % 3 === 0 ? 'rainy' : idx % 2 === 0 ? 'cloudy' : 'sunny'
    }));
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'rainy': return <CloudRain className="h-12 w-12 text-blue-500" />;
      case 'cloudy': return <Cloud className="h-12 w-12 text-gray-500" />;
      default: return <Sun className="h-12 w-12 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t('weatherForecast')}
        </h1>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4">{t('loading')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {forecast.map((day, idx) => (
              <Card key={idx} className="hover:shadow-elevated transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${idx * 0.05}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{day.day}</span>
                    {getWeatherIcon(day.condition)}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{day.date}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-orange-500" />
                    <span>{t('temperature')}: {Math.round(day.temp)}°C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-blue-500" />
                    <span>{t('humidity')}: {Math.round(day.humidity)}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CloudRain className="h-5 w-5 text-cyan-500" />
                    <span>{t('rainfall')}: {day.rainfall.toFixed(1)}mm</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
