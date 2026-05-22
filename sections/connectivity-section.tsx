"use client";

import Image from "next/image";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { staggerContainer, staggerChild } from "@/animations";
import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { OpenConciergeSecondaryButton } from "@/components/conversion/open-concierge-secondary";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Container } from "@/components/ui/container";
import { connectivityWhatsAppUrl } from "@/constants/contact";
import type { ConnectivityContent } from "@/lib/content/types";
import { useSite } from "@/lib/project/project-context";
import { themeClasses } from "@/lib/theme/theme-classes";
import { cn } from "@/lib/cn";

const whatsLocationChampagne = cn(
  "w-full sm:w-auto sm:min-w-[min(100%,272px)]",
  themeClasses.ctaChampagne,
  "hover:-translate-y-px motion-reduce:hover:translate-y-0",
);

export function ConnectivitySection({ content }: { content: ConnectivityContent }) {
  const site = useSite();
  const {
    eyebrow,
    headlineLines,
    lead,
    metricsDisclaimer,
    primaryMetrics,
    essentialMetrics,
    mapFrame,
    imageCaption,
    atlasNote,
    ctaSupport,
  } = content;
  const reduceMotion = useReducedMotion();
  const locationWaHref = connectivityWhatsAppUrl();

  return (
    <section
      id="connectivity"
      aria-labelledby="connectivity-heading"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/10 bg-soft-stone/[0.28] pb-section-y sm:scroll-mt-28"
    >
      <Container>
        <div className="grid min-w-0 gap-14 lg:grid-cols-12 lg:gap-x-14 xl:gap-x-16 lg:gap-y-16">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
            variants={reduceMotion ? undefined : staggerContainer}
            className="flex min-w-0 flex-col gap-9 lg:col-span-6 lg:justify-center xl:col-span-5"
          >
            <motion.p
              variants={reduceMotion ? undefined : staggerChild}
              className={cn(
                "font-sans uppercase leading-snug tracking-[0.28em] text-accent-olive/[0.9]",
                "text-[clamp(0.575rem,2.7vw,0.6625rem)] sm:text-micro sm:tracking-[0.38em]",
              )}
            >
              {eyebrow}
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : staggerChild}
              className="space-y-6"
            >
              <h2
                id="connectivity-heading"
                className={cn(
                  "font-display font-light tracking-[-0.021em] text-foreground text-balance",
                  "text-[clamp(2.06rem,min(11vw,3.62rem),3.94rem)] leading-[1.04] sm:leading-[1.02]",
                )}
              >
                {headlineLines.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </h2>
              <p className="max-w-[46ch] hyphens-none break-words font-sans text-[1.02rem] leading-[1.78] tracking-[0.01em] text-muted sm:text-[1.065rem] sm:leading-[1.74]">
                {lead}
              </p>
            </motion.div>

            <motion.div
              variants={reduceMotion ? undefined : staggerChild}
              className="space-y-8"
            >
              <div
                className={cn(
                  "overflow-hidden rounded-[clamp(20px,2.5vw,28px)] border border-accent-bronze/[0.2]",
                  "bg-fog-strong/[0.52] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-sm",
                )}
              >
                <motion.ul
                  role="list"
                  variants={reduceMotion ? undefined : staggerContainer}
                  className="divide-y divide-accent-bronze/[0.12]"
                >
                  {primaryMetrics.map((metric) => (
                    <motion.li
                      key={metric.headline}
                      variants={reduceMotion ? undefined : staggerChild}
                      className="px-[clamp(1.1rem,3.2vw,1.55rem)] py-[clamp(1rem,3vw,1.35rem)]"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-0">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:min-w-[7.75rem] sm:flex-nowrap sm:gap-x-3">
                          <p
                            className={cn(
                              "font-display font-light tracking-[-0.03em] text-foreground tabular-nums",
                              "text-[clamp(1.42rem,5.85vw,1.92rem)] leading-none",
                            )}
                          >
                            {metric.timeBand}
                          </p>
                          <span
                            aria-hidden
                            className="font-sans text-[0.78rem] font-light text-accent-bronze/45"
                          >
                            →
                          </span>
                        </div>

                        <div className="min-w-0 flex-1 pt-0.5 sm:border-l sm:border-accent-bronze/[0.12] sm:pl-[clamp(1rem,3vw,1.55rem)] sm:pt-0">
                          <p className="font-display text-[clamp(1.02rem,3.05vw,1.09rem)] font-light tracking-[-0.014em] text-foreground">
                            {metric.headline}
                          </p>
                          <p className="mt-1 font-sans text-[0.78rem] leading-[1.55] tracking-[0.012em] text-muted sm:text-[0.7975rem] sm:leading-[1.52]">
                            {metric.note}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="border-t border-accent-bronze/[0.1] px-[clamp(1.1rem,3.2vw,1.55rem)] py-[clamp(0.92rem,2.8vw,1.22rem)]">
                  <p className="mb-3 font-sans text-[0.6rem] uppercase leading-snug tracking-[0.32em] text-accent-olive/72 sm:text-[0.62rem] sm:tracking-[0.34em]">
                    Nearby essentials
                  </p>
                  <ul className="space-y-[0.72rem]" role="list">
                    {essentialMetrics.map((row) => (
                      <li
                        key={row.cluster}
                        className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                      >
                        <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <span className="font-sans text-[0.8125rem] font-normal tracking-[0.01em] text-foreground sm:text-[0.8375rem]">
                            {row.cluster}
                          </span>
                          <span
                            aria-hidden
                            className="hidden text-accent-bronze/35 sm:inline"
                          >
                            ·
                          </span>
                          <span className="font-display text-[0.8125rem] font-light tabular-nums tracking-[-0.02em] text-accent-olive/88 sm:text-[0.8375rem]">
                            {row.span}
                          </span>
                        </div>
                        <p className="max-w-[42ch] font-sans text-[0.7425rem] leading-[1.5] tracking-[0.012em] text-muted sm:text-right sm:text-[0.76rem] sm:leading-[1.48]">
                          {row.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="max-w-[48ch] font-sans text-[0.5975rem] uppercase leading-snug tracking-[0.32em] text-muted/92 sm:text-[0.61rem] sm:tracking-[0.34em]">
                {metricsDisclaimer}
              </p>
            </motion.div>

            <motion.p
              variants={reduceMotion ? undefined : staggerChild}
              className="max-w-[40ch] font-sans text-[0.6175rem] uppercase leading-snug tracking-[0.34em] text-muted sm:text-micro sm:tracking-[0.38em]"
            >
              {mapFrame.atlasMicroline} · {atlasNote}
            </motion.p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.22 }}
            variants={reduceMotion ? undefined : fadeConnectivityImage}
            className="relative min-w-0 lg:col-span-6 lg:translate-y-[3%] xl:col-span-7"
          >
            <figure className="relative isolate aspect-[21/17] overflow-hidden rounded-[clamp(26px,_3.4vw,_40px)] shadow-soft ring-1 ring-black/[0.04] sm:aspect-[21/15] xl:aspect-[21/13] xl:rounded-[clamp(28px,_3.2vw,_42px)]">
              <Image
                alt={mapFrame.alt}
                fill
                className="object-cover object-[52%_50%]"
                decoding="async"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 56vw"
                quality={82}
                src={mapFrame.src}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/76 via-transparent to-[hsla(40,42%,94%,0.18)] opacity-95 mix-blend-multiply sm:opacity-100"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_94%_at_48%_64%,transparent_46%,rgba(12,54,43,0.18)_100%)]"
              />

              <figcaption className="pointer-events-none absolute bottom-loft left-pillar right-pillar max-w-none sm:left-loft">
                <span className="inline-block rounded-full bg-black/52 px-[0.9rem] py-2 backdrop-blur-sm sm:bg-black/45">
                  <span className="font-sans text-[0.6rem] uppercase leading-snug tracking-[0.38em] text-fog-strong/94 sm:text-[0.63rem] sm:tracking-[0.41em]">
                    {imageCaption}
                  </span>
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          variants={reduceMotion ? undefined : connectivityCtaParent}
          className="relative mt-[clamp(3.85rem,min(13vw,5.35rem),5.85rem)] overflow-hidden rounded-[clamp(26px,_3vw,_36px)] border border-accent-bronze/[0.185] bg-gradient-to-br from-ivory/98 via-soft-stone/85 to-soft-stone/74 px-[clamp(1.35rem,4vw,2rem)] py-[clamp(1.85rem,5vw,2.75rem)] shadow-soft lg:max-w-none"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.55] bg-[linear-gradient(128deg,hsla(32,52%,93%,0.55),transparent_48%,hsla(150,18%,74%,0.12))]"
          />

          <div className="relative flex flex-col gap-10">
            <div className="max-w-[46ch] space-y-relax font-sans text-[1rem] leading-[1.76] tracking-[0.01em] text-muted sm:text-[1.045rem] sm:leading-[1.73]">
              <p>{ctaSupport}</p>

              <p className="text-[0.68rem] uppercase tracking-[0.36em] text-accent-olive/[0.88]">
                {site.contactLabel} · concierge tone
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <OpenConciergeButton className="w-full sm:w-auto sm:min-w-[min(100%,238px)]">
                Schedule a site visit
              </OpenConciergeButton>

              {locationWaHref != null ? (
                <PrimaryButton
                  href={locationWaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={whatsLocationChampagne}
                >
                  Get location details on WhatsApp
                </PrimaryButton>
              ) : (
                <OpenConciergeSecondaryButton className="w-full border-accent-bronze/38 text-forest-strong backdrop-blur-sm sm:w-auto">
                  Get location details on WhatsApp
                </OpenConciergeSecondaryButton>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

const fadeConnectivityImage: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.88,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const connectivityCtaParent: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
    },
  },
};
