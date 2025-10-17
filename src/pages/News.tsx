import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Newspaper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export default function News() {
  const { t } = useLanguage();
  const navigate = useNavigate();
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
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'General': 'bg-blue-500',
      'Technology': 'bg-purple-500',
      'Market': 'bg-green-500',
      'Policy': 'bg-orange-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Latest News
            </h1>
            <p className="text-muted-foreground">Stay updated with agriculture news</p>
          </div>
          <Newspaper className="h-12 w-12 text-accent" />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <span className="ml-3 text-muted-foreground">Loading news...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, idx) => (
              <Card key={article.id} className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${idx * 0.05}s` }}>
                {article.image_url && (
                  <div className="h-48 w-full overflow-hidden">
                    <img 
                      src={article.image_url} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <CardHeader>
                  <Badge className={`${getCategoryColor(article.category)} w-fit mb-2`}>
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {new Date(article.published_at).toLocaleDateString()}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm line-clamp-3">{article.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
