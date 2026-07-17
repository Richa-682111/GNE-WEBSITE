"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingOverlay() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [charge, setCharge] = useState(0);

  // Trigger loader on route change
  useEffect(() => {
    setIsLoading(true);
    setCharge(0);

    const duration = 1200; // 1.2s total loading time
    const intervalTime = 30; // update every 30ms
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setCharge(progress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 400); // Hold at 100% for bloom effect
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50/95 backdrop-blur-md"
        >
          <div className="relative flex flex-col items-center w-64 h-80">
            
            {/* 1. Sun & Rays */}
            <div className="absolute top-0 flex flex-col items-center">
              <motion.div 
                className="text-4xl drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ☀️
              </motion.div>
              <div className="flex gap-6 mt-3">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`ray-${i}`}
                    className="w-0.5 h-10 bg-gradient-to-b from-amber-300 to-transparent rounded-full shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                    animate={{
                      y: [0, 20],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* 2. Solar Panel */}
            <div className="absolute top-28 z-10 w-36 h-14 bg-slate-800 rounded-lg border-2 border-slate-600 shadow-2xl overflow-hidden flex transform -skew-x-12 rotate-[-5deg]">
              <div className="w-full h-full flex divide-x divide-slate-600/50">
                <div className="flex-1 bg-gradient-to-br from-sky-900 to-blue-950" />
                <div className="flex-1 bg-gradient-to-br from-sky-900 to-blue-950" />
                <div className="flex-1 bg-gradient-to-br from-sky-900 to-blue-950" />
                <div className="flex-1 bg-gradient-to-br from-sky-900 to-blue-950" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            </div>

            {/* 3. Energy Transfer Particles */}
            <div className="absolute top-44 flex flex-col items-center z-0">
               {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="w-1.5 h-3 bg-brand-green rounded-full shadow-[0_0_10px_rgba(22,163,74,0.9)] absolute"
                    animate={{
                      y: [0, 50],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "linear",
                    }}
                  />
                ))}
            </div>

            {/* 4. Battery */}
            <div className="absolute bottom-6 flex flex-col items-center">
              <div className="w-5 h-2.5 bg-slate-300 rounded-t-sm" />
              <div 
                className={`relative w-24 h-12 border-2 rounded-lg p-1 overflow-hidden transition-all duration-300 shadow-lg ${
                  charge === 100 
                    ? 'border-brand-green shadow-[0_0_25px_rgba(22,163,74,0.4)]' 
                    : 'border-slate-300'
                }`}
              >
                {/* Battery Fill Bar */}
                <div 
                  className={`h-full rounded-[2px] transition-all duration-75 ease-linear ${
                    charge === 100 
                      ? 'bg-brand-green animate-pulse shadow-[0_0_15px_rgba(22,163,74,0.6)]' 
                      : 'bg-emerald-400'
                  }`}
                  style={{ width: `${charge}%` }}
                />
                
                {/* Charge Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center text-xs font-black mix-blend-difference text-white">
                  {charge}%
                </div>
              </div>
            </div>

            {/* Final 100% Bloom Effect */}
            {charge === 100 && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-6 w-32 h-32 bg-brand-green/30 blur-2xl rounded-full pointer-events-none"
              />
            )}
            
            {/* Subtle Label */}
            <div className="absolute -bottom-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {charge === 100 ? 'Charged' : 'Charging...'}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
