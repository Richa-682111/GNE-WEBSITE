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
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-start overflow-hidden">
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <ScrollReveal>
          <div className="max-w-3xl backdrop-blur-md bg-white/5 dark:bg-black/20 border border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.15] mb-6 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed mb-10">
              {subtitle}
            </p>
            <Link
              href={ctaLink}
              className="group relative inline-flex items-center gap-3 rounded-full bg-brand-green px-8 py-4 text-base font-bold text-white shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:shadow-emerald-500/50 overflow-hidden"
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
