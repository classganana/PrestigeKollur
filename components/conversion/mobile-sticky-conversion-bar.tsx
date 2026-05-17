"use client";

import { useConciergeModal } from "@/components/providers/concierge-modal-provider";
import { useLayoutEffect, useState } from "react";
import { Calendar, Phone } from "lucide-react";

import { WhatsAppGlyph } from "@/components/icons/whatsapp";
import {
  enquiryTelHref,
  enquiryWhatsAppUrl,
  whatsappScheduleVisitUrl,
} from "@/constants/contact";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";

const CELL = cn(
  "relative flex min-h-touch min-w-0 flex-1 basis-0 flex-col items-center justify-center gap-1 px-2 py-[0.55rem]",
  "font-sans text-[clamp(0.534rem,min(3.2vw,0.5975rem),0.5975rem)] font-medium uppercase leading-snug tracking-[0.24em]",
  "text-forest-strong/[0.93]",
  "outline-none motion-safe:transition-[color,background-color] motion-safe:duration-200 motion-reduce:transition-none",
  "supports-[pointer:fine]:motion-safe:hover:bg-black/[0.036] motion-safe:active:bg-black/[0.05]",
);

function heroDominatesViewport(hero: HTMLElement): boolean {
  const rect = hero.getBoundingClientRect();

  const vh =
    typeof window !== "undefined"
      ? (window.visualViewport?.height ?? window.innerHeight)
      : 880;

  return rect.top <= 32 && rect.height > vh * 0.58;
}

/** Slim concierge rail (< md): hidden atop hero prelude + final CTA, soft reveal otherwise. */

export function MobileStickyConversionBar() {
  const { open: openConcierge, openForWhatsAppHandoff } = useConciergeModal();
  const whatsappHref = enquiryWhatsAppUrl();

  const callHref = enquiryTelHref();

  const whatsTarget = whatsappScheduleVisitUrl() ?? whatsappHref ?? SITE.contactHref;

  const whatsExternal =
    whatsTarget.startsWith("http") ||
    whatsTarget.startsWith("mailto:") ||
    whatsTarget.startsWith("tel:");

  const whatsOpensConcierge = !whatsExternal && whatsTarget.startsWith("#");

  const whatsAppHandoffFromRail =
    whatsExternal === true &&
    (whatsTarget.startsWith("https://wa.me/") || whatsTarget.startsWith("http://wa.me/"));

  const [suppressed, setSuppressed] = useState(true);

  useLayoutEffect(() => {
    const heroEl = document.getElementById("hero");

    const ctaEl = document.getElementById("cta");

    if (typeof IntersectionObserver === "undefined") {
      setSuppressed(false);

      return;
    }

    let suppressedByHero =
      heroEl !== null && typeof window !== "undefined" && heroDominatesViewport(heroEl);

    let suppressedByCta = false;

    const flush = () => {
      const nextSuppress = suppressedByHero || suppressedByCta;

      setSuppressed(nextSuppress);
    };

    flush();

    const heroIo =
      heroEl !== null
        ? new IntersectionObserver(
            ([entry]) => {
              if (!entry) return;

              suppressedByHero = entry.isIntersecting && entry.intersectionRatio > 0.38;

              flush();
            },

            {
              threshold: [0, 0.18, 0.38, 0.62],
              rootMargin: "-3% 0px 8% 0px",
            },
          )
        : null;

    const ctaIo =
      ctaEl !== null
        ? new IntersectionObserver(
            ([entry]) => {
              if (!entry) return;

              suppressedByCta = entry.isIntersecting && entry.intersectionRatio > 0.11;

              flush();
            },

            {
              threshold: [0, 0.08, 0.14],
              rootMargin: "0px 0px -12% 0px",
            },
          )
        : null;

    if (heroEl !== null && heroIo !== null) heroIo.observe(heroEl);

    if (ctaEl !== null && ctaIo !== null) ctaIo.observe(ctaEl);

    return () => {
      heroIo?.disconnect();

      ctaIo?.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[55] pb-[env(safe-area-inset-bottom,0px)] md:hidden">
      <nav
        aria-label="Concierge"
        className={cn(
          "pointer-events-auto mx-auto max-w-[min(1180px,calc(100vw-2rem))] px-4 pb-3 pt-0 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
          "transition-[opacity,transform] duration-[300ms]",
          suppressed
            ? "pointer-events-none translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-0"
            : "translate-y-0 opacity-100",
        )}
      >
        <div
          className={cn(
            "flex min-h-touch items-stretch divide-x divide-accent-bronze/[0.205] overflow-hidden rounded-t-[clamp(17px,_2.5vw,_22px)]",
            "border border-accent-bronze/24 shadow-[0_-22px_55px_-24px_rgba(28,40,34,0.18)] ring-1 ring-black/[0.028]",
            "border-b border-b-accent-bronze/[0.18]",
            "bg-[linear-gradient(176deg,hsla(40,48%,96.5%,0.96)_0%,hsla(40,37%,93%,0.942)_93%)]",
            "backdrop-blur-sm backdrop-saturate-110 motion-reduce:backdrop-blur-none",
          )}
        >
          <button
            type="button"
            onClick={() => openConcierge()}
            className={CELL}
            aria-label="Schedule site visit"
          >
            <Calendar
              aria-hidden
              className="size-[1rem] shrink-0 text-accent-bronze/[0.8]"
              strokeWidth={1.5}
            />

            <span className="tracking-[0.21em]">Schedule visit</span>
          </button>

          {whatsOpensConcierge === true ? (
            <button
              type="button"
              onClick={() => openConcierge()}
              className={CELL}
              aria-label="Open concierge"
            >
              <WhatsAppGlyph className="size-[1rem] shrink-0 text-accent-olive/[0.9]" />

              <span className="tracking-[0.19em]">WhatsApp</span>
            </button>
          ) : whatsAppHandoffFromRail === true ? (
            <button
              type="button"
              onClick={() => openForWhatsAppHandoff()}
              className={CELL}
              aria-label="WhatsApp concierge"
            >
              <WhatsAppGlyph className="size-[1rem] shrink-0 text-accent-olive/[0.9]" />

              <span className="tracking-[0.19em]">WhatsApp</span>
            </button>
          ) : (
            <a
              aria-label="WhatsApp"
              href={whatsTarget}
              className={CELL}
              {...(whatsExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <WhatsAppGlyph className="size-[1rem] shrink-0 text-accent-olive/[0.9]" />

              <span className="tracking-[0.19em]">WhatsApp</span>
            </a>
          )}

          {callHref != null ? (
            <a aria-label="Call concierge" href={callHref} className={CELL}>
              <Phone
                aria-hidden
                className="size-[1rem] shrink-0 text-accent-bronze/[0.8]"
                strokeWidth={1.5}
              />

              <span className="tracking-[0.2em]">Call</span>
            </a>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
