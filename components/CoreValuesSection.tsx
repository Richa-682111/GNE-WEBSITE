"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Lightbulb, Globe, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface CardData {
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  image: string;
  badgeBg: string;
  badgeColor: string;
}

const cardsData: CardData[] = [
  {
    title: "Integrity",
    description:
      "We are committed to upholding the highest standards of professionalism, ethics, and transparency in all our operations. Our ethical integrity ensures trust at every level.",
    icon: Heart,
    accent: "#16c784",
    image: "/collaboration.jpg",
    badgeBg: "rgba(22, 199, 132, 0.25)",
    badgeColor: "#16c784",
  },
  {
    title: "Innovation",
    description:
      "We continually explore new technologies and strategies to provide cutting-edge solar energy solutions that address evolving energy needs with unprecedented speed.",
    icon: Lightbulb,
    accent: "#4f7cff",
    image: "/hero-solar-bess-combined.png",
    badgeBg: "rgba(79, 124, 255, 0.25)",
    badgeColor: "#4f7cff",
  },
  {
    title: "Sustainability",
    description:
      "We strive to minimize environmental impact while helping our clients transition to clean, renewable energy sources that safeguard the planet for future generations.",
    icon: Globe,
    accent: "#e4a340",
    image: "/sustainablility.jpg",
    badgeBg: "rgba(228, 163, 64, 0.25)",
    badgeColor: "#e4a340",
  },
  {
    title: "Excellence",
    description:
      "Our dedication to quality ensures that every infrastructure project we undertake is completed to the highest standards of engineering craftsmanship and efficiency.",
    icon: Star,
    accent: "#a855f7",
    image: "/excellence.jpg",
    badgeBg: "rgba(168, 85, 247, 0.25)",
    badgeColor: "#a855f7",
  },
];

