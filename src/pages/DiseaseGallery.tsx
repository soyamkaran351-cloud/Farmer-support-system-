import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import wheatRust from '@/assets/disease-wheat-rust.jpg';
import tomatoBlight from '@/assets/disease-tomato-blight.jpg';
import riceBlight from '@/assets/disease-rice-blight.jpg';
import cottonBollworm from '@/assets/disease-cotton-bollworm.jpg';
import sugarcaneRot from '@/assets/disease-sugarcane-rot.jpg';
import potatoBlight from '@/assets/disease-potato-blight.jpg';

export default function DiseaseGallery() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const diseases = [
    {
      name: 'Wheat Rust',
      hindi: 'गेहूं का रतुआ',
      crop: 'Wheat',
      image: wheatRust,
      symptoms: 'Brown-orange rust pustules on leaves and stems',
      treatment: 'Apply fungicides like Propiconazole. Use resistant varieties.',
      prevention: 'Crop rotation, remove crop residues, plant resistant varieties',
      severity: 'High'
    },
    {
      name: 'Tomato Late Blight',
      hindi: 'टमाटर की झुलसा',
      crop: 'Tomato',
      image: tomatoBlight,
      symptoms: 'Dark brown spots on leaves, white mold on undersides',
      treatment: 'Copper-based fungicides, remove infected plants immediately',
      prevention: 'Proper spacing, avoid overhead watering, use resistant varieties',
      severity: 'High'
    },
    {
      name: 'Rice Bacterial Blight',
      hindi: 'धान का जीवाणु झुलसा',
      crop: 'Rice',
      image: riceBlight,
      symptoms: 'Yellow to white lesions along leaf veins',
      treatment: 'Copper oxychloride spray, balanced fertilization',
      prevention: 'Use disease-free seeds, maintain proper water levels',
      severity: 'Medium'
    },
    {
      name: 'Cotton Bollworm',
      hindi: 'कपास का गुलाबी सुंडी',
      crop: 'Cotton',
      image: cottonBollworm,
      symptoms: 'Damaged cotton bolls, holes in bolls and leaves',
      treatment: 'Bt cotton varieties, biological control with Trichogramma',
      prevention: 'Early sowing, pheromone traps, crop rotation',
      severity: 'High'
    },
    {
      name: 'Sugarcane Red Rot',
      hindi: 'गन्ने का लाल सड़न',
      crop: 'Sugarcane',
      image: sugarcaneRot,
      symptoms: 'Red discoloration inside stalks, alcohol smell',
      treatment: 'Use disease-free setts, hot water treatment of setts',
      prevention: 'Plant resistant varieties, proper drainage, crop rotation',
      severity: 'High'
    },
    {
      name: 'Potato Late Blight',
      hindi: 'आलू का झुलसा',
      crop: 'Potato',
      image: potatoBlight,
      symptoms: 'Dark brown lesions on leaves and tubers',
      treatment: 'Mancozeb or Chlorothalonil fungicides',
      prevention: 'Certified disease-free seeds, hill up plants, remove infected plants',
      severity: 'High'
    }
  ];

  const getSeverityColor = (severity: string) => {
    return severity === 'High' ? 'bg-red-500' : 'bg-orange-500';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate('/disease')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Common Crop Diseases
            </h1>
            <p className="text-muted-foreground">Reference guide with photos</p>
          </div>
          <AlertCircle className="h-12 w-12 text-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.map((disease, idx) => (
            <Card key={idx} className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="relative h-48">
                <img 
                  src={disease.image} 
                  alt={disease.name}
                  className="w-full h-full object-cover"
                />
                <Badge className={`${getSeverityColor(disease.severity)} absolute top-4 right-4`}>
                  {disease.severity} Risk
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{disease.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{disease.hindi}</p>
                <Badge variant="outline" className="w-fit mt-2">{disease.crop}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Symptoms:</h4>
                  <p className="text-sm text-muted-foreground">{disease.symptoms}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Treatment:</h4>
                  <p className="text-sm text-muted-foreground">{disease.treatment}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Prevention:</h4>
                  <p className="text-sm text-muted-foreground">{disease.prevention}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 shadow-elevated bg-accent/5 border-accent">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Important Note</h3>
                <p className="text-sm text-muted-foreground">
                  For accurate diagnosis, use our AI-powered disease detection tool. Upload a photo of your crop for instant analysis and personalized treatment recommendations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
