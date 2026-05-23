import Link from "next/link";

import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import type { OverviewContent } from "@/lib/content/types";
import { cn } from "@/lib/cn";

/** Metropolitan overview — stronger metric hierarchy for Godrej (project-scoped via variant). */
export function OverviewUrbanSection({ content }: { content: OverviewContent }) {
  const { heading, jvLine, positioning, highlightStats, reraStatus, signatureThesisLabel, keyUsps } =
    content;

  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      data-overview-variant="urban"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/12 bg-surface pb-section-y pt-section-y sm:scroll-mt-28"
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
                  className="rounded-3xl border border-brand-primary/18 bg-gradient-to-br from-brand-muted via-fog-soft to-ivory p-loft shadow-soft"
                >
                  <p className="font-display text-[clamp(2.15rem,6vw,2.85rem)] font-semibold tracking-tight text-foreground">
                    {stat.figure}
                    {stat.suffix != null ? (
                      <span className="ml-1 text-[0.58em] font-semibold uppercase tracking-[0.18em] text-foreground">
                        {stat.suffix}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-2 font-sans text-micro font-semibold uppercase tracking-[0.34em] text-accent-bronze">
                    {stat.label}
                  </p>
                  <p className="mt-3 font-sans text-body-relaxed font-medium text-muted">{stat.note}</p>
                </article>
              ))}
            </div>
          </RevealAnimation>

          <RevealAnimation className="flex flex-col gap-loft lg:col-span-5">
            <div className="rounded-[26px] border border-accent-champagne/28 bg-forest-strong px-loft py-loft text-inverse shadow-elevated">
              <p className="font-sans text-micro uppercase tracking-[0.42em] text-accent-champagne">
                {reraStatus.headline}
              </p>
              <p className="mt-3 font-sans text-[0.72rem] uppercase tracking-[0.32em] text-inverse-subtle">
                {reraStatus.lastUpdatedLabel}
              </p>
              <ul className="mt-6 space-y-4 font-sans text-[0.9325rem] font-medium leading-relaxed text-inverse-muted">
                {reraStatus.bullets.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-champagne" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={reraStatus.verifyHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-8 inline-flex min-h-[2.875rem] w-full items-center justify-center rounded-full",
                  "border border-accent-champagne/45 px-5 py-3 text-center",
                  "font-sans text-[0.625rem] font-semibold uppercase leading-none tracking-[0.2em] text-accent-champagne",
                  "whitespace-nowrap transition-colors hover:bg-accent-champagne/12",
                  "sm:w-auto sm:px-7",
                )}
              >
                {reraStatus.verifyLabel}
              </Link>
            </div>

            <div className="rounded-[26px] border border-accent-bronze/18 bg-fog-soft p-loft">
              <p className="font-sans text-micro font-semibold uppercase tracking-[0.34em] text-accent-bronze">
                {signatureThesisLabel}
              </p>
              <ul className="mt-5 space-y-4 font-sans text-body-relaxed font-medium text-muted">
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
