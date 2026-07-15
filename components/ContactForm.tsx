"use client";

import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number.").optional().or(z.literal("")),
  company: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Please add a short message (10+ characters).")
});

type ContactInput = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("loading");

    const form = new FormData(e.currentTarget);
    const payload: ContactInput = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      company: String(form.get("company") || ""),
      message: String(form.get("message") || "")
    };

    const parsed = ContactSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data)
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Failed to submit. Please try again.");
      }
      (e.target as HTMLFormElement).reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2 text-left">
          <label className="text-sm font-semibold text-white" htmlFor="name">
            Name <span className="text-sky-400">*</span>
          </label>
          <input
            className="h-12 rounded-xl border border-slate-300 bg-white/90 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none ring-sky-500/30 transition-all focus:border-sky-600 focus:bg-white focus:ring-4 shadow-sm"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
          />
        </div>
        <div className="grid gap-2 text-left">
          <label className="text-sm font-semibold text-white" htmlFor="email">
            Email <span className="text-sky-400">*</span>
          </label>
          <input
            className="h-12 rounded-xl border border-slate-300 bg-white/90 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none ring-sky-500/30 transition-all focus:border-sky-600 focus:bg-white focus:ring-4 shadow-sm"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="grid gap-2 text-left">
          <label className="text-sm font-semibold text-white" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            className="h-12 rounded-xl border border-slate-300 bg-white/90 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none ring-sky-500/30 transition-all focus:border-sky-600 focus:bg-white focus:ring-4 shadow-sm"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="grid gap-2 text-left">
          <label className="text-sm font-semibold text-white" htmlFor="company">
            Company (optional)
          </label>
          <input
            className="h-12 rounded-xl border border-slate-300 bg-white/90 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none ring-sky-500/30 transition-all focus:border-sky-600 focus:bg-white focus:ring-4 shadow-sm"
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Your organization"
          />
        </div>
      </div>

      <div className="grid gap-2 text-left">
        <label className="text-sm font-semibold text-white" htmlFor="message">
          Message <span className="text-sky-400">*</span>
        </label>
        <textarea
          className="min-h-[140px] rounded-xl border border-slate-300 bg-white/90 p-4 text-sm text-slate-900 placeholder-slate-400 outline-none ring-sky-500/30 transition-all focus:border-sky-600 focus:bg-white focus:ring-4 shadow-sm resize-none"
          id="message"
          name="message"
          placeholder="How can we help you?"
          required
        />
      </div>

      {status === "success" ? (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Thank you! Your inquiry has been sent successfully.</span>
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-800 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>{error || "Failed to send your message. Please try again."}</span>
        </div>
      ) : null}

      <div className="pt-2 text-left">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-8 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send message</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
