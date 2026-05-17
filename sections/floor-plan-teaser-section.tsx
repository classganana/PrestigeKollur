import {
  Container,
  RevealAnimation,
  SectionHeading,
} from "@/components/ui";
import {
  FloorPlanBlurredHitTile,
  FloorPlanConciergeLeadRow,
} from "@/components/floor-plan/floor-plan-teaser-client";
import { OFFICIAL_SITE_MEDIA_ATTRIBUTION } from "@/constants/brochure-media";
import {
  FLOOR_PLAN_TEASER_SECTION_ID,
  FLOOR_PLAN_TEASER_TILES,
} from "@/constants/floor-plan-teaser";

export function FloorPlanTeaserSection() {
  return (
    <section
      id={FLOOR_PLAN_TEASER_SECTION_ID}
      aria-labelledby="floor-plans-heading"
      className="scroll-mt-28 border-t border-accent-bronze/10 bg-gradient-to-b from-ivory/[0.92] via-soft-stone/55 to-twilight-soft/40 pb-section-y pt-section-y"
    >
      <Container>
        <RevealAnimation className="mb-loft lg:mb-gallery-gap">
          <SectionHeading
            id="floor-plans-heading"
            eyebrow="Blueprint vault"
            title="Floor plans are real—we blur them on purpose."
            lead={
              <>
                High-resolution CAD-ready plates ship privately after concierge routing (choose{" "}
                <strong className="font-medium text-prestige-navy">Floor plans</strong> in the overlay form).
                Below is silhouette-only—tap any card or button to summon intake without snapping to the footer.
              </>
            }
          />
        </RevealAnimation>

        <RevealAnimation className="mb-gallery-gap">
          <FloorPlanConciergeLeadRow />
          <p className="mt-pillar max-w-[62ch] font-sans text-[0.6025rem] uppercase leading-relaxed tracking-[0.26em] text-muted/88 sm:mt-loft">
            {OFFICIAL_SITE_MEDIA_ATTRIBUTION}
          </p>
        </RevealAnimation>

        <div className="grid gap-gallery-gap sm:grid-cols-2">
          {FLOOR_PLAN_TEASER_TILES.map((tile) => (
            <RevealAnimation key={tile.src}>
              <FloorPlanBlurredHitTile tile={tile} />
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation className="mt-gallery-gap lg:mt-orbit">
          <div className="relative overflow-hidden rounded-[clamp(26px,_3.4vw,_36px)] border border-accent-bronze/[0.2] bg-gradient-to-br from-prestige-navy/[0.06] via-white/75 to-soft-stone/80 px-loft py-loft shadow-soft sm:px-orbit sm:py-orbit">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-[18%] top-[-40%] h-[120%] w-[62%] rounded-full bg-accent-gold/[0.07] blur-[80px]"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="max-w-xl space-y-4">
                <p className="font-display text-[clamp(1.28rem,4.2vw,1.72rem)] leading-snug tracking-[-0.015em] text-prestige-navy">
                  Still scrolling? Same concierge rail unlocks CAD-grade clarity—dimensions, ducts, Vaastu notes once Prestige workflow clears your file.
                </p>
                <p className="font-sans text-body-relaxed text-muted">
                  Prefer WhatsApp—name your typology (2 / 3 / 4 BHK) so routing lands with the blueprint desk first.
                </p>
                <p className="font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.34em] text-accent-olive/85">
                  Tip · Select “Floor plans” inside the discreet form—we queue CAD-ready packs once IDs align with Prestige workflow.
                </p>
              </div>

              <FloorPlanConciergeLeadRow className="lg:max-w-none lg:flex-col lg:items-stretch xl:flex-row xl:flex-wrap xl:items-center" />
            </div>
          </div>
        </RevealAnimation>
      </Container>
    </section>
  );
}
