"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Newspaper, ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { posts } from "@/content/blog";

const CATEGORIES = ["All", "Solar EPC", "BESS & EMS", "Green Hydrogen"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  // Define the featured post (the latest one)
  const featuredPost = posts[0];
  const regularPosts = filteredPosts.filter((post) => post.slug !== featuredPost.slug);

  return (
    <div className="flex min-h-screen flex-col">
      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <Section className="relative overflow-hidden bg-renewable-gradient pb-20 pt-28 border-b border-slate-100 dark:border-slate-900">
        {/* Subtle grid background */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.4]" />
        
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 backdrop-blur dark:border-emerald-900/40 dark:bg-slate-950/50 dark:text-emerald-300">
              <Newspaper className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              GNE Infra Insights
            </div>
            
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Shaping the <span className="text-brand-green">Energy Transition</span>
            </h1>
            
            <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
              Deep-dives into utility-scale Solar EPC quality standards, next-generation BESS solutions, energy management intelligence, and green hydrogen scaling roadmap.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* ── CATEGORY SELECTOR ───────────────────────────────────────────── */}
      <Section className="py-8 bg-white/40 dark:bg-slate-950/20 border-b border-slate-100 dark:border-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-brand-green text-white shadow-md shadow-emerald-500/20"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800/40"
                  }`}
                >
                  {isActive && <Check className="h-3.5 w-3.5" />}
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── BLOGS GRID & FEATURED POST ──────────────────────────────────── */}
      <Section className="relative bg-slate-50/30 dark:bg-slate-950/10 flex-grow">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* FEATURED POST (Shown only on 'All' category and if it matches filter) */}
          {activeCategory === "All" && featuredPost && (
            <ScrollReveal className="mb-16">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch overflow-hidden rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/40 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 hover:shadow-glow transition-all duration-300">
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-emerald-100/50 dark:border-emerald-900/20 lg:col-span-6 min-h-[250px] sm:min-h-[300px]">
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
                      <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 sm:text-3xl leading-snug">
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
            {/* If not "All", show featured post as normal grid card if category matches */}
            {activeCategory !== "All" &&
              filteredPosts.map((post, i) => (
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
                          <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
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

            {/* If active category is "All", render the rest of the list here */}
            {activeCategory === "All" &&
              regularPosts.map((post, i) => (
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
                          <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
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

          {/* Empty state if category has no posts */}
          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-500 dark:text-slate-400">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
