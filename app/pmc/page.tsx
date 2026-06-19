import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Target } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageHero } from "@/components/ServicePageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Project Management Consultancy | GNE Infra",
  description:
    "Project Management Consultancy for renewable energy projects: governance, quality, compliance, and stakeholder coordination.",
};

export default function PmcPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Project Management Consultancy",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Project Management Consultancy",
    keywords: ["PMC", "solar project management", "renewable energy consultancy"],
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <ServicePageHero
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Target className="h-4 w-4 text-brand-blue" />
            Project Management Consultancy
          </div>
        }
        title="Project Management Consultancy For Solar, BESS, Pumped Storage Project (PSP)"
        description="Driving Seamless Execution and On-Ground Delivery"
        image="/service-pmc.jpg"
        imageAlt="Project management and engineering consultancy"
        primaryCta={{ href: "/contact", label: "Request PMC Support" }}
        secondaryCta={{ href: "/projects", label: "Review Delivery Experience" }}
      />

      <Section className="bg-service-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight">PMC that keeps projects on track</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                Our PMC services are tailored for large-scale solar and energy storage assets, with robust contract governance,
                quality assurance, risk management and reporting built in from day one.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Land Identification & ROU structuring
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Concept engineering (SLD, layouts, GAD)
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Grid connectivity & approvals
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Regulatory & statutory advisory
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  DPR support & lender coordination
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Execution planning & EMS integration
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  SCADA integration & EHS advisory
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Card>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">What we manage</div>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div>Scope alignment and change control</div>
                  <div>Schedule monitoring and issue resolution</div>
                  <div>Procurement oversight and vendor performance</div>
                </div>
              </Card>
              <Card>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Our PMC promise</div>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div>Transparent governance and stakeholder communication</div>
                  <div>Consistent quality checks with audit-ready documentation</div>
                  <div>Practical decisions that preserve capital and schedule</div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-sm font-semibold">Handover excellence</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      We prepare commissioning reports, O&M readiness packages, and formal acceptance documentation.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
