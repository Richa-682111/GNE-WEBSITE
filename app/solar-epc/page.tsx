import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, HardHat, LineChart, Wrench, Zap } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageHero } from "@/components/ServicePageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Solar EPC India",
  description:
    "Solar EPC delivery for utility-scale and rooftop projects: design, procurement, construction, commissioning, and O&M readiness.",
};

export default function SolarEpcPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Solar EPC",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Solar EPC",
    keywords: ["Solar EPC India", "utility-scale solar", "rooftop solar", "EPC contractor"],
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <ServicePageHero
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Zap className="h-4 w-4 text-brand-solar" />
            Solar EPC
          </div>
        }
        title="Utility-scale and rooftop Solar EPC"
        description="From feasibility to commissioning—with predictable timelines, bankable documentation, and quality-controlled execution."
        image="/hero-solar-farm.png"
        imageAlt="Utility-scale solar farm installation"
        primaryCta={{ href: "/contact", label: "Get EPC Proposal" }}
        secondaryCta={{ href: "/projects/p1", label: "See Case Study" }}
      />

      <Section className="bg-service-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold tracking-tight">What we deliver</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card>
              <div className="flex items-start gap-3">
                <Wrench className="mt-0.5 h-5 w-5 text-brand-blue" />
                <div>
                  <div className="text-base font-semibold">Engineering & design</div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                      Plant layout, SLD, stringing, earthing, and SCADA readiness
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                      BoQ/BoM optimization for yield and reliability
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <HardHat className="mt-0.5 h-5 w-5 text-brand-solar" />
                <div>
                  <div className="text-base font-semibold">Construction & commissioning</div>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                      Civil, mechanical, electrical installation with QA/QC checkpoints
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                      Testing protocols, performance validation, as-built documentation
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="flex items-start gap-3">
                <LineChart className="mt-0.5 h-5 w-5 text-brand-green" />
                <div>
                  <div className="text-sm font-semibold">Yield-first approach</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Design choices guided by generation, losses, and O&M impact.
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Rooftop solutions</div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Industrial rooftops with safe access, structural checks, and net-metering alignment.
              </div>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Utility-scale delivery</div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Execution planning, construction management, commissioning & handover for scale.
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
