import { useEffect, useState } from 'react';
import { Leaf, Sparkles, Sprout } from 'lucide-react';
import farmerLogo from '@/assets/farmer-logo.png';

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const title = 'Agri Guru';

  useEffect(() => {
    const start = performance.now();
    const duration = 2600;
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else onComplete();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      {/* Animated radial glow */}
      <div className="absolute inset-0 splash-glow pointer-events-none" />

      {/* Soft grid backdrop */}
      <div className="absolute inset-0 splash-grid opacity-20 pointer-events-none" />

      {/* Floating leaves (lightweight: 4 only) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-white/25 splash-float will-change-transform"
            style={{
              left: `${15 + i * 22}%`,
              top: `${10 + (i % 2) * 60}%`,
              width: `${36 + (i % 2) * 16}px`,
              height: `${36 + (i % 2) * 16}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-7 px-6">
        {/* Logo with concentric pulse rings */}
        <div className="relative inline-block">
          <span className="absolute inset-0 rounded-full splash-ring" />
          <span className="absolute inset-0 rounded-full splash-ring splash-ring-delay" />
          <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl animate-pulse" />
          <div className="relative h-28 w-28 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center splash-logo-pop shadow-2xl">
            <img
              src={farmerLogo}
              alt="Agri Guru"
              className="h-20 w-20 drop-shadow-xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Title with per-letter reveal + shimmer */}
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            <span className="splash-shimmer inline-block">
              {title.split('').map((ch, i) => (
                <span
                  key={i}
                  className="inline-block splash-letter"
                  style={{ animationDelay: `${0.15 + i * 0.06}s` }}
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </span>
              ))}
            </span>
          </h1>

          <div
            className="flex items-center justify-center gap-2 splash-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            <Sparkles className="w-5 h-5 text-yellow-200 animate-pulse" />
            <p className="text-base sm:text-xl text-white/95 font-light">
              An AI based Modern Farming System
            </p>
            <Sparkles className="w-5 h-5 text-yellow-200 animate-pulse" />
          </div>
        </div>

        {/* Loading bar driven by progress */}
        <div
          className="w-56 sm:w-64 mx-auto splash-fade-up"
          style={{ animationDelay: '0.85s' }}
        >
          <div className="h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-white rounded-full shadow-lg transition-[width] duration-150 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-center gap-1.5 text-white/80 text-xs">
            <Sprout className="w-3.5 h-3.5" />
            <span>Preparing your farm intelligence…</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes splash-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(180deg); }
        }
        @keyframes splash-letter-in {
          0% { opacity: 0; transform: translateY(14px) scale(0.9); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes splash-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes splash-ring {
          0% { transform: scale(0.6); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes splash-logo-pop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes splash-fade-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes splash-glow-pan {
          0%, 100% { transform: translate3d(-5%, -5%, 0); }
          50% { transform: translate3d(5%, 5%, 0); }
        }

        .splash-float { animation: splash-float 4s ease-in-out infinite; }

        .splash-letter {
          opacity: 0;
          animation: splash-letter-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .splash-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.95) 0%,
            rgba(255,255,255,0.95) 35%,
            rgba(255, 240, 180, 1) 50%,
            rgba(255,255,255,0.95) 65%,
            rgba(255,255,255,0.95) 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: splash-shimmer 2.4s linear infinite;
          filter: drop-shadow(0 6px 20px rgba(0,0,0,0.25));
        }

        .splash-ring {
          border: 2px solid rgba(255,255,255,0.5);
          animation: splash-ring 2.2s ease-out infinite;
        }
        .splash-ring-delay { animation-delay: 1.1s; }

        .splash-logo-pop {
          animation: splash-logo-pop 0.8s cubic-bezier(0.2, 0.9, 0.3, 1.2) both;
        }

        .splash-fade-up {
          opacity: 0;
          animation: splash-fade-up 0.6s ease-out forwards;
        }

        .splash-glow {
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 45%),
                      radial-gradient(circle at 70% 70%, rgba(255, 220, 130, 0.25), transparent 45%);
          animation: splash-glow-pan 6s ease-in-out infinite;
        }

        .splash-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 75%);
        }

        @media (prefers-reduced-motion: reduce) {
          .splash-float, .splash-shimmer, .splash-ring, .splash-glow {
            animation: none !important;
          }
          .splash-letter { opacity: 1; animation: none; }
        }
      `}</style>
    </div>
  );
};
