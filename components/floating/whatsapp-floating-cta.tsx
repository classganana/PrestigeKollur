"use client";

import { WhatsAppGlyph } from "@/components/icons/whatsapp";
import { useConciergeModal } from "@/components/providers/concierge-modal-provider";
import { cn } from "@/lib/cn";

type Props = {
  whatsappHref: string | null;
  /** When WhatsApp is not configured — e.g. `SITE.contactHref` (`#cta` opens modal instead of scrolling). */
  fallbackHref: string;
};

const chipBase = cn(
  /* Above mobile sticky rail; desktop sits on the safe-area floor */
  "fixed bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] md:bottom-[max(1.35rem,env(safe-area-inset-bottom,0px))]",
  "right-[max(1rem,env(safe-area-inset-right,0px))] z-[70]",
  "flex h-[3.5rem] w-[3.5rem] md:h-[3.75rem] md:w-[3.75rem]",
  "items-center justify-center overflow-visible rounded-full",
  "motion-safe:transition-[transform,box-shadow,background-color,border-color] motion-safe:duration-[520ms] motion-safe:ease-luxury",
  "supports-[pointer:fine]:motion-safe:hover:-translate-y-px motion-reduce:transition-none motion-reduce:transform-none",
  "active:scale-[0.97]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
);

/** Solid brand green — readable on light ivory sections and dark hero plates. */
const chipWhatsApp = cn(
  chipBase,
  "border-2 border-[#1a9e52] bg-[#25D366] text-white",
  "shadow-[0_14px_36px_-8px_rgba(0,0,0,0.55),0_6px_18px_-4px_rgba(37,211,102,0.45)]",
  "ring-2 ring-black/25 ring-offset-2 ring-offset-white/95",
  "supports-[pointer:fine]:motion-safe:hover:border-[#1a9e52] supports-[pointer:fine]:motion-safe:hover:bg-[#22c55e]",
  "supports-[pointer:fine]:motion-safe:hover:shadow-[0_18px_44px_-8px_rgba(0,0,0,0.58),0_8px_22px_-4px_rgba(37,211,102,0.55)]",
  "focus-visible:ring-[#25D366] focus-visible:ring-offset-white",
);

const chipFallback = cn(
  chipBase,
  "border-2 border-forest-strong/80 bg-forest-strong text-accent-champagne",
  "shadow-[0_14px_36px_-8px_rgba(0,0,0,0.5)] ring-2 ring-black/30 ring-offset-2 ring-offset-white/90",
  "supports-[pointer:fine]:motion-safe:hover:border-accent-gold/55 supports-[pointer:fine]:motion-safe:hover:bg-forest-strong",
  "focus-visible:ring-accent-gold/90 focus-visible:ring-offset-white",
);

/** Persistent concierge orb — soft ambient halo + calm hover choreography (desktop). */

export function WhatsAppFloatingCta({ whatsappHref, fallbackHref }: Props) {
  const { open, openForWhatsAppHandoff } = useConciergeModal();
  const isWhatsApp = whatsappHref != null;
  const useHashModal = !isWhatsApp && /^#/u.test(fallbackHref);

  const label = isWhatsApp ? "WhatsApp concierge" : /^#/u.test(fallbackHref) ? "Open concierge" : "Enquire";

  const whatsExternal =
    /^https?:\/\//u.test(fallbackHref) ||
    /^mailto:/u.test(fallbackHref) ||
    /^tel:/u.test(fallbackHref);

  const chipClassName = isWhatsApp ? chipWhatsApp : chipFallback;

  if (isWhatsApp === true) {
    return (
      <button
        type="button"
        onClick={() => openForWhatsAppHandoff("desktop_float_wa")}
        aria-label={label}
        className={chipClassName}
      >
        <GlyphDecor isWhatsApp />
      </button>
    );
  }

  if (useHashModal === true) {
    return (
      <button type="button" onClick={() => open()} aria-label={label} className={chipClassName}>
        <GlyphDecor isWhatsApp={false} />
      </button>
    );
  }

  return (
    <a
      href={fallbackHref}
      aria-label={label}
      className={chipClassName}
      {...(whatsExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <GlyphDecor isWhatsApp={false} />
    </a>
  );
}

function GlyphDecor({ isWhatsApp }: { isWhatsApp: boolean }) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(calc(100%+20px),5.25rem)]",
          "-translate-x-1/2 -translate-y-1/2 rounded-full blur-xl motion-reduce:blur-lg",
          isWhatsApp ? "bg-[#25D366]/45" : "animate-concierge-ambient bg-accent-champagne/28",
        )}
      />
      <WhatsAppGlyph
        className={cn(
          "relative z-[1] size-[1.85rem] md:size-[1.95rem]",
          isWhatsApp
            ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
            : "opacity-80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]",
        )}
      />
    </>
  );
}
