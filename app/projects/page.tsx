import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectsPortfolio } from "@/components/ProjectsPortfolio";
import { ScrollReveal } from "@/components/ScrollReveal";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
export const metadata: Metadata = {
  title: "EPC Projects & Case Studies",
  description:
    "Explore GNE Infra's EPC project portfolio including completed projects, projects under execution, and growth pipeline.",
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: `${site.url}/projects`,
    about: ["Solar EPC", "BESS", "EMS", "Hydrogen"],
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
  };

  return (
    <div className="relative min-h-screen pb-20 overflow-hidden" style={{ background: '#f5ece5' }}>
      <JsonLd data={jsonLd} />

      {/* Hero Banner */}
      <section className="relative h-[75vh] w-full overflow-hidden flex items-center">
        <Image
          src="/ProjectHero2.jpg"
          alt="Renewable Energy Projects"
          fill
          priority
          className="object-cover"
        />

        {/* Subtle, low-opacity gradient overlay for vivid image visibility while preserving text readability */}
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)' }} />
        {/* Emerald neon top-left glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0d7342ff]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              {/* Eyebrow label */}
              <span
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: 'rgba(69,82,62,0.12)', color: '#4ade80', outline: '1px solid rgba(69,82,62,0.3)', outlineOffset: '0px' }}
              >
                Our Portfolio
              </span>

              <h1 
                className="mb-6 text-4xl sm:text-6xl lg:text-[64px] font-black font-sora tracking-tight leading-[1.1] text-[#f5ece5]"
                style={{
                  textShadow: `
                    0 0 4px rgba(0,0,0,0.9),
                    0 0 8px rgba(0,0,0,0.8),
                    0 0 16px rgba(0,0,0,0.7),
                    2px 2px 6px rgba(0,0,0,0.9)
                  `
                }}
              >
                Projects &amp; <span style={{ color: '#4ade80' }}>Pipeline</span>
              </h1>

              <p 
                className="mt-3 text-base sm:text-lg md:text-xl font-semibold leading-relaxed max-w-xl"
                style={{
                  color: '#4ade80',
                  textShadow: `
                    0 0 8px rgba(0,0,0,0.9),
                    0 0 16px rgba(0,0,0,0.8),
                    2px 2px 6px rgba(0,0,0,0.9)
                  `
                }}
              >
                Delivering renewable energy infrastructure through integrated engineering, project management, land development, and energy storage solutions.
              </p>

              <Link
                href="/contact"
                className="group relative mt-10 inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(13,115,66,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(13,115,66,0.6)] overflow-hidden shine-button"
                style={{ background: '#0d7342ff' }}
              >
                <div className="absolute inset-0 bg-white/15 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative z-10">Discuss Your Project</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section — High-contrast luxury sage-emerald card background that contrasts beautifully against the cream page */}
      <div 
        className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12 rounded-[3rem] my-12 transition-all duration-500"
        style={{ 
          background: 'linear-gradient(135deg, #e2efe7 0%, #cbe4d5 100%)', 
          border: '1.5px solid rgba(13,115,66,0.35)',
          boxShadow: '0 20px 50px rgba(13,115,66,0.12), 0 8px 20px rgba(0,0,0,0.06)'
        }}
      >
        <ProjectsPortfolio />
      </div>
    </div>
  );
}