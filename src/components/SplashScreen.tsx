import { useEffect, useState } from 'react';
import { Leaf, Sparkles } from 'lucide-react';
import farmerLogo from '@/assets/farmer-logo.png';
import splashFarmer from '@/assets/splash-farmer.jpg';
import splashTech from '@/assets/splash-tech.jpg';

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [splashFarmer, splashTech];

  useEffect(() => {
    // Cycle through images
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    // Complete splash after 4 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      {/* Background images with fade effect */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === idx ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt="Farming"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/80 to-accent/80"></div>
      </div>

      {/* Animated floating leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-white/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 40}px`,
              height: `${40 + Math.random() * 40}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-6">
        {/* Logo with glow effect */}
        <div className="relative inline-block animate-scale-in">
          <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl animate-pulse"></div>
          <img
            src={farmerLogo}
            alt="Kisan Sahayak"
            className="h-32 w-32 mx-auto relative z-10 drop-shadow-2xl animate-bounce-slow"
          />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl animate-fade-in tracking-tight">
            Kisan Sahayak
          </h1>
          <div className="flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-6 h-6 text-yellow-200 animate-pulse" />
            <p className="text-2xl text-white/95 font-light">
              Empowering Farmers, Growing Future
            </p>
            <Sparkles className="w-6 h-6 text-yellow-200 animate-pulse" />
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-64 mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-white rounded-full animate-loading-bar shadow-lg"></div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-white/90 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Your Complete Farming Support System
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-loading-bar {
          animation: loading-bar 4s ease-in-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
