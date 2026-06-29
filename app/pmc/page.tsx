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
    <div className="relative min-h-screen overflow-hidden">
      {/* Soft Lavender Indigo Gradient — very light indigo corners, pure white center */}
      <div className="fixed inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at top left, #e0e7ff 0%, #eef2ff 30%, #f5f7ff 58%, #ffffff 72%, #f5f7ff 85%, #e0e7ff 100%)' }}>
        <div className="absolute left-[-8%] top-[-8%] h-[550px] w-[550px] rounded-full bg-indigo-400/35 blur-[140px]" />
        <div className="absolute right-[-8%] top-[-8%] h-[550px] w-[550px] rounded-full bg-violet-100/20 blur-[140px]" />
        <div className="absolute left-[-8%] bottom-[-8%] h-[550px] w-[550px] rounded-full bg-indigo-100/18 blur-[140px]" />
        <div className="absolute right-[-8%] bottom-[-8%] h-[550px] w-[550px] rounded-full bg-blue-100/18 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/98 blur-[130px]" />
      </div>

      <JsonLd data={jsonLd} />
      <ServicePageHero
        className="[background:radial-gradient(ellipse_at_top_left,#e0e7ff_0%,#eef2ff_30%,#f5f7ff_58%,#ffffff_72%,#f5f7ff_85%,#e0e7ff_100%)]"
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-xs font-semibold text-indigo-800 backdrop-blur">
            <Target className="h-4 w-4 text-indigo-600" />
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

      <Section className="bg-transparent">
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
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                  Land Identification &amp; ROU structuring
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                  Concept engineering (SLD, layouts, GAD)
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                  Grid connectivity &amp; approvals
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                  Regulatory &amp; statutory advisory
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                  DPR support &amp; lender coordination
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                  Execution planning &amp; EMS integration
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                  SCADA integration &amp; EHS advisory
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
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-indigo-500" />
                  <div>
                    <div className="text-sm font-semibold">Handover excellence</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      We prepare commissioning reports, O&amp;M readiness packages, and formal acceptance documentation.
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
