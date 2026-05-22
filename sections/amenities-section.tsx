import Image from "next/image";

import {
  Baby,
  BriefcaseBusiness,
  Camera,
  Clapperboard,
  Dumbbell,
  Flower2,
  Footprints,
  Gamepad2,
  Landmark,
  Leaf,
  Music4,
  ShoppingBag,
  Sparkles,
  Trees,
  Users,
  Video,
  Volleyball,
  Waves,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import { Container, RevealAnimation } from "@/components/ui";
import type { AmenitiesContent, AmenityIconKey } from "@/lib/content/types";
import { cn } from "@/lib/cn";

const AMENITY_ICON_MAP: Record<AmenityIconKey, LucideIcon> = {
  landmark: Landmark,
  waves: Waves,
  dumbbell: Dumbbell,
  flower2: Flower2,
  baby: Baby,
  clapperboard: Clapperboard,
  gamepad2: Gamepad2,
  volleyball: Volleyball,
  footprints: Footprints,
  camera: Camera,
  video: Video,
  music4: Music4,
  shoppingBag: ShoppingBag,
  trees: Trees,
  sparkles: Sparkles,
  briefcaseBusiness: BriefcaseBusiness,
  wifi: Wifi,
  leaf: Leaf,
  users: Users,
};

export function AmenitiesSection({ content }: { content: AmenitiesContent }) {
  const {
    mediaAttribution,
    ribbon,
    heroBand,
    iconAtlas,
    statsBand,
    detailCategories,
    peerComparison,
    mosaicFrames,
    footerNote,
  } = content;
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className={cn(
        "scroll-mt-28 border-y-2 border-accent-gold/22",
        "bg-[linear-gradient(188deg,rgba(251,246,236,0.78)_0%,rgba(235,226,206,0.5)_46%,rgba(218,207,182,0.36)_100%)]",
      )}
    >
      <Container className="pb-section-y pt-[clamp(2.75rem,7vw,4rem)]">
        <RevealAnimation className="mb-gallery-gap lg:mb-orbit">
          <div
            className={cn(
              "relative isolate overflow-hidden rounded-[clamp(26px,_4vw,_42px)]",
              "border border-accent-champagne/35",
              "bg-gradient-to-b from-[#103028] via-[#0b221c] to-[#061511]",
              "shadow-[0_52px_140px_-52px_rgba(2,14,11,0.72),inset_0_1px_0_rgba(253,246,237,0.07)]",
              "ring-1 ring-inset ring-white/[0.06]",
              "px-[clamp(1.25rem,4vw,2.75rem)] py-[clamp(2rem,6vw,3.25rem)] sm:py-[clamp(2.35rem,5vw,3.75rem)]",
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_96%_72%_at_48%_-18%,rgba(214,187,138,0.16),transparent_58%)]"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/[0.35] via-transparent to-transparent"
            />

            <div className="relative z-[1] mx-auto flex max-w-[1060px] flex-col gap-[clamp(1.75rem,5vw,2.75rem)]">
              <header className="mx-auto max-w-3xl text-center">
                <p className="font-sans text-micro uppercase tracking-[0.42em] text-accent-champagne/[0.92]">
                  {heroBand.eyebrow}
                </p>

                <div
                  aria-hidden
                  className="mx-auto mt-5 h-px w-16 rounded-full bg-gradient-to-r from-accent-olive/15 via-accent-champagne/78 to-accent-olive/15 sm:w-24"
                />

                <h2
                  id="amenities-heading"
                  className="mt-7 font-display text-[clamp(1.85rem,min(5vw,2.85rem),2.85rem)] leading-[1.15] tracking-[-0.018em] text-[#faf6ee]"
                >
                  {heroBand.title}
                </h2>

                <p className="mx-auto mt-5 max-w-[52ch] font-sans text-[0.9275rem] leading-[1.78] tracking-[0.012em] text-fog-soft/[0.82]">
                  {heroBand.lead}
                  <span className="mt-3 block text-[0.8125rem] leading-relaxed text-fog-soft/62">
                    {mediaAttribution}
                  </span>
                </p>
              </header>

              <ul
                className={cn(
                  "grid list-none gap-[0.65rem] sm:gap-4",
                  "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
                )}
              >
                {iconAtlas.map(({ title, icon }) => {
                  const Icon = AMENITY_ICON_MAP[icon];

                  return (
                    <li key={`${title}-${icon}`}>
                      <div
                        className={cn(
                          "flex h-full flex-col items-center gap-3 rounded-[18px] border border-white/[0.09]",
                          "bg-white/[0.045] px-2.5 py-5 text-center backdrop-blur-[3px]",
                          "transition-[background-color,border-color,transform,box-shadow] duration-300 ease-out",
                          "hover:border-accent-champagne/42 hover:bg-white/[0.085]",
                          "supports-[pointer:fine]:motion-safe:hover:-translate-y-px supports-[pointer:fine]:motion-safe:hover:shadow-[0_18px_44px_-22px_rgba(0,0,0,0.55)]",
                          "motion-reduce:transform-none motion-reduce:transition-none sm:gap-3.5 sm:rounded-[22px] sm:px-3 sm:py-6",
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-[3.15rem] shrink-0 items-center justify-center rounded-full sm:size-[3.65rem]",
                            "bg-gradient-to-b from-accent-champagne/28 via-accent-gold/14 to-accent-champagne/[0.07]",
                            "ring-[1.5px] ring-accent-champagne/48 ring-offset-[3px] ring-offset-[#0a1f1a]/95",
                            "text-accent-champagne shadow-[inset_0_1px_0_rgba(255,251,246,0.22)]",
                          )}
                          aria-hidden
                        >
                          <Icon className="size-[1.35rem] sm:size-[1.55rem]" strokeWidth={1.12} />
                        </span>

                        <span className="font-display text-[0.805rem] leading-snug tracking-[-0.012em] text-[#f4efe6] sm:text-[0.8625rem]">
                          {title}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation className="mb-gallery-gap grid gap-ribbon sm:grid-cols-2 lg:grid-cols-4">
          {statsBand.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[22px] border border-accent-bronze/16 bg-gradient-to-br from-prestige-mist/55 via-fog-soft/92 to-ivory p-loft shadow-soft"
            >
              <p className="font-display text-[clamp(1.85rem,5vw,2.55rem)] font-light tracking-tight text-prestige-navy">
                {stat.figure}
                {stat.suffix != null ? (
                  <span className="text-[0.62em] font-normal tracking-normal text-prestige-navy/72">
                    {stat.suffix}
                  </span>
                ) : null}
              </p>
              <p className="mt-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">
                {stat.label}
              </p>
            </article>
          ))}
        </RevealAnimation>

        <RevealAnimation className="mb-gallery-gap">
          <figure className="relative aspect-[21/11] overflow-hidden rounded-[28px] border border-accent-bronze/22 shadow-soft sm:aspect-[21/9] lg:aspect-[21/8]">
            <Image
              alt={ribbon.alt}
              fill
              className="object-cover"
              decoding="async"
              loading="lazy"
              priority={false}
              quality={82}
              sizes="100vw"
              src={ribbon.src}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-strong/74 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-loft inset-y-auto bottom-loft flex flex-col gap-2">
              <span className="font-sans text-micro uppercase tracking-[0.42em] text-accent-champagne">
                {ribbon.ribbonCaption}
              </span>
              <span className="max-w-xl font-display text-fluid-display text-fog-soft">
                {ribbon.figureCaption}
              </span>
            </figcaption>
          </figure>
        </RevealAnimation>

        <RevealAnimation className="mb-gallery-gap grid gap-ribbon sm:grid-cols-3">
          {mosaicFrames.map((frame) => (
            <figure
              key={frame.src}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-accent-bronze/15 shadow-soft sm:aspect-[3/4]"
            >
              <Image
                alt={frame.alt}
                fill
                className="object-cover"
                decoding="async"
                loading="lazy"
                quality={78}
                sizes="(max-width:640px) 100vw, 33vw"
                src={frame.src}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-strong/55 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4">
                <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-fog-soft">
                  {frame.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </RevealAnimation>

        <div className="grid gap-gallery-gap lg:grid-cols-2">
          {detailCategories.map((category) => (
            <RevealAnimation key={category.title}>
              <article
                className={cn(
                  "flex h-full flex-col gap-4 rounded-[26px] border border-prestige-navy/12",
                  "bg-ivory/88 p-loft shadow-soft backdrop-blur-sm",
                  "transition-[border-color,box-shadow] duration-500 ease-luxury hover:border-accent-gold/30 hover:shadow-[0_28px_80px_-40px_rgba(32,42,38,0.35)]",
                )}
              >
                <div>
                  <h3 className="font-display text-[clamp(1.25rem,2.8vw,1.55rem)] leading-snug-soft text-prestige-navy">
                    {category.title}
                  </h3>
                  {category.subtitle != null ? (
                    <p className="mt-2 font-sans text-[0.875rem] leading-relaxed text-muted">
                      {category.subtitle}
                    </p>
                  ) : null}
                </div>
                <ul className="flex flex-col gap-3 border-t border-accent-bronze/12 pt-4">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-[1.125rem] font-sans text-[0.9025rem] leading-[1.68] text-foreground/[0.82] before:absolute before:left-0 before:top-[0.55em] before:size-[5px] before:rounded-full before:bg-accent-gold/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation className="mt-gallery-gap overflow-hidden rounded-[26px] border border-prestige-navy/12 bg-prestige-mist/35 shadow-soft">
          <div className="border-b border-prestige-navy/10 px-loft py-5 sm:px-orbit">
            <p className="font-display text-[clamp(1.05rem,2.4vw,1.28rem)] text-prestige-navy">
              {peerComparison.heading}
            </p>
            <p className="mt-2 max-w-3xl font-sans text-[0.8625rem] leading-relaxed text-muted">
              {peerComparison.lead}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left font-sans text-[0.8625rem]">
              <thead>
                <tr className="border-b border-prestige-navy/12 bg-ivory/80">
                  <th scope="col" className="px-loft py-3 font-semibold uppercase tracking-[0.18em] text-muted sm:px-orbit">
                    Feature
                  </th>
                  <th scope="col" className="px-loft py-3 font-semibold uppercase tracking-[0.18em] text-prestige-navy sm:px-orbit">
                    {peerComparison.projectColumnLabel}
                  </th>
                  <th scope="col" className="px-loft py-3 font-semibold uppercase tracking-[0.18em] text-muted sm:px-orbit">
                    {peerComparison.peersColumnLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {peerComparison.rows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      index % 2 === 1 ? "bg-ivory/55" : "bg-fog-soft/40",
                      "border-b border-prestige-navy/[0.07] last:border-b-0",
                    )}
                  >
                    <th
                      scope="row"
                      className="max-w-[10rem] px-loft py-3.5 font-medium text-prestige-navy sm:px-orbit"
                    >
                      {row.feature}
                    </th>
                    <td className="px-loft py-3.5 text-foreground/[0.82] sm:px-orbit">{row.project}</td>
                    <td className="px-loft py-3.5 text-muted sm:px-orbit">{row.peers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealAnimation>

        <p className="mt-10 font-sans text-[0.72rem] leading-relaxed tracking-[0.06em] text-muted">
          {footerNote}
        </p>
      </Container>
    </section>
  );
}
