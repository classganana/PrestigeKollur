import Image from "next/image";
import Link from "next/link";

import { AuthorizedPartnerLockup } from "@/components/branding/authorized-partner-lockup";
import {
  partnerDisclosureCopy,
  partnerCorpMarkSrc,
  partnerHubHref,
  partnerLogoSrc,
  partnerMarksLine,
  partnerReferenceHref,
  partnerRoleLine,
} from "@/constants/partner-brand";
import { resolveBranding, resolveProject, resolveSite } from "@/lib/project/resolve-project";
import { cn } from "@/lib/cn";

function PartnerLogo({
  alt,
  src,
  size = "project",
}: {
  alt: string;
  src: string;
  size?: "project" | "corp" | "brand";
}) {
  if (!src.startsWith("/")) {
    return null;
  }

  const isCorp = size === "corp";
  const isBrand = size === "brand";
  const isStackedLockup = src.includes("lockup-compact") || src.includes("logo-full");
  const isHorizontalLockup = src.includes("lockup-horizontal");

  const width = isBrand
    ? 280
    : isCorp
      ? 120
      : isHorizontalLockup
        ? 320
        : isStackedLockup
          ? 200
          : 220;
  const height = isBrand
    ? 280
    : isCorp
      ? 120
      : isHorizontalLockup
        ? 90
        : isStackedLockup
          ? 200
          : 56;

  const className = cn(
    "w-auto object-contain",
    isBrand
      ? "h-36 max-w-[16rem] sm:h-44 sm:max-w-[18rem]"
      : isCorp
        ? "h-14 max-w-[7rem] sm:h-16 sm:max-w-[8rem]"
        : isStackedLockup
          ? "h-28 max-w-[12rem] sm:h-32 sm:max-w-[14rem]"
          : isHorizontalLockup
            ? "h-12 max-w-[18rem] sm:h-14 sm:max-w-[22rem]"
            : "h-11 max-w-[14rem] sm:h-12 sm:max-w-[15rem]",
  );

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

/** Microsite disclosure — partner badge + developer marks (Prestige / Godrej pattern). */
function MicrositeDisclosure({ className }: { className?: string }) {
  const logo = partnerLogoSrc();
  const corpMark = partnerCorpMarkSrc();
  const branding = resolveBranding();
  const site = resolveSite();
  const reference = partnerReferenceHref();
  const hub = partnerHubHref();
  const hasBrandMarks = Boolean(logo) || Boolean(corpMark);

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

          <p className="max-w-2xl text-balance text-foreground/70">{partnerDisclosureCopy()}</p>

          <p className="max-w-2xl text-balance text-foreground/55">{partnerMarksLine()}</p>

          {hub !== null ? (
            <p>
              <Link
                href={hub}
                rel="noopener noreferrer"
                target="_blank"
                className="border-b border-prestige-navy/28 font-medium text-prestige-navy/88 transition-colors hover:border-prestige-navy/55 hover:text-prestige-navy"
              >
                More projects by Golden Doors
              </Link>
            </p>
          ) : null}

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

/**
 * Brand-hub disclosure — one logo plate, channel-partner copy, no “sales partner of ourselves” badge.
 */
function BrandHubDisclosure({ className }: { className?: string }) {
  const logo = partnerLogoSrc();
  const branding = resolveBranding();
  const site = resolveSite();

  return (
    <div className={cn("border-t border-[#C9A227]/18 bg-[#0c0906]", className)}>
      <div className="mx-auto flex max-w-[min(720px,_calc(100vw-2.5rem))] flex-col items-center gap-7 px-6 py-12 sm:py-14">
        {logo !== null ? (
          <div className="flex items-center justify-center rounded-[20px] border border-[#C9A227]/25 bg-black px-8 py-6 sm:px-10 sm:py-7">
            <PartnerLogo src={logo} alt={branding.partnerLogoAlt} size="brand" />
          </div>
        ) : null}

        <div className="space-y-4 text-center font-sans">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E8D9B0]">
            {site.name} · Channel partner desk
          </p>

          <p className="mx-auto max-w-2xl text-[0.8125rem] leading-[1.75] tracking-[0.02em] text-[#EBE4D6]/[0.88]">
            {partnerDisclosureCopy()}
          </p>

          <p className="mx-auto max-w-2xl text-[0.75rem] leading-[1.7] tracking-[0.02em] text-[#C9BFB0]/[0.78]">
            {partnerMarksLine()}
          </p>

          <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1">
            <Link
              href="/services"
              className="border-b border-[#C9A227]/45 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E8D9B0] transition-colors hover:border-[#E8C65A] hover:text-[#E8C65A]"
            >
              Services offered
            </Link>
            <Link
              href="/clients"
              className="border-b border-[#C9A227]/45 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E8D9B0] transition-colors hover:border-[#E8C65A] hover:text-[#E8C65A]"
            >
              Our clients
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export function PartnerChannelDisclosure({ className }: { className?: string }) {
  const project = resolveProject();

  if (project.siteType === "brand-hub") {
    return <BrandHubDisclosure className={className} />;
  }

  return <MicrositeDisclosure className={className} />;
}
