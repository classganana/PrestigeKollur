"use client";

import { motion, useReducedMotion } from "framer-motion";

import { staggerContainer, staggerChild } from "@/animations";
import { Container } from "@/components/ui/container";
import type { HighlightsContent } from "@/lib/content/types";
import { cn } from "@/lib/cn";

/** Project authority layer — scale, corridor positioning, infrastructure confidence. */
export function HighlightsUrbanSection({ content }: { content: HighlightsContent }) {
  const { eyebrow, headlineLines, lead, metrics, pillars, positioningLine, mediaAttribution } =
    content;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      data-highlights-variant="urban"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/12 bg-forest-strong text-inverse sm:scroll-mt-28"
    >
      <Container className="py-[clamp(3rem,8vw,4.75rem)]">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="max-w-[52rem]"
        >
          <motion.p
            variants={reduceMotion ? undefined : staggerChild}
            className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.38em] text-accent-champagne"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            id="highlights-heading"
            variants={reduceMotion ? undefined : staggerChild}
            className={cn(
              "mt-5 text-balance font-display font-bold tracking-[-0.024em] text-inverse",
              "text-[clamp(2rem,min(9vw,3.5rem),3.75rem)] leading-[1.04]",
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
            className="mt-6 max-w-[48ch] font-sans text-[1.02rem] font-medium leading-[1.72] text-inverse-muted sm:text-[1.06rem]"
          >
            {lead}
          </motion.p>
        </motion.div>

        <motion.ul
          role="list"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="mt-12 grid gap-px overflow-hidden rounded-[clamp(20px,2.8vw,28px)] border border-accent-champagne/28 bg-accent-champagne/16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric) => (
            <motion.li
              key={metric.label}
              variants={reduceMotion ? undefined : staggerChild}
              className="flex flex-col gap-2 bg-forest-strong px-loft py-6 sm:py-7"
            >
              <span className="font-display text-[clamp(2rem,4.5vw,2.85rem)] font-bold tabular-nums tracking-[-0.03em] text-inverse">
                {metric.figure}
                {metric.suffix != null ? (
                  <span className="ml-1 text-[0.48em] font-semibold text-inverse-muted">
                    {metric.suffix}
                  </span>
                ) : null}
              </span>
              <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-accent-champagne">
                {metric.label}
              </span>
              <p className="font-sans text-[0.875rem] font-medium leading-[1.55] text-inverse-muted">
                {metric.note}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.18 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={reduceMotion ? undefined : staggerChild}
              className="rounded-[clamp(18px,2.4vw,24px)] border border-fog-soft/18 bg-forest p-loft"
            >
              <h3 className="font-display text-[1.2rem] font-semibold tracking-[-0.018em] text-inverse sm:text-[1.28rem]">
                {pillar.title}
              </h3>
              <p className="mt-3 font-sans text-[0.9375rem] font-medium leading-[1.65] text-inverse-muted">
                {pillar.copy}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {positioningLine ? (
          <motion.p
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={reduceMotion ? undefined : staggerChild}
            className="mx-auto mt-12 max-w-[44ch] text-center font-display text-[clamp(1.1rem,2.5vw,1.45rem)] font-semibold leading-[1.35] tracking-[-0.015em] text-accent-champagne"
          >
            {positioningLine}
          </motion.p>
        ) : null}

        {mediaAttribution ? (
          <p className="mt-6 text-center font-sans text-[0.56rem] uppercase tracking-[0.26em] text-inverse-subtle">
            {mediaAttribution}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
