import type { Metadata } from "next";
import { Battery, CheckCircle2, Cpu, Gauge, LineChart, ShieldCheck } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageHero } from "@/components/ServicePageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "BESS Solutions & EMS Software",
  description:
    "Battery Energy Storage Systems (BESS) and EMS software: sizing, integration, dispatch strategy, monitoring, and analytics.",
};

export default function BessEmsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BESS & EMS Solutions",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "BESS solutions",
    keywords: ["BESS solutions", "Energy Management System", "EMS software", "battery storage India"],
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <ServicePageHero
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Battery className="h-4 w-4 text-brand-blue" />
            BESS & EMS
          </div>
        }
        title="Storage that performs—powered by EMS"
        description="We make battery projects bankable with controls, analytics, and operational discipline—so BESS delivers measurable value."
        image="/hero-bess-storage.png"
        imageAlt="Battery energy storage system installation"
        primaryCta={{ href: "/contact", label: "Discuss BESS + EMS" }}
        secondaryCta={{ href: "/projects/p3", label: "View Case Study" }}
      />

      <Section className="bg-service-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold tracking-tight">Key differentiators</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="flex items-start gap-3">
                <Cpu className="mt-0.5 h-5 w-5 text-brand-blue" />
                <div>
                  <div className="text-sm font-semibold">EMS software</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Dispatch optimization, constraints handling, and automated reporting.
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Gauge className="mt-0.5 h-5 w-5 text-brand-solar" />
                <div>
                  <div className="text-sm font-semibold">Performance analytics</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Round-trip efficiency, degradation tracking, alarms, and KPI dashboards.
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-green" />
                <div>
                  <div className="text-sm font-semibold">Safety + compliance</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Commissioning checklists, SOPs, and integration validation.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Card>
              <div className="text-base font-semibold">Use cases</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                  Peak shaving and demand charge reduction
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                  Solar smoothing and grid support
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                  Backup power and critical loads
                </li>
              </ul>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <LineChart className="mt-0.5 h-5 w-5 text-brand-green" />
                <div>
                  <div className="text-base font-semibold">Sizing + strategy</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    We align energy capacity, power rating, and dispatch strategy to the business
                    objective—then validate with data.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
