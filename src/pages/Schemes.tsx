import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { FileText, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function Schemes() {
  const { t } = useLanguage();
  const [schemes, setSchemes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSchemes();
  }, []);

  const fetchSchemes = async () => {
    try {
      const { data, error } = await supabase
        .from('government_schemes')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setSchemes(data || []);
    } catch (error) {
      console.error('Error fetching schemes:', error);
      toast.error('Failed to load schemes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('govSchemes')}
          </h1>
          <FileText className="h-12 w-12 text-accent" />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4">{t('loading')}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {schemes.map((scheme, idx) => (
              <Card key={scheme.id} className="shadow-elevated animate-scale-in"
                style={{ animationDelay: `${idx * 0.05}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl">{scheme.title}</CardTitle>
                    {scheme.state && (
                      <Badge variant="secondary">{scheme.state}</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-2">{scheme.description}</p>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="eligibility">
                      <AccordionTrigger className="text-lg">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-accent" />
                          {t('eligibility')}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {scheme.eligibility}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefits">
                      <AccordionTrigger className="text-lg">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-accent" />
                          {t('benefits')}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {scheme.benefits}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="apply">
                      <AccordionTrigger className="text-lg">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-accent" />
                          {t('howToApply')}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {scheme.how_to_apply}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
