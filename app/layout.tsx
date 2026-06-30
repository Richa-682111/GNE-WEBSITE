import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import { site } from "@/content/site";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Suspense fallback={null}>
            <LoadingOverlay />
          </Suspense>
          <Header />
          
          {/* GLOBAL GLASSY CORPORATE BACKGROUND */}
          <div className="fixed inset-0 z-[-1] bg-[#f8fafc] dark:bg-[#050B14] transition-colors duration-500 overflow-hidden">
            {/* Fixed Depth Orbs with subtle animations */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-emerald-500/10 dark:bg-[#00E676]/8 rounded-full blur-[120px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-sky-500/10 dark:bg-[#3BB7FF]/8 rounded-full blur-[100px] pointer-events-none animate-[pulse_12s_ease-in-out_infinite]" />
            <div className="absolute top-[30%] right-[-20%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-amber-500/5 dark:bg-[#FFD54A]/5 rounded-full blur-[110px] pointer-events-none animate-[pulse_10s_ease-in-out_infinite_reverse]" />
            
            {/* Subtle Noise/Mesh */}
            <div 
              className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}
            />
          </div>

          <main className="min-h-[70vh] relative z-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

