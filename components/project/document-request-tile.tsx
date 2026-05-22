"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { useConciergeModal } from "@/components/providers/concierge-modal-provider";
import { useConversionTracking } from "@/lib/analytics/use-conversion-tracking";
import { cn } from "@/lib/cn";

const tileChrome = cn(
  "flex flex-col gap-4 rounded-[24px] border border-prestige-navy/22 bg-gradient-to-b from-prestige-mist/80 to-white/95 p-loft shadow-soft backdrop-blur-sm",
);

const triggerClass = cn(
  "inline-flex items-center justify-center rounded-full border border-prestige-navy/35 px-ribbon py-3",
  "font-sans text-micro uppercase tracking-[0.34em] text-prestige-navy transition-colors",
  "hover:bg-prestige-navy hover:text-fog-soft",
);

/** Secondary lane when a same-site page complements PDF/concierge. */
const browseTriggerClass = cn(
  "inline-flex items-center justify-center rounded-full border border-accent-bronze/38 bg-white/60 px-ribbon py-3",
  "font-sans text-micro uppercase tracking-[0.26em] text-accent-olive transition-colors backdrop-blur-sm",
  "hover:border-accent-gold hover:bg-fog-soft/90 hover:text-accent-gold",
);

type Props = {
  title: string;
  description: string;
  href: string | null;
  isDirectPdf: boolean;
  /** Same-app route shown alongside PDF/concierge (e.g. master plan walkthrough page). */
  browseHref?: string | null;
  browseCta?: string;
};

/** Collateral tiles keep users on-channel unless a direct HTTPS PDF URL is configured. */

export function DocumentRequestTile({
  title,
  description,
  href,
  isDirectPdf,
  browseHref,
  browseCta,
}: Props) {
  const { open } = useConciergeModal();
  const { trackBrochureDownload } = useConversionTracking();

  const canDownloadPdf = href !== null && isDirectPdf;

  const secondaryCopy = href !== null && !isDirectPdf;

  const trimmedBrowse =
    browseHref !== undefined && browseHref !== null && browseHref.trim().length > 0
      ? browseHref.trim()
      : null;

  const browseLabel =
    browseCta !== undefined && browseCta.trim().length > 0 ? browseCta.trim() : "View details";

  const preferAttachmentDownload =
    canDownloadPdf === true &&
    href.startsWith("/") &&
    !href.startsWith("//");

  let cta: string;
  if (canDownloadPdf) cta = "Download PDF";
  else if (secondaryCopy) cta = "Request secure link";
  else cta = "Request via concierge";

  const bodyNote =
    secondaryCopy === true ? (
      <p className="font-sans text-[0.65rem] uppercase leading-relaxed tracking-[0.26em] text-accent-olive/88">
        A non-PDF URL is configured—concierge verifies before sharing externally.
      </p>
    ) : null;

  const pdfLinkEl =
    canDownloadPdf !== true ? null : (
      <Link
        href={href}
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackBrochureDownload(title)}
        {...(preferAttachmentDownload === true ? { download: true } : {})}
        className={triggerClass}
      >
        {cta}
      </Link>
    );

  let actionBlock: ReactNode;

  if (pdfLinkEl !== null) {
    actionBlock =
      trimmedBrowse !== null ? (
        <div className="flex flex-col gap-3">
          {pdfLinkEl}
          <Link prefetch href={trimmedBrowse} className={browseTriggerClass}>
            {browseLabel}
          </Link>
        </div>
      ) : (
        pdfLinkEl
      );
  } else if (trimmedBrowse !== null) {
    actionBlock = (
      <div className="flex flex-col gap-3">
        <Link prefetch href={trimmedBrowse} className={triggerClass}>
          {browseLabel}
        </Link>
        <button
          type="button"
          onClick={() => open()}
          className={cn(browseTriggerClass, "cursor-pointer")}
        >
          {cta}
        </button>
      </div>
    );
  } else {
    actionBlock = (
      <button type="button" onClick={() => open()} className={cn(triggerClass, "cursor-pointer")}>
        {cta}
      </button>
    );
  }

  return (
    <article className={tileChrome}>
      <div>
        <h3 className="font-display text-[1.35rem] text-prestige-navy">{title}</h3>
        <p className="mt-3 font-sans text-body-relaxed text-muted">{description}</p>
      </div>

      {bodyNote}

      {actionBlock}
    </article>
  );
}
