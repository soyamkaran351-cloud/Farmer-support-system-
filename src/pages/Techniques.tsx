import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Sprout, Droplets, Bug, Sun, ArrowLeft, Fish, BugOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import fisheriesImg from '@/assets/fisheries.jpg';
import beekeepingImg from '@/assets/beekeeping.jpg';
import cropRotationImg from '@/assets/crop-rotation.jpg';
import dripIrrigationImg from '@/assets/drip-irrigation.jpg';
import pestManagementImg from '@/assets/pest-management.jpg';
import mulchingImg from '@/assets/mulching.jpg';
import soilTestingImg from '@/assets/soil-testing.jpg';
import organicFarmingImg from '@/assets/organic-farming.jpg';

export default function Techniques() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const techniques = [
    {
      title: 'Crop Rotation',
      hindi: 'फसल चक्रण',
      description: 'Systematically alternate different crops in the same field across seasons to maintain soil fertility and break pest cycles. Rotate between cereals (wheat/rice), legumes (pulses), and oilseeds. Benefits include improved soil structure, reduced pest buildup, better nutrient management, and increased yields by 15-20%. Follow a 3-4 year rotation plan for best results.',
      icon: Sprout,
      color: 'from-green-500 to-emerald-500',
      image: cropRotationImg
    },
    {
      title: 'Drip Irrigation',
      hindi: 'ड्रिप सिंचाई',
      description: 'Modern water-saving irrigation system that delivers water directly to plant roots through a network of pipes, valves, and emitters. Saves 30-70% water compared to flood irrigation, reduces weed growth, prevents soil erosion, and increases crop yields by 20-50%. Ideal for water-scarce regions and high-value crops like vegetables, fruits, and sugarcane.',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-500',
      image: dripIrrigationImg
    },
    {
      title: 'Integrated Pest Management',
      hindi: 'एकीकृत कीट प्रबंधन',
      description: 'Holistic approach combining biological controls (natural predators like ladybugs, parasitic wasps), cultural practices (crop rotation, trap crops), physical barriers, and minimal chemical pesticides only when necessary. Reduces pesticide costs by 30-40%, protects beneficial insects, prevents pest resistance, and produces safer, chemical-free crops for better market prices.',
      icon: Bug,
      color: 'from-red-500 to-orange-500',
      image: pestManagementImg
    },
    {
      title: 'Mulching',
      hindi: 'मल्चिंग',
      description: 'Cover soil surface with organic materials (straw, dried leaves, grass clippings) or plastic sheets to conserve moisture, regulate soil temperature, suppress weeds, and improve soil fertility. Organic mulch adds nutrients as it decomposes. Reduces water requirement by 25-30%, minimizes soil erosion, and increases crop yields. Apply 5-10 cm thick layer around plants.',
      icon: Sun,
      color: 'from-yellow-500 to-amber-500',
      image: mulchingImg
    },
    {
      title: 'Soil Testing',
      hindi: 'मिट्टी परीक्षण',
      description: 'Scientific analysis of soil samples to determine pH levels, nutrient content (N, P, K), organic matter, and micronutrients. Conduct tests before sowing season every 2-3 years. Helps optimize fertilizer application, reduce input costs by 20-25%, prevent over-fertilization, and improve crop health. Government soil testing labs available at nominal charges across districts.',
      icon: Sprout,
      color: 'from-purple-500 to-pink-500',
      image: soilTestingImg
    },
    {
      title: 'Organic Farming',
      hindi: 'जैविक खेती',
      description: 'Sustainable farming using natural fertilizers (compost, vermicompost, green manure), bio-pesticides, and traditional practices. Avoids synthetic chemicals, promotes biodiversity, improves soil health long-term, and produces premium quality crops. Organic products fetch 20-30% higher prices. Certification available through government programs. Transition period typically 2-3 years.',
      icon: Lightbulb,
      color: 'from-teal-500 to-green-500',
      image: organicFarmingImg
    },
    {
      title: 'Fisheries',
      hindi: 'मत्स्य पालन',
      description: 'Aquaculture of fish species in ponds, tanks, or cages for protein-rich food production and additional income. Popular varieties: Rohu (Labeo rohita), Catla (Catla catla), Tilapia, and Prawns. Requires 0.1-2 hectare pond with proper water management (pH 7-8, dissolved oxygen >5 mg/L), regular feeding (3-5% body weight), and disease monitoring. Integrated farming with poultry or crops maximizes land use.',
      icon: Fish,
      color: 'from-indigo-500 to-blue-500',
      image: fisheriesImg
    },
    {
      title: 'Beekeeping',
      hindi: 'मधुमक्खी पालन',
      description: 'Apiculture for honey production, beeswax, royal jelly, and crop pollination services. Apis Mellifera (European, 25-40 kg honey/hive/year) and Apis Cerana (Indian, 8-12 kg/hive/year) are common species. Requires 1-2 acre flowering area, wooden hives (Langstroth boxes), protective gear, and seasonal management. One colony can pollinate 2-3 acres, increasing crop yields by 30%. Low investment with good returns.',
      icon: BugOff,
      color: 'from-amber-500 to-yellow-500',
      image: beekeepingImg
    }
  ];

  const tips = [
    'Always use certified seeds from reliable sources',
    'Monitor weather forecasts regularly for better planning',
    'Keep detailed records of expenses and yields',
    'Join farmer cooperatives for better market access',
    'Adopt water conservation techniques',
    'Practice sustainable farming methods'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold flex-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('farmingTips')}
          </h1>
          <Lightbulb className="h-12 w-12 text-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techniques.map((technique, idx) => (
            <Card key={idx} className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${idx * 0.05}s` }}>
              {technique.image && (
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={technique.image} 
                    alt={technique.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className={`h-14 w-14 rounded-lg bg-gradient-to-br ${technique.color} flex items-center justify-center mb-3`}>
                  <technique.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{technique.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{technique.hindi}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{technique.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-elevated animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              Quick Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
