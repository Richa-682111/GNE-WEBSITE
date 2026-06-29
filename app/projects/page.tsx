import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="relative min-h-screen pb-16 overflow-hidden">
      {/* Soft Gradient Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base */}
        <div className="absolute inset-0 bg-red-200" />

        {/* White glow */}
        <div
          className="
            absolute
            left-1/2
            top-[5%]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-white/95
            blur-[150px]
          "
        />

        {/* Pink */}
        <div
          className="
            absolute
            left-[-5%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-pink-200/20
            blur-[120px]
          "
        />

        {/* Purple */}
        <div
          className="
            absolute
            right-[10%]
            top-[15%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-violet-200/20
            blur-[120px]
          "
        />

        {/* Blue */}
        <div
          className="
            absolute
            left-[20%]
            bottom-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-sky-200/20
            blur-[120px]
          "
        />

        {/* Lavender accent */}
        <div
          className="
            absolute
            right-[20%]
            bottom-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-fuchsia-100/20
            blur-[100px]
          "
        />
      </div>

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
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-black sm:text-5xl tracking-tight leading-none">
                Projects & Project Pipeline
              </h1>

              <p className="mt-3 text-lg sm:text-xl font-bold text-emerald-400">
                Delivering renewable energy infrastructure through integrated engineering, project management, land development, and energy storage solutions.
              </p>

              <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-200 max-w-xl opacity-90">
                We deliver end-to-end renewable energy solutions through EPC,
                BESS, O&M and Project Management services with excellence and
                integrity.
              </p>
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