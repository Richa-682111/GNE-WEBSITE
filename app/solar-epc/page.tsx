import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { PremiumServiceHero } from "@/components/PremiumServiceHero";
import { EditorialIntro } from "@/components/EditorialIntro";
import { BentoFeatureGrid } from "@/components/BentoFeatureGrid";
import { InteractiveHorizontalFlow } from "@/components/InteractiveHorizontalFlow";
import { Building2, DraftingCompass, ShieldCheck, MapPin, BriefcaseBusiness, Leaf, CheckCircle2 } from "lucide-react";
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
    },
    {
      title: "Engineering Excellence",
      description: "Optimized system design for maximum performance and reliability.",
      icon: DraftingCompass,
    },
    {
      title: "Quality-Driven Execution",
      description: "Strict quality assurance at every stage of construction.",
      icon: ShieldCheck,
    },
    {
      title: "Land & Grid Expertise",
      description: "Integrated support for land development and grid connectivity.",
      icon: MapPin,
    },
    {
      title: "Experienced Management",
      description: "Structured planning and execution with schedule adherence.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Safety & Sustainability",
      description: "Highest standards in HSE and sustainable infrastructure practices.",
      icon: Leaf,
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
        title="Building High-Performance Solar Infrastructure"
        content="GNE Infra delivers integrated Solar EPC solutions that transform project concepts into operational renewable energy assets. From feasibility and engineering to procurement, construction, commissioning, and long-term support, we ensure every project is executed with a focus on quality, efficiency, safety, and performance."
      />

      <BentoFeatureGrid 
        title="Why Choose GNE Infra"
        features={features}
      />

      <InteractiveHorizontalFlow 
        title="Our Solar EPC Scope"
        steps={scopeSteps}
      />

      {/* Additional Solar EPC Details */}
      <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl h-full border border-slate-200/60 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-sm font-black text-brand-green uppercase tracking-widest mb-6">Engineering & Design</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Solar & BESS Plant Design, Development & Optimization</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Topology & Site Feasibility Surveys</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> PV System Modelling & Shadow Analysis</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Structural Design & STAD Analysis</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl h-full border border-slate-200/60 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-sm font-black text-brand-green uppercase tracking-widest mb-6">Execution & Delivery</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Engineering, Procurement & Construction (EPC)</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Testing, Commissioning & Grid Integration</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> CEIG Approvals & Net Metering Services</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl h-full border border-slate-200/60 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-sm font-black text-brand-green uppercase tracking-widest mb-6">Digital & O&M Solutions</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Centralized Monitoring Systems & IoT Integration</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> Solar SCADA for Ground-Mounted Projects</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
