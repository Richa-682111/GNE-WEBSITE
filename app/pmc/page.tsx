import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PremiumServiceHero } from "@/components/PremiumServiceHero";
import { EditorialIntro } from "@/components/EditorialIntro";
import { BentoFeatureGrid } from "@/components/BentoFeatureGrid";
import { InteractiveHorizontalFlow } from "@/components/InteractiveHorizontalFlow";
import { BriefcaseBusiness, Activity, Users, ShieldAlert, Calculator, BookOpenCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Management Consultancy (PMC)",
  description: "End-to-end Project Management Consultancy for renewable energy and infrastructure projects.",
};

export default function PmcPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Project Management Consultancy (PMC)",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Project Management Consultancy",
  };

  const features = [
    {
      title: "End-to-End Project Management",
      description: "Complete oversight from project planning and procurement to commissioning and handover.",
      icon: BriefcaseBusiness,
      image: "/service-pmc.jpg",
    },
    {
      title: "Execution Monitoring",
      description: "Continuous monitoring of project progress, quality, timelines, and contractor performance.",
      icon: Activity,
      image: "/wedo1.jpg",
    },
    {
      title: "Stakeholder Coordination",
      description: "Effective coordination between clients, contractors, consultants, vendors, and regulatory authorities.",
      icon: Users,
      image: "/coporatedecimg.png",
    },
    {
      title: "Risk & Quality Management",
      description: "Proactive risk identification, quality assurance, compliance monitoring, and issue resolution.",
      icon: ShieldAlert,
      image: "/sustainablility.jpg",
    },
    {
      title: "Cost & Schedule Control",
      description: "Structured planning and progress tracking to optimize project costs and ensure timely completion.",
      icon: Calculator,
      image: "/solar epc.png",
    },
    {
      title: "Technical & Regulatory Expertise",
      description: "Strong understanding of engineering standards, statutory approvals, and grid requirements.",
      icon: BookOpenCheck,
      image: "/wedo2.jpg",
    },
  ];

  const scopeSteps = [
    { title: "Planning" },
    { title: "Engineering Coord." },
    { title: "Procurement" },
    { title: "Monitoring" },
    { title: "Risk Mgmt" },
    { title: "Commissioning" },
    { title: "Handover" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={jsonLd} />
      
      <PremiumServiceHero
        title="Project Management Consultancy"
        subtitle="Delivering end-to-end Project Management Consultancy (PMC) services for renewable energy and infrastructure projects, ensuring seamless planning, execution, quality assurance, and timely project delivery from concept to commissioning."
        image="/service-pmc.jpg"
      />

      <EditorialIntro 
        title="Driving Successful Project Delivery through Expert Management"
        content="GNE Infra provides comprehensive Project Management Consultancy (PMC) services for solar, BESS, and renewable energy infrastructure projects. Acting as the client's representative, we oversee planning, engineering coordination, procurement, construction, quality control, and project execution to ensure every project is delivered safely, on schedule, within budget, and in compliance with technical and regulatory requirements."
      />

      <BentoFeatureGrid 
        title="Why Choose GNE Infra"
        features={features}
      />

      <InteractiveHorizontalFlow 
        title="Our PMC Scope"
        steps={scopeSteps}
      />
    </div>
  );
}
