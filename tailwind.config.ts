import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        surface: "#f9f7f3",
        foreground: "#1f2521",
        /** Solid neutral for paragraphs — avoids illegibly translucent rgba on textured cream backgrounds. */
        muted: "#4d554d",
        forest: {
          DEFAULT: "#1d2a23",
          strong: "#131b17",
        },
        ivory: "#f8f6f1",
        "soft-stone": "#e6dfd2",
        "soft-stone-glow": "#efe8dc",
        fog: {
          DEFAULT: "#f4efe6",
          soft: "#fcf9f5",
          strong: "rgba(250,247,240,0.92)",
        },
        accent: {
          gold: "#c9ae78",
          champagne: "#ddcfad",
          bronze: "#8f7a53",
          olive: "#6c7562",
        },
        /** Deep navy aligned with Prestige-adjacent luxury collateral; pairs with existing champagne / gold accents. */
        prestige: {
          navy: "#152c48",
          mist: "#e9eef6",
        },
        /**
         * Copy on forest / charcoal glass (footer, concierge shells).
         * Keeps WCAG-minded contrast vs forest-strong without stacking fragile opacity utilities.
         */
        inverse: {
          DEFAULT: "#faf7ef",
          muted: "#ebe4d6",
          subtle: "#c9bfb0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        micro: ["0.65rem", { lineHeight: "1.85", letterSpacing: "0.38em" }],
        "body-relaxed": ["1.065rem", { lineHeight: "1.74" }],
        "body-sm": ["0.75rem", { lineHeight: "1.62", letterSpacing: "0.18em" }],
        "fluid-hero": ["clamp(3.05rem,_10vw,_5.95rem)", { lineHeight: "1.02" }],
        "fluid-display": ["clamp(2.25rem,_5.5vw,_3.85rem)", { lineHeight: "1.06" }],
        "fluid-section": ["clamp(1.85rem,_4.2vw,_3.1rem)", { lineHeight: "1.1" }],
      },
      spacing: {
        "section-y": "clamp(4rem,10vw,7.5rem)",
        touch: "48px",
        "text-y": "0.875rem",
        relax: "1.125rem",
        ribbon: "0.875rem",
        pillar: "1.25rem",
        loft: "2.75rem",
        orbit: "4.75rem",
        "gallery-gap": "1.125rem",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      lineHeight: {
        "tight-soft": "1.05",
        "snug-soft": "1.2",
      },
      maxWidth: {
        measure: "38rem",
      },
      boxShadow: {
        soft: "0px 38px 90px rgba(42,52,43,0.08)",
        elevated: "0px 54px 120px rgba(32,43,37,0.14)",
        subtleGlow:
          "0px 52px 98px rgba(212,184,138,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
      },
      backgroundImage: {
        "mist-radial":
          "radial-gradient(ellipse at 82% -10%, rgba(239,229,207,0.55), transparent 62%)",
        "twilight-soft":
          "linear-gradient(180deg, rgba(250,246,238,1) 0%, rgba(234,229,217,1) 100%)",
      },
      backdropBlur: {
        editorial: "18px",
      },
      keyframes: {
        veil: {
          "0%": { opacity: "0.45" },
          "100%": { opacity: "0.85" },
        },
      },
      animation: {
        veil: "veil 12s linear infinite alternate",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
