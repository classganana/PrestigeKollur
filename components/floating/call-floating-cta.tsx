"use client";

import { Phone } from "lucide-react";

import { useConversionTracking } from "@/lib/analytics/use-conversion-tracking";
import { cn } from "@/lib/cn";

type Props = {
  telHref: string;
};

/** Forest / champagne symmetry with WhatsApp orb — ambient halo, left rail desktop only. */

export function CallFloatingCta({ telHref }: Props) {
  const { trackCallClick } = useConversionTracking();

  return (
    <a
      href={telHref}
      aria-label="Call concierge"
      onClick={() => trackCallClick("desktop_float_call")}
      className={cn(
        "fixed bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] md:bottom-[max(1.35rem,env(safe-area-inset-bottom,0px))]",
        "left-[max(1rem,env(safe-area-inset-left,0px))] z-[70]",
        "flex h-[3.5rem] w-[3.5rem] md:h-[3.625rem] md:w-[3.625rem]",
        "items-center justify-center overflow-visible rounded-full",
        "border-2 border-forest-strong/80 bg-forest-strong text-accent-champagne",
        "shadow-[0_14px_36px_-8px_rgba(0,0,0,0.5)] ring-2 ring-black/30 ring-offset-2 ring-offset-white/90",
        "motion-safe:transition-[transform,box-shadow,background-color,border-color] motion-safe:duration-[520ms] motion-safe:ease-luxury",
        "supports-[pointer:fine]:motion-safe:hover:-translate-y-px supports-[pointer:fine]:motion-safe:hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.46),0_0_60px_-6px_rgba(217,184,138,0.36)] supports-[pointer:fine]:motion-safe:hover:border-accent-gold/62 supports-[pointer:fine]:motion-safe:hover:bg-forest-strong",
        "active:scale-[0.97] motion-reduce:transition-none motion-reduce:transform-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/95",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-[hsla(40,38%,96%,0.9)]",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "animate-concierge-ambient pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(calc(100%+25px),5.85rem)]",
          "-translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/26 blur-xl motion-reduce:blur-lg",
        )}
      />
      <Phone
        aria-hidden
        className="relative z-[1] size-[1.66rem] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] md:size-[1.5rem]"
        strokeWidth={1.35}
      />
    </a>
  );
}
