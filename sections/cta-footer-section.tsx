import { SecondaryButton } from "@/components/ui/secondary-button";

import { ConciergeConversionPanel } from "@/components/conversion/concierge-conversion-panel";
import { PartnerChannelDisclosure } from "@/components/layout/partner-channel-disclosure";
import type { CtaFooterContent } from "@/lib/content/types";
import { resolveProject, resolveSite } from "@/lib/project/resolve-project";
import { cn } from "@/lib/cn";

const site = resolveSite();
const project = resolveProject();
const year = new Date().getFullYear();
const isBrandHub = project.siteType === "brand-hub";

export function CtaFooterSection({ content }: { content: CtaFooterContent }) {
  return (
    <footer aria-labelledby="cta-heading" id="cta" className="mt-section-y scroll-mt-28">
      <section className="relative isolate overflow-hidden theme-shell-deep pb-section-y pt-orbit">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.72] mix-blend-screen"
        >
          <div className="absolute -left-[12%] top-[-38%] h-[92%] w-[80%] rounded-full bg-accent-olive/28 blur-[120px]" />
          <div className="absolute bottom-[-45%] right-[-26%] h-[110%] w-[62%] rounded-full bg-accent-gold/26 blur-[102px]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-[min(960px,_calc(100vw-2rem))] flex-col gap-loft px-6 text-center sm:gap-orbit sm:px-10">
          <p className="font-sans text-micro uppercase tracking-[0.46em] text-accent-champagne">
            {content.eyebrow}
          </p>
          <div className="mx-auto h-px w-20 rounded-full bg-gradient-to-r from-transparent via-accent-gold to-transparent" />

          <h2
            id="cta-heading"
            className="font-display text-fluid-display leading-snug-soft text-balance text-inverse"
          >
            {content.title}
          </h2>

          <p className="mx-auto max-w-2xl font-sans text-body-relaxed text-inverse-muted">
            {content.lead}
          </p>

          <ConciergeConversionPanel />

          <div className="flex justify-center pt-pillar">
            <SecondaryButton
              href="#hero"
              className="border-inverse-muted/45 text-inverse hover:border-accent-champagne/55 hover:bg-transparent hover:text-accent-champagne"
            >
              {content.returnCtaLabel}
            </SecondaryButton>
          </div>
        </div>
      </section>

      <PartnerChannelDisclosure />

      <div
        className={cn(
          "border-t py-gallery-gap",
          isBrandHub
            ? "border-[#C9A227]/20 bg-[#0c0906]"
            : "border-accent-olive/18 bg-soft-stone/70 backdrop-blur-sm",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[min(1180px,_calc(100vw-3rem))] flex-col gap-ribbon px-6 font-sans text-micro uppercase tracking-[0.38em] sm:flex-row sm:items-center sm:justify-between",
            isBrandHub ? "text-[#E8D9B0]/[0.82]" : "text-muted",
          )}
        >
          <p className="text-center sm:text-left">{site.name}</p>

          <p className="text-center sm:text-right">
            © {year} · {content.copyrightSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}
