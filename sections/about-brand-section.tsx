"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { staggerChild, staggerContainer } from "@/animations";
import { Container } from "@/components/ui/container";
import type { AboutBrandContent } from "@/lib/content/types";

/** Brand-hub about band — partner story + stat counters. */
export function AboutBrandSection({ content }: { content: AboutBrandContent }) {
  const reduceMotion = useReducedMotion();
  const { heading, body, stats, servicesHref, servicesLinkLabel } = content;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/12 bg-twilight-soft/55 pb-section-y pt-[clamp(2.75rem,6.5vw,4rem)] sm:scroll-mt-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:items-start">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={reduceMotion ? undefined : staggerContainer}
            className="max-w-[40rem]"
          >
            {heading.eyebrow ? (
              <motion.p
                variants={reduceMotion ? undefined : staggerChild}
                className="font-sans text-micro uppercase tracking-[0.38em] text-accent-bronze"
              >
                {heading.eyebrow}
              </motion.p>
            ) : null}
            <motion.h2
              id="about-heading"
              variants={reduceMotion ? undefined : staggerChild}
              className="mt-4 font-display text-[clamp(1.85rem,4vw,2.65rem)] font-semibold leading-[1.08] tracking-[-0.022em] text-foreground"
            >
              {heading.title}
            </motion.h2>
            {heading.lead ? (
              <motion.p
                variants={reduceMotion ? undefined : staggerChild}
                className="mt-4 font-sans text-[1rem] font-medium leading-[1.68] text-muted sm:text-[1.035rem]"
              >
                {heading.lead}
              </motion.p>
            ) : null}
            <div className="mt-6 space-y-4">
              {body.map((para) => (
                <motion.p
                  key={para.slice(0, 48)}
                  variants={reduceMotion ? undefined : staggerChild}
                  className="font-sans text-[0.98rem] leading-[1.72] text-foreground/82"
                >
                  {para}
                </motion.p>
              ))}
            </div>
            {servicesHref && servicesLinkLabel ? (
              <motion.div variants={reduceMotion ? undefined : staggerChild} className="mt-7">
                <Link
                  href={servicesHref}
                  className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-accent-bronze underline decoration-accent-gold/35 underline-offset-[0.35em] transition-colors hover:text-accent-gold hover:decoration-accent-gold/70"
                >
                  {servicesLinkLabel}
                </Link>
              </motion.div>
            ) : null}
          </motion.div>

          <motion.ul
            role="list"
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            variants={reduceMotion ? undefined : staggerContainer}
            className="grid gap-3 sm:grid-cols-2"
          >
            {stats.map((item) => (
              <motion.li
                key={item.label}
                variants={reduceMotion ? undefined : staggerChild}
                className="rounded-[18px] border border-accent-gold/22 bg-surface px-loft py-5 shadow-soft"
              >
                <span className="font-display text-[clamp(1.65rem,3.2vw,2.15rem)] font-semibold tabular-nums tracking-[-0.03em] text-accent-bronze">
                  {item.figure}
                </span>
                <p className="mt-1.5 font-sans text-[0.58rem] font-semibold uppercase leading-snug tracking-[0.28em] text-muted">
                  {item.label}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
