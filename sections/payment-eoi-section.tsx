import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import {
  EOI_PROGRAM,
  LOYALTY_CREDIT_NOTE,
  PAYMENT_PLAN,
} from "@/constants/golden-grove-project";

export function PaymentEoiSection() {
  return (
    <section
      id="payments"
      aria-labelledby="payments-heading"
      className="scroll-mt-28 border-t border-accent-bronze/10 bg-soft-stone/45 pb-section-y pt-section-y"
    >
      <Container>
        <RevealAnimation className="mb-gallery-gap">
          <SectionHeading
            id="payments-heading"
            eyebrow="Capital choreography"
            title="EOI windows · milestone payments · loyalty credits"
            lead="Sequences mirror Prestige-approved worksheets — nothing here substitutes countersigned agreements or escrow routing."
          />
        </RevealAnimation>

        <div className="grid gap-loft lg:grid-cols-2">
          <RevealAnimation className="rounded-[28px] border border-accent-bronze/18 bg-fog-soft/95 p-loft shadow-soft backdrop-blur-sm">
            <p className="font-sans text-micro uppercase tracking-[0.42em] text-prestige-navy">
              {EOI_PROGRAM.title}
            </p>
            <p className="mt-4 font-sans text-body-relaxed text-muted">{EOI_PROGRAM.rateHint}</p>
            <p className="mt-3 font-sans text-body-relaxed text-muted">{EOI_PROGRAM.opened}</p>
            <p className="mt-3 font-semibold text-foreground">{EOI_PROGRAM.deposit}</p>
            <ol className="mt-6 space-y-4 font-sans text-body-relaxed text-muted">
              {EOI_PROGRAM.steps.map((step, idx) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display text-xl text-accent-gold">{idx + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </RevealAnimation>

          <RevealAnimation className="flex flex-col gap-loft">
            <div className="rounded-[28px] border border-accent-gold/35 bg-gradient-to-br from-[#f8f2e4] via-[#eee4cf] to-[#dfd2b4] p-loft shadow-subtleGlow">
              <p className="font-sans text-micro uppercase tracking-[0.42em] text-forest-strong/72">
                {PAYMENT_PLAN.title}
              </p>
              <p className="mt-5 font-display text-fluid-section text-forest-strong">{PAYMENT_PLAN.rhythm}</p>
              <p className="mt-4 font-sans text-body-relaxed text-forest-strong/78">{PAYMENT_PLAN.detail}</p>
            </div>

            <div className="rounded-[28px] border border-prestige-navy/18 bg-white/85 p-loft shadow-soft">
              <p className="font-sans text-micro uppercase tracking-[0.38em] text-prestige-navy">
                {LOYALTY_CREDIT_NOTE.title}
              </p>
              <p className="mt-4 font-sans text-body-relaxed text-muted">{LOYALTY_CREDIT_NOTE.body}</p>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation className="mt-loft flex flex-wrap gap-relax">
          <OpenConciergeButton className="min-h-touch uppercase tracking-[0.26em]">
            Speak with finance desk
          </OpenConciergeButton>
        </RevealAnimation>
      </Container>
    </section>
  );
}
