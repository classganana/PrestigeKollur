"use client";

import { useRef } from "react";

import Image from "next/image";

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
import { themeClasses } from "@/lib/theme/theme-classes";
import { cn } from "@/lib/cn";

const DEFAULT_SKIP_AHEAD = {
  label: "Society amenities",
  href: "#amenities",
  note: "Twin clubs · aquatics · 11-acre park spine — jump ahead if that's your first question.",
} as const;

/** Warm editorial hero — forest township luxury pacing (Prestige Kollur default). */
export function HeroEditorialSection({ content }: { content: HeroContent }) {
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
    disableScrollFx ? [0, 0] : [0, Math.round(52)],
  );

  const driftScale = useTransform(
    scrollYProgress,
    [0, 1],
    disableScrollFx ? [1, 1] : [1, 1.028],
  );

  const whatsappHref = enquiryWhatsAppUrl();
  const skipAhead = content.skipAheadLink ?? DEFAULT_SKIP_AHEAD;
  const exploreCta = content.exploreCta ?? { label: "Explore project", href: "#overview" };
  const composerNote =
    content.composerNote ??
    site.heroComposerNoteTemplate.replace("{project}", site.name);

  const wrapV = lite ? heroStaggerWrapLite : heroStaggerWrap;
  const lineV = lite ? heroLineRevealLite : heroLineReveal;
  const titleV = lite ? heroTitleRevealLite : heroTitleReveal;

  const heroEnquiryClasses = cn(
    "w-full font-medium uppercase tracking-[0.2em] sm:min-w-[232px]",
    "hover:-translate-y-px motion-reduce:hover:translate-y-0 active:translate-y-0 active:brightness-[0.99]",
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label={`Hero — ${site.name}`}
      className={cn("relative isolate min-h-[100svh] overflow-hidden", themeClasses.heroCanvas)}
    >
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {disableScrollFx ? (
          <div aria-hidden className="absolute inset-[-2%]">
            <Image
              src={heroCampaign}
              alt={content.campaignImageAlt}
              fill
              priority
              placeholder="blur"
              quality={lite ? 78 : 86}
              sizes="100vw"
              decoding="async"
              className="scale-[1.008] transform-gpu object-cover"
              style={content.imageFocus ? { objectPosition: content.imageFocus } : undefined}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_-6%,rgba(244,239,229,0.22),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_86%,rgba(210,182,138,0.14),transparent_50%)]" />
          </div>
        ) : (
          <motion.div
            aria-hidden
            className="absolute inset-[-8%] will-change-transform"
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
              className="scale-[1.008] transform-gpu object-cover"
              style={content.imageFocus ? { objectPosition: content.imageFocus } : undefined}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_-6%,rgba(244,239,229,0.22),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_86%,rgba(210,182,138,0.14),transparent_50%)]" />
          </motion.div>
        )}

        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,20,17,0.02)_44%,rgba(6,26,21,0.22)_92%)] opacity-[0.85]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_88%_35%,rgba(7,34,29,0.18),transparent_55%)]" />
        <div className="absolute inset-y-0 left-0 hidden w-[min(92%,740px)] sm:block bg-[radial-gradient(ellipse_108%_120%_at_14%_44%,rgba(5,17,13,0.82)_0%,rgba(11,42,35,0.38)_52%,transparent_74%)]" />
        <div className="absolute inset-y-0 left-0 block w-full sm:hidden bg-[radial-gradient(ellipse_140%_88%_at_42%_36%,rgba(5,17,13,0.78)_0%,rgba(14,54,46,0.35)_54%,transparent_76%)]" />
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-[min(58vh,640px)]",
            themeClasses.overlayHeroBottom,
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-[min(24vh,200px)]",
            themeClasses.overlayHeroTop,
          )}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(32,52,43,0.14),transparent_46%,rgba(217,203,173,0.085)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_10%,rgba(244,239,229,0.032)_36%,transparent_58%,rgba(10,36,31,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_92%_88%_at_50%_44%,transparent_52%,rgba(2,11,10,0.36)_100%)] opacity-[0.72]" />

        {!lite ? (
          <div className="absolute inset-0 opacity-[0.052] mix-blend-overlay" aria-hidden>
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <filter id="hero-grain-filter">
                <feTurbulence
                  baseFrequency="0.78"
                  numOctaves="3"
                  stitchTiles="stitch"
                  type="fractalNoise"
                />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#hero-grain-filter)" />
            </svg>
          </div>
        ) : null}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1240px] flex-col px-6 pb-[max(1.85rem,env(safe-area-inset-bottom))] pt-[clamp(9.25rem,min(21vh,11.75rem),11rem)] sm:px-10 sm:pb-10 lg:pb-12 xl:pb-14">
        <div className="relative isolate shrink-0 self-start max-w-[min(26rem,calc(100vw-3rem))] sm:max-w-none lg:max-w-[44rem]">
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute rounded-[clamp(24px,_4vw,_40px)]",
              "-inset-x-6 -top-10 -bottom-10 sm:-inset-x-[4.75rem] sm:-left-[3.125rem] sm:-right-[min(36vw,11rem)] sm:-top-12 sm:-bottom-[2.875rem]",
              "bg-[radial-gradient(ellipse_98%_100%_at_24%_40%,rgba(5,21,17,0.58)_0%,rgba(13,62,53,0.16)_54%,transparent_78%)]",
              lite
                ? "backdrop-blur-none"
                : "backdrop-blur-[13px] max-sm:backdrop-blur-[8px] motion-reduce:backdrop-blur-none",
              "shadow-[10px_0_88px_-30px_rgba(2,10,8,0.62)]",
              "ring-1 ring-white/[0.07]",
            )}
          />

          <motion.div
            className="relative z-[2] flex flex-col gap-9 sm:gap-10 lg:gap-11"
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : wrapV}
          >
            <motion.p
              variants={reduceMotion ? undefined : lineV}
              className="font-sans text-micro uppercase tracking-[0.46em] text-accent-champagne/[0.93] sm:tracking-[0.48em] [text-shadow:0_1px_16px_rgba(4,12,10,0.55)]"
            >
              {site.heroEyebrow}
            </motion.p>

            <motion.p
              variants={reduceMotion ? undefined : lineV}
              className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.38em] text-accent-champagne/[0.94] [text-shadow:0_2px_16px_rgba(2,10,8,0.65)] sm:text-[0.62rem] sm:tracking-[0.4em]"
            >
              {site.jvLine}
            </motion.p>

            <motion.h1
              variants={reduceMotion ? undefined : titleV}
              className={cn(
                "relative text-balance font-display font-light tracking-[-0.018em]",
                "text-[clamp(2.7rem,9.35vw,5.85rem)] leading-[1.01]",
                themeClasses.heroTitleGradient,
                lite
                  ? "[filter:none] [text-shadow:0_2px_28px_rgba(3,12,10,0.42)]"
                  : "[filter:drop-shadow(0_1px_0_rgba(255,251,246,0.07))drop-shadow(0_12px_36px_rgba(3,12,10,0.48))]",
              )}
            >
              <span className="block pb-[0.06em]">{site.heroTitleLine1}</span>
              <span className="mt-[0.3em] block sm:mt-[0.28em]">{site.heroTitleLine2}</span>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : lineV}
              className="max-w-[min(37ch,calc(100vw-3rem))] font-sans text-[1.02rem] leading-[1.74] tracking-[0.01em] text-fog-soft/[0.87] antialiased sm:max-w-[42ch] sm:text-[1.09rem] [text-shadow:0_1px_18px_rgba(3,10,8,0.58)]"
            >
              {site.heroSupporting}
            </motion.p>
          </motion.div>
        </div>

        <div className="mt-auto pt-[clamp(4rem,10vw,5.75rem)] sm:pt-20 lg:pt-24">
          <motion.div
            className={cn(
              "w-full max-w-[1040px] rounded-[clamp(22px,3.5vw,34px)]",
              "border border-white/[0.22]",
              "px-[clamp(1.5rem,4.2vw,2.625rem)] py-9",
              "shadow-[0_44px_110px_-12px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.13),inset_0_-1px_0_rgba(0,0,0,0.32)]",
              "ring-1 ring-inset ring-white/[0.08]",
              lite ? themeClasses.heroGlassPanelLite : themeClasses.heroGlassPanel,
              !lite && "backdrop-blur-[26px] backdrop-saturate-[1.15]",
              "sm:py-11",
            )}
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: lite ? 12 : 22 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduceMotion ? 0 : lite ? 0.22 : 0.55,
              duration: reduceMotion ? 0 : lite ? 0.52 : 1.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-[1.875rem] max-w-2xl font-sans text-[0.97rem] font-normal leading-[1.76] text-fog-soft/[0.84] sm:text-[1.035rem] sm:leading-[1.74]">
              {composerNote}
            </p>

            <div className="flex flex-col gap-[1.125rem] sm:flex-row sm:items-stretch sm:gap-5">
              {whatsappHref ? (
                <OpenWhatsAppConciergeButton className={heroEnquiryClasses} placement="hero_wa">
                  WhatsApp enquiry
                </OpenWhatsAppConciergeButton>
              ) : (
                <OpenConciergeButton variant="hero-enquiry" className={heroEnquiryClasses}>
                  Private concierge
                </OpenConciergeButton>
              )}

              <SecondaryButton
                href={exploreCta.href}
                className={cn(
                  "w-full border-fog-soft/22 bg-fog-soft/[0.035] text-fog-soft/[0.8] shadow-none hover:border-accent-champagne/36 hover:bg-fog-soft/[0.06] hover:text-accent-champagne/92 hover:shadow-none sm:w-auto",
                  !lite && "backdrop-blur-[2px]",
                )}
              >
                {exploreCta.label}
              </SecondaryButton>
            </div>

            <div className="mt-6">
              <a
                href={skipAhead.href}
                className="inline-flex items-center gap-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-fog-soft/[0.76] underline-offset-[5px] decoration-accent-champagne/38 transition-colors hover:text-accent-champagne/92 hover:decoration-accent-champagne/58"
              >
                {skipAhead.label}
                <span aria-hidden className="text-accent-champagne/70">
                  →
                </span>
              </a>
              <p className="mt-2 max-w-md font-sans text-[0.66rem] leading-relaxed tracking-[0.04em] text-fog-soft/48">
                {skipAhead.note}
              </p>
            </div>

            {content.footnote ? (
              <p className="mt-7 font-sans text-[0.68rem] uppercase tracking-[0.36em] text-fog-soft/50">
                {content.footnote}
              </p>
            ) : (
              <p className="mt-7 font-sans text-[0.68rem] uppercase tracking-[0.36em] text-fog-soft/50">
                Campaign façade elevation · gallery & township bands carry matching WebP masters
                below
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
