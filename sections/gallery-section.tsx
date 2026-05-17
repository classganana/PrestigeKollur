"use client";

import NextImage from "next/image";

import { motion, useReducedMotion } from "framer-motion";

import { imageReveal } from "@/animations";

import {
  GALLERY_PLATES_FRAMES,
  GALLERY_WIDE_CINEMATIC_FRAME,
  OFFICIAL_SITE_MEDIA_ATTRIBUTION,
  getGalleryLifestyleFrames,
} from "@/constants/brochure-media";
import { Container, RevealAnimation, SectionHeading } from "@/components/ui";

import { cn } from "@/lib/cn";

const tileChrome = cn(
  "group relative aspect-[9/13] overflow-hidden rounded-[26px]",
);

/** Gallery split: cinematic lifestyle/render selects vs. sanctioned master & floor excerpts. */

export default function GallerySection() {
  const reduceMotion = useReducedMotion();
  const lifestyleFrames = getGalleryLifestyleFrames();

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="scroll-mt-28">
      <Container>
        <RevealAnimation className="mb-gallery-gap lg:mb-orbit">
          <SectionHeading
            id="gallery-heading"
            eyebrow="Gallery"
            title="Lifestyle choreography first — plans anchored below."
            lead={`Elevations and amenity vignettes stay together; sanctioned master-plan, carpet plates, and the territorial graphic read as deliberate documentation (not misplaced “cinema”). ${OFFICIAL_SITE_MEDIA_ATTRIBUTION}`}
          />
        </RevealAnimation>

        <RevealAnimation className="mb-6 lg:mb-8">
          <h3 className="font-display text-fluid-section font-light tracking-[0.12em] text-foreground/[0.9]">
            Lifestyle & aerial renders
          </h3>
          <p className="mt-4 max-w-[56ch] font-sans text-body-relaxed text-muted">
            Curated elevations, aquatics, and interior vignettes. To swap in selects from your previous brochure site,
            mirror WebPs under{" "}
            <span className="whitespace-nowrap text-foreground/90">public/media/partner/</span>, then comma-list their
            public paths in `.env.local` using the companion variable documented in `.env.example` (CDN URLs also work
            after you allow the hostnames in Next image config).
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
                className="object-cover transition-[opacity,filter,transform] duration-[720ms] ease-luxury group-hover:brightness-[1.03] motion-reduce:transition-none md:group-hover:-translate-y-px md:group-hover:scale-[1.01]"
                decoding="async"
                loading="lazy"
                quality={82}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                src={frame.src}
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/78 via-black/38 to-transparent" />

              <figcaption className="absolute bottom-loft inset-x-pillar pb-pillar">
                <span className="font-sans text-micro uppercase tracking-[0.52em] text-[#faf7f1]/92">
                  {frame.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <RevealAnimation className="mb-6 mt-[clamp(3rem,10vw,4.5rem)] lg:mb-8">
          <h3 className="font-display text-fluid-section font-light tracking-[0.12em] text-foreground/[0.9]">
            Sanctioned plans & territorial plate
          </h3>
          <p className="mt-4 max-w-[56ch] font-sans text-body-relaxed text-muted">
            Architectural plates and GIS-style reads borrowed from Prestige-published collateral—they stay visually grouped here so township storytelling upstream can stay atmospheric.
          </p>
        </RevealAnimation>

        <div className="grid grid-cols-2 gap-gallery-gap lg:grid-cols-4">
          {GALLERY_PLATES_FRAMES.map((frame, index) => (
            <figure key={frame.src} className={cn(tileChrome, index === GALLERY_PLATES_FRAMES.length - 1 && "shadow-subtleGlow")}>
              <NextImage
                alt={frame.alt}
                fill
                className="object-cover transition-[opacity,filter,transform] duration-[720ms] ease-luxury group-hover:brightness-[1.03] motion-reduce:transition-none md:group-hover:-translate-y-px md:group-hover:scale-[1.01]"
                decoding="async"
                loading="lazy"
                quality={82}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                src={frame.src}
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/78 via-black/38 to-transparent" />

              <figcaption className="absolute bottom-loft inset-x-pillar pb-pillar">
                <span className="font-sans text-micro uppercase tracking-[0.48em] text-[#faf7f1]/88">
                  {frame.caption}
                </span>
              </figcaption>
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
            alt={GALLERY_WIDE_CINEMATIC_FRAME.alt}
            src={GALLERY_WIDE_CINEMATIC_FRAME.src}
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
              {GALLERY_WIDE_CINEMATIC_FRAME.caption}
            </p>
            <p className="max-w-xl font-sans text-body-relaxed text-fog-soft">
              Wide cinematic frame retained for tonal continuity—paired with labelled plan rows above instead of collapsing every asset into one “cinema” grid.
            </p>
          </figcaption>
        </motion.figure>
      </Container>
    </section>
  );
}
