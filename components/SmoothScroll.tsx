"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2, // Controls inertia duration: higher = slower, smoother glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silky exponential easing
      smoothWheel: true,
      wheelMultiplier: 0.65, // Controls scroll range: lower = shorter travel distance per wheel turn
      touchMultiplier: 1.2, // Controls touch swipe range on mobile/tablet
    });

    lenisRef.current = lenis;

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
