import { SecondaryButton } from "@/components/ui/secondary-button";

import { ConciergeConversionPanel } from "@/components/conversion/concierge-conversion-panel";
import { PartnerChannelDisclosure } from "@/components/layout/partner-channel-disclosure";
import { SITE } from "@/constants/site";

const year = new Date().getFullYear();

export function CtaFooterSection() {
  return (
    <footer
      aria-labelledby="cta-heading"
      id="cta"
      className="mt-section-y scroll-mt-28"
    >
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-forest via-forest-strong to-[#070c0b] pb-section-y pt-orbit text-inverse">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.72] mix-blend-screen"
        >
          <div className="absolute -left-[12%] top-[-38%] h-[92%] w-[80%] rounded-full bg-accent-olive/28 blur-[120px]" />
          <div className="absolute bottom-[-45%] right-[-26%] h-[110%] w-[62%] rounded-full bg-accent-gold/26 blur-[102px]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-[min(960px,_calc(100vw-2rem))] flex-col gap-loft px-6 text-center sm:gap-orbit sm:px-10">
          <p className="font-sans text-micro uppercase tracking-[0.46em] text-accent-champagne">
            Confidential concierge · private walkthroughs
          </p>
          <div className="mx-auto h-px w-20 rounded-full bg-gradient-to-r from-transparent via-accent-gold to-transparent" />

          <h2
            id="cta-heading"
            className="font-display text-fluid-display leading-snug-soft text-balance"
          >
            Orchestrate your first passage through the township.
          </h2>

          <p className="mx-auto max-w-2xl font-sans text-body-relaxed text-inverse-muted">
            Three calm channels—call, WhatsApp, or the discreet form—each tuned to
            hospitality cadence. No dashboards, no noise: only thoughtful
            follow-through.
          </p>

          <ConciergeConversionPanel />

          <div className="flex justify-center pt-pillar">
            <SecondaryButton
              href="#hero"
              className="border-inverse-muted/45 text-inverse hover:border-accent-champagne/55 hover:bg-transparent hover:text-accent-champagne"
            >
              Return to prelude
            </SecondaryButton>
          </div>
        </div>
      </section>

      <PartnerChannelDisclosure />

      <div className="border-t border-accent-olive/18 bg-soft-stone/70 py-gallery-gap backdrop-blur-sm">
        <div className="mx-auto flex max-w-[min(1180px,_calc(100vw-3rem))] flex-col gap-ribbon px-6 font-sans text-micro uppercase tracking-[0.38em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">{SITE.name}</p>

          <p className="text-center sm:text-right">© {year} · narrative forthcoming</p>
        </div>
      </div>
    </footer>
  );
}
