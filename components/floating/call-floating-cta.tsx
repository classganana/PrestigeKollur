import { Phone } from "lucide-react";

import { cn } from "@/lib/cn";

type Props = {
  telHref: string;
};

/** Forest / champagne symmetry with WhatsApp orb — ambient halo, left rail desktop only. */

export function CallFloatingCta({ telHref }: Props) {
  return (
    <a
      href={telHref}
      aria-label="Call concierge"
      className={cn(
        "fixed bottom-[max(1.35rem,env(safe-area-inset-bottom,0px))]",
        "left-[max(1rem,env(safe-area-inset-left,0px))] z-[60]",
        "hidden h-[3.875rem] w-[3.875rem] md:flex md:h-[3.625rem] md:w-[3.625rem]",
        "items-center justify-center overflow-visible rounded-full",
        "border-[1.5px] border-accent-champagne/55 bg-[hsla(146,34%,17%,0.97)] text-accent-champagne",
        "md:border md:border-accent-champagne/45 md:bg-forest-strong/93",
        "shadow-[0_24px_60px_-10px_rgba(0,0,0,0.44),0_0_48px_-8px_rgba(201,174,120,0.28),inset_0_1px_0_rgba(255,252,248,0.08)] md:backdrop-blur-xl",
        "ring-2 ring-black/35 ring-offset-4 ring-offset-[hsla(40,42%,94%,0.35)]",
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
