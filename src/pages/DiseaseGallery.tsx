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
import cornBlight from '@/assets/disease-corn-blight.jpg';
import mangoAnthracnose from '@/assets/disease-mango-anthracnose.jpg';
import chiliCurl from '@/assets/disease-chili-curl.jpg';
import bananaPanama from '@/assets/disease-banana-panama.jpg';
import onionBlotch from '@/assets/disease-onion-blotch.jpg';
import brinjalBorer from '@/assets/disease-brinjal-borer.jpg';
import cucumberMildew from '@/assets/disease-cucumber-mildew.jpg';
import cabbageRot from '@/assets/disease-cabbage-rot.jpg';
import grapeMildew from '@/assets/disease-grape-mildew.jpg';
import appleScab from '@/assets/disease-apple-scab.jpg';
import papayaMosaic from '@/assets/disease-papaya-mosaic.jpg';
import carrotBlight from '@/assets/disease-carrot-blight.jpg';
import okraMosaic from '@/assets/disease-okra-mosaic.jpg';
import cauliflowerRot from '@/assets/disease-cauliflower-rot.jpg';
import groundnutSpot from '@/assets/disease-groundnut-spot.jpg';
import soybeanRust from '@/assets/disease-soybean-rust.jpg';
import strawberryScorch from '@/assets/disease-strawberry-scorch.jpg';
import gingerRot from '@/assets/disease-ginger-rot.jpg';
import citrusCanker from '@/assets/disease-citrus-canker.jpg';
import pepperRot from '@/assets/disease-pepper-rot.jpg';

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
    },
    {
      name: 'Corn Leaf Blight',
      hindi: 'मक्का पत्ती झुलसा',
      crop: 'Corn',
      image: cornBlight,
      symptoms: 'Long brown lesions on corn leaves',
      treatment: 'Fungicide sprays, resistant hybrids',
      prevention: 'Crop rotation, balanced fertilization, timely sowing',
      severity: 'High'
    },
    {
      name: 'Mango Anthracnose',
      hindi: 'आम का एंथ्रेक्नोज',
      crop: 'Mango',
      image: mangoAnthracnose,
      symptoms: 'Black spots on fruits and leaves',
      treatment: 'Copper fungicides, carbendazim spray',
      prevention: 'Prune trees for air circulation, remove infected fruits',
      severity: 'High'
    },
    {
      name: 'Chili Leaf Curl',
      hindi: 'मिर्च पत्ती मरोड़',
      crop: 'Chili',
      image: chiliCurl,
      symptoms: 'Curled and yellowing leaves, stunted growth',
      treatment: 'Remove infected plants, control whitefly vectors',
      prevention: 'Use virus-free seeds, install yellow sticky traps',
      severity: 'High'
    },
    {
      name: 'Banana Panama Disease',
      hindi: 'केला पनामा रोग',
      crop: 'Banana',
      image: bananaPanama,
      symptoms: 'Yellowing and wilting leaves, vascular discoloration',
      treatment: 'No chemical cure, plant resistant varieties',
      prevention: 'Use disease-free planting material, soil fumigation',
      severity: 'High'
    },
    {
      name: 'Onion Purple Blotch',
      hindi: 'प्याज बैंगनी धब्बा',
      crop: 'Onion',
      image: onionBlotch,
      symptoms: 'Purple lesions on leaves with concentric rings',
      treatment: 'Mancozeb or chlorothalonil spray',
      prevention: 'Crop rotation, avoid overhead irrigation, proper spacing',
      severity: 'Medium'
    },
    {
      name: 'Brinjal Fruit Borer',
      hindi: 'बैंगन फल छेदक',
      crop: 'Brinjal',
      image: brinjalBorer,
      symptoms: 'Holes in fruits, larval presence inside fruits',
      treatment: 'Pheromone traps, neem-based pesticides',
      prevention: 'Regular monitoring, remove infested fruits, biological control',
      severity: 'High'
    },
    {
      name: 'Cucumber Downy Mildew',
      hindi: 'खीरा कुहासा फफूंदी',
      crop: 'Cucumber',
      image: cucumberMildew,
      symptoms: 'Yellow angular spots on upper leaf surface',
      treatment: 'Metalaxyl or cymoxanil fungicides',
      prevention: 'Adequate plant spacing, drip irrigation, resistant varieties',
      severity: 'Medium'
    },
    {
      name: 'Cabbage Black Rot',
      hindi: 'पत्तागोभी काला सड़न',
      crop: 'Cabbage',
      image: cabbageRot,
      symptoms: 'V-shaped lesions from leaf margins, blackened veins',
      treatment: 'Copper-based bactericides, remove infected plants',
      prevention: 'Hot water seed treatment, crop rotation, avoid overhead watering',
      severity: 'High'
    },
    {
      name: 'Grape Downy Mildew',
      hindi: 'अंगूर कुहासा फफूंदी',
      crop: 'Grape',
      image: grapeMildew,
      symptoms: 'White fungal growth on leaves, brown spots',
      treatment: 'Metalaxyl or copper fungicides',
      prevention: 'Proper canopy management, avoid overhead irrigation',
      severity: 'High'
    },
    {
      name: 'Apple Scab',
      hindi: 'सेब का पपड़ी रोग',
      crop: 'Apple',
      image: appleScab,
      symptoms: 'Dark scaly lesions on fruits and leaves',
      treatment: 'Captan or myclobutanil fungicides',
      prevention: 'Remove fallen leaves, resistant varieties, proper pruning',
      severity: 'High'
    },
    {
      name: 'Papaya Mosaic Virus',
      hindi: 'पपीता मोज़ेक वायरस',
      crop: 'Papaya',
      image: papayaMosaic,
      symptoms: 'Mottled yellow patterns on leaves, distorted fruits',
      treatment: 'No cure, control aphid vectors',
      prevention: 'Use virus-free seeds, remove infected plants, control aphids',
      severity: 'High'
    },
    {
      name: 'Carrot Leaf Blight',
      hindi: 'गाजर पत्ती झुलसा',
      crop: 'Carrot',
      image: carrotBlight,
      symptoms: 'Brown necrotic spots on carrot foliage',
      treatment: 'Chlorothalonil or mancozeb fungicides',
      prevention: 'Crop rotation, proper drainage, resistant varieties',
      severity: 'Medium'
    },
    {
      name: 'Okra Yellow Vein Mosaic',
      hindi: 'भिंडी पीली नस मोज़ेक',
      crop: 'Okra',
      image: okraMosaic,
      symptoms: 'Yellowing of leaf veins, reduced fruit size',
      treatment: 'Control whitefly vectors with insecticides',
      prevention: 'Use resistant varieties, yellow sticky traps, early sowing',
      severity: 'High'
    },
    {
      name: 'Cauliflower Black Rot',
      hindi: 'फूलगोभी काला सड़न',
      crop: 'Cauliflower',
      image: cauliflowerRot,
      symptoms: 'V-shaped lesions, blackening of curd',
      treatment: 'Copper bactericides, remove diseased plants',
      prevention: 'Hot water seed treatment, crop rotation, proper field hygiene',
      severity: 'High'
    },
    {
      name: 'Groundnut Tikka Spot',
      hindi: 'मूंगफली टिक्का धब्बा',
      crop: 'Groundnut',
      image: groundnutSpot,
      symptoms: 'Dark circular spots with yellow halo on leaves',
      treatment: 'Mancozeb or chlorothalonil spray',
      prevention: 'Use disease-free seeds, crop rotation, proper spacing',
      severity: 'Medium'
    },
    {
      name: 'Soybean Rust',
      hindi: 'सोयाबीन रस्ट',
      crop: 'Soybean',
      image: soybeanRust,
      symptoms: 'Brown pustules on undersides of leaves',
      treatment: 'Triazole fungicides, early detection critical',
      prevention: 'Resistant varieties, monitor fields regularly, timely spraying',
      severity: 'High'
    },
    {
      name: 'Strawberry Leaf Scorch',
      hindi: 'स्ट्रॉबेरी पत्ती झुलसा',
      crop: 'Strawberry',
      image: strawberryScorch,
      symptoms: 'Purple-bordered spots on leaves',
      treatment: 'Captan or copper fungicides',
      prevention: 'Remove infected leaves, proper plant spacing, avoid overhead watering',
      severity: 'Medium'
    },
    {
      name: 'Ginger Soft Rot',
      hindi: 'अदरक मुलायम सड़न',
      crop: 'Ginger',
      image: gingerRot,
      symptoms: 'Water-soaked lesions on rhizomes, foul smell',
      treatment: 'Remove infected rhizomes, improve drainage',
      prevention: 'Use disease-free seed rhizomes, proper field drainage',
      severity: 'High'
    },
    {
      name: 'Citrus Canker',
      hindi: 'नींबू कैंकर',
      crop: 'Citrus',
      image: citrusCanker,
      symptoms: 'Raised corky lesions on fruits and leaves',
      treatment: 'Copper sprays, prune infected branches',
      prevention: 'Use disease-free nursery stock, windbreaks, sanitation',
      severity: 'High'
    },
    {
      name: 'Black Pepper Root Rot',
      hindi: 'काली मिर्च जड़ सड़न',
      crop: 'Black Pepper',
      image: pepperRot,
      symptoms: 'Wilting vines, yellowing leaves, root decay',
      treatment: 'Remove infected vines, soil drenching with fungicides',
      prevention: 'Proper drainage, avoid waterlogging, use resistant varieties',
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
