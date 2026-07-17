import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import { site } from "@/content/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function metadataBaseUrl(): URL {
  try {
    return new URL(site.url);
  } catch {
    return new URL("https://example.com");
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: {
    default: `${site.name} | Solar EPC, BESS/EMS & Hydrogen`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${site.name} | Solar EPC, BESS/EMS & Hydrogen`,
    description: site.description,
    siteName: site.name
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body className="font-inter">
        <SmoothScrollProvider>
            <Suspense fallback={null}>
              <LoadingOverlay />
            </Suspense>
            <Header />

            {/* GLOBAL GLASSY CORPORATE BACKGROUND */}
            <div
              className="fixed inset-0 z-[-1] overflow-hidden transition-colors duration-500"
              style={{
                background: `
    radial-gradient(circle at 15% 20%,
      rgba(69,82,62,0.20),
      transparent 40%),

    radial-gradient(circle at 85% 75%,
      rgba(173,93,80,0.12),
      transparent 40%),

    radial-gradient(ellipse at center,
      rgba(255,255,255,0.30),
      transparent 65%),

    linear-gradient(
      160deg,
      #f5ece5 0%,
      #ede4dc 40%,
      #e8e2da 70%,
      #f0ebe4 100%
    )`
              }}
            >

              {/* Subtle Noise/Mesh */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}
              />
            </div>

            <main className="min-h-[70vh] relative z-0">{children}</main>
            <Footer />
          </SmoothScrollProvider>
      </body>
    </html>
  );
}

