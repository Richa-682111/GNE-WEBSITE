import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#16A34A",
          emerald: "#10B981",
          blue: "#0B5FFF",
          solar: "#FFB800"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(22,163,74,.28), 0 12px 40px rgba(22,163,74,.2)"
      }
    }
  },
  plugins: [typography]
} satisfies Config;

