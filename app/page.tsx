import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CircleDashed,
  BatteryCharging,
  Factory,
  Globe2,
  Leaf,
  LineChart,
  MapPinned,
  Sparkles,
  Zap
} from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <div>
      <div className="bg-renewable-gradient">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-8 lg:grid-cols-2 lg:items-center lg:pb-20 lg:pt-10">
          <div className="reveal-up">
            <div className="badge-animated inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
              <Leaf className="h-4 w-4 text-brand-green" />
              Renewable Energy • Solar • Energy Storage • Green Hydrogen
            </div>
            <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Powering the Future with Solar, BESS & Hydrogen.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-slate-700 dark:text-slate-200">
              We engineer utility-scale and commercial clean-energy assets with reliable execution,
              performance-focused design, and long-term O&M confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary shadow-glow gap-2">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="btn-secondary">
                Explore Projects
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:grid-cols-4">
              <Card className="stat-card p-4 text-left">
                <div className="whitespace-nowrap text-sm font-black sm:text-base lg:text-lg">12 MWp</div>
                <div className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">Under execution</div>
              </Card>
              <Card className="stat-card p-4 text-left">
                <div className="whitespace-nowrap text-sm font-black sm:text-base lg:text-lg">300+ MWp</div>
                <div className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">Pipeline</div>
              </Card>
              <Card className="stat-card p-4 text-left">
                <div className="whitespace-nowrap text-sm font-black sm:text-base lg:text-lg">68 MWp</div>
                <div className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">O&M portfolio</div>
              </Card>
              <Card className="stat-card p-4 text-left">
                <div className="whitespace-nowrap text-sm font-black sm:text-base lg:text-lg">3 Regions</div>
                <div className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">Global expansion</div>
              </Card>
            </div>
          </div>

          <div className="hero-media-group relative">
            <div className="relative overflow-visible">
              <Image
                src="/hero-solar.jpg"
                alt="Utility solar infrastructure"
                width={1200}
                height={820}
                className="hero-image h-[420px] w-full rounded-3xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <Section className="py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="trust-glow rounded-2xl border border-emerald-100 bg-white/80 px-5 py-4 backdrop-blur dark:border-emerald-900/40 dark:bg-slate-950/50">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="font-semibold text-slate-900 dark:text-white">
                Trusted by industrial and utility clients
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                <span className="service-chip rounded-lg bg-emerald-50 px-3 py-1 dark:bg-emerald-950/40">Solar EPC</span>
                <span className="service-chip rounded-lg bg-emerald-50 px-3 py-1 dark:bg-emerald-950/40">Solar O&M</span>
                <span className="service-chip rounded-lg bg-emerald-50 px-3 py-1 dark:bg-emerald-950/40">Solar BESS</span>
                <span className="service-chip rounded-lg bg-emerald-50 px-3 py-1 dark:bg-emerald-950/40">Manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-6 pt-2">
        <div className="mx-auto max-w-6xl px-4">
          <div className="energy-showcase rounded-3xl border border-emerald-200/70 p-5 dark:border-emerald-900/50 sm:p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:border-emerald-800 dark:bg-slate-900/60 dark:text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  What makes us different
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  One integrated clean-energy stack
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-700 dark:text-slate-300">
                  Instead of isolated project silos, we engineer Solar, BESS, and Green Hydrogen as one
                  coordinated system for higher uptime, better economics, and future-ready scalability.
                </p>
              </div>
              <Link href="/projects" className="btn-secondary !px-4 !py-2">
                See integrated projects
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Card className="energy-pill border-emerald-300/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Solar Layer</div>
                  <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  High-yield PV design, generation forecasting, and EPC execution tuned for local grid
                  conditions.
                </div>
              </Card>

              <Card className="energy-pill border-sky-300/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">BESS Layer</div>
                  <BatteryCharging className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                </div>
                <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Peak shaving, load shifting, and EMS logic that turns stored energy into consistent value.
                </div>
              </Card>

              <Card className="energy-pill border-teal-300/60 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Hydrogen Layer
                  </div>
                  <CircleDashed className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Green hydrogen pathways for industrial decarbonization and long-duration energy strategy.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-solar-performance text-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.45)]">
                Solutions built for performance
              </h2>
              <p className="mt-2 max-w-2xl text-sm font-medium text-slate-800">
                Top renewable brands convert better with clear service architecture, strong proof, and
                simple CTAs. This homepage follows the same high-conversion structure.
              </p>
            </div>
            <Link href="/contact" className="hidden btn-secondary !px-4 !py-2 sm:inline-flex">
              Request a proposal
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card className="performance-card relative overflow-hidden">
              <div className="flex items-start gap-3">
                <Zap className="mt-0.5 h-5 w-5 text-brand-solar" />
                <div>
                  <div className="text-base font-semibold">Solar EPC</div>
                  <div className="mt-1 text-sm text-slate-100">
                    Utility-scale and rooftop projects with optimized BoM, construction planning, and
                    commissioning.
                  </div>
                  <Link className="mt-4 inline-flex text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200" href="/solar-epc">
                    Learn more
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="performance-card relative overflow-hidden">
              <div className="flex items-start gap-3">
                <BatteryCharging className="mt-0.5 h-5 w-5 text-brand-blue" />
                <div>
                  <div className="text-base font-semibold">BESS & EMS</div>
                  <div className="mt-1 text-sm text-slate-100">
                    Storage sizing, controls strategy, and EMS software that makes batteries deliver
                    value.
                  </div>
                  <Link className="mt-4 inline-flex text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200" href="/bess-ems">
                    Learn more
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="performance-card relative overflow-hidden">
              <div className="flex items-start gap-3">
                <Leaf className="mt-0.5 h-5 w-5 text-brand-green" />
                <div>
                  <div className="text-base font-semibold">Hydrogen</div>
                  <div className="mt-1 text-sm text-slate-100">
                    Future-ready roadmap for green hydrogen projects with integration thinking.
                  </div>
                  <Link className="mt-4 inline-flex text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200" href="/hydrogen">
                    Learn more
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="performance-card relative overflow-hidden">
              <div className="flex items-start gap-3">
                <Factory className="mt-0.5 h-5 w-5 text-brand-blue" />
                <div>
                  <div className="text-base font-semibold">Manufacturing Capabilities</div>
                  <div className="mt-1 text-sm text-slate-100">
                    Manufacturing capabilities, certifications, and quality processes for reliability.
                  </div>
                  <Link
                    className="mt-4 inline-flex text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                    href="/solar-panel-plant"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="flex items-start gap-3">
                <MapPinned className="mt-0.5 h-5 w-5 text-brand-green" />
                <div>
                  <div className="text-sm font-semibold">Project portfolio with timeline</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Showcase current and completed projects with capacity, year, and milestones.
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <LineChart className="mt-0.5 h-5 w-5 text-brand-blue" />
                <div>
                  <div className="text-sm font-semibold">Impact and ROI storytelling</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Add animated infographics for energy savings and CO2 reduction to improve trust.
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Globe2 className="mt-0.5 h-5 w-5 text-brand-green" />
                <div>
                  <div className="text-sm font-semibold">Global-ready credibility</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Position expansion across Europe, Africa, and Middle East with compliance-driven
                    execution.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <div className="text-base font-semibold">How top renewable websites increase conversions</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>Clear hero message with one primary CTA and one explore CTA</li>
                <li>Proof-first section: execution numbers, geographies, and credentials</li>
                <li>Service cards with direct route to detail pages and quote request</li>
                <li>Impact visuals, case studies, and trust badges above the fold</li>
              </ul>
            </Card>
            <Card>
              <div className="text-base font-semibold">Next conversion upgrades</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>Client/partner logo wall</li>
                <li>Video case study reel</li>
                <li>Sticky quote CTA on mobile</li>
                <li>WhatsApp chatbot widget</li>
              </ul>
            </Card>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-emerald-200 bg-renewable-gradient px-6 py-8 dark:border-emerald-900/60 md:flex-row md:items-center">
            <div>
              <div className="text-lg font-bold">Ready to accelerate your clean-energy project?</div>
              <div className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                Tell us your capacity, location, and timeline. Our team will share the best-fit plan.
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary">
                Contact Sales
              </Link>
              <Link href="/projects" className="btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

