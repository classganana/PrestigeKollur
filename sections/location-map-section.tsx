import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import type { LocationContent } from "@/lib/content/types";

export function LocationMapSection({ content }: { content: LocationContent }) {
  const { heading, facts, postalLabel, connectivityLabel, conciergeCtaLabel } = content;
  const mapSrc = `https://maps.google.com/maps?q=${facts.lat},${facts.lng}&z=13&output=embed`;

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="scroll-mt-28 border-t border-accent-bronze/10 bg-soft-stone/35 pb-section-y pt-section-y"
    >
      <Container>
        <RevealAnimation className="mb-gallery-gap">
          <SectionHeading
            id="location-heading"
            eyebrow={heading.eyebrow}
            title={heading.title}
            lead={heading.lead}
          />
        </RevealAnimation>

        <div className="grid gap-loft lg:grid-cols-12">
          <RevealAnimation className="lg:col-span-5">
            <div className="space-y-6 rounded-[28px] border border-accent-bronze/16 bg-fog-soft/95 p-loft shadow-soft backdrop-blur-sm">
              <div>
                <p className="font-sans text-micro uppercase tracking-[0.38em] text-accent-olive">
                  {postalLabel}
                </p>
                <ul className="mt-4 space-y-3 font-sans text-body-relaxed text-muted">
                  {facts.addressLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-sans text-micro uppercase tracking-[0.38em] text-accent-olive">
                  {connectivityLabel}
                </p>
                <ul className="mt-4 space-y-4 font-sans text-body-relaxed text-muted">
                  {facts.proximity.map((node) => (
                    <li key={node.label}>
                      <span className="font-semibold text-foreground">{node.label}</span>
                      <span className="mt-1 block text-muted">{node.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <OpenConciergeButton className="min-h-touch uppercase tracking-[0.26em]">
                {conciergeCtaLabel}
              </OpenConciergeButton>
            </div>
          </RevealAnimation>

          <RevealAnimation className="lg:col-span-7">
            <div className="overflow-hidden rounded-[32px] border border-accent-bronze/18 shadow-elevated">
              <div className="aspect-[4/3] w-full bg-soft-stone lg:aspect-auto lg:min-h-[420px]">
                <iframe
                  title={facts.mapEmbedTitle}
                  src={mapSrc}
                  className="h-full min-h-[320px] w-full border-0 lg:min-h-[480px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="border-t border-accent-bronze/12 bg-white/85 px-loft py-4 font-sans text-[0.65rem] uppercase tracking-[0.26em] text-muted">
                {facts.mapCaption}
              </p>
            </div>
          </RevealAnimation>
        </div>
      </Container>
    </section>
  );
}
