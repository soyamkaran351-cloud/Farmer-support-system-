import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Home,
  Cloud,
  TrendingUp,
  Scan,
  Newspaper,
  FileText,
  Lightbulb,
  MessageCircle,
  LogOut,
  Languages
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import farmerLogo from '@/assets/farmer-logo.png';

export const Header = () => {
  const { signOut, user } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: t('home') },
    { path: '/weather', icon: Cloud, label: t('weather') },
    { path: '/market', icon: TrendingUp, label: t('market') },
    { path: '/disease', icon: Scan, label: t('disease') },
    { path: '/news', icon: Newspaper, label: t('news') },
    { path: '/schemes', icon: FileText, label: t('schemes') },
    { path: '/techniques', icon: Lightbulb, label: t('techniques') },
    { path: '/chatbot', icon: MessageCircle, label: t('chatbot') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={farmerLogo} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Kisan Sahayak
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, icon: Icon, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link key={path} to={path}>
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    size="sm"
                    className="gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Button>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Languages className="h-4 w-4" />
                  {language === 'en' ? 'EN' : 'हिं'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('hi')}>
                  हिंदी (Hindi)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {user && (
              <Button variant="destructive" size="sm" onClick={signOut} className="gap-2">
                <LogOut className="h-4 w-4" />
                {t('logout')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
