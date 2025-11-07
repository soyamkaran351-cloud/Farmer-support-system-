import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, CloudRain, Sun, Wind, Droplets, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function Weather() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [forecast, setForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationName, setLocationName] = useState<string>('');
  const [gettingLocation, setGettingLocation] = useState(false);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    setGettingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchLocationName(latitude, longitude);
          fetchWeather(latitude, longitude);
          setGettingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          toast.error('Unable to get your location. Using default location.');
          fetchWeather();
          setGettingLocation(false);
        }
      );
    } else {
      toast.error('Geolocation is not supported by your browser.');
      fetchWeather();
      setGettingLocation(false);
    }
  };

  const fetchLocationName = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=06b5f34ae79d01940546a1dbffd790c8`
      );
      const data = await response.json();
      if (data && data[0]) {
        setLocationName(`${data[0].name}, ${data[0].state || data[0].country}`);
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  const fetchWeather = async (latitude?: number, longitude?: number) => {
    try {
      const { data, error } = await supabase.functions.invoke('weather-forecast', {
        body: { latitude, longitude }
      });
      
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
      
      <div className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex-1 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('weatherForecast')}
            </h1>
            {locationName && (
              <p className="text-muted-foreground mt-2">📍 {locationName}</p>
            )}
          </div>
        </div>

        {loading || gettingLocation ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4">{gettingLocation ? 'Getting your location...' : t('loading')}</p>
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
