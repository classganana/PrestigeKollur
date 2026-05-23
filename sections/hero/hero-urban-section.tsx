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
 * Metropolitan campaign hero — architecture leads, copy anchors the lower third.
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
      className="transform-gpu object-cover scale-[1.03] brightness-[0.94] contrast-[1.06] saturate-[0.88]"
      style={{ objectPosition: imageFocus }}
    />
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label={`Hero — ${site.name}`}
      data-hero-variant="campaign"
      className={cn("relative isolate min-h-[92svh] overflow-hidden", themeClasses.heroCanvas)}
    >
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {disableScrollFx ? (
          <div aria-hidden className="absolute inset-[-2%]">
            {imageNode}
          </div>
        ) : (
          <motion.div
            aria-hidden
            className="absolute inset-[-8%] will-change-transform"
            style={{ y: driftY, scale: driftScale }}
          >
            {imageNode}
          </motion.div>
        )}

        <div className="theme-hero-campaign-vignette absolute inset-0 opacity-90" />
        <div className="theme-hero-campaign-scrim-top absolute inset-0 opacity-70" />
        <div className="theme-hero-campaign-scrim-center absolute inset-0" />
        <div className="theme-hero-campaign-scrim-bottom absolute inset-0" />
        <div className="theme-hero-campaign-accent absolute inset-0 opacity-60" />
      </div>

      <div className="relative z-10 flex min-h-[92svh] flex-col justify-end">
        <div className="mx-auto w-full max-w-[920px] px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[clamp(6.5rem,16vh,9rem)] text-center sm:px-10">
          <motion.p
            custom={0}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : campaignReveal}
            className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.4em] text-accent-champagne/95 sm:text-[0.6rem] sm:tracking-[0.44em]"
          >
            {site.heroEyebrow}
          </motion.p>

          <motion.p
            custom={0.05}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : campaignReveal}
            className="mt-3 font-sans text-[0.54rem] font-medium uppercase tracking-[0.34em] text-accent-champagne/88 [text-shadow:0_1px_14px_rgba(0,0,0,0.45)] sm:text-[0.56rem]"
          >
            {site.jvLine}
          </motion.p>

          <motion.h1
            custom={0.1}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : campaignReveal}
            className={cn(
              "mx-auto mt-6 max-w-[16ch] text-balance font-display font-semibold tracking-[-0.03em]",
              "text-[clamp(2.15rem,7.2vw,4.15rem)] leading-[1.02]",
              "text-fog-soft [text-shadow:0_2px_32px_rgba(0,0,0,0.5)]",
            )}
          >
            <span className="block">{site.heroTitleLine1}</span>
            <span className="mt-[0.14em] block text-[0.88em] font-medium tracking-[-0.022em] text-fog-soft/96">
              {site.heroTitleLine2}
            </span>
          </motion.h1>

          <motion.p
            custom={0.16}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : campaignReveal}
            className="mx-auto mt-5 max-w-[34ch] font-sans text-[0.9375rem] font-medium leading-[1.62] text-fog-soft/95 [text-shadow:0_1px_20px_rgba(0,0,0,0.55),0_2px_40px_rgba(0,0,0,0.35)] sm:max-w-[38ch] sm:text-[0.975rem]"
          >
            {site.heroSupporting}
          </motion.p>

          <motion.div
            custom={0.22}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={reduceMotion ? undefined : campaignReveal}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
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
                "mt-7 rounded-[14px] border border-fog-soft/10 bg-forest-strong/35 px-4 py-4",
                "backdrop-blur-[4px] sm:px-5 sm:py-4",
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
                    "font-sans text-[0.6875rem] leading-[1.55] text-fog-soft/72 sm:text-[0.7rem]",
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
