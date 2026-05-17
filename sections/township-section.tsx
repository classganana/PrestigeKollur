import { GlassCard } from "@/components/ui/glass-card";
import { Container, RevealAnimation, SectionHeading } from "@/components/ui";

const pillars = [
  {
    heading: "Hillside commons",
    copy: "Meadows, orchard walks, and gathering clearings composed with agrarian choreography—informed by commons frames from the briefing.",
    detail: "~12 acres exploratory buffer",
  },
  {
    heading: "Sheltered arrival",
    copy: "Lantern sequencing, berm layers, hedgerows—arrival choreography instead of transactional gates.",
    detail: "Lighting + landscape studies TBD",
  },
  {
    heading: "Residences in repose",
    copy: "Sun paths, breezeways, and interstitial gardens narrated alongside residence vignettes.",
    detail: "Unit mix undisclosed · Phase II",
  },
] as const;

/** Master intent — text-led pillars; imagery lives in gallery / floor-plan bands to avoid duplicate voucher crops. */

export function TownshipSection() {
  return (
    <section id="township" aria-labelledby="township-heading" className="scroll-mt-28">
      <Container>
        <RevealAnimation className="mb-gallery-gap lg:mb-orbit">
          <SectionHeading
            id="township-heading"
            eyebrow="Master intent"
            title="Townships should feel landscaped, never plotted."
            lead="Three postures for how the precinct reads—kept typographic so we are not recycling brochure plates or floor excerpts you already browse in the dedicated bands above."
          />
        </RevealAnimation>

        <div className="grid gap-gallery-gap lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <RevealAnimation key={pillar.heading}>
              <GlassCard className="flex h-full flex-col border-accent-bronze/25 shadow-soft">
                <p className="font-sans text-micro uppercase tracking-[0.42em] text-accent-olive/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-pillar font-display text-fluid-display leading-snug-soft text-foreground">
                  {pillar.heading}
                </p>
                <p className="mt-4 font-sans text-body-relaxed text-muted">{pillar.copy}</p>
                <p className="mt-auto pt-ribbon font-sans text-micro uppercase tracking-[0.35em] text-accent-olive/75">
                  {pillar.detail}
                </p>
              </GlassCard>
            </RevealAnimation>
          ))}
        </div>
      </Container>
    </section>
  );
}
