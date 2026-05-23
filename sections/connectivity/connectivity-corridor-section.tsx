"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { staggerContainer, staggerChild } from "@/animations";
import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Container } from "@/components/ui/container";
import { connectivityWhatsAppUrl } from "@/constants/contact";
import type { ConnectivityContent } from "@/lib/content/types";
import { useSite } from "@/lib/project/project-context";
import { ConnectivityAtlasPlate } from "@/sections/connectivity/connectivity-atlas-plate";
import { cn } from "@/lib/cn";

const whatsLocationChampagne = cn(
  "w-full sm:w-auto sm:min-w-[min(100%,17.5rem)]",
  "hover:-translate-y-px motion-reduce:hover:translate-y-0",
);

/** IT-corridor connectivity — tiered distance hierarchy, curated atlas, authoritative matrix. */
export function ConnectivityCorridorSection({ content }: { content: ConnectivityContent }) {
  const site = useSite();
  const {
    eyebrow,
    headlineLines,
    lead,
    metricsDisclaimer,
    corridorTiers,
    essentialMetrics,
    essentialClusterLabel = "Infrastructure essentials",
    mapFrame,
    imageCaption,
    mapEyebrow = "Corridor map",
    mapNodes,
    atlasNote,
    ctaSupport,
  } = content;

  const tiers = corridorTiers ?? [];
  const reduceMotion = useReducedMotion();
  const locationWaHref = connectivityWhatsAppUrl();

  return (
    <section
      id="connectivity"
      aria-labelledby="connectivity-heading"
      data-connectivity-variant="corridor"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/10 bg-surface pb-section-y sm:scroll-mt-28"
    >
      <Container>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.18 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="mb-[clamp(3rem,8vw,4.5rem)] max-w-[52rem]"
        >
          <motion.p
            variants={reduceMotion ? undefined : staggerChild}
            className="font-sans text-micro uppercase tracking-[0.4em] text-accent-bronze"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            id="connectivity-heading"
            variants={reduceMotion ? undefined : staggerChild}
            className={cn(
              "mt-5 text-balance font-display font-semibold tracking-[-0.024em] text-foreground",
              "text-[clamp(2.1rem,min(10vw,3.75rem),4.1rem)] leading-[1.02]",
            )}
          >
            {headlineLines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={reduceMotion ? undefined : staggerChild}
            className="mt-6 max-w-[48ch] font-sans text-[1.02rem] font-medium leading-[1.74] text-muted sm:text-[1.06rem]"
          >
            {lead}
          </motion.p>
        </motion.div>

        {tiers.length > 0 ? (
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.12 }}
            variants={reduceMotion ? undefined : tierGridVariants}
            className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5"
          >
            {tiers.map((tier, index) => (
              <motion.article
                key={tier.tierBand}
                variants={reduceMotion ? undefined : tierCardVariants}
                className={cn(
                  "flex min-w-0 flex-col rounded-[clamp(20px,2.6vw,26px)] border p-loft",
                  index === 0
                    ? "border-accent-champagne/32 bg-ivory shadow-soft ring-1 ring-accent-champagne/18"
                    : "border-accent-bronze/16 bg-fog-soft shadow-soft",
                )}
              >
                <p className="font-sans text-[0.56rem] font-semibold uppercase tracking-[0.34em] text-accent-bronze">
                  {tier.tierBand}
                </p>
                <p className="mt-2 font-display text-[clamp(1.28rem,3vw,1.58rem)] font-medium tracking-[-0.02em] text-foreground">
                  {tier.tierLabel}
                </p>

                <ul
                  role="list"
                  className="mt-5 flex flex-1 flex-col gap-3 border-t border-accent-bronze/16 pt-5"
                >
                  {tier.destinations.map((dest) => (
                    <li key={dest.name} className="flex min-w-0 items-baseline justify-between gap-4">
                      <p className="min-w-0 font-sans text-[0.9rem] font-medium tracking-[0.01em] text-foreground">
                        {dest.name}
                      </p>
                      {dest.detail ? (
                        <p className="shrink-0 font-display text-[0.9rem] font-semibold tabular-nums text-foreground">
                          {dest.detail}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        ) : null}

        <div
          className={cn(
            "mt-[clamp(3.25rem,8vw,4.75rem)] rounded-[clamp(24px,3.2vw,32px)] border border-accent-bronze/16",
            "bg-fog-soft p-[clamp(1.25rem,3.5vw,2rem)] shadow-soft sm:p-[clamp(1.5rem,4vw,2.25rem)]",
          )}
        >
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.22 }}
              variants={reduceMotion ? undefined : staggerContainer}
              className="min-w-0 lg:col-span-7"
            >
              <motion.p
                variants={reduceMotion ? undefined : staggerChild}
                className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-accent-bronze"
              >
                {essentialClusterLabel}
              </motion.p>

              <motion.ul
                role="list"
                variants={reduceMotion ? undefined : staggerContainer}
                className="mt-5 overflow-hidden rounded-[clamp(18px,2.4vw,24px)] border border-accent-bronze/18 bg-ivory shadow-soft ring-1 ring-black/[0.04]"
              >
                {essentialMetrics.map((row, index) => (
                  <motion.li
                    key={row.cluster}
                    variants={reduceMotion ? undefined : staggerChild}
                    className={cn(
                      "grid gap-2.5 px-loft py-[1.25rem] sm:grid-cols-[minmax(0,10rem)_1fr] sm:items-start sm:gap-8 sm:py-5",
                      index > 0 && "border-t border-accent-bronze/14",
                      index === 0 && "border-l-[3px] border-l-accent-champagne bg-ivory",
                    )}
                  >
                    <div className="min-w-0">
                      <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-accent-bronze">
                        {row.cluster}
                      </p>
                      <p className="mt-1.5 font-display text-[clamp(1.32rem,2.6vw,1.7rem)] font-bold tabular-nums tracking-[-0.025em] text-foreground">
                        {row.span}
                      </p>
                    </div>
                    <p className="font-sans text-[0.875rem] font-medium leading-[1.58] text-muted sm:pt-1 sm:text-[0.9rem]">
                      {row.detail}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                variants={reduceMotion ? undefined : staggerChild}
                className="mt-4 font-sans text-[0.58rem] uppercase leading-snug tracking-[0.26em] text-muted"
              >
                {metricsDisclaimer}
              </motion.p>

              <motion.p
                variants={reduceMotion ? undefined : staggerChild}
                className="mt-2 font-sans text-[0.56rem] uppercase tracking-[0.22em] text-muted"
              >
                {atlasNote}
              </motion.p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              variants={reduceMotion ? undefined : fadeImage}
              className="min-w-0 lg:col-span-5"
            >
              <ConnectivityAtlasPlate
                mapFrame={mapFrame}
                mapEyebrow={mapEyebrow}
                imageCaption={imageCaption}
                nodes={mapNodes}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          variants={reduceMotion ? undefined : ctaReveal}
          className={cn(
            "mt-[clamp(3.5rem,9vw,5rem)] flex flex-col gap-6 rounded-[clamp(24px,3vw,32px)] border border-accent-champagne/18",
            "bg-forest-strong px-loft py-loft text-inverse shadow-elevated sm:flex-row sm:items-center sm:justify-between sm:px-orbit sm:py-orbit",
          )}
        >
          <div className="max-w-[42ch] space-y-2">
            <p className="font-sans text-[1rem] font-medium leading-[1.72] text-inverse-muted sm:text-[1.04rem]">
              {ctaSupport}
            </p>
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.3em] text-accent-champagne">
              {site.contactLabel}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-end">
            <OpenConciergeButton
              variant="hero-enquiry"
              className="w-full sm:w-auto sm:min-w-[220px]"
            >
              Schedule a site visit
            </OpenConciergeButton>

            {locationWaHref != null ? (
              <PrimaryButton
                href={locationWaHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="champagne"
                className={whatsLocationChampagne}
              >
                Location on WhatsApp
              </PrimaryButton>
            ) : null}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

const tierGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const tierCardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeImage: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
