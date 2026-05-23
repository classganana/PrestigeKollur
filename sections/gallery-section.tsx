"use client";

import NextImage from "next/image";

import { motion, useReducedMotion } from "framer-motion";

import { imageReveal } from "@/animations";

import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import type { GalleryContent } from "@/lib/content/types";

import { cn } from "@/lib/cn";

const tileChrome = cn(
  "group relative aspect-[9/13] overflow-hidden rounded-[26px]",
);

/** Bottom caption band — solid scrim + gradient so type stays legible on bright renders. */
function GalleryTileCaption({ caption }: { caption: string }) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(46%,12.5rem)] bg-gradient-to-t from-black/95 from-25% via-black/78 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[4.25rem] bg-black/88"
      />
      <figcaption className="absolute inset-x-0 bottom-0 z-[2] px-pillar pb-pillar pt-16">
        <span
          className={cn(
            "block font-sans text-[0.625rem] font-semibold uppercase leading-snug tracking-[0.22em]",
            "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_6px_20px_rgba(0,0,0,0.55)]",
            "sm:text-[0.6875rem] sm:tracking-[0.26em]",
          )}
        >
          {caption}
        </span>
      </figcaption>
    </>
  );
}

export default function GallerySection({ content }: { content: GalleryContent }) {
  const reduceMotion = useReducedMotion();
  const lifestyleFrames = content.lifestyleFrames;

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="scroll-mt-[5.625rem] sm:scroll-mt-28">
      <Container>
        <RevealAnimation className="mb-gallery-gap lg:mb-orbit">
          <SectionHeading
            id="gallery-heading"
            eyebrow={content.heading.eyebrow}
            title={content.heading.title}
            lead={content.heading.lead}
          />
        </RevealAnimation>

        <RevealAnimation className="mb-6 lg:mb-8">
          <h3 className="font-display text-fluid-section font-light tracking-[0.12em] text-foreground/[0.9]">
            {content.lifestyleHeading}
          </h3>
          <p className="mt-4 max-w-[56ch] font-sans text-body-relaxed text-muted">
            {content.lifestyleLead}
          </p>
        </RevealAnimation>

        <div className="grid grid-cols-2 gap-gallery-gap lg:grid-cols-4">
          {lifestyleFrames.map((frame, index) => (
            <figure
              key={`${frame.src}-${index}`}
              className={cn(
                tileChrome,
                index === lifestyleFrames.length - 1 && "shadow-subtleGlow",
              )}
            >
              <NextImage
                alt={frame.alt}
                fill
                className="z-0 object-cover object-left transition-[opacity,filter,transform] duration-[720ms] ease-luxury group-hover:brightness-[1.03] motion-reduce:transition-none md:group-hover:-translate-y-px md:group-hover:scale-[1.01]"
                decoding="async"
                loading="lazy"
                quality={82}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                src={frame.src}
              />

              <GalleryTileCaption caption={frame.caption} />
            </figure>
          ))}
        </div>

        <RevealAnimation className="mb-6 mt-[clamp(3rem,10vw,4.5rem)] lg:mb-8">
          <h3 className="font-display text-fluid-section font-light tracking-[0.12em] text-foreground/[0.9]">
            {content.platesHeading}
          </h3>
          <p className="mt-4 max-w-[56ch] font-sans text-body-relaxed text-muted">
            {content.platesLead}
          </p>
        </RevealAnimation>

        <div className="grid grid-cols-2 gap-gallery-gap lg:grid-cols-4">
          {content.platesFrames.map((frame, index) => (
            <figure key={frame.src} className={cn(tileChrome, index === content.platesFrames.length - 1 && "shadow-subtleGlow")}>
              <NextImage
                alt={frame.alt}
                fill
                className="z-0 object-cover transition-[opacity,filter,transform] duration-[720ms] ease-luxury group-hover:brightness-[1.03] motion-reduce:transition-none md:group-hover:-translate-y-px md:group-hover:scale-[1.01]"
                decoding="async"
                loading="lazy"
                quality={82}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                src={frame.src}
              />

              <GalleryTileCaption caption={frame.caption} />
            </figure>
          ))}
        </div>

        <motion.figure
          className="relative mt-gallery-gap aspect-[21/28] overflow-hidden rounded-[clamp(26px,_4vw,_40px)] border border-accent-bronze/26 shadow-soft sm:aspect-[21/16] lg:aspect-[21/10]"
          variants={reduceMotion ? undefined : imageReveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.35 }}
        >
          <NextImage
            alt={content.wideCinematicFrame.alt}
            src={content.wideCinematicFrame.src}
            fill
            sizes="100vw"
            loading="lazy"
            decoding="async"
            quality={84}
            className="object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-forest-strong/78 via-transparent to-transparent" />

          <figcaption className="absolute inset-x-loft inset-y-auto bottom-loft">
            <p className="mb-4 max-w-xl font-display text-fluid-display uppercase tracking-[0.24em] text-fog-strong/94">
              {content.wideCinematicFrame.caption}
            </p>
            <p className="max-w-xl font-sans text-body-relaxed text-fog-soft">
              {content.wideCinematicCaption}
            </p>
          </figcaption>
        </motion.figure>
      </Container>
    </section>
  );
}
