import type { Metadata } from "next";
import Link from "next/link";
import { Atom, CheckCircle2, Leaf, Network, ShieldCheck } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Hydrogen Energy Projects",
  description:
    "Future-ready clean hydrogen initiatives: feasibility, integration, and roadmap planning for renewable-linked hydrogen projects."
};

export default function HydrogenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hydrogen Energy Projects",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Hydrogen energy projects",
    keywords: ["Hydrogen energy projects", "green hydrogen", "clean energy", "renewable integration"]
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Atom className="h-4 w-4 text-brand-blue" />
            Hydrogen
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Future-ready clean hydrogen
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            We help clients plan and execute hydrogen initiatives with an integration mindset—linking
            renewables, storage, and controls to achieve reliability and cost targets.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Explore Hydrogen Roadmap
            </Link>
            <Link
              href="/blog"
              className="btn-secondary"
            >
              Read Insights
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold tracking-tight">How we support hydrogen projects</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="flex items-start gap-3">
                <Network className="mt-0.5 h-5 w-5 text-brand-blue" />
                <div>
                  <div className="text-sm font-semibold">System integration</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Renewable generation, BESS, and control architecture planning.
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Leaf className="mt-0.5 h-5 w-5 text-brand-green" />
                <div>
                  <div className="text-sm font-semibold">Feasibility and pathways</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Use case selection, power quality, and operational scenarios.
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-solar" />
                <div>
                  <div className="text-sm font-semibold">Risk-managed execution</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Safety-first thinking, documentation readiness, and staged rollout.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Card>
              <div className="text-base font-semibold">Typical outputs</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                  Roadmap with milestones, dependencies, and CAPEX/OPEX assumptions
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                  Integration concept with controls and monitoring approach
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-green" />
                  Project execution plan aligned to safety and compliance
                </li>
              </ul>
            </Card>
            <Card>
              <div className="text-base font-semibold">Positioning</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                This section is designed for SEO around “Hydrogen energy projects” and can be enriched
                with your specific partner ecosystem, certifications, and pilot program details.
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

