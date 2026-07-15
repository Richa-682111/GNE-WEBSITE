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
    <div className="bg-[#16462d] text-white min-h-screen pb-20 font-inter selection:bg-[#4ade80] selection:text-slate-950">
      <JsonLd data={jsonLd} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-white/10 overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#4ade80]/15 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[400px] rounded-full bg-teal-400/10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-[#1a4a30]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4ade80] shadow-sm">
            <MessageSquareText className="h-4 w-4 text-[#4ade80]" />
            Contact
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let’s talk
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            Share your project capacity, location, and timeline. We’ll respond with next steps.
          </p>
        </div>
      </section>

      {/* Main Content Grid (Inquiry Form Section with Contacthero Background) */}
      <section className="relative z-0 py-16 sm:py-24 overflow-hidden">
        {/* ContactForm image behind inquiry form section */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: 'url("/ContactForm.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Glassmorphic green overlay */}
        <div className="absolute inset-0 -z-10 bg-[#16462d]/5 backdrop-blur-sm" />

        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-3 items-start relative z-10">

          {/* Inquiry Form Card — Emerald Jade Glassmorphism (Span 2) */}
          <ScrollReveal delay={60} className="md:col-span-2">
            <div className="rounded-3xl bg-[#1b6b44]/85 border border-[#4ade80]/40 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl text-white">
              <div className="text-xl sm:text-2xl font-bold text-white">
                Inquiry form
              </div>
              <div className="mt-1.5 text-sm sm:text-base text-white/80 mb-8">
                Fill in your details below and we&apos;ll get back to you within 24 hours.
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Direct Contact Card — Emerald Jade Glassmorphism (Span 1) */}
          <ScrollReveal delay={160}>
            <div className="rounded-3xl bg-[#1b6b44]/85 border border-[#4ade80]/40 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl text-white space-y-6">
              <div className="text-xl font-bold text-white border-b border-emerald-500/30 pb-4">
                Direct contact
              </div>

              <div className="space-y-6 text-sm">
                <div className="group">
                  <div className="flex items-center gap-2.5 font-semibold text-emerald-300 text-xs uppercase tracking-wider mb-1.5">
                    <Mail className="w-4 h-4 text-[#4ade80]" />
                    Email
                  </div>
                  <a
                    className="text-base font-bold text-white hover:text-emerald-300 underline underline-offset-4 transition-colors block truncate"
                    href={`mailto:${site.contact.email}`}
                  >
                    {site.contact.email}
                  </a>
                </div>

                <div className="group">
                  <div className="flex items-center gap-2.5 font-semibold text-emerald-300 text-xs uppercase tracking-wider mb-1.5">
                    <PhoneCall className="w-4 h-4 text-[#4ade80]" />
                    Phone
                  </div>
                  <a
                    className="text-base font-bold text-white hover:text-emerald-300 underline underline-offset-4 transition-colors inline-flex items-center gap-2"
                    href={`tel:${site.contact.phone}`}
                  >
                    {site.contact.phone}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-500/30 text-xs text-white/70 leading-relaxed">
                Our engineering team is available Monday through Saturday to assist with turnkey EPC and advisory inquiries.
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
