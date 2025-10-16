import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, TrendingUp, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function Market() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [prices, setPrices] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [userState, setUserState] = useState<string>('');

  useEffect(() => {
    getUserLocation();
    fetchPrices();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=06b5f34ae79d01940546a1dbffd790c8`
            );
            const data = await response.json();
            if (data && data[0]) {
              setUserState(data[0].state || '');
            }
          } catch (error) {
            console.error('Error fetching location:', error);
          }
        },
        (error) => console.error('Error getting location:', error)
      );
    }
  };

  const fetchPrices = async () => {
    try {
      const { data, error } = await supabase
        .from('market_prices')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setPrices(data || []);
    } catch (error) {
      console.error('Error fetching prices:', error);
      toast.error('Failed to load market prices');
    } finally {
      setLoading(false);
    }
  };

  const filteredPrices = prices.filter(price => {
    const matchesSearch = price.crop_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      price.market_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      price.state.toLowerCase().includes(searchTerm.toLowerCase());
    
    // If user has location, prioritize local state prices first
    if (userState && !searchTerm) {
      return matchesSearch;
    }
    return matchesSearch;
  }).sort((a, b) => {
    // Sort by user's state first if available
    if (userState) {
      if (a.state.toLowerCase().includes(userState.toLowerCase())) return -1;
      if (b.state.toLowerCase().includes(userState.toLowerCase())) return 1;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex-1 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('marketPrices')}
            </h1>
            {userState && (
              <p className="text-muted-foreground mt-2">📍 Showing prices near {userState}</p>
            )}
          </div>
          <TrendingUp className="h-12 w-12 text-accent" />
        </div>

        <Card className="mb-8 shadow-elevated animate-scale-in">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder={t('search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4">{t('loading')}</p>
          </div>
        ) : (
          <Card className="shadow-elevated animate-fade-in">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('crop')}</TableHead>
                    <TableHead>{t('price')} ({t('perQuintal')})</TableHead>
                    <TableHead>Market</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPrices.map((price) => (
                    <TableRow key={price.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{price.crop_name}</TableCell>
                      <TableCell className="text-accent font-semibold">₹{price.price_per_quintal}</TableCell>
                      <TableCell>{price.market_name}</TableCell>
                      <TableCell>{price.state}</TableCell>
                      <TableCell>{new Date(price.date).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
