import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function News() {
  const { t } = useLanguage();
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase
        .from('farmer_news')
        .select('*')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      setNews(data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
      toast.error('Failed to load news');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Schemes': 'bg-blue-500',
      'Weather': 'bg-green-500',
      'Technology': 'bg-purple-500',
      'Market': 'bg-orange-500',
      'default': 'bg-gray-500'
    };
    return colors[category] || colors.default;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('latestNews')}
          </h1>
          <Newspaper className="h-12 w-12 text-accent" />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4">{t('loading')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, idx) => (
              <Card key={item.id} className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${idx * 0.05}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(item.published_at).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-4">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
