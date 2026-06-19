"use client";

import { useState } from "react";
import { z } from "zod";

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
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-semibold" htmlFor="name">
            Name
          </label>
          <input
            className="h-11 rounded-xl border border-emerald-200 bg-white px-3 text-sm outline-none ring-brand-green/30 focus:ring-4 dark:border-emerald-900/60 dark:bg-slate-950"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="h-11 rounded-xl border border-emerald-200 bg-white px-3 text-sm outline-none ring-brand-green/30 focus:ring-4 dark:border-emerald-900/60 dark:bg-slate-950"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-semibold" htmlFor="phone">
            Phone (optional)
          </label>
          <input
            className="h-11 rounded-xl border border-emerald-200 bg-white px-3 text-sm outline-none ring-brand-green/30 focus:ring-4 dark:border-emerald-900/60 dark:bg-slate-950"
            id="phone"
            name="phone"
            autoComplete="tel"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-semibold" htmlFor="company">
            Company (optional)
          </label>
          <input
            className="h-11 rounded-xl border border-emerald-200 bg-white px-3 text-sm outline-none ring-brand-green/30 focus:ring-4 dark:border-emerald-900/60 dark:bg-slate-950"
            id="company"
            name="company"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="min-h-32 rounded-xl border border-emerald-200 bg-white px-3 py-2 text-sm outline-none ring-brand-green/30 focus:ring-4 dark:border-emerald-900/60 dark:bg-slate-950"
          id="message"
          name="message"
          required
        />
      </div>

      {status === "success" ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200">
          Thank you! Your inquiry has been sent successfully.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-200">
          {error || "Failed to send your message. Please try again."}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-12 items-center justify-center rounded-2xl bg-brand-green px-6 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

