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

        {/* Deep layered overlay for premium dark feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/92 via-[#0B132B]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent" />
        {/* Emerald neon top-left glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0d7342ff]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl text-white">
              {/* Eyebrow label */}
              <span
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background: 'rgba(13,115,66,0.20)', color: '#4ade80', outline: '1px solid rgba(13,115,66,0.4)' }}
              >
                Our Portfolio
              </span>

              <h1 className="mb-6 text-5xl sm:text-7xl font-black font-sora tracking-tight leading-none text-white">
                Projects &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-teal-300">Pipeline</span>
              </h1>

              <p className="mt-3 text-lg sm:text-xl font-normal text-slate-300 leading-[1.8] max-w-xl">
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

      {/* Portfolio Section — Big background card changed from plain white to a soft, warm light cream tint (#fcf8f5) that complements the #f5ece5 cream background */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12 rounded-[3rem] my-12 shadow-xl" style={{ background: '#fcf8f5', border: '1px solid rgba(176,125,58,0.25)' }}>
        <ProjectsPortfolio />
      </div>
    </div>
  );
}