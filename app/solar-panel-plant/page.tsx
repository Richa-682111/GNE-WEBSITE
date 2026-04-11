import type { Metadata } from "next";
import Link from "next/link";
import { Award, CheckCircle2, Factory, ShieldCheck, Sparkles } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Solar Panel Manufacturing Plant",
  description:
    "Solar panel plant overview: manufacturing capabilities, quality systems, and certifications aligned to reliable module supply."
};

export default function SolarPanelPlantPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${site.legalName} - Solar Panel Plant`,
    url: `${site.url}/solar-panel-plant`,
    keywords: ["Solar panel plant", "solar module manufacturing", "certifications", "quality"]
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Factory className="h-4 w-4 text-brand-blue" />
            Solar Panel Plant
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Manufacturing built for reliability
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            Present your capacity, processes, and certifications clearly—so customers trust the supply
            chain behind every project.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Request Product Datasheets
            </Link>
            <Link
              href="/projects"
              className="btn-secondary"
            >
              View Reference Projects
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold tracking-tight">Capabilities</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 text-brand-solar" />
                <div>
                  <div className="text-sm font-semibold">Process & equipment</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Highlight key lines, testing steps, and throughput (update with real numbers).
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-green" />
                <div>
                  <div className="text-sm font-semibold">Quality systems</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Incoming inspection, in-process QA, EL testing, and final inspection traceability.
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 text-brand-blue" />
                <div>
                  <div className="text-sm font-semibold">Certifications</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Display certifications and compliance badges (IEC/ISO etc.) with verification links.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Card>
              <div className="text-base font-semibold">What to add next</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                  Actual capacity (MW/year), product range, warranty terms
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                  Test lab photos and QA flow diagram
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                  Downloadable datasheets and brochures
                </li>
              </ul>
            </Card>
            <Card>
              <div className="text-base font-semibold">SEO angle</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                This page is structured to rank for manufacturing-intent queries and to build trust via
                structured content and schema.
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

