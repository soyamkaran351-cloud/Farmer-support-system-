import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Sprout, Droplets, Bug, Sun } from 'lucide-react';

export default function Techniques() {
  const { t } = useLanguage();

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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('farmingTips')}
          </h1>
          <Lightbulb className="h-12 w-12 text-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techniques.map((technique, idx) => (
            <Card key={idx} className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${idx * 0.05}s` }}>
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
