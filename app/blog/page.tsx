import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Newspaper, Tag } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { posts } from "@/content/blog";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Updates on renewable energy trends across Solar EPC, BESS/EMS, hydrogen, and industry insights."
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.name} Blog`,
    url: `${site.url}/blog`,
    publisher: { "@type": "Organization", name: site.legalName, url: site.url }
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Newspaper className="h-4 w-4 text-brand-blue" />
            Blog / News
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Insights on renewable energy
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            Publish trend updates, case study breakdowns, and technical notes to improve SEO and
            credibility.
          </p>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((p) => (
              <Card key={p.slug} className="flex flex-col">
                <div className="text-base font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.excerpt}</div>
                <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <div className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(p.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    })}
                  </div>
                  <div className="inline-flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" />
                    {p.tags[0]}
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="inline-flex text-sm font-semibold underline underline-offset-4"
                  >
                    Read more
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

