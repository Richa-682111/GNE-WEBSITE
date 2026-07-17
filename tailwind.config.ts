import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#16A34A",
          emerald: "#10B981",
          blue: "#0B5FFF",
          solar: "#FFD54A",
          hydrogen: "#3BB7FF",
          bess: "#00E676"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(22,163,74,.28), 0 12px 40px rgba(22,163,74,.2)",
        solarGlow: "0 0 25px rgba(255,213,74,0.18)",
        hydrogenGlow: "0 0 25px rgba(59,183,255,0.18)",
        bessGlow: "0 0 25px rgba(0,230,118,0.18)",
        glassGlow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        premiumGlow: "0 0 30px rgba(16,185,129,0.15)"
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 20s linear infinite"
      }
    }
  },
  plugins: [typography]
} satisfies Config;

