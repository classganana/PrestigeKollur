import { resolveSite } from "@/lib/project/resolve-project";
import { themeClasses } from "@/lib/theme/theme-classes";

const site = resolveSite();
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
      aria-label={`${site.partnerChannelLabel}`}
      className={cn(
        "inline-flex flex-col items-center justify-center rounded-lg border-2 ring-1 ring-brand-primary/12",
        themeClasses.brandLockup,
        "px-[clamp(1rem,3vw,1.35rem)]",
        dense ? "gap-0.5 py-2" : "gap-1 py-2.5",
        className,
      )}
    >
      <span
        className={cn(
          "text-center font-sans font-semibold uppercase tracking-[0.42em]",
          themeClasses.brandLockupTitle,
          dense ? "text-[0.5rem]" : "text-[0.54rem]",
        )}
      >
        Authorized Sales Partner
      </span>
      <span
        className={cn(
          "text-center font-display font-medium uppercase tracking-[0.26em]",
          themeClasses.brandLockupSubtitle,
          dense ? "text-[0.62rem]" : "text-[0.6825rem]",
        )}
      >
        {site.developerBrandName}
      </span>
    </div>
  );
}
