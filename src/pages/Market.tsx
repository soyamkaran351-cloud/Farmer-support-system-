import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function Market() {
  const { t } = useLanguage();
  const [prices, setPrices] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrices();
  }, []);

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

  const filteredPrices = prices.filter(price =>
    price.crop_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    price.market_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    price.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('marketPrices')}
          </h1>
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