function Carousel3DCard({
  card,
  index,
  activeIdx,
}: {
  card: CardData;
  index: number;
  activeIdx: number;
}) {
  const Icon = card.icon;

  // 3D Carousel / Coverflow Math:
  // - Front Active (offset === 0): Center focus, z: 0, rotateX: 0, scale: 1
  // - Thrown Back in 1 Strike (offset < 0): Tilts up and away in 3D space (y: -480, z: -180, rotateX: -28)
  // - Waiting Underneath (offset > 0): Tilts back in 3D depth (rotateX: offset * 11, z: offset * -90)
  const isFront = index === activeIdx;
  const isThrownBack = index < activeIdx;
  const offset = index - activeIdx;

  let animateState = {};
  let zIndex = 40;

  if (isFront) {
    animateState = {
      y: 0,
      z: 0,
      scale: 1,
      rotateX: 0,
      opacity: 1,
    };
    zIndex = 40;
  } else if (isThrownBack) {
    animateState = {
      y: -480,
      z: -180,
      scale: 0.85,
      rotateX: -28,
      opacity: 0,
    };
    zIndex = 50; // Pass over the top of the rising card
  } else {
    // Waiting underneath in 3D carousel depth
    animateState = {
      y: offset * 32,
      z: offset * -90,
      scale: 1 - offset * 0.07,
      rotateX: offset * 11,
      opacity: Math.max(0.2, 1 - offset * 0.25),
    };
    zIndex = 40 - offset * 10;
  }

  return (
    <motion.div
      initial={false}
      animate={animateState}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1], // Crisp Apple/Awwwards exponential out snap!
      }}
      style={{
        zIndex,
        transformOrigin: "center top",
        willChange: "transform, opacity",
      }}
      className="card absolute inset-0 w-full h-[500px] sm:h-[540px] md:h-[580px] rounded-[36px] overflow-hidden shadow-[0_35px_100px_rgba(0,0,0,0.45)] border border-white/20 dark:border-white/10"
    >
      {/* 1. FULL COVER BACKGROUND IMAGE */}
      <motion.img
        src={card.image}
        alt={card.title}
        animate={{
          scale: isFront ? 1.05 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          transformOrigin: "center center",
          willChange: "transform",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. RICH DARK GLASSMORPHIC GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 backdrop-blur-[2px]" />

      {/* 3. OVERLAID BIGGER & BOLDER TEXT CONTENT LAYER */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 sm:p-10 md:p-14 text-white">
        {/* Top Header Row: Badge & Index */}
        <div className="flex items-center justify-between">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-white/25 backdrop-blur-md transition-transform duration-300 hover:scale-110"
            style={{ backgroundColor: card.badgeBg }}
          >
            <Icon
              className="h-7 w-7 sm:h-8 sm:w-8 text-white transition-transform duration-300 hover:rotate-6"
              style={{ color: card.badgeColor }}
            />
          </div>

          <span className="text-sm sm:text-base font-mono font-bold tracking-widest text-white/80 bg-black/40 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
            0{index + 1} / 0{cardsData.length}
          </span>
        </div>

        {/* Bottom Content Row: Bigger Bold Title & Description */}
        <div className="max-w-3xl">
          {/* Colored Accent Line */}
          <div
            className="h-1.5 rounded-full w-20 sm:w-24 mb-6 shadow-md"
            style={{ backgroundColor: card.accent }}
          />

          {/* Title: Much Bigger and Bolder */}
          <h3 className="font-sora font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4 drop-shadow-lg">
            {card.title}
          </h3>

          {/* Description: Bigger and Bold/Semi-bold */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-semibold leading-relaxed mb-8 drop-shadow max-w-2xl">
            {card.description}
          </p>

          {/* Explore Footer Pill */}
          <div className="inline-flex items-center gap-3 pt-2">
            <span
              className="text-xs sm:text-sm uppercase tracking-widest font-extrabold transition-colors drop-shadow"
              style={{ color: card.accent }}
            >
              Explore Value
            </span>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shadow-md border border-white/20 backdrop-blur-sm transition-transform duration-300 hover:translate-x-1"
              style={{ backgroundColor: card.badgeBg }}
            >
              <ArrowRight
                className="w-4 h-4 text-white"
                style={{ color: card.badgeColor }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CoreValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const lastScrollTimeRef = useRef<number>(0);
  const touchStartYRef = useRef<number | null>(null);

  // Robust 1-Strike Wheel Cooldown Interceptor:
  // Guarantees EXACTLY 1 swipe per wheel strike/flick. Zero double swipes, zero missed swipes!
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Ignore micro noise
      if (Math.abs(e.deltaY) < 15) return;

      const now = Date.now();
      // 650ms cooldown prevents touchpad inertia or fast spinning from swiping 2 cards at once!
      if (now - lastScrollTimeRef.current < 650) {
        if (activeIdx > 0 && activeIdx < cardsData.length - 1) {
          e.preventDefault();
        }
        return;
      }

      if (e.deltaY > 0) {
        // Scrolling Down: If we have more cards in the deck, intercept and swipe 1 card forward!
        if (activeIdx < cardsData.length - 1) {
          e.preventDefault();
          lastScrollTimeRef.current = now;
          setActiveIdx((prev) => prev + 1);
        }
        // If at last card, allow normal webpage scroll down
      } else {
        // Scrolling Up: If we are not at the first card, intercept and swipe 1 card backward!
        if (activeIdx > 0) {
          e.preventDefault();
          lastScrollTimeRef.current = now;
          setActiveIdx((prev) => prev - 1);
        }
        // If at first card, allow normal webpage scroll up
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeIdx]);

  // Touch support for tablets & mobile screens
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartYRef.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartYRef.current - touchEndY;
    const now = Date.now();

    if (Math.abs(diff) > 40 && now - lastScrollTimeRef.current > 650) {
      if (diff > 0 && activeIdx < cardsData.length - 1) {
        lastScrollTimeRef.current = now;
        setActiveIdx((prev) => prev + 1);
      } else if (diff < 0 && activeIdx > 0) {
        lastScrollTimeRef.current = now;
        setActiveIdx((prev) => prev - 1);
      }
    }
    touchStartYRef.current = null;
  };

  return (
    <section
      className="core-values relative min-h-screen py-16 md:py-24 font-inter transition-colors duration-300 flex flex-col items-center justify-center"
      style={{
        background: `radial-gradient(circle at 20% 20%, rgba(16,185,129,.08), transparent 35%), radial-gradient(circle at 80% 80%, rgba(59,130,246,.08), transparent 35%), var(--background, #faf8f5)`,
      }}
    >
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center"
      >
        {/* SECTION HEADER (Center Aligned) */}
        <div className="mx-auto max-w-4xl px-4 text-center mb-8 md:mb-12">
          <div className="flex items-center gap-3 justify-center mb-2">
            <span className="w-8 h-[2px] bg-[#16c784]" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#16c784]">
              WHAT DRIVES US
            </span>
            <span className="w-8 h-[2px] bg-[#16c784]" />
          </div>

          <h2 className="font-sora font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight mb-3">
            Our Core Values
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We don&apos;t just build clean energy infrastructure—we cultivate an enduring ecosystem where ethical integrity, technological innovation, and sustainable excellence thrive.
          </p>
        </div>

        {/* 3D CAROUSEL COVERFLOW CONTAINER */}
        <div
          className="relative w-full max-w-5xl h-[500px] sm:h-[540px] md:h-[580px] mx-auto cursor-pointer"
          style={{ perspective: "1200px" }}
        >
          {cardsData.map((card, idx) => (
            <Carousel3DCard
              key={idx}
              card={card}
              index={idx}
              activeIdx={activeIdx}
            />
          ))}
        </div>

        {/* Interactive Carousel Navigation Controls & Indicators */}
        <div className="flex items-center gap-4 mt-8 z-50">
          <button
            onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
            disabled={activeIdx === 0}
            aria-label="Previous value card"
            className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 px-2">
            {cardsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to value card ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  idx === activeIdx
                    ? "w-9 bg-[#16c784] shadow-sm"
                    : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIdx((prev) => Math.min(cardsData.length - 1, prev + 1))}
            disabled={activeIdx === cardsData.length - 1}
            aria-label="Next value card"
            className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
