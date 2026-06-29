import { ScrollReveal } from "./ScrollReveal";

export function EditorialIntro({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Bold Headline */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -left-6 top-2 bottom-2 w-1.5 bg-brand-green rounded-full hidden lg:block" />
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                {title}
              </h2>
            </div>
            
            {/* Right: Editorial Content */}
            <div className="lg:col-span-7">
              <p className="text-lg sm:text-xl text-slate-650 dark:text-slate-350 leading-relaxed font-medium">
                {content}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
