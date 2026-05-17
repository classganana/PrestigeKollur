"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Maximize2, Volume2, VolumeX } from "lucide-react";

import { SecondaryButton } from "@/components/ui/secondary-button";
import { townshipFlythroughMimeType } from "@/constants/cinematic-township";
import { cn } from "@/lib/cn";

const POSTER_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWQyYTIzIiBmaWxsLW9wYWNpdHk9Ii4xMiIvPjwvc3ZnPg==";

type Props = {
  flythroughSrc: string;
  posterSrc: string;
  posterCaption: string;
  posterAlt: string;
  eyebrow: string;
  headlineLines: readonly string[];
  reducedMotion: boolean;
  immersiveOpen: boolean;
  fullExperienceLabel: string;
  unavailableNote: string;
  onRequestFullExperience: () => void;
};

/**
 * Full-bleed ambient video — muted autoplay when the band is in view (browser policy).
 * Pauses when off-screen to limit decode + battery. Expanded dialog carries full chrome + audio.
 */

export function TownshipImmersiveVideoBand({
  flythroughSrc,
  posterSrc,
  posterCaption,
  posterAlt,
  eyebrow,
  headlineLines,
  reducedMotion,
  immersiveOpen,
  fullExperienceLabel,
  unavailableNote,
  onRequestFullExperience,
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const [inView, setInView] = useState(false);

  const [videoReady, setVideoReady] = useState(false);

  const [muted, setMuted] = useState(true);

  const [failed, setFailed] = useState(false);

  const shouldRunVideo = !reducedMotion && !failed && inView && !immersiveOpen;

  useEffect(() => {
    setFailed(false);

    setVideoReady(false);
  }, [flythroughSrc]);

  useEffect(() => {
    const root = rootRef.current;

    if (root === null || reducedMotion) return undefined;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry?.isIntersecting === true);
      },
      { root: null, threshold: 0.22, rootMargin: "0px 0px -8% 0px" },
    );

    obs.observe(root);

    return () => obs.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const v = videoRef.current;

    if (v === null || reducedMotion || failed) return undefined;

    if (!shouldRunVideo) {
      v.pause();

      return undefined;
    }

    v.muted = muted;

    void v.play().catch(() => {
      setFailed(true);
    });

    return undefined;
  }, [shouldRunVideo, muted, reducedMotion, failed, flythroughSrc]);

  useEffect(() => {
    if (immersiveOpen) {
      videoRef.current?.pause();
    }
  }, [immersiveOpen]);

  const handleMuteToggle = () => {
    const v = videoRef.current;

    const nextMuted = !muted;

    setMuted(nextMuted);

    if (v === null || reducedMotion === true || failed === true) return;

    if (inView !== true || immersiveOpen === true) return;

    v.muted = nextMuted;

    void v.play().catch(() => {
      setFailed(true);
    });
  };

  return (
    <header
      ref={rootRef}
      className={cn(
        "relative isolate min-h-[min(88svh,920px)] w-full overflow-hidden",
        "border-b border-accent-bronze/15",
      )}
    >
      {!reducedMotion && !failed ? (
        <video
          key={flythroughSrc}
          ref={videoRef}
          aria-hidden
          className={cn(
            "absolute inset-0 z-[1] h-full w-full object-cover",
            videoReady ? "opacity-100" : "opacity-0",
            "transition-opacity duration-[1200ms] ease-out motion-reduce:transition-none",
            "motion-reduce:opacity-0",
          )}
          playsInline
          loop
          muted={muted}
          preload={inView && !immersiveOpen ? "auto" : "metadata"}
          poster={posterSrc}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setFailed(true)}
        >
          <source src={flythroughSrc} type={townshipFlythroughMimeType(flythroughSrc)} />
        </video>
      ) : null}

      <div
        aria-hidden={videoReady && !reducedMotion && !failed}
        className={cn(
          "absolute inset-0 z-[2] transition-opacity duration-[1000ms] ease-out motion-reduce:transition-none",
          videoReady && !reducedMotion && !failed ? "pointer-events-none opacity-0" : "opacity-100",
        )}
      >
        <Image
          fill
          alt={posterAlt}
          className="object-cover object-[center_42%]"
          decoding="async"
          priority
          placeholder="blur"
          blurDataURL={POSTER_BLUR}
          sizes="100vw"
          src={posterSrc}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-[#030807]/94 via-[#061511]/44 to-transparent max-sm:from-[#030807]/55 max-sm:via-[#061511]/22 sm:to-[#071e18]/65"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[40%] bg-gradient-to-t from-black/55 via-black/18 to-transparent max-sm:h-[32%] sm:h-[56%] sm:from-black/88 sm:via-black/38"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-[58%] bg-gradient-to-r from-black/38 via-black/12 to-transparent max-sm:w-[45%] sm:w-[min(100%,620px)] sm:from-black/72 sm:via-black/28"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[6] flex justify-end px-[clamp(1rem,4vw,2.75rem)] pt-[clamp(0.75rem,3vw,2rem)] sm:pt-[clamp(1rem,4vw,2rem)]">
        <div className="pointer-events-auto flex flex-wrap items-center justify-end gap-1.5 rounded-full bg-black/32 px-1.5 py-1.5 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.12] backdrop-blur-xl sm:gap-2 sm:bg-black/38 sm:px-2 sm:py-2">
          {!reducedMotion && !failed ? (
            <SecondaryButton
              aria-pressed={!muted}
              type="button"
              className={cn(
                "min-h-touch rounded-full border-white/28 bg-black/44 px-3 py-2.5 text-[0.55rem]",
                "text-[#f4efe6] backdrop-blur-md hover:border-accent-champagne/55 hover:bg-black/72 hover:text-accent-champagne",
                "sm:px-5 sm:py-3 sm:text-[0.58rem]",
              )}
              onClick={handleMuteToggle}
            >
              {muted ? (
                <span className="inline-flex items-center gap-2">
                  <VolumeX aria-hidden className="size-4" strokeWidth={1.35} />
                  Sound on
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Volume2 aria-hidden className="size-4" strokeWidth={1.35} />
                  Mute
                </span>
              )}
            </SecondaryButton>
          ) : null}

          <SecondaryButton
            type="button"
            className={cn(
              "min-h-touch rounded-full border-accent-gold/58 bg-black/46 px-3 py-2.5 text-[0.55rem]",
              "text-accent-champagne backdrop-blur-md hover:bg-black/78 hover:border-accent-champagne/78",
              "sm:px-5 sm:py-3 sm:text-[0.58rem]",
            )}
            onClick={onRequestFullExperience}
          >
            <span className="inline-flex items-center gap-2">
              <Maximize2 aria-hidden className="size-4" strokeWidth={1.35} />
              {fullExperienceLabel}
            </span>
          </SecondaryButton>
        </div>
      </div>

      <div className="pointer-events-none relative z-[5] mx-auto flex min-h-[min(88svh,920px)] w-full max-w-[1240px] flex-col justify-end px-[clamp(1rem,4vw,2.75rem)] pb-[clamp(1.35rem,5vw,4.25rem)] pt-[clamp(3.75rem,12vw,11rem)] max-sm:pb-20 sm:pb-[clamp(2rem,7vw,4.25rem)] sm:pt-[clamp(5.25rem,18vw,11rem)]">
        <div
          className={cn(
            "pointer-events-auto max-w-[min(38rem,calc(100vw-2rem))] space-y-3 sm:space-y-[clamp(1.25rem,3.5vw,1.75rem)]",
            "rounded-[clamp(16px,_3.2vw,_28px)] border border-white/[0.14] bg-black/40 px-[clamp(1rem,_3.8vw,_1.85rem)] py-[clamp(1rem,_3.4vw,_2rem)]",
            "shadow-[0_28px_90px_-28px_rgba(0,0,0,0.72)] ring-1 ring-inset ring-white/[0.06]",
            "backdrop-blur-lg backdrop-saturate-[1.12] supports-[backdrop-filter]:bg-black/32 sm:rounded-[clamp(18px,_3.6vw,_28px)] sm:bg-black/54 sm:px-[clamp(1.15rem,_4.2vw,_1.85rem)] sm:py-[clamp(1.35rem,_4vw,_2rem)] sm:backdrop-blur-xl sm:supports-[backdrop-filter]:bg-black/42",
          )}
        >
          <p className="font-sans uppercase leading-snug tracking-[0.28em] text-accent-champagne [font-size:clamp(0.52rem,2.2vw,0.6525rem)] sm:tracking-[0.38em]">
            {eyebrow}
          </p>

          <h2
            id="cinematic-township-heading"
            className={cn(
              "font-display font-light tracking-[-0.026em] text-balance leading-[1.08] text-[#f7f3eb]",
              "[font-size:clamp(1.55rem,min(6.8vw,4.35rem),4.35rem)] sm:leading-[1.06]",
              "[text-shadow:0_1px_0_rgba(4,14,11,0.35),0_12px_42px_rgba(2,10,8,0.45)]",
            )}
          >
            {headlineLines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </h2>

          {(failed === true || reducedMotion === true) && (
            <p className="max-w-xl font-sans text-[0.875rem] leading-relaxed text-[#e8e4dc]/88">
              {unavailableNote}
            </p>
          )}

          <div className="border-t border-white/[0.1] pt-2.5 sm:border-white/[0.12] sm:pt-[clamp(1rem,3vw,1.35rem)]">
            <p className="font-sans text-[0.5625rem] uppercase leading-snug tracking-[0.26em] text-[#d8d4cb]/88 sm:text-[0.5975rem] sm:tracking-[0.3em]">
              {posterCaption}
            </p>
            <p className="mt-1.5 font-sans text-[0.54rem] uppercase leading-relaxed tracking-[0.12em] text-[#c5c1b6]/78 sm:mt-2 sm:text-[0.5775rem] sm:tracking-[0.14em] md:tracking-[0.18em]">
              <span className="sm:hidden">Sound / expand for full playback.</span>
              <span className="hidden sm:inline">
                Muted ambient loop — enable sound above or expand for full playback + controls.
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
