"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Volume2, VolumeX, X } from "lucide-react";

import { SecondaryButton } from "@/components/ui/secondary-button";
import { cn } from "@/lib/cn";

type Props = {
  open: boolean;
  videoSrc: string;
  posterSrc: string;
  titleLabel: string;
  onClose: () => void;
};

export function TownshipFullExperienceDialog({
  open,
  videoSrc,
  posterSrc,
  titleLabel,
  onClose,
}: Props) {
  const reactId = useId();

  const titleId = `township-cinema-title-${reactId}`;

  const closeRef = useRef<HTMLButtonElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const [mounted, setMounted] = useState(false);

  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) setMuted(true);
  }, [open]);

  useEffect(() => {
    if (!open || !mounted) return undefined;

    const closeBtn = closeRef.current;

    closeBtn?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);

      document.body.style.overflow = prevOverflow;
    };
  }, [mounted, open, onClose]);

  useEffect(() => {
    if (!mounted || !open) return undefined;

    const v = videoRef.current;

    if (v === null) return undefined;

    v.pause();

    v.currentTime = 0;

    void v.play().catch(() => {
      /* Autoplay posture varies — native controls expose manual play */
    });

    return () => {
      v.pause();
    };
  }, [mounted, open, videoSrc]);

  useEffect(() => {
    const v = videoRef.current;

    if (v === null || !open) return;

    v.muted = muted;
  }, [muted, open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[140] flex items-center justify-center p-5 sm:p-10"
      role="presentation"
    >
      <button
        aria-label="Dismiss cinematic township overlay"
        className={cn(
          "absolute inset-0 bg-forest-strong/88 backdrop-blur-editorial opacity-100",
          "transition-opacity duration-300 ease-out",
        )}
        tabIndex={-1}
        type="button"
        onClick={onClose}
      />

      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className={cn(
          "relative isolate z-[1] w-[min(100%,min(1180px,calc(100dvw-2.75rem)))]",
          "overflow-hidden rounded-[clamp(22px,3vw,34px)] border border-accent-bronze/22",
          "bg-forest-strong shadow-elevated ring-1 ring-white/[0.04]",
        )}
        role="dialog"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(ellipse_140%_80%_at_72%_-12%,rgba(221,207,173,0.42),transparent_62%)]" />

        <div className="relative z-30 flex flex-wrap items-center gap-ribbon px-pillar pb-2 pt-gallery-gap sm:flex-nowrap sm:px-loft">
          <p
            className={cn(
              "font-display text-[clamp(1.45rem,min(6vw,1.94rem),1.94rem)] font-light tracking-[-0.024em]",
              "text-fog-strong/93",
            )}
            id={titleId}
          >
            {titleLabel}
          </p>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <SecondaryButton
              aria-pressed={!muted}
              className={cn(
                "min-h-[44px] rounded-full px-5 py-3 text-[0.58rem] sm:min-h-touch",
                "border-fog-strong/52 text-fog hover:border-accent-gold/60 hover:bg-fog-soft/10 hover:text-accent-champagne",
              )}
              type="button"
              onClick={() => setMuted((m) => !m)}
            >
              {muted ? (
                <span className="inline-flex items-center gap-2">
                  <VolumeX aria-hidden className="h-4 w-4" strokeWidth={1.4} />
                  Sound off
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Volume2 aria-hidden className="h-4 w-4" strokeWidth={1.4} />
                  Sound on
                </span>
              )}
            </SecondaryButton>

            <SecondaryButton
              ref={closeRef}
              aria-label="Close cinema"
              className={cn(
                "min-h-[44px] rounded-full px-5 py-3 text-[0.58rem] sm:min-h-touch",
                "border-accent-gold/54 text-accent-champagne hover:bg-fog-strong/06",
              )}
              type="button"
              onClick={onClose}
            >
              <span className="inline-flex items-center gap-2">
                <X aria-hidden className="h-4 w-4" strokeWidth={1.65} />
                Close
              </span>
            </SecondaryButton>
          </div>
        </div>

        <div className="relative z-10 px-pillar pb-pillar pt-0 sm:px-loft sm:pb-loft">
          <div className="relative isolate aspect-[21/11] overflow-hidden rounded-[clamp(18px,_2vw,26px)] sm:aspect-[21/9]">
            <video
              ref={videoRef}
              muted={muted}
              playsInline
              controls
              poster={posterSrc}
              preload="metadata"
              src={videoSrc}
              className="relative z-[2] h-full w-full bg-black object-cover"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-[30%] bg-gradient-to-b from-black/74 via-transparent to-transparent opacity-92"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
