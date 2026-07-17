import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PremiumServiceHero } from "@/components/PremiumServiceHero";
import { EditorialIntro } from "@/components/EditorialIntro";
import { BentoFeatureGrid } from "@/components/BentoFeatureGrid";
import { InteractiveHorizontalFlow } from "@/components/InteractiveHorizontalFlow";
import { Building2, DraftingCompass, ShieldCheck, MapPin, BriefcaseBusiness, Leaf } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Solar EPC Solutions",
  description: "Delivering end-to-end Engineering, Procurement, Construction, and Commissioning solutions for solar power projects.",
};

export default function SolarEpcPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Solar EPC",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Solar EPC",
  };

  const features = [
    {
      title: "End-to-End EPC Delivery",
      description: "Comprehensive project execution from engineering to commissioning.",
      icon: Building2,
      image: "/hero-solar-farm.png",
    },
    {
      title: "Engineering Excellence",
      description: "Optimized system design for maximum performance and reliability.",
      icon: DraftingCompass,
      image: "/solar epc.png",
    },
    {
      title: "Quality-Driven Execution",
      description: "Strict quality assurance at every stage of construction.",
      icon: ShieldCheck,
      image: "/hero-solar.jpg",
    },
    {
      title: "Land & Grid Expertise",
      description: "Integrated support for land development and grid connectivity.",
      icon: MapPin,
      image: "/hero-solar-bess-combined.png",
    },
    {
      title: "Experienced Project Management",
      description: "Structured planning and execution with schedule adherence.",
      icon: BriefcaseBusiness,
      image: "/solar-blog.png",
    },
    {
      title: "Safety & Sustainability",
      description: "Highest standards in HSE and sustainable infrastructure practices.",
      icon: Leaf,
      image: "/hero-solar-new.jpg",
    },
  ];

  const scopeSteps = [
    { title: "Site Assessment" },
    { title: "Engineering" },
    { title: "Procurement" },
    { title: "Construction" },
    { title: "Testing" },
    { title: "Commissioning" },
    { title: "Grid Sync" },
    { title: "O&M Support" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={jsonLd} />

      <PremiumServiceHero
        title="Solar EPC Solutions"
        subtitle="Delivering end-to-end Engineering, Procurement, Construction, and Commissioning solutions for utility-scale, commercial, and industrial solar power projects."
        image="/hero-solar-farm.png"
      />

      <EditorialIntro
        title="BESS Executions Excellence"
        content="GNE Infra delivers integrated Solar EPC solutions that transform project concepts into operational renewable energy assets. From feasibility and engineering to procurement, construction, commissioning, and long-term support, we ensure every project is executed with a focus on quality, efficiency, safety, and performance."
      />

      <BentoFeatureGrid
        title="Our Core Strengths"
        features={features}
      />

      <InteractiveHorizontalFlow
        title="Our Solar EPC Scope"
        steps={scopeSteps}
      />
    </div>
  );
}
