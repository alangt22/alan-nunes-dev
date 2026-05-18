"use client";
import { useState, useEffect, useMemo } from "react";
import clsx from "clsx";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [mounted, setMounted] = useState(false);

  const fullName = "Alan Nunes";
  const fullTitle = "Desenvolvedor Full Stack";

  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${(i * 5.3 + 2.5) % 100}%`,
      top: `${(i * 7.1 + 3.7) % 100}%`,
      delay: `${(i * 0.17) % 2}s`,
      duration: `${3 + (i % 4)}s`,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setShowParticles(true);
      const particleTimer = setTimeout(() => {
        setShowName(true);
      }, 300);
      return () => clearTimeout(particleTimer);
    }
  }, [mounted]);

  useEffect(() => {
    if (showName) {
      let charIndex = 0;
      const nameInterval = setInterval(() => {
        if (charIndex <= fullName.length) {
          setDisplayedName(fullName.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(nameInterval);
          setTimeout(() => setShowTitle(true), 200);
        }
      }, 100);
      return () => clearInterval(nameInterval);
    }
  }, [showName]);

  useEffect(() => {
    if (showTitle) {
      let charIndex = 0;
      const titleInterval = setInterval(() => {
        if (charIndex <= fullTitle.length) {
          setDisplayedTitle(fullTitle.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(titleInterval);
        }
      }, 60);
      return () => clearInterval(titleInterval);
    }
  }, [showTitle]);

  useEffect(() => {
    if (showTitle) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              setIsExiting(true);
              setTimeout(onComplete, 800);
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 40);
      return () => clearInterval(progressInterval);
    }
  }, [showTitle, onComplete]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950",
        "transition-all duration-700 ease-in-out",
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      )}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

        {showParticles && (
          <>
            <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-indigo-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          </>
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={clsx(
                  "absolute top-1/2 left-1/2 border border-indigo-500/30 rounded-full loader-ring",
                  showParticles
                )}
                style={{
                  width: `${120 + i * 40}px`,
                  height: `${120 + i * 40}px`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={clsx(
                "absolute w-1 h-1 bg-indigo-500/50 rounded-full",
                "transition-all duration-1000"
              )}
              style={{
                left: particle.left,
                top: particle.top,
                animationName: showParticles ? "float" : "none",
                animationDuration: particle.duration,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: particle.delay,
                opacity: showParticles ? 0.6 : 0,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8">
          <div
            className={clsx(
              "w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500/50",
              "shadow-[0_0_60px_rgba(99,102,241,0.5)]",
              "transition-all duration-1000",
              showParticles ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}
          >
            <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">AN</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1
            className={clsx(
              "text-5xl sm:text-6xl md:text-7xl font-black mb-4",
              "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500",
              "bg-clip-text text-transparent",
              "transition-all duration-500"
            )}
          >
            {displayedName}
            <span className="loader-blink text-indigo-500">|</span>
          </h1>

          <div
            className={clsx(
              "h-1 w-48 mx-auto mb-6 rounded-full overflow-hidden",
              "bg-zinc-800",
              "transition-all duration-500",
              showTitle ? "opacity-100 scale-100" : "opacity-0 scale-50"
            )}
          >
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
              style={{ width: `${progress}%`, transition: "width 0.1s ease-out" }}
            />
          </div>

          <p
            className={clsx(
              "text-xl sm:text-2xl text-gray-400 font-medium tracking-wider",
              "transition-all duration-500",
              showTitle ? "opacity-100" : "opacity-0"
            )}
          >
            {displayedTitle}
            {displayedTitle.length < fullTitle.length && (
              <span className="loader-blink text-cyan-400">|</span>
            )}
          </p>
        </div>

        <div
          className={clsx(
            "mt-12 text-sm text-gray-500 tracking-widest uppercase",
            "transition-all duration-500",
            showTitle ? "opacity-100" : "opacity-0"
          )}
        >
          Carregando...
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .loader-ring {
          animation: loader-spin 8s linear infinite;
        }
        .loader-ring:nth-child(1) { animation-duration: 10s; }
        .loader-ring:nth-child(2) { animation-duration: 12s; }
        .loader-ring:nth-child(3) { animation-duration: 14s; }
        .loader-ring:nth-child(4) { animation-duration: 16s; }
        .loader-ring:nth-child(5) { animation-duration: 18s; }
        .loader-ring:nth-child(6) { animation-duration: 20s; }
        @keyframes loader-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .loader-blink {
          animation: loader-blink 1s infinite;
        }
        @keyframes loader-blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}