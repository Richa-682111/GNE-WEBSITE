import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PremiumServiceHero } from "@/components/PremiumServiceHero";
import { EditorialIntro } from "@/components/EditorialIntro";
import { BentoFeatureGrid } from "@/components/BentoFeatureGrid";
import { InteractiveHorizontalFlow } from "@/components/InteractiveHorizontalFlow";
import { Gavel, DraftingCompass, HardHat, Factory, GraduationCap, Building2, MapPin } from "lucide-react";

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
      title: "BID ADVISORY",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Land Survey</li>
          <li>Tender evaluation & bid strategy</li>
          <li>Techno-commercial optimization</li>
        </ul>
      ),
      icon: Gavel,
      image: "/pmc-management.png",
    },
    {
      title: "DESIGN & ENGINEERING",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Solar Plant & BESS engineering</li>
          <li>Grid connectivity studies</li>
          <li>Detailed engineering</li>
        </ul>
      ),
      icon: DraftingCompass,
      image: "/pmc-monitoring.png",
    },
    {
      title: "PMC & OWNER'S ENGINEER",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Feasibility & DPR</li>
          <li>Owner's Engineering</li>
          <li>Vendor Selection and Procurement Support</li>
          <li>EHS and Quality Control Support</li>
          <li>Commissioning and Supervision</li>
        </ul>
      ),
      icon: HardHat,
      image: "/pmc-stakeholders.png",
    },
    {
      title: "BESS ASSEMBLY PLANT",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Plant feasibility</li>
          <li>Factory planning</li>
          <li>Process & Vendor Selection</li>
          <li>Manufacturing Readiness</li>
          <li>Technology Selection</li>
        </ul>
      ),
      icon: Factory,
      image: "/pmc-quality.png",
    },
    {
      title: "SOLAR & BESS TRAINING",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Solar EPC</li>
          <li>BESS & EMS</li>
          <li>Grid & SCADA</li>
          <li>O&M & corporate training</li>
        </ul>
      ),
      icon: GraduationCap,
      image: "/pmc-control.png",
    },
    {
      title: "C&I SOLUTIONS",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Energy assessment</li>
          <li>Rooftop Solar</li>
          <li>BESS integration</li>
          <li>Financial advisory</li>
        </ul>
      ),
      icon: Building2,
      image: "/pmc-regulatory.png",
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
        title="Our 7 Verticals"
        features={features}
        hideBadge={true}
      />

      {/* 7th Vertical: Land Procurement */}
      <section className="pb-24 pt-4 relative bg-white px-4 z-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-[32px] overflow-hidden border border-emerald-900/10 shadow-2xl bg-white flex flex-col md:flex-row relative h-auto md:h-80">
            
            {/* Left Image */}
            <div className="relative w-full md:w-1/3 h-64 md:h-full">
              <img src="/service-land.jpg" className="w-full h-full object-cover" alt="Land Identification" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
            </div>

            {/* Center Content */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 lg:p-12 z-10 bg-white text-center">
              <div className="mb-4 text-emerald-700">
                <MapPin className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black font-sora text-slate-900 mb-6 uppercase">
                LAND Procurement
              </h3>
              <ul className="text-slate-700 font-semibold space-y-1.5 text-left list-disc inline-block pl-5">
                <li>
                  Land identification
                  <ul className="ml-5 list-[circle] space-y-1 mt-1">
                    <li>Aggregation</li>
                    <li>Due diligence</li>
                  </ul>
                </li>
                <li>Grid Connectivity</li>
                <li>Regulatory &amp; transactions</li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative w-full md:w-1/3 h-64 md:h-full">
              <img src="/solutions-bg.jpg" className="w-full h-full object-cover" alt="Land Procurement" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white" />
            </div>

          </div>
        </div>
      </section>

      <InteractiveHorizontalFlow 
        title="Our PMC Scope"
        steps={scopeSteps}
      />
    </div>
  );
}
