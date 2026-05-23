import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import { TableShell } from "@/components/project/table-shell";
import type { PricingContent } from "@/lib/content/types";

export function PricingPlansSection({ content }: { content: PricingContent }) {
  const { heading, configurationIntro, rows, configurationRows, priceDisclaimer, conciergeCtaLabel } =
    content;

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/10 bg-twilight-soft/55 pb-section-y pt-section-y sm:scroll-mt-28"
    >
      <Container>
        <RevealAnimation className="mb-gallery-gap">
          <SectionHeading
            id="pricing-heading"
            eyebrow={heading.eyebrow}
            title={heading.title}
            lead={heading.lead}
          />
        </RevealAnimation>

        <RevealAnimation className="mb-gallery-gap">
          <TableShell>
            <thead className="bg-prestige-navy/[0.06] font-semibold uppercase tracking-[0.24em] text-[0.58rem] text-prestige-navy">
              <tr>
                <th className="px-5 py-4">Variant</th>
                <th className="px-5 py-4">Sizes</th>
                <th className="px-5 py-4">Indicative ₹</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-accent-bronze/12">
              {rows.map((row) => (
                <tr key={row.variant} className="bg-white/[0.35]">
                  <td className="px-5 py-4 font-semibold text-foreground">{row.variant}</td>
                  <td className="px-5 py-4 text-muted">{row.size}</td>
                  <td className="px-5 py-4 font-semibold text-prestige-navy">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </TableShell>
          <p className="mt-4 font-sans text-[0.65rem] uppercase tracking-[0.26em] text-muted">
            {priceDisclaimer}
          </p>
        </RevealAnimation>

        {configurationRows.length > 0 ? (
          <RevealAnimation className="mb-gallery-gap">
            <h3 className="font-display text-fluid-section text-foreground">{configurationIntro.title}</h3>
            <p className="mt-3 max-w-3xl font-sans text-body-relaxed text-muted">{configurationIntro.lead}</p>
            <div className="mt-loft">
              <TableShell>
                <thead className="bg-prestige-navy/[0.06] font-semibold uppercase tracking-[0.22em] text-[0.58rem] text-prestige-navy">
                  <tr>
                    <th className="px-5 py-4">Series</th>
                    <th className="px-5 py-4">Core layout</th>
                    <th className="px-5 py-4">Sq. ft.</th>
                    <th className="px-5 py-4">Best suited</th>
                    <th className="px-5 py-4">Highlight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accent-bronze/12">
                  {configurationRows.map((row) => (
                    <tr key={row.variant} className="bg-white/[0.35]">
                      <td className="px-5 py-4 font-semibold">{row.variant}</td>
                      <td className="px-5 py-4 text-muted">{row.beds}</td>
                      <td className="px-5 py-4 tabular-nums text-muted">{row.sizes}</td>
                      <td className="px-5 py-4 text-muted">{row.suited}</td>
                      <td className="px-5 py-4 text-muted">{row.highlight}</td>
                    </tr>
                  ))}
                </tbody>
              </TableShell>
            </div>
          </RevealAnimation>
        ) : null}

        <RevealAnimation className="flex flex-wrap gap-relax">
          <OpenConciergeButton className="min-h-touch px-loft uppercase tracking-[0.26em]">
            {conciergeCtaLabel}
          </OpenConciergeButton>
        </RevealAnimation>
      </Container>
    </section>
  );
}
