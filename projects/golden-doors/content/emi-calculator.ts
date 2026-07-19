import type { EmiCalculatorContent } from "@/lib/content/types";

/**
 * Home-loan EMI tool — defaults tuned to Hyderabad premium inventory band
 * (Prestige ~₹93 L → Godrej ~₹2 Cr+).
 */
export const goldenDoorsEmiCalculatorContent: EmiCalculatorContent = {
  heading: {
    eyebrow: "Home loan tools",
    title: "Plan your monthly EMI",
    lead: "Slide the numbers for property price, down payment, rate, and tenure — see your estimated EMI update instantly.",
  },
  defaults: {
    propertyPrice: 1_50_00_000,
    downPaymentPercent: 20,
    interestRatePercent: 8.5,
    tenureYears: 20,
  },
  ranges: {
    propertyPrice: { min: 50_00_000, max: 10_00_00_000, step: 1_00_000 },
    downPaymentPercent: { min: 10, max: 50, step: 1 },
    interestRatePercent: { min: 6.5, max: 12, step: 0.05 },
    tenureYears: { min: 5, max: 30, step: 1 },
  },
  ctaLabel: "Talk to a loan desk",
  disclaimer:
    "Indicative only. Actual EMI, tenure, and rates depend on your bank, credit profile, and sanction terms. Golden Doors can connect you with lending partners on request.",
};
