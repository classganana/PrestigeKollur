"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

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

const campaignReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/**
 * Metropolitan campaign hero — architecture leads on desktop; mobile uses a
 * split “poster + editorial deck” so copy never fights the façade.
 */
export function HeroUrbanSection({ content }: { content: HeroContent }) {
  const site = useSite();
  const heroCampaign = content.campaignImage;
  const reduceMotion = useReducedMotion();
  const lite = usePreferLiteMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const disableScrollFx = lite || reduceMotion === true;
  const imageFocus = content.imageFocus ?? "50% 32%";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const driftY = useTransform(
    scrollYProgress,
    [0, 1],
    disableScrollFx ? [0, 0] : [0, Math.round(32)],
  );

  const driftScale = useTransform(
    scrollYProgress,
    [0, 1],
    disableScrollFx ? [1, 1] : [1, 1.04],
  );

  const whatsappHref = enquiryWhatsAppUrl();
  const exploreCta = content.exploreCta ?? { label: "View connectivity", href: "#connectivity" };

  const heroEnquiryClasses = cn(
    "min-h-[3rem] min-w-[min(100%,14rem)] px-7 font-semibold uppercase tracking-[0.18em]",
    "hover:-translate-y-px motion-reduce:hover:translate-y-0",
  );

  const imageNode = (
    <Image
      src={heroCampaign}
      alt={content.campaignImageAlt}
      fill
      priority
      placeholder="blur"
      quality={lite ? 75 : 80}
      sizes="(max-width: 640px) 640px, (max-width: 1024px) 960px, 1200px"
      decoding="async"
      className="transform-gpu object-cover scale-[1.03] contrast-[1.06] saturate-[0.92] sm:brightness-[0.94] sm:saturate-[0.88]"
      style={{ objectPosition: imageFocus }}
    />
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label={`Hero — ${site.name}`}
      data-hero-variant="campaign"
      className={cn(
        "relative isolate overflow-hidden",
        "flex flex-col sm:block sm:min-h-[92svh]",
        themeClasses.heroCanvas,
      )}
    >
      {/* Architecture plate — cropped poster on mobile, full bleed on desktop */}
      <div
        className={cn(
          "relative z-0 w-full shrink-0 overflow-hidden",
          "h-[min(48svh,420px)] min-h-[17.5rem]",
          "sm:absolute sm:inset-0 sm:z-0 sm:h-auto sm:min-h-[92svh]",
        )}
      >
        {disableScrollFx ? (
          <div aria-hidden className="absolute inset-0 sm:inset-[-2%]">
            {imageNode}
          </div>
        ) : (
          <motion.div
            aria-hidden
            className="absolute inset-0 will-change-transform sm:inset-[-8%]"
            style={{ y: driftY, scale: driftScale }}
          >
            {imageNode}
          </motion.div>
        )}

        {/* Desktop — cinematic scrims (unchanged intent) */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <div className="theme-hero-campaign-vignette absolute inset-0 opacity-90" />
          <div className="theme-hero-campaign-scrim-top absolute inset-0 opacity-70" />
          <div className="theme-hero-campaign-scrim-center absolute inset-0" />
          <div className="theme-hero-campaign-scrim-bottom absolute inset-0" />
          <div className="theme-hero-campaign-accent absolute inset-0 opacity-60" />
        </div>

        {/* Mobile — soft dissolve into the editorial deck (no black slab) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent via-shell-strong/35 to-shell-strong sm:hidden"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-shell-strong/45 to-transparent sm:hidden"
        />
      </div>

      {/* Copy deck — solid metropolitan panel on mobile; floating lower third on desktop */}
      <div
        className={cn(
          "relative z-10 w-full",
          "max-sm:[background-image:var(--gradient-shell-deep)] max-sm:text-inverse",
          "border-t border-accent-champagne/22 px-6 py-8",
          "pb-[max(1.25rem,env(safe-area-inset-bottom))]",
          "sm:absolute sm:inset-0 sm:flex sm:min-h-[92svh] sm:flex-col sm:justify-end",
          "sm:border-0 sm:bg-none sm:[background-image:none] sm:px-10 sm:py-0",
        )}
      >
        <div className="mx-auto w-full max-w-[920px] text-center sm:pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pt-[clamp(6.5rem,16vh,9rem)]">
          <motion.div
            custom={0}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : campaignReveal}
            className={cn(
              "mx-auto inline-flex w-fit max-w-full flex-col items-center gap-3",
              "sm:rounded-2xl sm:border sm:border-accent-champagne/22",
              "sm:bg-[linear-gradient(180deg,rgba(10,12,16,0.78)_0%,rgba(5,6,8,0.88)_100%)]",
              "sm:px-6 sm:py-3.5 sm:backdrop-blur-md",
              "sm:shadow-[0_12px_44px_-14px_rgba(0,0,0,0.58)]",
            )}
          >
            <p
              className={cn(
                "font-sans text-[0.65rem] font-semibold uppercase tracking-[0.34em]",
                "text-accent-champagne sm:text-[0.6rem] sm:tracking-[0.38em] sm:text-fog-soft",
              )}
            >
              {site.heroEyebrow}
            </p>

            <p
              className={cn(
                "font-sans text-[0.62rem] font-medium uppercase tracking-[0.3em]",
                "text-inverse-muted sm:text-[0.56rem] sm:tracking-[0.32em] sm:text-fog-soft/90",
              )}
            >
              {site.jvLine}
            </p>
          </motion.div>

          <motion.h1
            custom={0.1}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : campaignReveal}
            className={cn(
              "mx-auto mt-5 max-w-[16ch] text-balance font-display font-semibold tracking-[-0.03em]",
              "text-[clamp(2rem,7.2vw,4.15rem)] leading-[1.04] sm:mt-6 sm:leading-[1.02]",
              "text-inverse sm:text-fog-soft sm:[text-shadow:0_2px_32px_rgba(0,0,0,0.5)]",
            )}
          >
            <span className="block">{site.heroTitleLine1}</span>
            <span className="mt-[0.14em] block text-[0.88em] font-medium tracking-[-0.022em] text-inverse sm:text-fog-soft/96">
              {site.heroTitleLine2}
            </span>
          </motion.h1>

          <motion.p
            custom={0.16}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : campaignReveal}
            className={cn(
              "mx-auto mt-4 max-w-[34ch] font-sans text-[0.9375rem] font-medium leading-[1.62]",
              "text-inverse-muted sm:mt-5 sm:max-w-[38ch] sm:text-[0.975rem] sm:text-fog-soft/95",
              "sm:[text-shadow:0_1px_20px_rgba(0,0,0,0.55),0_2px_40px_rgba(0,0,0,0.35)]",
            )}
          >
            {site.heroSupporting}
          </motion.p>

          <motion.div
            custom={0.22}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : campaignReveal}
            className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            {whatsappHref ? (
              <OpenWhatsAppConciergeButton className={heroEnquiryClasses} placement="hero_wa">
                Request briefing
              </OpenWhatsAppConciergeButton>
            ) : (
              <OpenConciergeButton variant="hero-enquiry" className={heroEnquiryClasses}>
                Request briefing
              </OpenConciergeButton>
            )}

            <SecondaryButton
              href={exploreCta.href}
              variant="hero-campaign"
              className="min-h-[3rem] min-w-[min(100%,14rem)] px-7 tracking-[0.16em]"
            >
              {exploreCta.label}
            </SecondaryButton>
          </motion.div>

          {(content.campaignSpecLine ?? content.footnote) ? (
            <motion.div
              custom={0.28}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.38, duration: 0.65 }}
              className={cn(
                "mt-7 rounded-[14px] border border-accent-champagne/20 bg-shell/40 px-4 py-4",
                "backdrop-blur-[4px] sm:border-fog-soft/10 sm:bg-shell-strong/55 sm:px-5 sm:py-4",
              )}
            >
              {content.campaignSpecLine ? (
                <p className="font-sans text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.28em] text-accent-champagne sm:text-[0.7rem] sm:tracking-[0.3em]">
                  {content.campaignSpecLine}
                </p>
              ) : null}
              {content.footnote ? (
                <p
                  className={cn(
                    "font-sans text-[0.6875rem] leading-[1.55] text-inverse-muted sm:text-fog-soft/72 sm:text-[0.7rem]",
                    content.campaignSpecLine ? "mt-2.5" : undefined,
                  )}
                >
                  {content.footnote}
                </p>
              ) : null}
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
