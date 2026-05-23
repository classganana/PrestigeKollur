import Link from "next/link";

import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import type { OverviewContent } from "@/lib/content/types";
import { OverviewUrbanSection } from "@/sections/overview/overview-urban-section";
import { cn } from "@/lib/cn";

/** Editorial overview — Prestige Kollur default (warm township intelligence shell). */
function ProjectOverviewEditorialSection({ content }: { content: OverviewContent }) {
  const { heading, jvLine, positioning, highlightStats, reraStatus, signatureThesisLabel, keyUsps } =
    content;

  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="scroll-mt-28 border-t border-accent-bronze/10 bg-surface pb-section-y pt-section-y"
    >
      <Container>
        <RevealAnimation className="mb-gallery-gap lg:mb-orbit">
          <SectionHeading
            id="overview-heading"
            eyebrow={heading.eyebrow}
            title={heading.title}
            lead={`${jvLine}. ${positioning}`}
          />
        </RevealAnimation>

        <div className="grid gap-gallery-gap lg:grid-cols-12 lg:gap-orbit">
          <RevealAnimation className="lg:col-span-7">
            <div className="grid gap-ribbon sm:grid-cols-2">
              {highlightStats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-3xl border border-prestige-navy/14 bg-gradient-to-br from-prestige-mist/65 via-fog-soft/90 to-ivory/95 p-loft shadow-soft"
                >
                  <p className="font-display text-[clamp(2.15rem,6vw,2.85rem)] font-light tracking-tight text-prestige-navy">
                    {stat.figure}
                    {stat.suffix != null ? (
                      <span className="ml-1 text-[0.58em] font-semibold uppercase tracking-[0.18em] text-prestige-navy/72">
                        {stat.suffix}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-2 font-sans text-micro uppercase tracking-[0.38em] text-muted">
                    {stat.label}
                  </p>
                  <p className="mt-3 font-sans text-body-relaxed text-muted">{stat.note}</p>
                </article>
              ))}
            </div>
          </RevealAnimation>

          <RevealAnimation className="flex flex-col gap-loft lg:col-span-5">
            <div className="rounded-[26px] border border-accent-gold/28 bg-forest-strong px-loft py-loft text-inverse shadow-elevated">
              <p className="font-sans text-micro uppercase tracking-[0.42em] text-accent-champagne">
                {reraStatus.headline}
              </p>
              <p className="mt-3 font-sans text-[0.72rem] uppercase tracking-[0.32em] text-inverse-subtle">
                {reraStatus.lastUpdatedLabel}
              </p>
              <ul className="mt-6 space-y-4 font-sans text-[0.9325rem] leading-relaxed text-inverse-muted">
                {reraStatus.bullets.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-champagne/85" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={reraStatus.verifyHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-full border border-accent-champagne/45 px-ribbon py-3",
                  "font-sans text-micro uppercase tracking-[0.34em] text-accent-champagne transition-colors hover:bg-accent-champagne/12",
                )}
              >
                {reraStatus.verifyLabel}
              </Link>
            </div>

            <div className="rounded-[26px] border border-accent-bronze/18 bg-fog-soft/90 p-loft backdrop-blur-sm">
              <p className="font-sans text-micro uppercase tracking-[0.38em] text-accent-olive">
                {signatureThesisLabel}
              </p>
              <ul className="mt-5 space-y-4 font-sans text-body-relaxed text-muted">
                {keyUsps.map((usp) => (
                  <li key={usp} className="flex gap-3">
                    <span aria-hidden className="font-semibold text-accent-gold">
                      →
                    </span>
                    <span>{usp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </Container>
    </section>
  );
}

export type OverviewSectionVariant = "editorial" | "urban";

type ProjectOverviewSectionProps = {
  content: OverviewContent;
  variant?: OverviewSectionVariant;
};

/** Overview router — editorial (Prestige) vs metropolitan urban intelligence. */
export function ProjectOverviewSection({
  content,
  variant = "editorial",
}: ProjectOverviewSectionProps) {
  if (variant === "urban") {
    return <OverviewUrbanSection content={content} />;
  }

  return <ProjectOverviewEditorialSection content={content} />;
}
