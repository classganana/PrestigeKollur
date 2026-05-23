"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  storytellingChapter,
  storytellingChapterLite,
  storytellingImmersive,
  storytellingImmersiveLite,
  storytellingScene,
  storytellingSceneLite,
  storytellingWhisper,
  storytellingWhisperLite,
} from "@/animations";

import { EditorialParallaxFrame } from "@/components/storytelling/editorial-parallax-frame";

import { Container } from "@/components/ui/container";
import type { StorytellingContent } from "@/lib/content/types";
import { usePreferLiteMotion } from "@/hooks/use-prefer-lite-motion";

import { cn } from "@/lib/cn";
import { StorytellingUrbanSection } from "@/sections/storytelling/storytelling-urban-section";

/** Post-hero narrative — editorial hospitality pacing with campaign-grade photography where it earns space. */

function StorytellingEditorialSection({ content }: { content: StorytellingContent }) {
  const reduceMotion = useReducedMotion();
  const lite = usePreferLiteMotion();
  const {
    mediaAttribution,
    eyebrow,
    eyebrowMobile,
    primaryHeadline,
    openingLines,
    bridgeQuote,
    riverLines,
    immersedLine,
    shoulderLine,
    editorialStats,
    storyFrame,
    immersiveFrame,
  } = content;

  const sceneV = lite ? storytellingSceneLite : storytellingScene;
  const chapterV = lite ? storytellingChapterLite : storytellingChapter;
  const whisperV = lite ? storytellingWhisperLite : storytellingWhisper;
  const immersiveV = lite ? storytellingImmersiveLite : storytellingImmersive;

  return (
    <section
      id="story"
      aria-labelledby="story-identity-heading"
      className={cn(
        "relative overflow-x-clip bg-surface pb-section-y",
        "scroll-mt-[5.625rem] sm:scroll-mt-28",
        "pt-[clamp(7.25rem,min(29vw),8rem)] lg:pt-[clamp(3.5rem,11vw,6.75rem)]",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_12%,hsla(38,36%,92%,0.52),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_64%,hsla(150,16%,23%,0.07),transparent_48%)]"
      />
      {!lite ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.041] mix-blend-multiply"
        >
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="story-grain">
              <feTurbulence
                baseFrequency="0.82"
                numOctaves="3"
                stitchTiles="stitch"
                type="fractalNoise"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect height="100%" width="100%" filter="url(#story-grain)" />
          </svg>
        </div>
      ) : null}

      <Container className="relative z-10 min-w-0">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: lite ? 0.14 : 0.24,
            margin: "0px 0px -10% 0px",
          }}
          variants={reduceMotion ? undefined : sceneV}
          className="grid min-w-0 gap-y-12 sm:gap-y-14 lg:grid-cols-12 lg:items-end lg:gap-x-12 lg:gap-y-16"
        >
          <div className="flex min-w-0 flex-col gap-8 sm:gap-10 lg:col-span-5 xl:col-span-4 lg:pb-16 xl:pb-[4.75rem]">
            <motion.p
              variants={reduceMotion ? undefined : whisperV}
              className={cn(
                "font-sans uppercase leading-snug text-accent-olive/[0.9]",
                "text-[clamp(0.57rem,2.9vw,0.6875rem)] tracking-[0.26em] sm:text-micro sm:tracking-[0.4em]",
              )}
            >
              <span className="inline sm:hidden">
                {eyebrowMobile}
              </span>
              <span className="hidden sm:inline">{eyebrow}</span>
            </motion.p>

            <div className="flex min-w-0 gap-ribbon">
              <div
                aria-hidden
                className="mt-[0.52em] hidden h-[min(12rem,calc(100%-0.5rem))] w-px bg-gradient-to-b from-accent-gold/85 via-accent-olive/32 to-transparent sm:block"
              />
              <div className="min-w-0 space-y-6 sm:space-y-7">
                <motion.h2
                  id="story-identity-heading"
                  variants={reduceMotion ? undefined : chapterV}
                  className={cn(
                    "text-balance font-display font-light tracking-[-0.02em] text-foreground",
                    "text-[clamp(2.05rem,min(11.2vw,3.95rem),4.75rem)] leading-[1] sm:text-[clamp(2.25rem,5.6vw,4.05rem)] sm:leading-[0.988] xl:text-[clamp(2.65rem,5.9vw,4.9rem)]",
                  )}
                >
                  {primaryHeadline.lines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </motion.h2>
                <motion.p
                  variants={reduceMotion ? undefined : whisperV}
                  className="hidden max-w-[40ch] font-sans text-[0.6575rem] uppercase leading-snug tracking-[0.38em] text-muted sm:inline sm:text-[0.68rem] sm:tracking-[0.42em]"
                >
                  {mediaAttribution}
                </motion.p>
              </div>
            </div>

            <div className="min-w-0 space-y-5 sm:space-y-relax">
              {openingLines.map((line) => (
                <motion.p
                  key={line}
                  variants={reduceMotion ? undefined : whisperV}
                  className="hyphens-none break-words text-pretty font-sans text-[0.9825rem] leading-[1.72] tracking-[0.01em] text-muted sm:max-w-[41ch] sm:text-[1.06rem] sm:leading-[1.78]"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            className="min-w-0 lg:col-span-7 lg:col-start-6 xl:col-span-7 xl:col-start-6"
            variants={reduceMotion ? undefined : chapterV}
          >
            <div className="relative min-w-0 lg:-mr-[max(0px,calc((100vw-min(1180px,100vw))/2+2rem))]">
              <EditorialParallaxFrame
                alt={storyFrame.alt}
                className="aspect-[3/4] w-full min-h-[min(72vh,640px)] lg:min-h-[min(82vh,780px)]"
                sizes="(max-width: 1024px) 100vw, 54vw"
                src={storyFrame.src}
                tone="grove-vertical"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: lite ? 0.12 : 0.22 }}
          variants={reduceMotion ? undefined : sceneV}
          className="mt-[4.5rem] min-w-0 grid gap-14 sm:mt-20 sm:gap-16 lg:mt-36 lg:grid-cols-12 lg:gap-x-12"
        >
          <div className="hidden justify-center lg:col-span-1 lg:flex">
            <div
              aria-hidden
              className="h-full w-px bg-gradient-to-b from-transparent via-accent-bronze/38 to-transparent"
            />
          </div>

          <motion.blockquote
            className="min-w-0 lg:col-span-5"
            variants={reduceMotion ? undefined : chapterV}
          >
            <p className="hyphens-none break-words font-display text-[clamp(1.58rem,min(9.65vw,1.95rem),2.92rem)] leading-[1.1] tracking-[-0.015em] text-foreground/93 sm:text-[clamp(1.84rem,3.65vw,3.05rem)] sm:tracking-normal">
              {bridgeQuote}
            </p>
          </motion.blockquote>

          <motion.div
            className="min-w-0 space-y-5 sm:space-y-relax lg:col-span-5 lg:col-start-7"
            variants={reduceMotion ? undefined : chapterV}
          >
            {riverLines.map((line) => (
              <p
                key={line}
                className="hyphens-none break-words text-pretty font-sans text-[1.015rem] leading-[1.75] tracking-[0.01em] text-muted sm:max-w-[46ch] sm:text-[1.06rem] sm:leading-[1.8]"
              >
                {line}
              </p>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: lite ? 0.18 : 0.32 }}
          variants={reduceMotion ? undefined : sceneV}
          className={cn(
            "relative my-24 overflow-hidden rounded-[clamp(26px,_3vw,_32px)] border border-accent-bronze/17 bg-gradient-to-br from-fog-strong/92 via-ivory/72 to-soft-stone/62 shadow-soft lg:my-[clamp(7rem,13vw,8.75rem)]",
            lite ? "backdrop-blur-none" : "backdrop-blur-[16px]",
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(128deg,hsla(32,42%,93%,0.55),transparent_52%,hsla(150,22%,82%,0.12))]"
          />

          <div className="relative grid divide-accent-bronze/16 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {editorialStats.map((stat) => (
              <motion.div
                key={stat.figure + stat.heading}
                variants={reduceMotion ? undefined : whisperV}
                className={cn(
                  "group flex min-w-0 flex-col gap-3 px-6 py-10 transition-[background-color,transform] duration-[600ms] ease-luxury sm:px-8 sm:py-11 hover:bg-fog-strong/52 motion-reduce:transition-none motion-reduce:hover:transform-none",
                  !lite && "lg:hover:-translate-y-px",
                )}
              >
                <span className="font-display text-[clamp(2.25rem,4.35vw,3.65rem)] font-light tracking-[-0.032em] text-forest tabular-nums">
                  {stat.figure}
                </span>
                <span className="hyphens-none break-words font-sans text-[0.628rem] uppercase leading-snug tracking-[0.25em] text-accent-olive/88 xs:text-[0.66rem] sm:text-[0.7rem] sm:tracking-[0.36em]">
                  {stat.heading}
                </span>
                <p className="max-w-none hyphens-none break-words font-sans text-[0.92rem] leading-[1.6] text-muted sm:max-w-[24ch] sm:text-[0.95rem] sm:leading-[1.64]">
                  {stat.note}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: lite ? 0.12 : 0.28 }}
          variants={reduceMotion ? undefined : immersiveV}
          className="min-w-0"
        >
          <EditorialParallaxFrame
            alt={immersiveFrame.alt}
            className="aspect-[21/13] w-full sm:aspect-[21/11] lg:aspect-[21/9]"
            sizes="100vw"
            src={immersiveFrame.src}
            tone="twilight-horizontal"
          />

          <p className="mx-auto mt-9 max-w-full hyphens-none break-words px-1 text-pretty text-center font-sans text-[0.985rem] leading-[1.76] tracking-[0.01em] text-muted sm:mt-11 sm:max-w-[44ch] sm:text-[1.02rem] sm:leading-[1.8]">
            {immersedLine}
          </p>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.55 }}
          variants={reduceMotion ? undefined : whisperV}
          className="mx-auto mt-16 max-w-full hyphens-none break-words px-2 text-center font-sans text-[0.61rem] uppercase leading-snug tracking-[0.28em] text-accent-olive/72 sm:mt-[4.75rem] sm:max-w-[38ch] sm:text-micro sm:tracking-[0.4em]"
        >
          {shoulderLine}
        </motion.p>
      </Container>
    </section>
  );
}

export type StorytellingSectionVariant = "editorial" | "urban";

type StorytellingSectionProps = {
  content: StorytellingContent;
  variant?: StorytellingSectionVariant;
};

/** Storytelling router — editorial township vs metropolitan urban narrative. */
export function StorytellingIdentitySection({ content, variant = "editorial" }: StorytellingSectionProps) {
  if (variant === "urban") {
    return <StorytellingUrbanSection content={content} />;
  }

  return <StorytellingEditorialSection content={content} />;
}
