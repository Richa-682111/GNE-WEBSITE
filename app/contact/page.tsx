import type { Metadata } from "next";
import { MessageSquareText, PhoneCall, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for Solar EPC, BESS/EMS solutions, and hydrogen initiatives."
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    url: `${site.url}/contact`,
    about: ["Solar EPC India", "BESS solutions", "Hydrogen energy projects", "EMS software"],
    publisher: { "@type": "Organization", name: site.legalName, url: site.url }
  };

  return (
    <div className="bg-[#08152b] text-white min-h-screen pb-20 font-inter selection:bg-sky-400 selection:text-slate-950">
      <JsonLd data={jsonLd} />

      {/* ─── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative pt-6 pb-4 sm:pt-8 sm:pb-6 border-b border-white/10 overflow-hidden min-h-[130px]">

        {/* ── HIGH-QUALITY SOLAR FARM PHOTO BACKGROUND ── */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Aerial solar farm — Unsplash by Andreas Gücklhorn */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=85&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden="true"
          />
          {/* Dark green tint overlay — minimal, just enough for text */}
          <div className="absolute inset-0 bg-[#0d2d1e]/20" />
          {/* Left gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2d1e]/60 via-[#0d2d1e]/10 to-transparent" />
        </div>

        {/* Hero text content */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center sm:text-left relative z-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-blue-950/80 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-sky-400 shadow-sm">
            <MessageSquareText className="h-3.5 w-3.5 text-sky-400" />
            Contact
          </div>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed">
            Share your project capacity, location, and timeline. We&apos;ll respond with next steps.
          </p>
        </div>
      </section>

      {/* ─── FORM SECTION (CREAM) ──────────────────────────────────────── */}
      <section className="relative z-0 py-16 sm:py-24 overflow-hidden" style={{ background: '#f5ece5' }}>

        {/* ── HIGH-QUALITY SOLAR+BESS PHOTO BACKGROUND ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Solar farm photo — Unsplash by Markus Spiske */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1800&q=85&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden="true"
          />
          {/* Minimal cream tint — just a hint */}
          <div className="absolute inset-0 bg-[#f5ece5]/15" />
          {/* Left fade for card legibility only */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        </div>

        {/* Cards grid */}
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-3 items-start relative z-20">

          {/* Inquiry Form Card */}
          <ScrollReveal delay={60} className="md:col-span-2">
            <div className="rounded-3xl bg-[#08152b]/60 border border-sky-400/30 p-6 sm:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl text-white ring-1 ring-white/10">
              <div className="text-xl sm:text-2xl font-bold text-white">
                Inquiry form
              </div>
              <div className="mt-1.5 text-sm sm:text-base text-white/80 mb-8">
                Fill in your details below and we&apos;ll get back to you within 24 hours.
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Direct Contact Card */}
          <ScrollReveal delay={160}>
            <div className="rounded-3xl bg-[#08152b]/60 border border-sky-400/30 p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl text-white space-y-6 ring-1 ring-white/10">
              <div className="text-xl font-bold text-white border-b border-sky-500/30 pb-4">
                Direct contact
              </div>

              <div className="space-y-6 text-sm">
                <div className="group">
                  <div className="flex items-center gap-2.5 font-semibold text-sky-300 text-xs uppercase tracking-wider mb-1.5">
                    <Mail className="w-4 h-4 text-sky-400" />
                    Email
                  </div>
                  <a
                    className="text-base font-bold text-white hover:text-sky-300 underline underline-offset-4 transition-colors block truncate"
                    href={`mailto:${site.contact.email}`}
                  >
                    {site.contact.email}
                  </a>
                </div>

                <div className="group">
                  <div className="flex items-center gap-2.5 font-semibold text-sky-300 text-xs uppercase tracking-wider mb-1.5">
                    <PhoneCall className="w-4 h-4 text-sky-400" />
                    Phone
                  </div>
                  <a
                    className="text-base font-bold text-white hover:text-sky-300 underline underline-offset-4 transition-colors inline-flex items-center gap-2"
                    href={`tel:${site.contact.phone}`}
                  >
                    {site.contact.phone}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-500/30 text-xs text-white/70 leading-relaxed">
                Our engineering team is available Monday through Saturday to assist with turnkey EPC and advisory inquiries.
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
