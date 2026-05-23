"use client";

import { motion, useReducedMotion } from "framer-motion";

import {
  storytellingChapter,
  storytellingChapterLite,
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

/** Metropolitan narrative — skyline ambition, IT corridor confidence, restrained pacing. */
export function StorytellingUrbanSection({ content }: { content: StorytellingContent }) {
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
    editorialStats,
    storyFrame,
    immersiveFrame,
    shoulderLine,
  } = content;

  const sceneV = lite ? storytellingSceneLite : storytellingScene;
  const chapterV = lite ? storytellingChapterLite : storytellingChapter;
  const whisperV = lite ? storytellingWhisperLite : storytellingWhisper;

  const leadLine = openingLines[0];
  const supportLine = openingLines[1];

  return (
    <section
      id="story"
      aria-labelledby="story-urban-heading"
      data-story-variant="urban"
      className={cn(
        "relative overflow-x-clip bg-surface pb-section-y",
        "scroll-mt-[5.625rem] sm:scroll-mt-28",
        "border-t border-accent-bronze/10",
        "pt-[clamp(2.25rem,5.5vw,3.25rem)]",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,hsla(220,18%,90%,0.45),transparent_52%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_94%_72%,hsla(225,14%,18%,0.06),transparent_44%)]"
      />

      <Container className="relative z-10 min-w-0">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: lite ? 0.14 : 0.22 }}
          variants={reduceMotion ? undefined : sceneV}
          className="grid min-w-0 gap-12 lg:grid-cols-12 lg:items-end lg:gap-x-10"
        >
          <div className="min-w-0 lg:col-span-5">
            <motion.p
              variants={reduceMotion ? undefined : whisperV}
              className="font-sans text-[0.58rem] uppercase tracking-[0.38em] text-accent-bronze sm:text-micro sm:tracking-[0.42em]"
            >
              <span className="sm:hidden">{eyebrowMobile}</span>
              <span className="hidden sm:inline">{eyebrow}</span>
            </motion.p>

            <motion.h2
              id="story-urban-heading"
              variants={reduceMotion ? undefined : chapterV}
              className={cn(
                "mt-5 text-balance font-display font-semibold tracking-[-0.026em] text-foreground",
                "text-[clamp(2.15rem,min(10vw,3.85rem),4.35rem)] leading-[0.99]",
              )}
            >
              {primaryHeadline.lines.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </motion.h2>

            {leadLine ? (
              <motion.p
                variants={reduceMotion ? undefined : whisperV}
                className="mt-6 max-w-[44ch] font-sans text-[1.04rem] font-medium leading-[1.72] text-muted sm:text-[1.08rem]"
              >
                {leadLine}
              </motion.p>
            ) : null}

            {supportLine ? (
              <motion.p
                variants={reduceMotion ? undefined : whisperV}
                className="mt-4 max-w-[44ch] font-sans text-[0.98rem] font-medium leading-[1.68] text-muted"
              >
                {supportLine}
              </motion.p>
            ) : null}

            <motion.blockquote
              variants={reduceMotion ? undefined : chapterV}
              className="mt-8 border-l-2 border-accent-gold/55 pl-5"
            >
              <p className="font-display text-[clamp(1.25rem,3.2vw,1.75rem)] font-semibold leading-[1.18] tracking-[-0.015em] text-foreground">
                {bridgeQuote}
              </p>
            </motion.blockquote>
          </div>

          <motion.div className="min-w-0 lg:col-span-7" variants={reduceMotion ? undefined : chapterV}>
            <EditorialParallaxFrame
              alt={storyFrame.alt}
              className="aspect-[4/5] w-full min-h-[min(58vh,480px)] sm:min-h-[min(68vh,560px)] lg:min-h-[min(74vh,640px)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={storyFrame.src}
              tone="skyline-vertical"
            />
          </motion.div>
        </motion.div>

        {riverLines.length > 0 ? (
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.18 }}
            variants={reduceMotion ? undefined : sceneV}
            className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:mt-24"
          >
            {riverLines.slice(0, 2).map((line) => (
              <motion.p
                key={line}
                variants={reduceMotion ? undefined : whisperV}
                className="font-sans text-[1rem] leading-[1.74] text-muted sm:text-[1.035rem]"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        ) : null}

        {content.lifestyleChapters != null && content.lifestyleChapters.length > 0 ? (
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.16 }}
            variants={reduceMotion ? undefined : sceneV}
            className="mt-16 grid gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-20"
          >
            {content.lifestyleChapters.map((chapter) => (
              <motion.article
                key={chapter.label}
                variants={reduceMotion ? undefined : whisperV}
                className="rounded-[20px] border border-accent-bronze/18 bg-fog-soft p-loft"
              >
                <p className="font-sans text-[0.56rem] font-semibold uppercase tracking-[0.32em] text-accent-bronze">
                  {chapter.label}
                </p>
                <h3 className="mt-2 font-display text-[1.15rem] font-semibold tracking-[-0.015em] text-foreground">
                  {chapter.headline}
                </h3>
                <p className="mt-3 font-sans text-[0.9rem] font-medium leading-[1.62] text-muted">{chapter.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        ) : null}

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={reduceMotion ? undefined : sceneV}
          className={cn(
            "mt-16 overflow-hidden rounded-[clamp(24px,3vw,30px)] border border-accent-bronze/18 bg-fog-soft shadow-soft lg:mt-20",
          )}
        >
          <div className="grid divide-y divide-accent-bronze/12 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {editorialStats.map((stat) => (
              <motion.div
                key={stat.figure + stat.heading}
                variants={reduceMotion ? undefined : whisperV}
                className="flex flex-col gap-2 px-6 py-8 sm:px-7 sm:py-9"
              >
                <span className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tabular-nums tracking-[-0.03em] text-foreground">
                  {stat.figure}
                </span>
                <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-accent-bronze">
                  {stat.heading}
                </span>
                <p className="font-sans text-[0.88rem] font-medium leading-[1.58] text-muted">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: lite ? 0.12 : 0.2 }}
          variants={reduceMotion ? undefined : sceneV}
          className="mt-16 min-w-0 lg:mt-20"
        >
          <EditorialParallaxFrame
            alt={immersiveFrame.alt}
            className="aspect-[21/10] w-full sm:aspect-[21/9]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 85vw, 72vw"
            src={immersiveFrame.src}
            tone="skyline-horizontal"
          />
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.4 }}
          variants={reduceMotion ? undefined : whisperV}
          className="mx-auto mt-12 max-w-[40ch] text-center font-sans text-[0.6rem] uppercase tracking-[0.28em] text-muted sm:mt-14"
        >
          {shoulderLine}
        </motion.p>

        <p className="mt-4 text-center font-sans text-[0.58rem] uppercase tracking-[0.24em] text-muted">
          {mediaAttribution}
        </p>
      </Container>
    </section>
  );
}
