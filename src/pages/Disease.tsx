import { useState } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Camera, Loader2, ArrowLeft, BookOpen } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

export default function Disease() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage || !user) return;

    setLoading(true);
    try {
      // Upload image to storage
      const fileName = `${user.id}/${Date.now()}-${selectedImage.name}`;
      const { error: uploadError } = await supabase.storage
        .from('disease-images')
        .upload(fileName, selectedImage);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('disease-images')
        .getPublicUrl(fileName);

      // Call AI detection edge function
      const { data, error } = await supabase.functions.invoke('detect-disease', {
        body: { imageUrl: publicUrl }
      });

      if (error) throw error;

      setResult(data);
      
      // Save to database
      await supabase.from('disease_detections').insert({
        user_id: user.id,
        image_url: publicUrl,
        disease_name: data.disease,
        confidence: data.confidence,
        recommendations: data.recommendations
      });

      toast.success('Disease detection completed!');
    } catch (error: any) {
      console.error('Detection error:', error);
      toast.error('Failed to analyze image');
    } finally {
      setLoading(false);
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
          <div className="flex-1">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('detectDisease')}
            </h1>
          </div>
          <Link to="/disease-gallery">
            <Button variant="outline" size="sm">
              <BookOpen className="h-4 w-4 mr-2" />
              Disease Reference
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-elevated animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-6 w-6 text-primary" />
                {t('uploadImage')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
                ) : (
                  <div className="space-y-4">
                    <Upload className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">Upload a crop image</p>
                  </div>
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="image-upload"
              />
              
              <label htmlFor="image-upload">
                <Button variant="outline" className="w-full" asChild>
                  <span>{t('uploadImage')}</span>
                </Button>
              </label>

              <Button
                onClick={analyzeImage}
                disabled={!selectedImage || loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  t('detectDisease')
                )}
              </Button>
            </CardContent>
          </Card>

          {result && (
            <Card className="shadow-elevated animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t('diseaseResults')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Disease Detected</h3>
                  <p className="text-xl text-primary font-bold">{result.disease}</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Confidence</h3>
                  <p className="text-lg">{result.confidence}%</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Recommendations</h3>
                  <p className="text-sm whitespace-pre-line">{result.recommendations}</p>
                </div>

                {result.treatment && (
                  <div className="p-4 bg-accent/10 border border-accent rounded-lg">
                    <h3 className="font-semibold mb-2 text-accent">Treatment</h3>
                    <p className="text-sm">{result.treatment}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
