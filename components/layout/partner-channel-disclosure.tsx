import Image from "next/image";
import Link from "next/link";

import { AuthorizedPartnerLockup } from "@/components/branding/authorized-partner-lockup";
import {
  partnerDisclosureCopy,
  partnerLogoSrc,
  partnerMarksLine,
  partnerReferenceHref,
  partnerRoleLine,
} from "@/constants/partner-brand";
import { resolveBranding } from "@/lib/project/resolve-project";
import { cn } from "@/lib/cn";

function PartnerLogo({ alt, src }: { alt: string; src: string }) {
  if (!src.startsWith("/")) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={56}
      className="h-11 w-auto max-w-[12.5rem] object-contain opacity-95"
    />
  );
}

export function PartnerChannelDisclosure({ className }: { className?: string }) {
  const logo = partnerLogoSrc();
  const branding = resolveBranding();

  const reference = partnerReferenceHref();

  return (
    <div
      className={cn(
        "border-t border-prestige-navy/14 bg-gradient-to-b from-prestige-mist/55 via-soft-stone/55 to-soft-stone/75",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[min(880px,_calc(100vw-2.5rem))] flex-col items-center gap-5 px-6 py-gallery-gap">
        <AuthorizedPartnerLockup />

        {logo !== null ? (
          <PartnerLogo src={logo} alt={branding.partnerLogoAlt} />
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
