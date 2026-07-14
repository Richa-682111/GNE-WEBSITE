import { ScrollReveal } from "./ScrollReveal";

export function EditorialIntro({
  title,
  content,
  eyebrow,
}: {
  title: string;
  content: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#FAF6EF]">
      {/* Soft warm glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none" />
      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1px, transparent 0)', backgroundSize: '36px 36px' }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left: Bold Headline block */}
            <div className="lg:col-span-5 relative">
              {eyebrow && (
                <span
                  className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                  style={{ background: 'rgba(13,115,66,0.12)', color: '#0d7342', outline: '1px solid rgba(13,115,66,0.3)' }}
                >
                  {eyebrow}
                </span>
              )}
              {/* Vertical accent rule */}
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0d7342] via-emerald-500 to-transparent rounded-full hidden lg:block" />
              <h2 className="text-4xl sm:text-5xl font-black font-sora leading-[1.1] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d7342] via-emerald-600 to-teal-600">{title}</span>
              </h2>
              {/* Decorative underline */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#0d7342] to-teal-500 rounded-full" />
            </div>

            {/* Right: Editorial Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-lg sm:text-xl text-slate-700 leading-[1.85] font-normal tracking-wide">
                {content}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
