"use client";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";
import {
  DoorOpen,
  Handshake,
  Home,
  Landmark,
  MapPinned,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { staggerChild, staggerContainer } from "@/animations";
import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { Container } from "@/components/ui/container";
import type { ServicesPageContent } from "@/projects/golden-doors/content/services-page";
import { cn } from "@/lib/cn";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "property-consultation": Handshake,
  "home-loan-desk": Landmark,
  "book-site-visit": MapPinned,
  "demo-flat": DoorOpen,
  "attractive-deals": Sparkles,
  "interior-assistance": Home,
  "relationship-manager": UserRound,
};

/** Full-page services composition for the Golden Doors brand hub. */
export function ServicesOfferedView({ content }: { content: ServicesPageContent }) {
  const reduceMotion = useReducedMotion();
  const { heading, services, ctaLabel, ctaLead } = content;

  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-[#0c0906]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_20%_-10%,rgba(201,162,39,0.16),transparent_55%),radial-gradient(ellipse_60%_45%_at_95%_30%,rgba(139,105,20,0.1),transparent_50%)]"
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
          <span className="text-[#EBE4D6]/70">Services</span>
        </p>

        <motion.header
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={reduceMotion ? undefined : staggerContainer}
          className="max-w-[40rem]"
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
            className="mt-5 max-w-[34rem] font-sans text-[1.05rem] font-medium leading-[1.65] text-[#EBE4D6]/[0.88]"
          >
            {heading.lead}
          </motion.p>
        </motion.header>

        <motion.ol
          role="list"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.08 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="mt-14 border-t border-[#C9A227]/28"
        >
          {services.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] ?? Handshake;

            return (
              <motion.li
                key={service.id}
                variants={reduceMotion ? undefined : staggerChild}
                className={cn(
                  "grid gap-5 border-b border-[#C9A227]/22 py-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8 sm:py-9",
                  "lg:grid-cols-[4.5rem_minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-baseline lg:gap-10",
                )}
              >
                <span
                  className="font-display text-[1.35rem] font-semibold tabular-nums tracking-[-0.02em] text-[#C9A227]/70"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex items-start gap-3.5 sm:col-start-2 lg:col-start-2">
                  <span
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/35 bg-[#14100C] text-[#E8C65A]"
                    aria-hidden
                  >
                    <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />
                  </span>
                  <h2 className="font-display text-[clamp(1.35rem,2.8vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#FAF7EF]">
                    {service.title}
                  </h2>
                </div>

                <p className="font-sans text-[0.98rem] leading-[1.68] text-[#EBE4D6]/[0.82] sm:col-start-2 lg:col-start-3">
                  {service.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col items-start gap-5 border border-[#C9A227]/28 bg-[#14100C] px-6 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-10"
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
