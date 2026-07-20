import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PremiumServiceHero } from "@/components/PremiumServiceHero";
import { EditorialIntro } from "@/components/EditorialIntro";
import { BentoFeatureGrid } from "@/components/BentoFeatureGrid";
import { InteractiveHorizontalFlow } from "@/components/InteractiveHorizontalFlow";
import { Building2, Cpu, Network, ShieldCheck, Expand, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "BESS EPC Solutions",
  description: "Delivering end-to-end Battery Energy Storage System (BESS) EPC solutions for utilities and commercial applications.",
};

export default function BessEpcPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BESS EPC",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "BESS EPC",
  };

  const features = [
    {
      title: "Integrated BESS EPC Delivery",
      description: "Complete project execution from engineering and procurement to commissioning and handover.",
      icon: Building2,
      image: "/service-epc.jpg",
    },
    {
      title: "Advanced System Integration",
      description: "Expertise in integrating Battery Systems, PCS, EMS, SCADA, Transformers, and Balance of Plant (BoP).",
      icon: Cpu,
      image: "/service-bess.jpg",
    },
    {
      title: "Grid Integration Expertise",
      description: "Seamless integration with utility grids while ensuring regulatory compliance and reliable power evacuation.",
      icon: Network,
      image: "/hero-bess-storage.png",
    },
    {
      title: "Quality & Safety",
      description: "Strict adherence to international quality standards and comprehensive safety protocols throughout project execution.",
      icon: ShieldCheck,
      image: "/Safety.png",
    },
    {
      title: "Scalable Storage Solutions",
      description: "Flexible BESS solutions designed for utility-scale, commercial, and industrial applications.",
      icon: Expand,
      image: "/bess.png",
    },
    {
      title: "Performance-Focused",
      description: "Optimized system design and execution to maximize operational efficiency, reliability, and asset performance.",
      icon: Zap,
      image: "/solutions-bg.jpg",
    },
  ];

  const scopeSteps = [
    { title: "Project Planning", image: "/wedo1.jpg", description: "Comprehensive site assessment, feasibility studies, and regulatory planning for BESS deployment." },
    { title: "Engineering & Design", image: "/service-epc.jpg", description: "Custom electrical, thermal, and structural system design optimized for utility and grid compliance." },
    { title: "Procurement", image: "/service-manufacturing.jpg", description: "Sourcing Tier-1 battery modules, PCS, SCADA, and balance of plant equipment from verified global partners." },
    { title: "Installation", image: "/hero-hybrid-2.webp", description: "Precision on-site construction, battery enclosure assembly, and high-voltage electrical cabling." },
    { title: "Testing", image: "/service-bess.jpg", description: "Rigorous factory acceptance testing (FAT) and on-site site acceptance testing (SAT) under load." },
    { title: "EMS Integration", image: "/innovation.png", description: "Seamless software integration with smart Energy Management Systems and utility dispatch control." },
    { title: "Grid Sync", image: "/solutions-bg.jpg", description: "Final grid synchronization, harmonic filtering validation, and commercial operation handover." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={jsonLd} />

      <PremiumServiceHero
        title="Battery Energy Storage System (BESS) EPC"
        subtitle="Delivering end-to-end Battery Energy Storage System (BESS) EPC solutions for utilities, renewable energy developers, and commercial & industrial applications, enabling reliable energy storage, grid stability, and optimized power management."
        image="/hero-bess-storage.png"
      />

      <EditorialIntro
        title="Intelligent Energy Storage Solutions for a Reliable Grid"
        content="As renewable energy adoption continues to grow, Battery Energy Storage Systems (BESS) have become essential for improving grid stability, maximizing renewable energy utilization, and ensuring reliable power availability. GNE Infra provides integrated BESS EPC solutions covering engineering, procurement, installation, testing, commissioning, and system integration. Our solutions are designed to support utility-scale, commercial, and industrial energy storage applications with a focus on safety, performance, and long-term reliability."
      />

      <BentoFeatureGrid
        title="BESS Execution Excellence"
        features={features}
      />

      <InteractiveHorizontalFlow
        title="Our BESS EPC Scope"
        steps={scopeSteps}
      />
    </div>
  );
}
