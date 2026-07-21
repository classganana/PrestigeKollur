"use client";

import Link from "next/link";

import { useConversionTracking } from "@/lib/analytics/use-conversion-tracking";
import type { ConversionPlacement } from "@/lib/analytics/track-conversion";
import { cn } from "@/lib/cn";

type PortfolioBrochureDownloadLinkProps = {
  href: string;
  projectName: string;
  className?: string;
  placement?: ConversionPlacement;
  variant?: "portfolio" | "concierge";
};

export function PortfolioBrochureDownloadLink({
  href,
  projectName,
  className,
  placement = "portfolio_card",
  variant = "portfolio",
}: PortfolioBrochureDownloadLinkProps) {
  const { trackBrochureDownload } = useConversionTracking();

  return (
    <Link
      href={href}
      prefetch={false}
      download
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBrochureDownload(`${projectName} brochure`, placement)}
      className={cn(
        "inline-flex min-h-touch items-center justify-center rounded-full font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em]",
        variant === "portfolio"
          ? cn(
              "border border-[#C9A227]/55 px-7 text-[#FAF7EF]",
              "transition-colors hover:border-[#C9A227] hover:bg-[#C9A227]/20",
            )
          : cn(
              "border border-accent-champagne/45 bg-accent-champagne/15 px-ribbon text-accent-champagne",
              "transition-colors hover:bg-accent-champagne/25 hover:text-accent-gold",
            ),
        className,
      )}
    >
      Download brochure
    </Link>
  );
}
