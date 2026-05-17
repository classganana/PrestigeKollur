"use client";

import Image from "next/image";

import { Lock } from "lucide-react";

import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { OpenConciergeSecondaryButton } from "@/components/conversion/open-concierge-secondary";
import { useConciergeModal } from "@/components/providers/concierge-modal-provider";
import { whatsappFloorPlansUrl } from "@/constants/contact";
import type { FloorPlanTeaserTile } from "@/constants/floor-plan-teaser";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { cn } from "@/lib/cn";

export function FloorPlanConciergeLeadRow({ className }: { className?: string }) {
  const waHref = whatsappFloorPlansUrl();

  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      <OpenConciergeButton className="min-h-touch uppercase tracking-[0.26em]">
        Unlock HD floor packs
      </OpenConciergeButton>

      {waHref != null ? (
        <SecondaryButton
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-touch border-prestige-navy/28 uppercase tracking-[0.22em] text-prestige-navy hover:border-accent-gold hover:text-accent-gold"
        >
          WhatsApp blueprint desk
        </SecondaryButton>
      ) : (
        <OpenConciergeSecondaryButton className="min-h-touch border-prestige-navy/28 uppercase tracking-[0.22em] text-prestige-navy">
          Open concierge form
        </OpenConciergeSecondaryButton>
      )}

      <p className="font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.32em] text-muted sm:ml-1 sm:max-w-[14rem]">
        Opens a calm overlay—you stay on this page unless you deliberately leave for WhatsApp.
      </p>
    </div>
  );
}

export function FloorPlanBlurredHitTile({ tile }: { tile: FloorPlanTeaserTile }) {
  const { open } = useConciergeModal();

  return (
    <button
      type="button"
      onClick={() => open()}
      className={cn(
        "group/card block w-full rounded-[clamp(22px,_3vw,_30px)] border-0 bg-transparent p-0 text-left outline-none",
        "focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-[3px]",
        "focus-visible:ring-offset-[hsl(40,35%,96%)]",
        "transition-[transform,box-shadow] duration-[380ms] ease-luxury motion-reduce:transition-none",
        "hover:-translate-y-[3px] hover:shadow-[0_22px_56px_-28px_rgba(12,42,36,0.45)] motion-reduce:hover:translate-y-0",
      )}
      aria-label={`Unlock ${tile.series} floor plans through concierge`}
    >
      <figure
        className={cn(
          "relative overflow-hidden rounded-[inherit] border border-accent-bronze/22 shadow-soft",
          "bg-prestige-navy/[0.04] ring-1 ring-transparent transition-[border-color,ring-color] duration-[380ms]",
          "group-hover/card:border-accent-gold/38 group-hover/card:ring-accent-gold/22 group-focus-visible/card:border-accent-gold/42",
        )}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={tile.src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            loading="lazy"
            decoding="async"
            quality={86}
            className={cn(
              "scale-[1.08] object-cover transition-[filter,transform] duration-[520ms] ease-luxury motion-reduce:transition-none",
              "blur-[13px] saturate-[1.05] motion-reduce:blur-[4px]",
              "group-hover/card:blur-[10px] group-hover/card:scale-[1.06]",
            )}
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-prestige-navy/[0.78] via-prestige-navy/[0.32] to-prestige-navy/[0.06]"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-pillar">
            <Lock
              className={cn(
                "size-9 text-fog-strong/[0.48] motion-reduce:opacity-80 sm:size-10",
                "transition-[color,transform] duration-[380ms] motion-reduce:transition-none",
                "group-hover/card:text-accent-champagne/90 group-hover/card:scale-[1.04]",
              )}
              strokeWidth={1.05}
              aria-hidden
            />

            <span
              className={cn(
                "rounded-full border border-fog-strong/[0.38] bg-black/[0.48] px-[1.15rem] py-[0.62rem]",
                "font-sans text-[0.58rem] font-semibold uppercase leading-snug tracking-[0.34em] text-fog-strong/95 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.65)] backdrop-blur-md",
                "ring-1 ring-white/[0.12] transition-[border-color,background-color,color] duration-[380ms]",
                "group-hover/card:border-accent-champagne/55 group-hover/card:bg-prestige-navy/[0.62]",
                "group-focus-visible/card:border-accent-gold group-focus-visible/card:ring-2 group-focus-visible/card:ring-accent-gold/75",
              )}
            >
              Unlock · concierge desk
            </span>

            <span className="text-center font-sans text-[0.54rem] uppercase leading-snug tracking-[0.38em] text-inverse-muted">
              Tap to open concierge · stay on-site
            </span>
          </div>

          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-pillar pb-pillar pt-16 text-inverse">
            <div className="flex flex-wrap items-end justify-between gap-3 rounded-2xl bg-black/55 px-4 py-3 backdrop-blur-md ring-1 ring-white/15">
              <span className="font-display text-[clamp(1.05rem,3.6vw,1.28rem)] leading-tight tracking-[-0.02em] text-inverse">
                {tile.series}
              </span>
              <span className="font-sans text-micro uppercase tracking-[0.38em] text-accent-champagne">
                {tile.sqft}
              </span>
            </div>
          </figcaption>
        </div>
      </figure>
    </button>
  );
}
