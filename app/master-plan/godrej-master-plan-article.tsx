import Image from "next/image";

import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { Container, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/cn";
import { resolveSite } from "@/lib/project/resolve-project";
import { godrejKukatpallyMasterPlanPage } from "@/projects/godrej-kukatpally/content/master-plan-page";

const proseMuted = "font-sans text-body-relaxed text-muted";

/** Godrej Kukatpally — urban master plan documentation (isolated from Prestige township page). */
export function GodrejMasterPlanArticle() {
  const site = resolveSite();
  const page = godrejKukatpallyMasterPlanPage;

  return (
    <article className="border-t border-accent-bronze/10 bg-surface pb-section-y pt-[clamp(6.75rem,min(22vw,8.75rem),8.75rem)]">
      <Container>
        <div className="mb-gallery-gap flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb">
            <SecondaryButton href="/" prefetch={false}>
              ← Back to home
            </SecondaryButton>
          </nav>
          <p className="font-sans text-micro uppercase tracking-[0.36em] text-muted">{site.name}</p>
        </div>

        <header className="mb-orbit space-y-gallery-gap">
          <SectionHeading
            eyebrow={page.eyebrow}
            title={page.title}
            lead={<span className={proseMuted}>{page.lead}</span>}
          />
        </header>

        <figure className="mb-gallery-gap overflow-hidden rounded-[clamp(22px,_3vw,34px)] border border-accent-bronze/18 bg-white/85 shadow-soft">
          <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
            <Image
              alt={page.figure.alt}
              className="object-contain bg-shell/20 object-center"
              fill
              priority
              decoding="sync"
              quality={90}
              sizes="(max-width: 1180px) 100vw, 1180px"
              src={page.figure.src}
            />
          </div>
          <figcaption className="border-t border-accent-bronze/12 px-loft py-4 font-sans text-micro uppercase tracking-[0.32em] text-muted">
            {page.figure.caption}
          </figcaption>
        </figure>

        <section aria-labelledby="godrej-floor-plates-heading" className="mb-gallery-gap">
          <h2
            id="godrej-floor-plates-heading"
            className="font-display text-[clamp(1.35rem,min(4.5vw,1.74rem),1.74rem)] text-foreground"
          >
            Indicative floor plates
          </h2>
          <p className={cn(proseMuted, "mt-4 max-w-3xl")}>
            Premium 3 & 4 BHK configurations — request CAD-ready packs via concierge for final
            dimensions and Vaastu-facing options.
          </p>
          <div className="mt-8 grid gap-gallery-gap sm:grid-cols-2">
            {page.floorPlans.map((plate) => (
              <figure
                key={plate.src}
                className="overflow-hidden rounded-[22px] border border-accent-bronze/14 bg-white/90 shadow-soft"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    alt={plate.alt}
                    className="object-contain bg-fog-soft/80 object-center p-4"
                    fill
                    decoding="async"
                    loading="lazy"
                    quality={86}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    src={plate.src}
                  />
                </div>
                <figcaption className="border-t border-accent-bronze/10 px-loft py-3 font-sans text-micro uppercase tracking-[0.28em] text-muted">
                  {plate.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <p className={cn(proseMuted, "mb-orbit max-w-3xl text-[0.8125rem]")}>{page.attribution}</p>

        <div className="flex flex-wrap gap-4">
          <OpenConciergeButton variant="primary">Request master plan pack</OpenConciergeButton>
        </div>
      </Container>
    </article>
  );
}
