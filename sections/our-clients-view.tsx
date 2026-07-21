"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { staggerChild, staggerContainer } from "@/animations";
import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { ClientLogoMarquee } from "@/components/golden-doors/client-logo-marquee";
import { Container } from "@/components/ui/container";
import type { ClientsPageContent } from "@/projects/golden-doors/content/clients-page";

/** Client gallery — scrolling developer logos. */
export function OurClientsView({ content }: { content: ClientsPageContent }) {
  const reduceMotion = useReducedMotion();
  const { heading, logoMarquee, footnote, ctaLabel, ctaLead } = content;

  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-[#0c0906]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_-5%,rgba(201,162,39,0.14),transparent_52%),radial-gradient(ellipse_55%_40%_at_5%_70%,rgba(139,105,20,0.1),transparent_48%)]"
      />

      <Container className="relative pb-section-y pt-[clamp(6.5rem,14vw,8.5rem)]">
        <p className="mb-8 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#C9A227]/75">
          <Link
            href="/"
            className="transition-colors hover:text-[#E8C65A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]/70"
          >
            Home
          </Link>
          <span className="mx-2 text-[#C9A227]/40" aria-hidden>
            /
          </span>
          <span className="text-[#EBE4D6]/70">Clients</span>
        </p>

        <motion.header
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={reduceMotion ? undefined : staggerContainer}
          className="max-w-[42rem]"
        >
          <motion.p
            variants={reduceMotion ? undefined : staggerChild}
            className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.38em] text-[#C9A227]"
          >
            {heading.eyebrow}
          </motion.p>
          <motion.h1
            variants={reduceMotion ? undefined : staggerChild}
            className="mt-4 font-display text-[clamp(2.15rem,5.5vw,3.35rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-[#FAF7EF]"
          >
            {heading.title}
          </motion.h1>
          <motion.p
            variants={reduceMotion ? undefined : staggerChild}
            className="mt-5 max-w-[36rem] font-sans text-[1.05rem] font-medium leading-[1.65] text-[#EBE4D6]/[0.88]"
          >
            {heading.lead}
          </motion.p>
        </motion.header>

        {logoMarquee.length > 0 ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="-mx-[var(--container-pad,1rem)] mt-12 sm:mx-0"
          >
            <ClientLogoMarquee logos={logoMarquee} />
          </motion.div>
        ) : null}

        <p className="mt-10 max-w-[40rem] font-sans text-[0.78rem] leading-relaxed text-[#EBE4D6]/55">
          {footnote}
        </p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-start gap-5 border border-[#C9A227]/28 bg-[#14100C] px-6 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-10"
        >
          <p className="max-w-[28rem] font-sans text-[1rem] font-medium leading-relaxed text-[#EBE4D6]/[0.88]">
            {ctaLead}
          </p>
          <OpenConciergeButton
            variant="champagne"
            className="shrink-0 border border-[#C9A227]/40 bg-[#C9A227] text-[#0c0906] hover:bg-[#E8C65A]"
          >
            {ctaLabel}
          </OpenConciergeButton>
        </motion.div>
      </Container>
    </div>
  );
}
