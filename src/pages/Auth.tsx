import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Lock, User, Phone, Sparkles, Leaf } from 'lucide-react';
import { SplashScreen } from '@/components/SplashScreen';
import authBackground from '@/assets/auth-background.jpg';
import farmerLogo from '@/assets/farmer-logo.png';

export default function Auth() {
  const { t } = useLanguage();
  const { signIn, signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  // Show splash screen only on first visit
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(loginEmail, loginPassword);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(signupEmail, signupPassword, fullName, phone);
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 relative overflow-hidden">
      {/* Beautiful background image */}
      <div className="fixed inset-0 z-0">
        <img
          src={authBackground}
          alt="Agricultural landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 backdrop-blur-sm"></div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Left side - Enhanced Image with overlay */}
      <div className="hidden md:flex relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/60 backdrop-blur-sm"></div>
        <div className="relative flex items-center justify-center p-12">
          <div className="text-center text-white space-y-6 max-w-md relative">
            {/* Floating leaf decorations */}
            <div className="absolute -top-8 -left-8 opacity-20">
              <Leaf className="w-16 h-16 animate-pulse" />
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-20">
              <Leaf className="w-20 h-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
              <img src={farmerLogo} alt="Logo" className="h-28 w-28 mx-auto animate-scale-in relative z-10 drop-shadow-2xl" />
            </div>
            
            <div className="space-y-3">
              <h1 className="text-5xl font-bold animate-fade-in tracking-tight drop-shadow-lg">
                Kisan Sahayak
              </h1>
              <div className="flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <Sparkles className="w-5 h-5 text-yellow-200" />
                <p className="text-xl font-light">
                  {t('welcome')}
                </p>
                <Sparkles className="w-5 h-5 text-yellow-200" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center space-y-1 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-xs opacity-90">Farmers</p>
              </div>
              <div className="text-center space-y-1 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs opacity-90">Crops</p>
              </div>
              <div className="text-center space-y-1 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs opacity-90">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Enhanced Auth forms */}
      <div className="flex items-center justify-center p-4 md:p-8 relative z-10">
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md"></div>
        <Card className="w-full max-w-md shadow-2xl animate-scale-in border-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-300 relative z-20 bg-card/95 backdrop-blur-lg">
          <CardHeader className="text-center space-y-3 pb-6">
            <div className="md:hidden mb-2">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <img src={farmerLogo} alt="Logo" className="h-20 w-20 mx-auto relative z-10" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Kisan Sahayak
            </CardTitle>
            <CardDescription className="text-base">
              Your complete farming support system
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/50">
                <TabsTrigger value="login" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white">
                  {t('login')}
                </TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white">
                  {t('signup')}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="mt-6">
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-sm font-medium">
                      {t('email')}
                    </Label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="login-email"
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                        placeholder="farmer@example.com"
                        className="pl-10 h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-sm font-medium">
                      {t('password')}
                    </Label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="login-password"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        className="pl-10 h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-200" 
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        {t('loading')}
                      </span>
                    ) : (
                      t('login')
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="mt-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-sm font-medium">
                      {t('fullName')}
                    </Label>
                    <div className="relative group">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="fullname"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        placeholder="Ram Kumar"
                        className="pl-10 h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-sm font-medium">
                      {t('email')}
                    </Label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="signup-email"
                        type="email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        required
                        placeholder="farmer@example.com"
                        className="pl-10 h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      {t('phone')}
                    </Label>
                    <div className="relative group">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 9876543210"
                        className="pl-10 h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-sm font-medium">
                      {t('password')}
                    </Label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        id="signup-password"
                        type="password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        required
                        minLength={6}
                        placeholder="••••••••"
                        className="pl-10 h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-200" 
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        {t('loading')}
                      </span>
                    ) : (
                      t('signup')
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
