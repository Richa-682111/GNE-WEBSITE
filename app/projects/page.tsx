import type { Metadata } from "next";
import Link from "next/link";
import { MapPinned, Milestone, Timer } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "EPC Projects & Case Studies",
  description:
    "Explore our EPC project portfolio with map and timeline views, plus performance highlights and milestones."
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: `${site.url}/projects`,
    about: ["Solar EPC", "BESS", "EMS", "Hydrogen"],
    publisher: { "@type": "Organization", name: site.legalName, url: site.url }
  };

  const timeline = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <MapPinned className="h-4 w-4 text-brand-green" />
            Projects
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            EPC portfolio with map & timeline
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            Replace the sample projects with your real case studies—this layout is built to scale.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Share your requirement
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <div className="flex items-start gap-3">
                <MapPinned className="mt-0.5 h-5 w-5 text-brand-green" />
                <div>
                  <div className="text-base font-semibold">Map view (placeholder)</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Integrate a map provider (Mapbox/Google) to show project pins and clusters. For now,
                    we display coordinates (when available) in each project card below.
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <Milestone className="mt-0.5 h-5 w-5 text-brand-blue" />
                <div>
                  <div className="text-base font-semibold">Timeline view</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Quick scan of delivery years and statuses—ideal for “trusted track record”
                    messaging.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight">Case studies</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.id}>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {p.type} • {p.status} • {p.year}
                </div>
                <div className="mt-2 text-base font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  <div>
                    <span className="font-medium">Location:</span> {p.location}
                  </div>
                  <div className="mt-1">
                    <span className="font-medium">Capacity:</span> {p.capacity}
                  </div>
                  {p.lat != null && p.lng != null ? (
                    <div className="mt-1">
                      <span className="font-medium">Coords:</span> {p.lat}, {p.lng}
                    </div>
                  ) : null}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <Timer className="mt-0.5 h-4 w-4 text-brand-solar" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight">Timeline</h2>
          <div className="mt-6 grid gap-3">
            {timeline.map((p) => (
              <div
                key={`${p.id}-t`}
                className="flex flex-col justify-between gap-2 rounded-2xl border border-emerald-100 bg-white/70 px-5 py-4 text-sm backdrop-blur dark:border-emerald-900/40 dark:bg-slate-950/50 md:flex-row md:items-center"
              >
                <div className="font-semibold">
                  {p.year} • {p.title}
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  {p.type} • {p.capacity} • {p.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

