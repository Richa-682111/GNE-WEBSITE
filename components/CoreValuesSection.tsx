"use client";

import React, { useRef } from "react";
import { Heart, Lightbulb, Globe, Star } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

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

/* ─── Per-card animated wrapper ─── */
interface AnimatedCardProps {
  card: CardData;
  index: number;
  total: number;
  containerProgress: MotionValue<number>;
}

function AnimatedCard({ card, index, total, containerProgress }: AnimatedCardProps) {
  const Icon = card.icon;

  // Each card starts shrinking when its "slot" has been scrolled past.
  // The last card never shrinks (it stays full size).
  const isLast = index === total - 1;

  // Progress range: card starts scaling at [start] and finishes at [end]
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(
    containerProgress,
    [start, end],
    isLast ? [1, 1] : [1, 0.88]
  );

  const opacity = useTransform(
    containerProgress,
    [start, end],
    isLast ? [1, 1] : [1, 0.4]
  );

  // Stagger the sticky top so cards visibly stack
  const topOffset = `calc(6rem + ${index * 1.5}rem)`;

  return (
    <motion.div
      style={{
        scale,
        opacity,
        top: topOffset,
        minHeight: "clamp(300px, 50vh, 480px)",
        transformOrigin: "center top",
      }}
      className="sticky w-full flex flex-col rounded-[36px] overflow-hidden border border-slate-200/20 shadow-2xl group bg-slate-950 transition-transform duration-500"
    >
      {/* Crisp background image – NO backdrop-blur */}
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20" />

      {/* Content Container (Responsive Padding) */}
      <div className="relative z-10 flex-1 p-5 sm:p-8 md:p-14 lg:p-20 flex flex-col justify-end text-left">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-lg border border-white/10"
            style={{ background: card.badgeBg, color: card.badgeColor }}
          >
            <Icon className="w-7 h-7" />
          </div>
          {/* CORE VALUE label restored as requested */}
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
            CORE VALUE 0{index + 1}
          </span>
        </div>

        {/* Responsive title sizes */}
        <h3 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-300">
          {card.title}
        </h3>

        {/* Responsive desc sizes */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-200 max-w-4xl leading-relaxed font-normal break-words">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Section ─── */
export function CoreValuesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the entire stacking container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      className="core-values relative min-h-screen py-10 lg:py-14 xl:py-12 font-inter transition-colors duration-300"
      style={{
        background: `radial-gradient(circle at 20% 20%, rgba(22,199,132,.06), transparent 35%), radial-gradient(circle at 80% 80%, rgba(79,124,255,.06), transparent 35%), var(--background, #faf8f5)`,
      }}
    >
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* SECTION HEADER (Center Aligned) */}
        <div className="mx-auto max-w-4xl text-center mb-10 lg:mb-12 xl:mb-16">
          <div className="flex items-center gap-3 justify-center mb-3">
            <span className="w-8 h-[2px] bg-[#16c784]" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#16c784]">
              WHAT DRIVES US
            </span>
            <span className="w-8 h-[2px] bg-[#16c784]" />
          </div>

          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            Our Core Values
          </h2>

          <p className="text-base text-center sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            We don&apos;t just build clean energy infrastructure—we cultivate an enduring ecosystem where ethical integrity, technological innovation, and sustainable excellence thrive.
          </p>
        </div>

        {/* STACKOVER SCROLL CARDS – ref tracked for scroll progress */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1340px] mx-auto pb-24"
          style={{ height: `calc(100vh * ${cardsData.length})` }}
        >
          {cardsData.map((card, idx) => (
            <AnimatedCard
              key={idx}
              card={card}
              index={idx}
              total={cardsData.length}
              containerProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
