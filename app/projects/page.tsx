import type { Metadata } from "next";
import Image from "next/image";
import { ProjectsPortfolio } from "@/components/ProjectsPortfolio";
import { ScrollReveal } from "@/components/ScrollReveal";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import Link from "next/link";
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
    <div className="relative min-h-screen pb-16 overflow-hidden">
      <JsonLd data={jsonLd} />

      {/* Hero Banner */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center">
        <Image
          src="/ProjectHero2.jpg"
          alt="Renewable Energy Projects"
          fill
          priority
          className="object-cover"
        />

        {/* Softer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
         <div className="max-w-2xl text-white translate-x-0 lg:translate-x-20 -translate-y-0 lg:-translate-y-20">
             <h1 className="mb-6 text-5xl sm:text-7xl font-black tracking-tight leading-none text-white-300 drop-shadow-lg">
                Projects & Project Pipeline
              </h1>

              <p className="mt-3 text-lg sm:text-xl font-bold text-white">
                
                Delivering renewable energy infrastructure through integrated engineering, project management, land development, and energy storage solutions.
              </p>

             <Link
  href="/contact"
  className="
    mt-8
    inline-flex
    items-center
    rounded-xl
    bg-emerald-600
    px-6
    py-3
    text-base
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:bg-emerald-700
    hover:scale-105
  "
>
  Discuss Your Project
</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <ProjectsPortfolio />
      </div>
    </div>
  );
}