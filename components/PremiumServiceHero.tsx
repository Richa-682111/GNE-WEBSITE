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
    <section className="relative h-auto min-h-[500px] py-16 lg:py-0 lg:h-[80vh] lg:min-h-[550px] w-full flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <ScrollReveal>
          <div className="max-w-3xl backdrop-blur-md bg-white/5 dark:bg-black/20 border border-white/10 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] shadow-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-5 sm:mb-6 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-200 leading-relaxed mb-8 sm:mb-10">
              {subtitle}
            </p>
            <Link
              href={ctaLink}
              className="group relative inline-flex items-center gap-3 rounded-full bg-brand-green px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:shadow-emerald-500/50 overflow-hidden shine-button"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-black">Scroll</span>
        <ChevronDown className="h-5 w-5 opacity-70" />
      </div>
    </section>
  );
}
