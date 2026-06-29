import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  MapPin,
  Target,
  Zap,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageHero } from "@/components/ServicePageHero";
import { getProjectById, projects } from "@/content/projects";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

const statusStyles: Record<
  (typeof projects)[number]["status"],
  string
> = {
  Commissioned: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
  "Under construction": "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
  Design: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return notFound();

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.title,
    description: project.summary,
    location: {
      "@type": "Place",
      name: project.location,
    },
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  if (id === "p1") {
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Soft Mint Teal Gradient — very light teal corners, pure white center */}
        <div className="fixed inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at top left, #ccfbf1 0%, #e6fffa 30%, #f0fffe 58%, #ffffff 72%, #f0fffe 85%, #ccfbf1 100%)' }}>
          <div className="absolute left-[-8%] top-[-8%] h-[550px] w-[550px] rounded-full bg-teal-200/30 blur-[140px]" />
          <div className="absolute right-[-8%] top-[-8%] h-[550px] w-[550px] rounded-full bg-emerald-100/25 blur-[140px]" />
          <div className="absolute left-[-8%] bottom-[-8%] h-[550px] w-[550px] rounded-full bg-teal-100/20 blur-[140px]" />
          <div className="absolute right-[-8%] bottom-[-8%] h-[550px] w-[550px] rounded-full bg-cyan-100/20 blur-[140px]" />
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/98 blur-[130px]" />
        </div>

        <JsonLd data={jsonLd} />
        <ServicePageHero className="[background:radial-gradient(ellipse_at_top_left,#ccfbf1_0%,#e6fffa_30%,#f0fffe_58%,#ffffff_72%,#f0fffe_85%,#ccfbf1_100%)]"
          badge={
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-4 py-2 text-xs font-semibold text-teal-800 backdrop-blur">
              <Target className="h-4 w-4 text-teal-600" />
              Utility-Scale Solar EPC
            </div>
          }
          title="Solar EPC Solutions"
          description="Delivering end-to-end Engineering, Procurement, Construction, and Commissioning solutions for utility-scale, commercial, and industrial solar power projects."
          image="/hero-solar-farm.png"
          imageAlt="Utility-scale solar PV farm EPC"
          primaryCta={{ href: "/contact", label: "Request Solar Support" }}
          secondaryCta={{ href: "/projects", label: "Review Delivery Experience" }}
        />

        <Section className="bg-transparent">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-black tracking-tight">Solar EPC that maximizes energy yield</h2>
                <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  {project.scope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                  {project['Execution & delivery'].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                  {project['Digital & O&M Solutions']?.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <Card>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">What we manage</div>
                  <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <div>Solar & BESS Plant Design, Development & Optimization</div>
                    <div>Topology & Site Feasibility Surveys and shadow analysis</div>
                    <div>Procurement oversight and tier-1 vendor coordination</div>
                  </div>
                </Card>
                <Card>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Our Solar promise</div>
                  <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <div>Transparent contract governance and project timeline tracking</div>
                    <div>Rigorous quality assurance with audit-ready documentation</div>
                    <div>Yield-optimized design for consistent energy production</div>
                  </div>
                </Card>
                <Card>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-blue" />
                    <div>
                      <div className="text-sm font-semibold">Handover excellence</div>
                      <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        We prepare full commissioning logs, CEIG approvals, net-metering services, and SCADA integration setups.
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

  if (id === "p3") {
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Cool Gray-Blue Gradient Background — gray-blue corners, light-blue mid, white center */}
        <div className="fixed inset-0 -z-10" style={{ background: 'radial-gradient(ellipse at top left, #b0c4d8 0%, #cfe2f3 25%, #e8f4fd 50%, #ffffff 65%, #e8f4fd 80%, #b0c4d8 100%)' }}>
          {/* Corner gray-blue punches */}
          <div className="absolute left-[-8%] top-[-8%] h-[550px] w-[550px] rounded-full bg-slate-400/40 blur-[120px]" />
          <div className="absolute right-[-8%] top-[-8%] h-[550px] w-[550px] rounded-full bg-blue-200/50 blur-[120px]" />
          <div className="absolute left-[-8%] bottom-[-8%] h-[550px] w-[550px] rounded-full bg-slate-300/40 blur-[120px]" />
          <div className="absolute right-[-8%] bottom-[-8%] h-[550px] w-[550px] rounded-full bg-sky-300/40 blur-[120px]" />
          {/* White center glow */}
          <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/95 blur-[110px]" />
        </div>

        <JsonLd data={jsonLd} />
        <ServicePageHero className="[background:radial-gradient(ellipse_at_top_left,#b0c4d8_0%,#cfe2f3_25%,#e8f4fd_50%,#ffffff_65%,#e8f4fd_80%,#b0c4d8_100%)]"
          badge={
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-4 py-2 text-xs font-semibold text-sky-800 backdrop-blur">
              <Target className="h-4 w-4 text-sky-600" />
              BESS + EMS Deployment
            </div>
          }
          title="Grid-Scale Battery Energy Storage (BESS) & Intelligent Energy Management (EMS)"
          description="Optimizing dispatch control, peak shaving, frequency support, degradation-aware operations, and remote monitoring analytics."
          image="/hero-bess-storage.png"
          imageAlt="Utility-scale battery energy storage system"
          primaryCta={{ href: "/contact", label: "Request BESS Support" }}
          secondaryCta={{ href: "/projects", label: "Review Delivery Experience" }}
        />

        <Section className="bg-transparent">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-black tracking-tight">BESS & EMS that optimizes storage stability</h2>
                <p className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  {project.scope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                  {project['Execution & delivery'].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                  {project['Digital & O&M Solutions']?.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <Card>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">What we manage</div>
                  <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <div>BESS system design, integration & layout modeling</div>
                    <div>EMS software configuration, dispatch logic & SCADA integration</div>
                    <div>Grid interconnection works and compliance coordination</div>
                  </div>
                </Card>
                <Card>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">Our storage promise</div>
                  <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <div>Dispatch optimization for maximum peak shaving capability</div>
                    <div>Degradation-aware battery operation models to extend system life</div>
                    <div>Consistent remote monitoring and automated alert tracking</div>
                  </div>
                </Card>
                <Card>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-blue" />
                    <div>
                      <div className="text-sm font-semibold">Handover excellence</div>
                      <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        We prepare full commissioning certifications, safety compliance tests, and custom EMS remote operator integrations.
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

  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <Section className="relative overflow-hidden py-0">
        <div className="relative h-[280px] w-full sm:h-[340px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/20" />
          <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-8">
            <Link
              href="/projects"
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              All projects
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
                {project.type}
              </span>
            </div>
            <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/85 sm:text-base">
              {project.summary}
            </p>
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section className="bg-service-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold tracking-tight">Project overview</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight">Scope of work</h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-xl border border-white/20 bg-white/55 px-4 py-3 text-sm dark:border-emerald-900/40 dark:bg-slate-950/50 backdrop-blur-xl shadow-sm"
                    >
                      <Target className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {project['Digital & O&M Solutions'] && project['Digital & O&M Solutions'].length > 0 && (
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Digital & O&M Solutions</h2>
                  <ul className="mt-4 space-y-2">
                    {project['Digital & O&M Solutions'].map((outcome) => (
                      <li
                        key={outcome}
                        className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-brand-solar" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold tracking-tight">Execution & delivery</h2>
                <ul className="mt-4 space-y-2">
                  {project['Execution & delivery'].map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Capacity
                    </div>
                    <div className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                      {project.capacity}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Location
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-semibold">
                      <MapPin className="h-4 w-4 text-brand-green" />
                      {project.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Year
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-semibold">
                      <Calendar className="h-4 w-4 text-brand-green" />
                      {project.year}
                    </div>
                  </div>
                  {project.client && (
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Client
                      </div>
                      <div className="mt-1 font-semibold">{project.client}</div>
                    </div>
                  )}
                </div>
                <Link href="/contact" className="btn-primary mt-6 w-full">
                  Discuss a similar project
                </Link>
              </Card>
            </div>
          </div>

          {/* Related projects */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold tracking-tight">More case studies</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="group flex gap-4 overflow-hidden rounded-2xl border border-white/20 bg-white/55 p-4 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-emerald-900/40 dark:bg-slate-950/50 backdrop-blur-xl shadow-md"
                  >
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="112px"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{p.title}</div>
                      <div className="mt-1 text-xs text-slate-500">
                        {p.capacity} • {p.location}
                      </div>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-green">
                        View case study <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
