"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function PremiumServiceHero({
  title,
  subtitle,
  image,
  ctaText = "Discuss Your Project",
  ctaLink = "/contact",
}: {
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  return (
    <section className="relative w-full flex items-start justify-start overflow-hidden min-h-[500px] lg:h-[calc(100vh-4.5rem)] lg:max-h-[900px] xl:max-h-[860px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Layered Dark Gradient for drama and readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B132B]/95 via-[#0B132B]/70 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B132B]/60 via-transparent to-transparent" />

      {/* Neon emerald ambient glow — top left corner */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0d7342ff]/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Content — shifted toward top */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 xl:pt-14 pb-10 lg:pb-16 xl:pb-10">
        <ScrollReveal>
          <div className="max-w-3xl">



            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-[2.75rem] font-black font-sora tracking-tight text-white leading-[1.1] mb-5 sm:mb-6">
              {title}
            </h1>

            <p className="text-base sm:text-lg lg:text-lg xl:text-base font-medium text-slate-300 leading-[1.8] mb-7 sm:mb-9 max-w-2xl">
              {subtitle}
            </p>

            {/* CTA Button — exact homepage style */}
            <Link
              href={ctaLink}
              className="group relative inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-sm sm:text-base font-bold text-white shadow-[0_8px_30px_rgba(13,115,66,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(13,115,66,0.6)] overflow-hidden shine-button"
              style={{ background: '#0d7342ff' }}
            >
              <div className="absolute inset-0 bg-white/15 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-black">Scroll</span>
        <ChevronDown className="h-5 w-5 opacity-70" />
      </div>
    </section>
  );
}
