"use client";

import Link from "next/link";

import { ConciergeEnquiryForm } from "@/components/forms/concierge-enquiry-form";

import {
  enquiryTelHref,
  whatsappAvailabilityUrl,
  whatsappFloorPlansUrl,
  whatsappScheduleVisitUrl,
} from "@/constants/contact";
import { useConversionTracking } from "@/lib/analytics/use-conversion-tracking";
import { useSite } from "@/lib/project/project-context";
import { cn } from "@/lib/cn";

/** Footer / hero-adjacent concierge band — roomy pills */
const INTENT_PILL = cn(
  "inline-flex min-h-touch min-w-0 items-center justify-center rounded-full border border-inverse-muted/45",
  "px-[max(0.75rem,min(4vw,1.085rem))] py-[0.55rem] text-center font-sans text-[0.5675rem] font-medium uppercase leading-snug tracking-[0.33em]",
  "text-inverse shadow-[inset_0_1px_0_rgba(253,246,237,0.08)]",
  "motion-safe:transition-[border-color,color,background-color] motion-safe:duration-[280ms] motion-safe:ease-out",
  "supports-[pointer:fine]:motion-safe:hover:bg-white/[0.08] supports-[pointer:fine]:motion-safe:hover:border-accent-gold/55 supports-[pointer:fine]:motion-safe:hover:text-accent-champagne",
);

/** Modal-only — dense segmented row */
const INTENT_SEGMENT = cn(
  "flex min-h-[2.375rem] min-w-[4.25rem] flex-1 shrink-0 basis-0 items-center justify-center px-2 py-1.5 text-center",
  "border-r border-inverse-muted/22 font-sans text-[0.5625rem] font-semibold uppercase leading-[1.15] tracking-[0.14em]",
  "text-inverse-muted/92 transition-colors duration-200",
  "hover:bg-white/[0.05] hover:text-accent-champagne",
  "motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-gold/50",
);

type WaQuickLink = { href: string; label: string };

type ModalWaIntent = {
  ariaLabel: string;
  href: string;
  short: string;
};

type Presentation = "footer" | "modal";

type Props = {
  presentation?: Presentation;
};

