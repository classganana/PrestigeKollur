import type { Config } from "tailwindcss";

/** Tailwind opacity modifiers require space-separated RGB channels. */
function rgbVar(name: string) {
  return `rgb(var(--color-${name}-rgb) / <alpha-value>)`;
}

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
        surface: rgbVar("surface"),
        foreground: rgbVar("foreground"),
        muted: rgbVar("muted"),
        forest: {
          DEFAULT: rgbVar("shell"),
          strong: rgbVar("shell-strong"),
        },
        ivory: rgbVar("ivory"),
        "soft-stone": rgbVar("soft-stone"),
        "soft-stone-glow": rgbVar("soft-stone-glow"),
        fog: {
          DEFAULT: rgbVar("fog"),
          soft: rgbVar("fog-soft"),
          strong: "var(--color-fog-strong)",
        },
        accent: {
          gold: rgbVar("accent-gold"),
          champagne: rgbVar("accent-champagne"),
          bronze: rgbVar("accent-bronze"),
          olive: rgbVar("accent-olive"),
        },
        brand: {
          primary: rgbVar("brand-primary"),
          muted: rgbVar("brand-muted"),
        },
        prestige: {
          navy: rgbVar("brand-primary"),
          mist: rgbVar("brand-muted"),
        },
        inverse: {
          DEFAULT: rgbVar("inverse"),
          muted: rgbVar("inverse-muted"),
          subtle: rgbVar("inverse-subtle"),
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
        soft: "var(--shadow-soft)",
        elevated: "var(--shadow-elevated)",
        subtleGlow: "var(--shadow-subtle-glow)",
        modal: "var(--shadow-modal)",
      },
      backgroundImage: {
        "mist-radial": "var(--gradient-mist-radial)",
        "twilight-soft": "var(--gradient-twilight-soft)",
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
