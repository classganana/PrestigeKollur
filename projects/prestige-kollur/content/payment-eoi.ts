import type { PaymentEoiContent } from "@/lib/content/types";
import {
  EOI_PROGRAM,
  LOYALTY_CREDIT_NOTE,
  PAYMENT_PLAN,
} from "@/projects/prestige-kollur/project-facts";

export const prestigeKollurPaymentEoiContent: PaymentEoiContent = {
  heading: {
    eyebrow: "Capital choreography",
    title: "EOI windows · milestone payments · loyalty credits",
    lead: "Sequences mirror Prestige-approved worksheets — nothing here substitutes countersigned agreements or escrow routing.",
  },
  eoiProgram: EOI_PROGRAM,
  paymentPlan: PAYMENT_PLAN,
  loyaltyCredit: LOYALTY_CREDIT_NOTE,
  conciergeCtaLabel: "Speak with finance desk",
};