export function ConciergeConversionPanel({ presentation = "footer" }: Props) {
  const site = useSite();
  const { trackWhatsAppClick, trackCallClick } = useConversionTracking();
  const telHref = enquiryTelHref();

  const scheduleWa = whatsappScheduleVisitUrl();

  const floorWa = whatsappFloorPlansUrl();

  const availWa = whatsappAvailabilityUrl();

  const waCandidates: Array<WaQuickLink | null> = [
    scheduleWa !== null ? { href: scheduleWa, label: "WA · Site visit" } : null,
    floorWa !== null ? { href: floorWa, label: "WA · Floor plans" } : null,
    availWa !== null ? { href: availWa, label: "WA · Availability" } : null,
  ];

  const waIntents = waCandidates.filter((row): row is WaQuickLink => row !== null);

  const modalWaIntents: ModalWaIntent[] = [
    scheduleWa !== null
      ? { href: scheduleWa, short: "Visit", ariaLabel: "Open WhatsApp — site visit intent" }
      : null,
    floorWa !== null
      ? { href: floorWa, short: "Plans", ariaLabel: "Open WhatsApp — floor plans intent" }
      : null,
    availWa !== null
      ? {
          href: availWa,
          short: "Avail.",
          ariaLabel: "Open WhatsApp — availability intent",
        }
      : null,
  ].filter((row): row is ModalWaIntent => row !== null);

  const embeddedInModal = presentation === "modal";

  const enquiryFormDomId = embeddedInModal
    ? "concierge-enquiry-form-modal"
    : "concierge-enquiry-form";

  const enquiryFieldPrefix = embeddedInModal ? "concierge-m" : "concierge";

  const showQuickLinks = waIntents.length > 0 || telHref !== null;

  return (
    <div
      className={cn(
        "flex w-full flex-col text-left",
        embeddedInModal ? "gap-4 sm:gap-5" : "gap-loft sm:gap-orbit",
      )}
    >
      {!embeddedInModal ? (
        <Link
          aria-label="Scroll to private enquiry form"
          className={cn(
            "group relative block overflow-hidden rounded-[clamp(26px,_4vw,36px)]",

            "border border-accent-champagne/55 bg-black/38 p-[clamp(1.15rem,3.5vw,1.62rem)]",

            "backdrop-blur-sm ring-1 ring-white/[0.05] shadow-[inset_0_1px_0_rgba(255,246,233,0.08)] shadow-[0_40px_92px_-54px_rgba(0,0,0,0.55)]",
            "transition-[border-color,box-shadow] duration-[420ms] motion-reduce:transition-none",
            "supports-[pointer:fine]:motion-safe:hover:border-accent-gold/62 supports-[pointer:fine]:motion-safe:hover:shadow-[0_48px_104px_-54px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,246,233,0.1)]",
          )}
          href="#concierge-enquiry-form"
          scroll
          prefetch={false}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_118%_118%_at_12%_-8%,rgba(221,207,173,0.16),transparent_58%)] opacity-90"
          />

          <div className="relative flex flex-col gap-relax sm:flex-row sm:items-center sm:justify-between sm:gap-gallery-gap">
            <div className="flex max-w-xl flex-col gap-3">
              <p className="font-sans text-[0.5975rem] uppercase leading-snug tracking-[0.44em] text-accent-champagne">
                {site.conciergeLeadCard.eyebrow}
              </p>

              <p className="font-display text-[clamp(1.26rem,min(5.2vw,1.68rem),1.68rem)] leading-[1.28] tracking-[-0.02em] text-inverse">
                {site.conciergeLeadCard.title}
              </p>

              <p className="max-w-[52ch] font-sans text-[0.8425rem] leading-[1.75] tracking-[0.012em] text-inverse-muted">
                {site.conciergeLeadCard.body}
              </p>
            </div>

            <span
              className={cn(
                "shrink-0 self-start rounded-full border border-inverse-muted/55 px-[1.085rem] py-2.5 font-sans text-[0.57rem] uppercase tracking-[0.35em] text-inverse transition-[border-color,color]",
                "motion-safe:duration-[360ms] motion-reduce:transition-none",
                "group-hover:border-accent-champagne/74 group-hover:text-accent-champagne",
              )}
            >
              Open form
            </span>
          </div>
        </Link>
      ) : null}

      {showQuickLinks === true && embeddedInModal === false ? (
        <div className="flex flex-wrap items-center gap-3 sm:justify-center sm:gap-4">
          {waIntents.map(({ href, label }) => (
            <a
              key={label}
              aria-label={label}
              className={INTENT_PILL}
              href={href}
              onClick={() => trackWhatsAppClick("concierge_modal_wa")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}

          {telHref != null ? (
            <a
              aria-label="Call concierge desk"
              className={INTENT_PILL}
              href={telHref}
              onClick={() => trackCallClick("concierge_modal_call")}
            >
              Call desk
            </a>
          ) : null}
        </div>
      ) : null}

      {showQuickLinks === true && embeddedInModal === true ? (
        <div className="space-y-2">
          <p className="font-sans text-[0.5625rem] font-semibold uppercase tracking-[0.28em] text-inverse-muted/75">
            Quick WhatsApp templates
          </p>

          <div
            role="group"
            aria-label="Quick WhatsApp templates and phone"
            className={cn(
              "flex max-w-full snap-x snap-mandatory flex-nowrap gap-0 overflow-x-auto rounded-xl border border-inverse-muted/26 bg-black/32",
              "shadow-[inset_0_1px_0_rgba(251,244,232,0.06)]",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            )}
          >
            {modalWaIntents.map(({ ariaLabel, href, short }) => (
              <a
                key={href}
                aria-label={ariaLabel}
                title={ariaLabel}
                className={cn(INTENT_SEGMENT, "snap-start")}
                href={href}
                onClick={() => trackWhatsAppClick("concierge_modal_wa")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {short}
              </a>
            ))}

            {telHref != null ? (
              <a
                aria-label="Call concierge desk"
                title="Call concierge desk"
                className={cn(
                  INTENT_SEGMENT,
                  "snap-start border-r-0",
                  modalWaIntents.length === 0 ? "flex-1" : undefined,
                )}
                href={telHref}
                onClick={() => trackCallClick("concierge_modal_call")}
              >
                Call
              </a>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="rounded-[clamp(24px,_4vw,34px)] border border-inverse-muted/28 bg-black/42 px-[clamp(1.12rem,4vw,1.75rem)] py-[clamp(1.25rem,5vw,2.1rem)] shadow-[inset_0_1px_0_rgba(251,244,232,0.07)]">
        <ConciergeEnquiryForm
          formDomId={enquiryFormDomId}
          fieldIdPrefix={enquiryFieldPrefix}
        />
      </div>
    </div>
  );
}
