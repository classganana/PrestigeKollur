"use client";

import Link from "next/link";

import { cn } from "@/lib/cn";

type Props = {
  label: string;
  subtitle?: string;
  /** Unused — retained for call-site compatibility. */
  heroSectionId?: string;
  href?: string;
  className?: string;
};

/**
 * Masthead aligned to the hero glass stack — dark translucency, champagne type, no pasted “sales card”.
 * Raster logos stay in footer disclosure where compliance layouts expect them.
 */
export function SiteChrome({ label, subtitle, href = "/", className }: Props) {
  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[45] flex justify-center px-4 pb-4 pt-5 sm:px-10 sm:pt-6",
        className,
      )}
    >
      <div className="pointer-events-auto w-full max-w-[min(32rem,calc(100vw-2rem))]">
        <Link
          href={href}
          className={cn(
            // `backdrop-blur` + `border-radius` + hairline borders often draws a phantom horizontal rule through the type on WebKit — keep the glass read using opacity instead.
            "group relative isolate flex flex-col items-center gap-2 overflow-hidden rounded-[22px]",
            "no-underline decoration-transparent",
            "border-0",
            "bg-[hsla(150,26%,8%,0.92)]",
            "shadow-[0_0_0_1px_rgba(201,174,120,0.26),0_28px_64px_-28px_rgba(0,0,0,0.75)]",
            "px-8 py-[0.7rem] sm:px-10 sm:py-3",
            "transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "hover:shadow-[0_0_0_1px_rgba(217,184,138,0.42),0_36px_70px_-30px_rgba(0,0,0,0.78)] hover:bg-[hsla(150,26%,10%,0.94)]",
            "motion-reduce:transition-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-champagne/[0.55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a09]",
          )}
          aria-label={`${label} — home`}
        >
          <span
            className={cn(
              "relative z-[1] text-center font-display text-[clamp(0.8125rem,2.75vw,0.9625rem)] font-medium uppercase leading-snug tracking-[0.22em] text-[#faf8f5] sm:tracking-[0.26em]",
              "transition-[color] duration-500 group-hover:text-[#fefdfb]",
            )}
          >
            {label}
          </span>
          {subtitle !== undefined && subtitle.length > 0 ? (
            <span
              className={cn(
                "relative z-[1] text-center font-sans text-[clamp(0.625rem,2.2vw,0.725rem)] font-semibold uppercase leading-snug tracking-[0.3em]",
                "text-[#ebe0c8] sm:tracking-[0.34em]",
              )}
            >
              {subtitle}
            </span>
          ) : null}
        </Link>
      </div>
    </header>
  );
}
