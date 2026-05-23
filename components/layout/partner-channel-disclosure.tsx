import Image from "next/image";
import Link from "next/link";

import { AuthorizedPartnerLockup } from "@/components/branding/authorized-partner-lockup";
import {
  partnerDisclosureCopy,
  partnerCorpMarkSrc,
  partnerLogoSrc,
  partnerMarksLine,
  partnerReferenceHref,
  partnerRoleLine,
} from "@/constants/partner-brand";
import { resolveBranding, resolveSite } from "@/lib/project/resolve-project";
import { cn } from "@/lib/cn";

function PartnerLogo({
  alt,
  src,
  size = "project",
}: {
  alt: string;
  src: string;
  size?: "project" | "corp";
}) {
  if (!src.startsWith("/")) {
    return null;
  }

  const isCorp = size === "corp";

  return (
    <Image
      src={src}
      alt={alt}
      width={isCorp ? 160 : 220}
      height={isCorp ? 40 : 56}
      className={cn(
        "w-auto object-contain opacity-95",
        isCorp ? "h-7 max-w-[9.5rem] sm:h-8 sm:max-w-[11rem]" : "h-11 max-w-[14rem] sm:h-12 sm:max-w-[15rem]",
      )}
    />
  );
}

export function PartnerChannelDisclosure({ className }: { className?: string }) {
  const logo = partnerLogoSrc();
  const corpMark = partnerCorpMarkSrc();
  const branding = resolveBranding();
  const site = resolveSite();

  const reference = partnerReferenceHref();
  const hasBrandMarks = logo !== null || corpMark !== null;

  return (
    <div
      className={cn(
        "border-t border-prestige-navy/14 bg-gradient-to-b from-prestige-mist/55 via-soft-stone/55 to-soft-stone/75",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[min(880px,_calc(100vw-2.5rem))] flex-col items-center gap-5 px-6 py-gallery-gap">
        <AuthorizedPartnerLockup />

        {hasBrandMarks ? (
          <div
            className={cn(
              "flex w-full max-w-md flex-col items-center gap-3 rounded-2xl border border-accent-bronze/16",
              "bg-ivory/88 px-loft py-4 shadow-soft backdrop-blur-[2px] sm:px-orbit sm:py-5",
            )}
          >
            {logo !== null ? (
              <PartnerLogo src={logo} alt={branding.partnerLogoAlt} size="project" />
            ) : null}

            {logo !== null && corpMark !== null ? (
              <div aria-hidden className="h-px w-14 rounded-full bg-accent-bronze/22 sm:w-20" />
            ) : null}

            {corpMark !== null ? (
              <PartnerLogo
                src={corpMark}
                alt={`${site.developerBrandName} corporate mark`}
                size="corp"
              />
            ) : null}
          </div>
        ) : null}

        <div className="space-y-3 text-center font-sans text-[0.6875rem] leading-relaxed tracking-[0.04em] text-muted">
          <p className="text-foreground/78">
            <span className="font-semibold tracking-[0.06em] text-prestige-navy/92">
              {partnerRoleLine()}.
            </span>
          </p>

          <p className="max-w-2xl text-balance">{partnerDisclosureCopy()}</p>

          <p className="max-w-2xl text-balance text-muted">{partnerMarksLine()}</p>

          {reference !== null ? (
            <p>
              <Link
                href={reference}
                rel="noopener noreferrer"
                target="_blank"
                className="border-b border-prestige-navy/28 font-medium text-prestige-navy/88 transition-colors hover:border-prestige-navy/55 hover:text-prestige-navy"
              >
                Reference campaign site
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
