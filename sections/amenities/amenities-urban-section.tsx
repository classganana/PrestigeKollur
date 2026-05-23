"use client";

import Image from "next/image";

import { Container, RevealAnimation } from "@/components/ui";
import type { AmenitiesContent } from "@/lib/content/types";
import { AMENITY_ICON_MAP } from "@/sections/amenities/amenity-icon-map";
import { cn } from "@/lib/cn";

/** Metropolitan amenities — lifestyle pillars, urban aspiration, architectural restraint. */
export function AmenitiesUrbanSection({ content }: { content: AmenitiesContent }) {
  const {
    mediaAttribution,
    ribbon,
    heroBand,
    statsBand,
    lifestylePillars,
    experienceQuote,
    footerNote,
  } = content;

  const pillars = lifestylePillars ?? [];

  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      data-amenities-variant="urban"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/14 bg-surface sm:scroll-mt-28"
    >
      <Container className="pb-section-y pt-[clamp(2.75rem,6.5vw,4rem)]">
        <RevealAnimation>
          <header className="max-w-[44rem]">
            <p className="font-sans text-micro uppercase tracking-[0.4em] text-accent-bronze">
              {heroBand.eyebrow}
            </p>
            <h2
              id="amenities-heading"
              className="mt-4 font-display text-[clamp(1.95rem,4.5vw,2.85rem)] font-semibold leading-[1.06] tracking-[-0.024em] text-foreground"
            >
              {heroBand.title}
            </h2>
            <p className="mt-4 max-w-[50ch] font-sans text-[1.02rem] font-medium leading-[1.7] text-muted sm:text-[1.05rem]">
              {heroBand.lead}
            </p>
          </header>
        </RevealAnimation>

        {statsBand.length > 0 ? (
          <RevealAnimation className="mt-10 overflow-hidden rounded-[clamp(20px,2.8vw,28px)] border border-accent-bronze/16 bg-forest-strong shadow-elevated">
            <ul
              role="list"
              className="grid divide-y divide-fog-soft/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            >
              {statsBand.map((stat) => (
                <li key={stat.label} className="flex flex-col gap-1.5 px-loft py-6 sm:py-7">
                  <span className="font-display text-[clamp(1.85rem,3.8vw,2.55rem)] font-semibold tabular-nums tracking-[-0.03em] text-inverse">
                    {stat.figure}
                    {stat.suffix != null ? (
                      <span className="ml-1 text-[0.5em] font-medium text-inverse-muted">
                        {stat.suffix}
                      </span>
                    ) : null}
                  </span>
                  <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-accent-champagne">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </RevealAnimation>
        ) : null}

        {pillars.length > 0 ? (
          <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
            {pillars.map((pillar, index) => {
              const Icon = AMENITY_ICON_MAP[pillar.icon];

              return (
                <RevealAnimation key={pillar.title}>
                  <article
                    className={cn(
                      "flex h-full flex-col rounded-[clamp(20px,2.6vw,26px)] border p-loft",
                      index === 0
                        ? "border-accent-champagne/24 bg-ivory shadow-soft ring-1 ring-accent-champagne/12"
                        : "border-accent-bronze/18 bg-fog-soft shadow-soft",
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="flex size-11 shrink-0 items-center justify-center rounded-full border border-accent-bronze/16 bg-forest/6 text-foreground"
                        aria-hidden
                      >
                        <Icon className="size-5" strokeWidth={1.2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-sans text-[0.56rem] font-semibold uppercase tracking-[0.32em] text-accent-bronze">
                          {pillar.eyebrow}
                        </p>
                        <h3 className="mt-1.5 font-display text-[clamp(1.22rem,2.6vw,1.48rem)] font-semibold tracking-[-0.018em] text-foreground">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 font-sans text-[0.9375rem] font-medium leading-[1.65] text-muted">
                      {pillar.lead}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2.5 border-t border-accent-bronze/10 pt-5">
                      {pillar.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 font-sans text-[0.875rem] leading-[1.55] text-foreground"
                        >
                          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-champagne" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        ) : null}

        <RevealAnimation className="mt-12">
          <figure className="relative aspect-[21/9] overflow-hidden rounded-[clamp(22px,3vw,28px)] shadow-elevated ring-1 ring-black/[0.06] sm:aspect-[21/8]">
            <Image
              alt={ribbon.alt}
              fill
              className="object-cover object-[50%_38%] saturate-[0.92] contrast-[1.04]"
              decoding="async"
              loading="lazy"
              quality={86}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 85vw, 72vw"
              src={ribbon.src}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-strong/85 via-forest-strong/25 to-transparent" />
            <figcaption className="absolute inset-x-loft bottom-loft max-w-xl">
              <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-accent-champagne">
                {ribbon.ribbonCaption}
              </p>
              <p className="mt-2 font-display text-[clamp(1.2rem,2.8vw,1.75rem)] font-medium leading-snug text-fog-soft">
                {ribbon.figureCaption}
              </p>
            </figcaption>
          </figure>
        </RevealAnimation>

        {experienceQuote ? (
          <RevealAnimation>
            <blockquote className="mx-auto mt-10 max-w-[46ch] border-l-2 border-accent-champagne/45 pl-5">
              <p className="font-display text-[clamp(1.15rem,2.6vw,1.5rem)] font-medium leading-[1.32] tracking-[-0.015em] text-foreground">
                {experienceQuote}
              </p>
            </blockquote>
          </RevealAnimation>
        ) : null}

        <p className="mt-10 border-t border-accent-bronze/10 pt-6 font-sans text-[0.8125rem] leading-relaxed text-muted">
          {footerNote}
          <span className="mt-2 block text-[0.72rem]">{mediaAttribution}</span>
        </p>
      </Container>
    </section>
  );
}
