/** Standard reducing-balance home-loan EMI helpers (monthly compounding). */

export type EmiInputs = {
  /** Loan principal in rupees. */
  principal: number;
  /** Annual interest rate, percent (e.g. 8.5). */
  annualRatePercent: number;
  /** Tenure in whole years. */
  tenureYears: number;
};

export type EmiResult = {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  months: number;
};

export function calculateEmi({
  principal,
  annualRatePercent,
  tenureYears,
}: EmiInputs): EmiResult {
  const months = Math.max(1, Math.round(tenureYears * 12));
  const p = Math.max(0, principal);

  if (p === 0) {
    return { emi: 0, totalPayment: 0, totalInterest: 0, months };
  }

  const monthlyRate = annualRatePercent / 12 / 100;

  if (monthlyRate === 0) {
    const emi = p / months;
    return { emi, totalPayment: p, totalInterest: 0, months };
  }

  const factor = Math.pow(1 + monthlyRate, months);
  const emi = (p * monthlyRate * factor) / (factor - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - p;

  return { emi, totalPayment, totalInterest, months };
}

/** Compact Indian currency: ₹1.25 Cr · ₹93.5 L · ₹12,500 */
export function formatInrCompact(value: number): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (abs >= 1_00_00_000) {
    const cr = abs / 1_00_00_000;
    return `${sign}₹${trimTrailingZeros(cr.toFixed(2))} Cr`;
  }

  if (abs >= 1_00_000) {
    const lakh = abs / 1_00_000;
    const decimals = lakh >= 100 ? 1 : 2;
    return `${sign}₹${trimTrailingZeros(lakh.toFixed(decimals))} L`;
  }

  return `${sign}₹${Math.round(abs).toLocaleString("en-IN")}`;
}

/** Full Indian grouping for EMI-sized amounts. */
export function formatInr(value: number): string {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function trimTrailingZeros(n: string): string {
  return n.replace(/\.?0+$/, "");
}
