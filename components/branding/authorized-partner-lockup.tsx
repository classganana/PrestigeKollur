import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";

type Variant = "footer" | "inline";

/** Typography-only partner badge — reinforces Authorized Sales Partner status without relying on trademark artwork. */

export function AuthorizedPartnerLockup({
  className,
  variant = "footer",
}: {
  className?: string;
  variant?: Variant;
}) {
  const dense = variant === "inline";

  return (
    <div
      role="note"
      aria-label={`${SITE.partnerChannelLabel}`}
      className={cn(
        "inline-flex flex-col items-center justify-center rounded-lg border-2 border-prestige-navy/85 bg-gradient-to-b from-prestige-mist via-prestige-mist/92 to-[#dce6f4]",
        "px-[clamp(1rem,3vw,1.35rem)] shadow-[0_12px_40px_-14px_rgba(21,44,72,0.35)] ring-1 ring-prestige-navy/12",
        dense ? "gap-0.5 py-2" : "gap-1 py-2.5",
        className,
      )}
    >
      <span
        className={cn(
          "text-center font-sans font-semibold uppercase tracking-[0.42em] text-prestige-navy",
          dense ? "text-[0.5rem]" : "text-[0.54rem]",
        )}
      >
        Authorized Sales Partner
      </span>
      <span
        className={cn(
          "text-center font-display font-medium uppercase tracking-[0.26em] text-prestige-navy/[0.92]",
          dense ? "text-[0.62rem]" : "text-[0.6825rem]",
        )}
      >
        Prestige Group
      </span>
    </div>
  );
}
