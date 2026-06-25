import type { Metadata } from "next";
import NextImage from "next/image";
import { CheckCircle2, Droplets, Leaf, ShieldCheck } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageHero } from "@/components/ServicePageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Green Hydrogen | GNE Infra",
  description:
    "Green hydrogen solutions for industrial decarbonization: electrolyzer integration, project development, and sustainable H2 infrastructure.",
};

export default function GreenHydrogenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Green Hydrogen",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Green Hydrogen",
    keywords: ["green hydrogen", "electrolyzer", "H2 infrastructure", "industrial decarbonization"],
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <ServicePageHero
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Droplets className="h-4 w-4 text-brand-green" />
            Green Hydrogen
          </div>
        }
        title="Green Hydrogen for Industrial Decarbonization"
        description="Developing bankable green hydrogen projects with electrolyzer integration, renewable coupling, and end-to-end execution support."
        image="/service-green-hydrogen.jpg"
        imageAlt="Green hydrogen production facility"
        primaryCta={{ href: "/contact", label: "Explore Green H2 Solutions" }}
        secondaryCta={{ href: "/projects", label: "View Energy Portfolio" }}
      />

      <Section className="bg-service-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight">Building the hydrogen economy</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                GNE Infra is expanding into the green hydrogen sector with a focus on renewable-powered hydrogen production, electrolyzer deployment, storage infrastructure, and industrial offtake partnerships. Our approach combines renewable energy assets with advanced hydrogen technologies to support India&apos;s National Green Hydrogen Mission while delivering scalable, commercially viable projects from 5 MW to utility-scale deployments.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Integrated Developer + EPC capability
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Aligned with National Green Hydrogen Mission
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Focus on long-term offtake & annuity chashflows
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                  Scalable platform from 5 MW to 100+MW
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Card>
                <div className="flex items-start gap-3">
                  <Leaf className="mt-0.5 h-5 w-5 text-brand-green" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Renewable-powered H2
                    </div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">

                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Bankable project development
                    </div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Structured feasibility, offtake alignment, and compliance for investor-ready H2 projects.
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Target sectors</div>
                <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <div>Fertilizers & refining</div>
                  <div>Steel & heavy industry</div>
                  <div>Mobility & fuel cell applications</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Process flow diagram */}
          <div className="mt-16">
            <div className="relative h-[25vh] min-h-[220px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950/50">
              <NextImage
                src="/h3.png"
                alt="Green hydrogen process flow: power supply, production, storage and distribution, end use"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}