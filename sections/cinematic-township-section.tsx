"use client";

import { useState } from "react";

import Image from "next/image";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { staggerChild, staggerContainer } from "@/animations";
import { TownshipFullExperienceDialog } from "@/components/cinematic-township/township-full-experience-dialog";
import { TownshipImmersiveVideoBand } from "@/components/cinematic-township/township-immersive-video-band";
import { Container } from "@/components/ui/container";
import { resolveTownshipFlythroughSrc } from "@/lib/content/township-video";
import type { CinematicTownshipContent } from "@/lib/content/types";
import { cn } from "@/lib/cn";

/** Near-neutral vignette tint for masonry still thumbs */
const STILL_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZThlMmRjIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9zdmc+";

const editorialReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] },
  },
};

export function CinematicTownshipSection({ content }: { content: CinematicTownshipContent }) {
  const flythroughSrc = resolveTownshipFlythroughSrc();

  const reduceMotion = useReducedMotion();

  const [cinemaOpen, setCinemaOpen] = useState(false);

  return (
    <section
      id={content.sectionId}
      aria-labelledby="cinematic-township-heading"
      className={cn(
        "scroll-mt-[5.625rem] border-t border-accent-bronze/10 bg-twilight-soft/45 sm:scroll-mt-28",
        "motion-reduce:bg-twilight-soft/55",
      )}
    >
      <TownshipImmersiveVideoBand
        eyebrow={content.eyebrow}
        flythroughSrc={flythroughSrc}
        posterAlt={content.poster.alt}
        posterCaption={content.poster.caption}
        posterSrc={content.poster.src}
        headlineLines={content.headlineLines}
        reducedMotion={reduceMotion === true}
        immersiveOpen={cinemaOpen}
        unavailableNote={content.videoUnavailable}
        fullExperienceLabel={content.fullCtaLabel}
        onRequestFullExperience={() => setCinemaOpen(true)}
      />

      <Container>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -10% 0px" }}
          variants={reduceMotion ? undefined : editorialReveal}
          className="mx-auto flex max-w-[min(880px,calc(100vw-2.5rem))] flex-col gap-gallery-gap pb-section-y pt-[clamp(2.75rem,7vw,4rem)]"
        >
          <p className="font-sans text-[1.025rem] leading-[1.78] tracking-[0.01em] text-muted sm:text-[1.06rem] sm:leading-[1.74]">
            {content.lead}
          </p>

          <motion.ul
            role="list"
            variants={reduceMotion ? undefined : staggerContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.12 }}
            className={cn(
              "grid gap-5 sm:grid-cols-2 sm:gap-5 lg:gap-6",
              "motion-reduce:gap-6",
            )}
          >
            {content.stills.map((still) => (
              <motion.li
                key={still.key}
                variants={reduceMotion ? undefined : staggerChild}
                className={cn(
                  "group relative overflow-hidden rounded-[clamp(14px,_2vw,22px)]",
                  "aspect-[16/13] shadow-soft ring-1 ring-black/[0.04]",
                  reduceMotion
                    ? ""
                    : "ease-luxury supports-[pointer:fine]:motion-safe:hover:brightness-[1.02]",
                )}
              >
                <Image
                  alt={still.caption}
                  fill
                  className={cn(
                    "object-cover object-center transition-transform duration-[1100ms] ease-luxury",
                    reduceMotion
                      ? ""
                      : "supports-[pointer:fine]:motion-safe:group-hover:scale-[1.017]",
                  )}
                  decoding="async"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={STILL_BLUR}
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  src={still.src}
                  quality={82}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/74 opacity-94 mix-blend-multiply transition-opacity duration-[900ms]"
                />
                <div className="pointer-events-none absolute bottom-ribbon left-pillar">
                  <span className="font-sans text-[0.6rem] uppercase tracking-[0.34em] text-fog-strong/92">
                    {still.caption}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <p
            className={cn(
              "font-sans text-[0.5975rem] uppercase leading-snug tracking-[0.32em]",
              "text-muted sm:text-micro sm:tracking-[0.36em]",
            )}
          >
            {content.attributionTail}
          </p>
        </motion.div>
      </Container>

      <TownshipFullExperienceDialog
        posterSrc={content.poster.src}
        titleLabel={content.dialogTitle}
        videoSrc={flythroughSrc}
        open={cinemaOpen}
        onClose={() => setCinemaOpen(false)}
      />
    </section>
  );
}
