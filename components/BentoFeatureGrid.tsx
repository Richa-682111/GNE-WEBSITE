import { ScrollReveal } from "./ScrollReveal";
import { LucideIcon } from "lucide-react";

export interface FeatureCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function BentoFeatureGrid({
  title = "Why Choose GNE Infra",
  features,
}: {
  title?: string;
  features: FeatureCard[];
}) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle Dot Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {title}
            </h2>
            <div className="mt-6 mx-auto h-1.5 w-20 rounded-full bg-brand-green" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            // Asymmetrical layout logic: 0 and 3 are wide.
            // Wait, for 6 items: [Wide, Square, Square], [Square, Square, Wide] is nice.
            // If length is 6: 
            // 0: span 2, 1: span 1, 2: span 1
            // 3: span 1, 4: span 1, 5: span 2
            const isWide = (features.length === 6 && (idx === 0 || idx === 5)) || false;

            return (
              <ScrollReveal
                key={idx}
                delay={idx * 100}
                className={`${isWide ? 'lg:col-span-2' : 'col-span-1'}`}
              >
                <div className="group relative h-full flex flex-col p-7 sm:p-9 rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/60 dark:to-slate-800/20 border border-slate-200/80 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden">

                  {/* Giant Faded Watermark Icon */}
                  <div className="absolute -bottom-8 -right-8 z-0 opacity-[0.10] dark:opacity-[0.10] group-hover:opacity-[0.15] group-hover:-rotate-12 transition-all duration-700 pointer-events-none text-brand-green">
                    <Icon className="w-64 h-64 sm:w-72 sm:h-72" strokeWidth={1} />
                  </div>

                  {/* Decorative corner glow on hover */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-green/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-700 text-brand-green mb-6 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-brand-green group-hover:text-white group-hover:shadow-brand-green/30 transition-all duration-500 z-10">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-end">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2.5 leading-tight group-hover:text-brand-green transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
