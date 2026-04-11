import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ChevronLeft, Tag } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { posts } from "@/content/blog";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${post.slug}` }
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="mt-6 text-balance text-4xl font-black tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "2-digit"
              })}
            </div>
            <div className="inline-flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {post.tags.join(", ")}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <Card className="prose prose-slate max-w-none dark:prose-invert">
            <p>{post.excerpt}</p>
            <p>
              Replace this placeholder with real content (Markdown/MDX or a CMS). This page is already
              SEO-ready with schema.org structured data for blog posts.
            </p>
            <h2>What you can add</h2>
            <ul>
              <li>Project photos, charts, and commissioning checklists</li>
              <li>Technical deep dives on EMS strategy and performance</li>
              <li>Industry news and policy updates</li>
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  );
}

