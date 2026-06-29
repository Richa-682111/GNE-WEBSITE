import type { Metadata } from "next";
import { CheckCircle2, Flame, ShieldCheck, Zap } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageHero } from "@/components/ServicePageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Operations & Maintenance | GNE Infra",
  description:
    "Operations and maintenance for solar and BESS projects: reliability, performance monitoring, and lifecycle support.",
};

export default function OmPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Operations and Maintenance",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Operations and Maintenance",
    keywords: ["O&M", "solar operations", "battery maintenance", "asset performance"],
  };

  return (
    <div className="relative min-h-screen overflow-hidden pb-12">
      {/* Light Charcoal Gray Gradient — soft gray corners, white center */}
      <div className="fixed inset-0 -z-10" style={{background: 'radial-gradient(ellipse at top left, #9ca3af 0%, #d1d5db 30%, #f3f4f6 60%, #ffffff 75%, #f3f4f6 85%, #9ca3af 100%)'}}>
        {/* Soft gray corner punches */}
        <div className="absolute left-[-8%] top-[-8%] h-[550px] w-[550px] rounded-full bg-gray-400/40 blur-[120px]" />
        <div className="absolute right-[-8%] top-[-8%] h-[550px] w-[550px] rounded-full bg-slate-400/35 blur-[120px]" />
        <div className="absolute left-[-8%] bottom-[-8%] h-[550px] w-[550px] rounded-full bg-gray-300/35 blur-[120px]" />
        <div className="absolute right-[-8%] bottom-[-8%] h-[550px] w-[550px] rounded-full bg-slate-300/30 blur-[120px]" />
        {/* Bright white center glow */}
        <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/95 blur-[120px]" />
      </div>

      <JsonLd data={jsonLd} />
      <ServicePageHero className="[background:radial-gradient(ellipse_at_top_left,#9ca3af_0%,#d1d5db_30%,#f3f4f6_60%,#ffffff_75%,#f3f4f6_85%,#9ca3af_100%)]"
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100/80 px-4 py-2 text-xs font-semibold text-gray-700 backdrop-blur">
            <Zap className="h-4 w-4 text-gray-500" />
            Operations & Maintenance
          </div>
        }
        title="Keeping your solar and storage assets productive"
        description="Proactive O&M ensures uptime, maximizes energy yield, and extends asset life for commercial and utility-grade systems."
        image="/service-om.jpg"
        imageAlt="Solar operations and maintenance team at work"
        primaryCta={{ href: "/contact", label: "Schedule O&M Review" }}
        secondaryCta={{ href: "/projects", label: "View Performance Cases" }}
      />

      <Section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Asset care that drives results</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                Our O&M approach combines preventative maintenance, remote monitoring, and rapid response so your investment meets performance expectations.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Condition-based inspections and fault diagnostics.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Performance optimization, tracking and reporting.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Spare management, warranty support and compliance checks.
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Card>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">O&M coverage</div>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div>Routine inspections and preventive servicing</div>
                  <div>Performance monitoring and alarms</div>
                  <div>Corrective maintenance and spare inventory</div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <Flame className="mt-0.5 h-5 w-5 text-brand-solar" />
                  <div>
                    <div className="text-sm font-semibold">Yield-first support</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Our team focuses on maintaining plant performance to protect revenue and system reliability.
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-sm font-semibold">Safety & compliance</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Regular safety walkthroughs, thermal imaging, and compliance reporting.
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
