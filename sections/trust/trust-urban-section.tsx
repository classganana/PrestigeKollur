"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { staggerContainer, staggerChild } from "@/animations";
import { Container } from "@/components/ui/container";
import type { TrustContent } from "@/lib/content/types";
import { cn } from "@/lib/cn";

/** Premium trust layer — RERA, developer credibility, restrained transparency. */
export function TrustUrbanSection({ content }: { content: TrustContent }) {
  const { eyebrow, headline, lead, reraStatus, developerNote, credentials, disclaimer } = content;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      data-trust-variant="urban"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/12 bg-surface pb-section-y pt-[clamp(2.75rem,6.5vw,4rem)] sm:scroll-mt-28"
    >
      <Container>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="max-w-[42rem]"
        >
          <motion.p
            variants={reduceMotion ? undefined : staggerChild}
            className="font-sans text-micro uppercase tracking-[0.38em] text-accent-bronze"
          >
            {eyebrow}
          </motion.p>
          <motion.h2
            id="trust-heading"
            variants={reduceMotion ? undefined : staggerChild}
            className="mt-4 font-display text-[clamp(1.85rem,4vw,2.65rem)] font-semibold leading-[1.08] tracking-[-0.022em] text-foreground"
          >
            {headline}
          </motion.h2>
          <motion.p
            variants={reduceMotion ? undefined : staggerChild}
            className="mt-4 font-sans text-[1rem] font-medium leading-[1.68] text-muted sm:text-[1.035rem]"
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
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {credentials.map((item) => (
            <motion.li
              key={item.label}
              variants={reduceMotion ? undefined : staggerChild}
              className="rounded-[18px] border border-accent-bronze/14 bg-fog-soft px-loft py-5"
            >
              <span className="font-display text-[clamp(1.65rem,3.2vw,2.15rem)] font-semibold tabular-nums tracking-[-0.03em] text-foreground">
                {item.figure}
              </span>
              <p className="mt-1.5 font-sans text-[0.58rem] font-semibold uppercase leading-snug tracking-[0.28em] text-accent-bronze">
                {item.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.18 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8"
        >
          <motion.article
            variants={reduceMotion ? undefined : staggerChild}
            className="rounded-[clamp(20px,2.6vw,26px)] border border-accent-bronze/16 bg-ivory p-loft lg:col-span-5"
          >
            <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-accent-bronze">
              {reraStatus.headline}
            </p>
            <p className="mt-2 font-sans text-[0.72rem] uppercase tracking-[0.22em] text-muted">
              {reraStatus.lastUpdatedLabel}
            </p>
            <ul className="mt-5 space-y-3 border-t border-accent-bronze/12 pt-5">
              {reraStatus.bullets.map((line) => (
                <li key={line} className="flex gap-3 font-sans text-[0.9rem] leading-relaxed text-foreground">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-champagne" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Link
              href={reraStatus.verifyHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-6 inline-flex min-h-[2.75rem] items-center justify-center rounded-full",
                "border border-accent-bronze/28 bg-fog-soft px-6",
                "font-sans text-[0.625rem] font-semibold uppercase leading-none tracking-[0.2em] text-foreground",
                "whitespace-nowrap transition-colors hover:border-accent-champagne/40 hover:bg-ivory",
              )}
            >
              {reraStatus.verifyLabel}
            </Link>
          </motion.article>

          <motion.article
            variants={reduceMotion ? undefined : staggerChild}
            className="flex flex-col justify-center rounded-[clamp(20px,2.6vw,26px)] border border-accent-bronze/18 bg-fog-soft p-loft lg:col-span-7"
          >
            <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-accent-bronze">
              Developer credibility
            </p>
            <p className="mt-4 font-sans text-[0.975rem] font-medium leading-[1.72] text-muted">{developerNote}</p>
            <p className="mt-6 border-t border-accent-bronze/14 pt-5 font-sans text-[0.8125rem] leading-[1.62] text-muted">
              {disclaimer}
            </p>
          </motion.article>
        </motion.div>
      </Container>
    </section>
  );
}
