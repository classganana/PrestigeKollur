import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import type { PaymentEoiContent } from "@/lib/content/types";

export function PaymentEoiSection({ content }: { content: PaymentEoiContent }) {
  const { heading, eoiProgram, paymentPlan, loyaltyCredit, conciergeCtaLabel } = content;

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
            eyebrow={heading.eyebrow}
            title={heading.title}
            lead={heading.lead}
          />
        </RevealAnimation>

        <div className="grid gap-loft lg:grid-cols-2">
          <RevealAnimation className="rounded-[28px] border border-accent-bronze/18 bg-fog-soft/95 p-loft shadow-soft backdrop-blur-sm">
            <p className="font-sans text-micro uppercase tracking-[0.42em] text-prestige-navy">
              {eoiProgram.title}
            </p>
            <p className="mt-4 font-sans text-body-relaxed text-muted">{eoiProgram.rateHint}</p>
            <p className="mt-3 font-sans text-body-relaxed text-muted">{eoiProgram.opened}</p>
            <p className="mt-3 font-semibold text-foreground">{eoiProgram.deposit}</p>
            <ol className="mt-6 space-y-4 font-sans text-body-relaxed text-muted">
              {eoiProgram.steps.map((step, idx) => (
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
                {paymentPlan.title}
              </p>
              <p className="mt-5 font-display text-fluid-section text-forest-strong">{paymentPlan.rhythm}</p>
              <p className="mt-4 font-sans text-body-relaxed text-forest-strong/78">{paymentPlan.detail}</p>
            </div>

            <div className="rounded-[28px] border border-prestige-navy/18 bg-white/85 p-loft shadow-soft">
              <p className="font-sans text-micro uppercase tracking-[0.38em] text-prestige-navy">
                {loyaltyCredit.title}
              </p>
              <p className="mt-4 font-sans text-body-relaxed text-muted">{loyaltyCredit.body}</p>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation className="mt-loft flex flex-wrap gap-relax">
          <OpenConciergeButton className="min-h-touch uppercase tracking-[0.26em]">
            {conciergeCtaLabel}
          </OpenConciergeButton>
        </RevealAnimation>
      </Container>
    </section>
  );
}
