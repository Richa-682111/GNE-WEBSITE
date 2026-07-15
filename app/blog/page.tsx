"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Newspaper, ArrowRight } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { posts } from "@/content/blog";

export default function BlogPage() {
  // Define the featured post (the latest one) and regular posts
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="flex min-h-screen flex-col">
      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <Section className="relative overflow-hidden pb-24 pt-32 lg:pb-28 lg:pt-36 border-b border-white/10 min-h-[460px] flex items-center" style={{ background: '#0B132B' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-solar-bess-combined.png"
            alt="Shaping the Energy Transition - Solar EPC, BESS & Green Hydrogen"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Layered Dark Gradient overlays for vivid image visibility and perfect text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B132B]/95 sm:from-[#0B132B]/90 via-[#0B132B]/70 to-[#0B132B]/30" />
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
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ background: 'rgba(13,115,66,0.18)', color: '#4ade80', outline: '1px solid rgba(13,115,66,0.35)' }}>
              <Newspaper className="h-3.5 w-3.5 text-[#4ade80]" />
              GNE Infra Insights
            </div>

            <h1 className="mt-6 text-4xl font-black font-sora tracking-tight text-white sm:text-5xl lg:text-6xl">
              Shaping the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-emerald-400 to-teal-300">Energy Transition</span>
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-300 leading-[1.85]">
              Deep-dives into utility-scale Solar EPC quality standards, next-generation BESS solutions, energy management intelligence, and green hydrogen scaling roadmap.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── BLOGS GRID & FEATURED POST ──────────────────────────────────── */}
      <Section className="relative bg-white flex-grow pt-12">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
          {/* FEATURED POST */}
          {featuredPost && (
            <ScrollReveal className="mb-16">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch overflow-hidden rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/40 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:z-30 group-hover:shadow-[0_30px_70px_rgba(22,163,74,0.25)]">
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-emerald-100/50 dark:border-emerald-900/20 lg:col-span-6 min-h-[280px] lg:min-h-[340px] xl:min-h-[440px]">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col justify-between py-2 lg:col-span-6">
                    <div>
                      {/* Tag badge */}
                      <span className="inline-block rounded-full bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
                        {featuredPost.category}
                      </span>

                      {/* Title */}
                      <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl leading-snug" style={{ color: '#010101' }}>
                        {featuredPost.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    {/* Metadata & CTA */}
                    <div className="mt-6 flex flex-wrap items-center justify-between border-t border-slate-100 dark:border-slate-900 pt-6 gap-4">
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-emerald-500" />
                          {new Date(featuredPost.date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "2-digit"
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-emerald-500" />
                          {featuredPost.readingTime}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-sm font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        <span>Read Article</span>
                        <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* REGULAR POSTS GRID */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="group flex h-full">
                  <Card className="flex w-full flex-col overflow-hidden !p-0">
                    {/* Image Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl border-b border-slate-100 dark:border-slate-900">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        {/* Category Badge */}
                        <span className="inline-block rounded-full bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-200/50 dark:ring-emerald-800/50">
                          {post.category}
                        </span>

                        {/* Title */}
                        <h3 className="mt-3 text-lg font-bold leading-snug transition-colors duration-300" style={{ color: '#256c4aff' }}>
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Metadata Footer */}
                      <div className="mt-5 border-t border-slate-100 dark:border-slate-900 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString(undefined, {
                              year: "numeric",
                              month: "short",
                              day: "2-digit"
                            })}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readingTime}
                          </span>
                        </div>

                        <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                          <span>Read</span>
                          <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
