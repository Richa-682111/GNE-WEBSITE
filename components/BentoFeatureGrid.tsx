import { ScrollReveal } from "./ScrollReveal";
import { LucideIcon } from "lucide-react";
import { AnimatedBentoCard } from "./AnimatedBentoCard";
import type { CSSProperties } from "react";

export interface FeatureCard {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export function BentoFeatureGrid({
  title = "Why Choose GNE Infra",
  features,
}: {
  title?: string;
  features: FeatureCard[];
}) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
      {/* Subtle light grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,19,43,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,19,43,0.04) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      {/* Emerald ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-400/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* Eyebrow Badge */}
            <span
              className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: 'rgba(69,82,62,0.10)', color: '#0d7342ff', outline: '1px solid rgba(69,82,62,0.25)' }}
            >
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-sora tracking-tight" style={{ color: '#010101' }}>
              {title.includes('Why Choose') ? (
                <>Why Choose <span style={{ color: '#256c4aff' }}>GNE Infra</span></>
              ) : (
                title
              )}
            </h2>
            <div className="mt-5 mx-auto h-1.5 w-20 rounded-full bg-gradient-to-r from-[#0d7342ff] to-teal-400" />
          </div>
        </ScrollReveal>

        {/* 3-Column Executive Grid matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const accents = [
              { color: '#4ade80', bg: 'rgba(13,115,66,0.35)', border: 'rgba(74,222,128,0.4)', dark: '#0d7342ff' },
              { color: '#fb923c', bg: 'rgba(173,93,80,0.35)', border: 'rgba(251,146,60,0.4)', dark: '#ad5d50' },
              { color: '#38bdf8', bg: 'rgba(26,152,168,0.35)', border: 'rgba(56,189,248,0.4)', dark: '#1a98a8ff' },
              { color: '#a78bfa', bg: 'rgba(124,58,237,0.35)', border: 'rgba(167,139,250,0.4)', dark: '#7c3aed' },
              { color: '#34d399', bg: 'rgba(37,108,74,0.35)', border: 'rgba(52,211,153,0.4)', dark: '#256c4aff' },
              { color: '#facc15', bg: 'rgba(180,83,9,0.35)', border: 'rgba(250,204,21,0.4)', dark: '#b45309' },
            ];
            const accent = accents[idx % accents.length];

            return (
              <AnimatedBentoCard key={idx} idx={idx}>
                <div
                  className="group relative w-full aspect-[4/5] min-h-[420px] sm:min-h-[450px] rounded-3xl overflow-hidden border border-slate-800 bg-[#0B132B] shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-[#4ade80]/50"
                  style={{ '--accent': accent.color } as CSSProperties}
                >
                  {/* Full-Height Background Photography at 100% full brightness/clarity */}
                  {feature.image ? (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-100"
                    />
                  ) : (
                    /* Fallback subtle pattern when no image provided */
                    <div className="absolute inset-0 bg-[#0f1d30] flex items-center justify-center opacity-40">
                      <Icon className="w-72 h-72 text-slate-700 -rotate-12" strokeWidth={1} />
                    </div>
                  )}

                  {/* High-Visibility Gradient Overlay: Only dim the bottom 25% for text readability so the top 75% of the photo is 100% bright and clear! */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/50 via-25% to-transparent pointer-events-none" />

                  {/* Top-Right Floating Icon Button */}
                  <div className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 text-white shadow-lg group-hover:scale-110 group-hover:border-[#4ade80]/60 group-hover:text-[#4ade80] transition-all duration-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 inset-x-0 p-7 sm:p-8 z-20 flex flex-col justify-end text-left">
                    {/* Eyebrow Pill Badge */}
                    <span
                      className="mb-3 w-fit inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm"
                      style={{ background: accent.bg, color: accent.color, border: `1px solid ${accent.border}` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent.color }} />
                      Capability 0{idx + 1}
                    </span>

                    {/* Bold White Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2.5 font-sora group-hover:text-[#4ade80] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Light Slate Description */}
                    <p className="text-sm text-slate-300 font-medium leading-relaxed line-clamp-3">
                      {feature.description}
                    </p>
                  </div>

                  {/* Top glowing accent border line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    style={{ background: `linear-gradient(to right, ${accent.color}, transparent)` }}
                  />
                </div>
              </AnimatedBentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
