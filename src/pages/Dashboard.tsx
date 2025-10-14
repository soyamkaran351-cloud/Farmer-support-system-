import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, TrendingUp, Scan, Newspaper, FileText, Lightbulb, MessageCircle, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBanner from '@/assets/hero-banner.jpg';

export default function Dashboard() {
  const { t } = useLanguage();
  const { user } = useAuth();

  const features = [
    { title: t('weather'), desc: '7-day forecast', icon: Cloud, path: '/weather', color: 'from-blue-500 to-cyan-500' },
    { title: t('market'), desc: 'Live prices', icon: TrendingUp, path: '/market', color: 'from-green-500 to-emerald-500' },
    { title: t('disease'), desc: 'AI Detection', icon: Scan, path: '/disease', color: 'from-red-500 to-orange-500' },
    { title: t('news'), desc: 'Latest updates', icon: Newspaper, path: '/news', color: 'from-purple-500 to-pink-500' },
    { title: t('schemes'), desc: 'Government aid', icon: FileText, path: '/schemes', color: 'from-yellow-500 to-amber-500' },
    { title: t('techniques'), desc: 'Farming tips', icon: Lightbulb, path: '/techniques', color: 'from-indigo-500 to-violet-500' },
    { title: t('chatbot'), desc: 'Ask AI', icon: MessageCircle, path: '/chatbot', color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img src={heroBanner} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80 flex items-center justify-center">
          <div className="text-center text-white space-y-2 p-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <Sprout className="h-12 w-12" />
              {t('welcome')}
            </h1>
            <p className="text-xl">Complete farming support at your fingertips</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('quickAccess')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Link key={feature.path} to={feature.path}>
              <Card className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className={`h-14 w-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
