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
      title: "PMC & OWNER&apos;S ENGINEER",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Feasibility & DPR</li>
          <li>Owner&apos;s Engineering</li>
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
    { title: "Owner's Engineer" },
    { title: "Detailed Engineering" },
    { title: "Procurement Support" },
    { title: "Construction Support and Supervision" },
    { title: "EHS Supoort" },
    { title: "Commissioning Supervision" },

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
      <section className="-mt-10 pb-24 pt-4 relative bg-white px-4 sm:px-8 lg:px-12 z-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-[32px] overflow-hidden border border-slate-800 shadow-2xl bg-[#080E1E] flex flex-col md:flex-row relative h-auto md:h-80 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(22,163,74,0.15)] group">

            {/* Background Images Layer */}
            <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none">
              {/* Left half */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                <img src="/service-land.jpg" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" alt="Land Identification" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#080E1E]/60 to-[#080E1E]" />
              </div>
              {/* Right half */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                <img src="/solutions-bg.jpg" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" alt="Land Procurement" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#080E1E]/60 to-[#080E1E]" />
              </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
              {/* Left empty spacer */}
              <div className="hidden md:block md:w-1/3"></div>
              
              {/* Center Content */}
              <div className="w-full md:w-1/3 h-full flex flex-col items-center justify-center p-8 lg:p-12 text-center bg-[#080E1E]/30 backdrop-blur-xl border-x border-white/5 shadow-2xl py-12 md:py-0">
                <div className="mb-4 text-[#4ade80]">
                  <MapPin className="w-10 h-10 mx-auto drop-shadow-lg" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black font-sora text-white mb-6 uppercase drop-shadow-md">
                  LAND Procurement
                </h3>
                <ul className="text-white/90 font-semibold text-sm flex flex-col items-start gap-y-2.5 drop-shadow-md">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0" />
                    Land identification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0" />
                    Aggregation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0" />
                    Due diligence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0" />
                    Grid Connectivity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0" />
                    Regulatory &amp; transactions
                  </li>
                </ul>
              </div>

              {/* Right empty spacer */}
              <div className="hidden md:block md:w-1/3"></div>
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
