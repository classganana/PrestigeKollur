"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import {
  heroLineReveal,
  heroLineRevealLite,
  heroStaggerWrap,
  heroStaggerWrapLite,
  heroTitleReveal,
  heroTitleRevealLite,
} from "@/animations";
import {
  OpenConciergeButton,
  OpenWhatsAppConciergeButton,
} from "@/components/conversion/open-concierge-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { enquiryWhatsAppUrl } from "@/constants/contact";
import type { HeroContent } from "@/lib/content/types";
import { usePreferLiteMotion } from "@/hooks/use-prefer-lite-motion";
import { useSite } from "@/lib/project/project-context";
import { cn } from "@/lib/cn";

/** Brand-hub hero — dark plate, solid ivory type, logo mark — readable over any hero still. */
export function HeroBrandGoldSection({ content }: { content: HeroContent }) {
  const site = useSite();
  const heroCampaign = content.campaignImage;
  const reduceMotion = useReducedMotion();
  const lite = usePreferLiteMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const disableScrollFx = lite || reduceMotion === true;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const driftY = useTransform(
    scrollYProgress,
    [0, 1],
    disableScrollFx ? [0, 0] : [0, Math.round(40)],
  );

  const driftScale = useTransform(
    scrollYProgress,
    [0, 1],
    disableScrollFx ? [1, 1] : [1, 1.02],
  );

  const whatsappHref = enquiryWhatsAppUrl();
  const exploreCta = content.exploreCta ?? { label: "Explore projects", href: "#projects" };
  const servicesLink = content.servicesLink;
  const clientsLink = content.clientsLink;
  const skipAhead = content.skipAheadLink;
  const composerNote =
    content.composerNote ??
    site.heroComposerNoteTemplate.replace("{project}", site.name);

  const wrapV = lite ? heroStaggerWrapLite : heroStaggerWrap;
  const lineV = lite ? heroLineRevealLite : heroLineReveal;
  const titleV = lite ? heroTitleRevealLite : heroTitleReveal;

  const heroEnquiryClasses = cn(
    "w-full font-medium uppercase tracking-[0.2em] sm:min-w-[232px]",
    "hover:-translate-y-px motion-reduce:hover:translate-y-0",
  );

  const hubLinkClass =
    "inline-flex items-center gap-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#F0D878] underline decoration-[#C9A227]/55 underline-offset-[6px] transition-colors hover:text-[#FAF7EF] hover:decoration-[#E8C65A]";

  const hasHubLinks = Boolean(servicesLink || clientsLink || skipAhead);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label={`Hero — ${site.name}`}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#0c0906]"
    >
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {disableScrollFx ? (
          <div aria-hidden className="absolute inset-0">
            <Image
              src={heroCampaign}
              alt={content.campaignImageAlt}
              fill
              priority
              placeholder="blur"
              quality={lite ? 78 : 86}
              sizes="100vw"
              decoding="async"
              className="object-cover brightness-[0.55] contrast-[1.05]"
              style={content.imageFocus ? { objectPosition: content.imageFocus } : { objectPosition: "68% 45%" }}
            />
          </div>
        ) : (
          <motion.div
            aria-hidden
            className="absolute inset-[-6%] will-change-transform"
            style={{ y: driftY, scale: driftScale }}
          >
            <Image
              src={heroCampaign}
              alt={content.campaignImageAlt}
              fill
              priority
              placeholder="blur"
              quality={86}
              sizes="100vw"
              decoding="sync"
              className="object-cover brightness-[0.55] contrast-[1.05]"
              style={content.imageFocus ? { objectPosition: content.imageFocus } : { objectPosition: "68% 45%" }}
            />
          </motion.div>
        )}

        {/* Hard readability stack — left text lane must stay ink-dark */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,5,4,0.94)_0%,rgba(6,5,4,0.82)_38%,rgba(6,5,4,0.42)_62%,rgba(6,5,4,0.28)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[min(100%,720px)] bg-[radial-gradient(ellipse_120%_90%_at_0%_40%,rgba(6,5,4,0.96)_0%,rgba(6,5,4,0.72)_55%,transparent_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(to_top,rgba(6,5,4,0.92),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-[22%] bg-[linear-gradient(to_bottom,rgba(6,5,4,0.55),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1240px] flex-col px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[clamp(6.75rem,min(14vh,8.75rem),9rem)] sm:px-10 sm:pb-8 lg:pb-10">
        <div className="relative isolate max-w-[min(36rem,calc(100vw-3rem))] lg:max-w-[44rem]">
          <motion.div
            className="flex flex-col gap-5 sm:gap-6"
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : wrapV}
          >
            <motion.div variants={reduceMotion ? undefined : lineV} className="flex items-center gap-4">
              <Image
                src="/partners/golden-doors-icon.png"
                alt=""
                width={56}
                height={56}
                className="h-11 w-11 object-contain sm:h-12 sm:w-12"
                priority
              />
              <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-[#E8D9B0]">
                {site.heroEyebrow}
              </p>
            </motion.div>

            <motion.h1
              variants={reduceMotion ? undefined : titleV}
              className={cn(
                "text-balance font-display font-light tracking-[-0.02em]",
                "text-[clamp(2.35rem,7.2vw,4.85rem)] leading-[1.02]",
                "text-[#FAF7EF]",
                "[text-shadow:0_2px_28px_rgba(0,0,0,0.55)]",
              )}
            >
              <span className="block pb-[0.04em]">{site.heroTitleLine1}</span>
              <span className="mt-[0.18em] block text-[#F0D878]">{site.heroTitleLine2}</span>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : lineV}
              className="max-w-[38ch] font-sans text-[1rem] leading-[1.65] tracking-[0.01em] text-[#F3EDE2]/[0.92] sm:text-[1.08rem]"
            >
              {site.heroSupporting}
            </motion.p>

            {/* Hub paths sit under the lead — always above the fold, not below the CTA buttons */}
            {hasHubLinks ? (
              <motion.nav
                variants={reduceMotion ? undefined : lineV}
                aria-label="Explore Golden Doors"
                className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1"
              >
                {servicesLink ? (
                  <Link href={servicesLink.href} className={hubLinkClass}>
                    {servicesLink.label}
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
                {clientsLink ? (
                  <Link href={clientsLink.href} className={hubLinkClass}>
                    {clientsLink.label}
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
                {skipAhead ? (
                  <a
                    href={skipAhead.href}
                    className="inline-flex items-center gap-2 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#E8D9B0]/90 underline decoration-[#C9A227]/40 underline-offset-[6px] transition-colors hover:text-[#FAF7EF]"
                  >
                    {skipAhead.label}
                    <span aria-hidden>→</span>
                  </a>
                ) : null}
              </motion.nav>
            ) : null}
          </motion.div>
        </div>

        <div className="mt-auto pt-[clamp(1.25rem,3.5vw,2.75rem)]">
          <motion.div
            className={cn(
              "w-full max-w-[980px] rounded-[clamp(16px,2.4vw,24px)]",
              "border border-[#C9A227]/[0.32] bg-[#0c0906]/[0.78]",
              "px-[clamp(1.2rem,3.4vw,2.1rem)] py-6 sm:py-7",
              "shadow-[0_40px_100px_-20px_rgba(0,0,0,0.65)]",
              !lite && "backdrop-blur-[18px]",
            )}
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduceMotion ? 0 : 0.35,
              duration: reduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-5 max-w-2xl font-sans text-[0.98rem] font-medium leading-[1.65] text-[#FAF7EF] sm:text-[1.02rem]">
              {composerNote}
            </p>

            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-stretch sm:gap-4">
              <SecondaryButton
                href={exploreCta.href}
                className={cn(
                  "w-full !border-transparent !bg-[#C9A227] !text-[#0c0906] shadow-none",
                  "hover:!border-transparent hover:!bg-[#E2C66D] hover:!text-[#0c0906] sm:w-auto",
                  "font-semibold uppercase tracking-[0.2em]",
                )}
              >
                {exploreCta.label}
              </SecondaryButton>

              {whatsappHref ? (
                <OpenWhatsAppConciergeButton
                  className={cn(
                    heroEnquiryClasses,
                    "!border-[#E2C66D]/70 !bg-[#E8D9B0] !text-[#0c0906]",
                    "hover:!bg-[#FAF7EF]",
                  )}
                  placement="hero_wa"
                >
                  WhatsApp enquiry
                </OpenWhatsAppConciergeButton>
              ) : (
                <OpenConciergeButton
                  variant="hero-enquiry"
                  className={cn(
                    heroEnquiryClasses,
                    "!border-[#E2C66D]/70 !bg-[#E8D9B0] !text-[#0c0906]",
                  )}
                >
                  Private concierge
                </OpenConciergeButton>
              )}
            </div>

            {content.footnote ? (
              <p className="mt-4 font-sans text-[0.62rem] uppercase tracking-[0.34em] text-[#C9BFB0]/80">
                {content.footnote}
              </p>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
