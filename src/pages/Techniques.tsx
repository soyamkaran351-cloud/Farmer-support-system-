import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Sprout, Droplets, Bug, Sun, ArrowLeft, Fish, BugOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import fisheriesImg from '@/assets/fisheries.jpg';
import beekeepingImg from '@/assets/beekeeping.jpg';

export default function Techniques() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const techniques = [
    {
      title: 'Crop Rotation',
      hindi: 'फसल चक्रण',
      description: 'Alternate different crops in the same field to improve soil health and reduce pests.',
      icon: Sprout,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Drip Irrigation',
      hindi: 'ड्रिप सिंचाई',
      description: 'Save water by delivering it directly to plant roots through a system of tubes and emitters.',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Integrated Pest Management',
      hindi: 'एकीकृत कीट प्रबंधन',
      description: 'Use natural predators, crop rotation, and minimal chemical pesticides to control pests.',
      icon: Bug,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Mulching',
      hindi: 'मल्चिंग',
      description: 'Cover soil with organic material to retain moisture, suppress weeds, and improve fertility.',
      icon: Sun,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'Soil Testing',
      hindi: 'मिट्टी परीक्षण',
      description: 'Regular soil testing helps determine nutrient levels and pH for optimal crop growth.',
      icon: Sprout,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Organic Farming',
      hindi: 'जैविक खेती',
      description: 'Use natural fertilizers and avoid synthetic chemicals for healthier crops and environment.',
      icon: Lightbulb,
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Fisheries',
      hindi: 'मत्स्य पालन',
      description: 'Cultivate fish like Rohu, Catla, Tilapia, and Prawns in ponds for protein-rich food and income.',
      icon: Fish,
      color: 'from-indigo-500 to-blue-500',
      image: fisheriesImg
    },
    {
      title: 'Beekeeping',
      hindi: 'मधुमक्खी पालन',
      description: 'Raise Apis Mellifera (Italian) and Apis Cerana (Indian) bees for honey, pollination, and wax.',
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
