import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChevronLeft, Tag, Share2, ArrowRight } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";
import { posts } from "@/content/blog";
import { blogContents } from "@/content/blogContents";
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

// Generate static params for all blog posts for fast build and static rendering
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const content = blogContents[post.slug];
  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${site.url}${post.image}`,
    author: { "@type": "Organization", name: site.legalName, url: site.url },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/blog/${post.slug}` }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={jsonLd} />

      {/* ── HEADER HERO SECTION ────────────────────────────────────────── */}
      <Section className="relative overflow-hidden pb-20 pt-32 lg:pb-24 lg:pt-36 border-b border-white/10 min-h-[480px] flex items-center" style={{ background: '#0B132B' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Layered Dark Gradient overlays for vivid image visibility and perfect text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B132B]/95 sm:from-[#0B132B]/90 via-[#0B132B]/75 to-[#0B132B]/30" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />

        {/* Ambient glow orbs */}
        <div className="pointer-events-none absolute top-0 left-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#0d7342ff]/20 blur-[120px] z-[2]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[500px] rounded-full bg-teal-400/10 blur-[100px] z-[2]" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)', backgroundSize: '36px 36px' }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-12 text-left">
          <ScrollReveal>
            {/* Back to Blog Pill */}
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:border-white/40"
            >
              <ChevronLeft className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:-translate-x-0.5 text-[#4ade80]" />
              Back to Blog
            </Link>

            {/* Title */}
            <h1 className="mt-8 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.25rem] font-black font-sora leading-tight tracking-tight text-white max-w-4xl">
              {post.title}
            </h1>

            {/* Metadata bar */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-300 border-t border-white/15 pt-6 max-w-4xl">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#4ade80]" />
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "2-digit"
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#4ade80]" />
                {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Tag className="h-4 w-4 text-[#4ade80]" />
                {post.category}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── CONTENT & SIDEBAR GRID ──────────────────────────────────────── */}
      <Section className="relative bg-slate-50/20 dark:bg-slate-950/5 flex-grow">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* ARTICLE COLUMN */}
            <main className="lg:col-span-8">
              <ScrollReveal>
                <Card className="!p-8 sm:!p-10 border border-emerald-100/60 dark:border-emerald-900/25 bg-white/80 dark:bg-slate-950/40 backdrop-blur-md rounded-3xl">
                  {/* Tailwind Prose Container for rich text styling */}
                  <article className="prose prose-slate dark:prose-invert prose-emerald max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h2:mt-10 prose-h2:border-b prose-h2:border-slate-100 dark:prose-h2:border-slate-900 prose-h2:pb-3 prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50/10 dark:prose-blockquote:bg-emerald-950/5 prose-blockquote:p-4 prose-blockquote:rounded-r-xl">
                    {content || (
                      <>
                        <p className="lead">{post.excerpt}</p>
                        <p>No content has been added to this blog post yet.</p>
                      </>
                    )}
                  </article>
                </Card>
              </ScrollReveal>
            </main>

            {/* SIDEBAR COLUMN */}
            <aside className="lg:col-span-4 space-y-8 sticky top-28">
              
              {/* RELATED ARTICLES CARD */}
              <ScrollReveal delay={100}>
                <div className="rounded-3xl border border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-950/50 p-6 backdrop-blur shadow-sm">
                  <h3 className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link 
                        key={related.slug} 
                        href={`/blog/${related.slug}`}
                        className="group block border-b border-slate-100 dark:border-slate-900 last:border-0 pb-4 last:pb-0"
                      >
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 line-clamp-2">
                          {related.title}
                        </h4>
                        <div className="mt-2 flex items-center gap-2 text-[10px] font-semibold text-slate-400">
                          <span>
                            {new Date(related.date).toLocaleDateString(undefined, {
                              year: "numeric",
                              month: "short",
                              day: "2-digit"
                            })}
                          </span>
                          <span>•</span>
                          <span>{related.readingTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA PARTNER CARD */}
              <ScrollReveal delay={150}>
                <div className="rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-slate-900 to-slate-950 p-7 text-white shadow-xl shadow-slate-950/15 overflow-hidden relative group">
                  {/* Subtle decorative grid/glow inside card */}
                  <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
                  <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

                  <h3 className="text-xs font-black uppercase tracking-widest text-emerald-400">
                    Partner With Us
                  </h3>
                  
                  <h4 className="mt-3 text-lg font-black leading-snug">
                    Need a Renewable Energy Partner?
                  </h4>
                  
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                    {"Let's design and build secure, long-term Solar EPC, BESS, or Green Hydrogen infrastructure customized to your exact requirements."}
                  </p>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green py-3 text-xs font-bold text-white transition-all duration-300 hover:scale-102 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/15"
                    >
                      Discuss Your Project
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

            </aside>

          </div>
        </div>
      </Section>
    </div>
  );
}
