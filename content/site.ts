const DEFAULT_SITE_URL = "https://example.com";

/** Absolute site URL (no trailing slash). Invalid env values fall back so metadata/sitemap never throw. */
function resolveSiteUrl(): string {
  const raw =
    typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL?.trim()
      ? process.env.NEXT_PUBLIC_SITE_URL.trim()
      : DEFAULT_SITE_URL;
  try {
    const u = new URL(raw);
    return `${u.origin}${u.pathname.replace(/\/$/, "") || ""}`;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const site = {
  name: "GNE",
  legalName: "Green Next Energy Infra Pvt. Ltd",
  tagline: "Powering the Future with Solar, BESS & Hydrogen.",
  description:
    "Engineering-led renewable energy solutions across Solar EPC, BESS/EMS, Hydrogen, and solar manufacturing—built for performance, reliability, and scalability.",
  url: resolveSiteUrl(),
  location: {
    country: "IN",
    region: "India"
  },
  contact: {
    email: "info@gneinfra.com",
    phone: "+91 8448282440"
  }
} as const;

export type Site = typeof site;

