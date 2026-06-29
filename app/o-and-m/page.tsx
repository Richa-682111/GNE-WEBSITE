import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PremiumServiceHero } from "@/components/PremiumServiceHero";
import { EditorialIntro } from "@/components/EditorialIntro";
import { BentoFeatureGrid } from "@/components/BentoFeatureGrid";
import { InteractiveHorizontalFlow } from "@/components/InteractiveHorizontalFlow";
import { Wrench, LineChart, Timer, TrendingUp, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Operations & Maintenance (O&M)",
  description: "Comprehensive O&M services for solar power plants and Battery Energy Storage Systems.",
};

export default function OAndMPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Operations & Maintenance (O&M)",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Operations & Maintenance",
  };

  const features = [
    {
      title: "Proactive Maintenance",
      description: "Planned preventive maintenance to minimize failures and maximize plant availability.",
      icon: Wrench,
    },
    {
      title: "Performance Monitoring",
      description: "Continuous monitoring and analysis to optimize plant performance and energy generation.",
      icon: LineChart,
    },
    {
      title: "Rapid Fault Response",
      description: "Timely troubleshooting and corrective maintenance to reduce downtime and restore operations quickly.",
      icon: Timer,
    },
    {
      title: "Asset Optimization",
      description: "Data-driven maintenance practices to improve system efficiency and extend equipment life.",
      icon: TrendingUp,
    },
    {
      title: "Safety & Compliance",
      description: "Maintenance activities carried out in accordance with industry standards and HSE best practices.",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Team",
      description: "Skilled engineers and technicians ensuring reliable operation of solar and energy storage assets.",
      icon: Users,
    },
  ];

  const scopeSteps = [
    { title: "Monitoring" },
    { title: "Preventive Maint." },
    { title: "Corrective Maint." },
    { title: "Diagnostics" },
    { title: "Optimization" },
    { title: "Reporting" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={jsonLd} />
      
      <PremiumServiceHero
        title="Operations & Maintenance (O&M)"
        subtitle="Comprehensive Operations & Maintenance services for solar power plants and Battery Energy Storage Systems, focused on maximizing asset performance, ensuring operational reliability, and extending plant life through proactive maintenance and continuous monitoring."
        image="/service-om.jpg" 
      />

      <EditorialIntro 
        title="Maximizing Performance throughout the Asset Lifecycle"
        content="GNE Infra provides integrated Operations & Maintenance (O&M) services to ensure renewable energy assets operate safely, efficiently, and reliably throughout their lifecycle. Our services include preventive and corrective maintenance, performance monitoring, diagnostics, and asset optimization, helping clients maximize energy generation, minimize downtime, and improve long-term operational efficiency."
      />

      <BentoFeatureGrid 
        title="Why Choose GNE Infra"
        features={features}
      />

      <InteractiveHorizontalFlow 
        title="Our O&M Scope"
        steps={scopeSteps}
      />
    </div>
  );
}
