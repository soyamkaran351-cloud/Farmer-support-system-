import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, TrendingUp, ArrowLeft, RefreshCw, TrendingDown } from 'lucide-react';
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
  const [refreshing, setRefreshing] = useState(false);
  const [priceStats, setPriceStats] = useState<any>(null);

  useEffect(() => {
    getUserLocation();
    fetchLiveData();
  }, []);

  const fetchLiveData = async () => {
    setLoading(true);
    try {
      // Fetch latest market data from edge function
      const { error: fetchError } = await supabase.functions.invoke('fetch-market-prices');
      
      if (fetchError) {
        console.error('Error fetching live data:', fetchError);
      }
      
      // Wait a moment for data to be inserted
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Fetch today's prices
      await fetchPrices();
    } catch (error) {
      console.error('Error in fetchLiveData:', error);
      toast.error('Failed to fetch live market data');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchLiveData();
    setRefreshing(false);
    toast.success('Market data refreshed!');
  };

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
      const today = new Date().toISOString().split('T')[0];
      
      const { data, error } = await supabase
        .from('market_prices')
        .select('*')
        .eq('date', today)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      const pricesData = data || [];
      setPrices(pricesData);
      
      // Calculate price statistics
      if (pricesData.length > 0) {
        const prices = pricesData.map(p => parseFloat(String(p.price_per_quintal)));
        const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
        const maxPrice = Math.max(...prices);
        const minPrice = Math.min(...prices);
        
        setPriceStats({
          average: avgPrice.toFixed(2),
          highest: maxPrice.toFixed(2),
          lowest: minPrice.toFixed(2),
          total: pricesData.length
        });
      }
    } catch (error) {
      console.error('Error fetching prices:', error);
      toast.error('Failed to load market prices');
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
            <p className="text-muted-foreground mt-2">
              📅 Today's Live Market Data {userState && `• 📍 ${userState}`}
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {priceStats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="shadow-elevated">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Total Crops</p>
                  <p className="text-2xl font-bold text-primary">{priceStats.total}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-elevated">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Average Price</p>
                  <p className="text-2xl font-bold text-accent">₹{priceStats.average}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-elevated">
              <CardContent className="pt-6">
                <div className="text-center flex items-center justify-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Highest</p>
                    <p className="text-2xl font-bold text-green-500">₹{priceStats.highest}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-elevated">
              <CardContent className="pt-6">
                <div className="text-center flex items-center justify-center gap-2">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Lowest</p>
                    <p className="text-2xl font-bold text-red-500">₹{priceStats.lowest}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

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
            <p className="mt-4">Fetching live market data...</p>
          </div>
        ) : filteredPrices.length === 0 ? (
          <Card className="shadow-elevated">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No market data available for today. Try refreshing.</p>
            </CardContent>
          </Card>
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
