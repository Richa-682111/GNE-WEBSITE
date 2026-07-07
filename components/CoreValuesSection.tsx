"use client";

import React from "react";
import { Heart, Lightbulb, Globe, Star, ArrowRight } from "lucide-react";

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
    image: "/service-epc.jpg",
    badgeBg: "rgba(22, 199, 132, 0.25)",
    badgeColor: "#16c784",
  },
  {
    title: "Innovation",
    description:
      "We continually explore new technologies and strategies to provide cutting-edge solar energy solutions that address evolving energy needs with unprecedented speed.",
    icon: Lightbulb,
    accent: "#4f7cff",
    image: "/hero-hybrid-2.webp",
    badgeBg: "rgba(79, 124, 255, 0.25)",
    badgeColor: "#4f7cff",
  },
  {
    title: "Sustainability",
    description:
      "We strive to minimize environmental impact while helping our clients transition to clean, renewable energy sources that safeguard the planet for future generations.",
    icon: Globe,
    accent: "#e4a340",
    image: "/solutions-bg.jpg",
    badgeBg: "rgba(228, 163, 64, 0.25)",
    badgeColor: "#e4a340",
  },
  {
    title: "Excellence",
    description:
      "Our dedication to quality ensures that every infrastructure project we undertake is completed to the highest standards of engineering craftsmanship and efficiency.",
    icon: Star,
    accent: "#a855f7",
    image: "/service-bess.jpg",
    badgeBg: "rgba(168, 85, 247, 0.25)",
    badgeColor: "#a855f7",
  },
];

export function CoreValuesSection() {
  return (
    <section
      className="core-values relative min-h-screen py-20 md:py-32 font-inter transition-colors duration-300"
      style={{
        background: `radial-gradient(circle at 20% 20%, rgba(22,199,132,.06), transparent 35%), radial-gradient(circle at 80% 80%, rgba(79,124,255,.06), transparent 35%), var(--background, #faf8f5)`,
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* SECTION HEADER (Center Aligned) */}
        <div className="mx-auto max-w-4xl text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 justify-center mb-3">
            <span className="w-8 h-[2px] bg-[#16c784]" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#16c784]">
              WHAT DRIVES US
            </span>
            <span className="w-8 h-[2px] bg-[#16c784]" />
          </div>

          <h2 className="font-sora font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight mb-4">
            Our Core Values
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We don&apos;t just build clean energy infrastructure—we cultivate an enduring ecosystem where ethical integrity, technological innovation, and sustainable excellence thrive.
          </p>
        </div>

        {/* STACKOVER SCROLL CARDS CONTAINER */}
        <div className="relative w-full max-w-5xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 pb-24">
          {cardsData.map((card, idx) => {
            const Icon = card.icon;
            // Calculate a staggered top offset so stacking creates a visible deck effect
            const topOffset = `calc(6rem + ${idx * 1.5}rem)`;

            return (
              <div
                key={idx}
                className="sticky w-full rounded-3xl overflow-hidden border border-slate-200/20 dark:border-slate-800/40 shadow-2xl transition-all duration-500 group bg-slate-950"
                style={{ top: topOffset, minHeight: "460px" }}
              >
                {/* Crisp Background Image (NO backdrop blur!) */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for optimal white text readability while keeping photography sharp */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />

                {/* Content Container */}
                <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col justify-end min-h-[460px] text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/10"
                      style={{ background: card.badgeBg, color: card.badgeColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
                      CORE VALUE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {card.title}
                  </h3>

                  <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed font-normal">
                    {card.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#4ade80] opacity-90 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <span>Explore our standard of {card.title.toLowerCase()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
