"use client";

import Link from "next/link";

import { useChromeScrollReveal } from "@/hooks/use-chrome-scroll-reveal";
import { cn } from "@/lib/cn";
import { themeClasses } from "@/lib/theme/theme-classes";

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
  const { chromeVisible } = useChromeScrollReveal();

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[45] flex justify-center px-4 pb-4 pt-5 sm:px-10 sm:pt-6",
        "motion-safe:transition-[transform,opacity] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-reduce:transition-none",
        chromeVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-[calc(100%+0.75rem)] opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className,
      )}
    >
      <div
        className={cn(
          "w-full max-w-[min(32rem,calc(100vw-2rem))]",
          chromeVisible ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <Link
          href={href}
          className={cn(
            // `backdrop-blur` + `border-radius` + hairline borders often draws a phantom horizontal rule through the type on WebKit — keep the glass read using opacity instead.
            "group relative isolate flex flex-col items-center gap-2 overflow-hidden rounded-[22px]",
            "no-underline decoration-transparent",
            "border-0",
            themeClasses.chromeShell,
            "px-8 py-[0.7rem] sm:px-10 sm:py-3",
            "motion-reduce:transition-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-champagne/[0.55] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--chrome-ring-offset)]",
          )}
          aria-label={`${label} — home`}
        >
          <span
            className={cn(
              "relative z-[1] text-center font-display text-[clamp(0.8125rem,2.75vw,0.9625rem)] font-medium uppercase leading-snug tracking-[0.22em] sm:tracking-[0.26em]",
              themeClasses.chromeTextPrimary,
            )}
          >
            {label}
          </span>
          {subtitle !== undefined && subtitle.length > 0 ? (
            <span
              className={cn(
                "relative z-[1] text-center font-sans text-[clamp(0.625rem,2.2vw,0.725rem)] font-semibold uppercase leading-snug tracking-[0.3em]",
                themeClasses.chromeTextSecondary,
                "sm:tracking-[0.34em]",
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
