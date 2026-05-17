import type { Metadata } from "next";
import Image from "next/image";

import {
  MASTER_PLAN_APARTMENTS_SECTION,
  MASTER_PLAN_BUYERS_SECTION,
  MASTER_PLAN_COMPARISON_COLUMNS,
  MASTER_PLAN_COMPARISON_ROWS,
  MASTER_PLAN_CLUBHOUSE_SECTION,
  MASTER_PLAN_DOWNLOAD_SECTION,
  MASTER_PLAN_FAQ_HEADING,
  MASTER_PLAN_FAQS,
  MASTER_PLAN_FIGURES,
  MASTER_PLAN_KEY_FEATURES,
  MASTER_PLAN_KEY_FEATURES_HEADING,
  MASTER_PLAN_LEAD_PARAS,
  MASTER_PLAN_METADATA,
  MASTER_PLAN_OPEN_SPACE_BLOCK,
  MASTER_PLAN_PAGE_ATTRIBUTION,
  MASTER_PLAN_REPRESENT_SECTION,
  MASTER_PLAN_ROADS_SECURITY_SECTION,
  MASTER_PLAN_TOWER_SECTION,
} from "@/constants/master-plan-page";

import { Container, SectionHeading } from "@/components/ui";

import { OpenConciergeButton } from "@/components/conversion/open-concierge-button";
import { SecondaryButton } from "@/components/ui/secondary-button";

import { goldenGroveDocumentLinks } from "@/constants/golden-grove-project";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: MASTER_PLAN_METADATA.title,
  description: MASTER_PLAN_METADATA.description,
};

const comparisonTitle =
  "Prestige Golden Grove Masterplan vs. Hyderabad Top Projects (Technical Comparison 2026)";

const proseMuted = "font-sans text-body-relaxed text-muted";

export default function MasterPlanPage() {
  const docs = goldenGroveDocumentLinks();

  const masterPdf = docs.masterPlan;

  const canDownloadMasterPdf =
    masterPdf !== null &&
    docs.masterPlanIsDirectPdf === true &&
    typeof masterPdf === "string";

  return (
    <article className="border-t border-accent-bronze/10 bg-surface pb-section-y pt-[clamp(6.75rem,min(22vw,8.75rem),8.75rem)]">
      <Container>
        <div className="mb-gallery-gap flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb">
            <SecondaryButton
              href="/"
              prefetch={false}
              className="border-prestige-navy/32 text-prestige-navy hover:border-accent-gold/55 hover:text-accent-gold"
            >
              ← Back to home
            </SecondaryButton>
          </nav>

          <p className="font-sans text-micro uppercase tracking-[0.36em] text-muted">
            {SITE.name}
          </p>
        </div>

        <header className="mb-orbit space-y-gallery-gap lg:mb-orbit">
          <SectionHeading
            eyebrow="Township documentation"
            title={<>Prestige Golden Grove Master&nbsp;Plan</>}
            accent="gold"
            lead={<span className={proseMuted}>Source collateral mirrored for on-channel reading — gated PDFs reconcile with concierge when needed.</span>}
          />
          <div className="flex max-w-3xl flex-col gap-relax">
            {MASTER_PLAN_LEAD_PARAS.map((p) => (
              <p key={p.slice(0, 48)} className={proseMuted}>
                {p}
              </p>
            ))}
          </div>
        </header>

        <figure className="mb-gallery-gap overflow-hidden rounded-[clamp(22px,_3vw,34px)] border border-accent-bronze/18 bg-white/85 shadow-soft">
          <div className="relative aspect-[16/10] w-full sm:aspect-[2/1]">
            <Image
              alt={MASTER_PLAN_FIGURES[0].alt}
              className="object-contain bg-prestige-mist/30 object-center"
              fill
              priority
              decoding="sync"
              quality={92}
              sizes="(max-width: 1180px) 100vw, 1180px"
              src={MASTER_PLAN_FIGURES[0].src}
            />
          </div>
          <figcaption className="border-t border-accent-bronze/12 px-loft py-4 font-sans text-micro uppercase tracking-[0.32em] text-muted">
            {MASTER_PLAN_FIGURES[0].caption}
          </figcaption>
        </figure>

        <section aria-labelledby="mp-comparison-heading" className="mb-gallery-gap">
          <SectionHeading
            align="center"
            id="mp-comparison-heading"
            accent="olive"
            title={<span className="text-fluid-section">{comparisonTitle}</span>}
          />

          <div className="overflow-x-auto rounded-[clamp(18px,_2vw,26px)] border border-accent-bronze/16 bg-white/92 shadow-soft">
            <table className="w-full min-w-[720px] border-collapse text-left text-[0.8025rem]">
              <thead>
                <tr className="border-b border-accent-bronze/16 bg-soft-stone/70">
                  <th
                    scope="col"
                    className="sticky left-0 z-[1] whitespace-nowrap bg-soft-stone/95 px-loft py-4 font-semibold uppercase tracking-[0.12em] text-prestige-navy backdrop-blur-sm"
                  >
                    Feature
                  </th>
                  {MASTER_PLAN_COMPARISON_COLUMNS.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="min-w-[8.75rem] px-4 py-4 font-semibold uppercase tracking-[0.1em] text-prestige-navy/[0.86]"
                    >
                      <span className="inline-block leading-snug">{col}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MASTER_PLAN_COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-b border-accent-bronze/12 last:border-b-0",
                      i % 2 === 0 ? "bg-ivory/70" : "bg-fog-soft/55",
                    )}
                  >
                    <th
                      scope="row"
                      className="sticky left-0 z-[1] max-w-[10.5rem] bg-inherit px-loft py-3.5 font-medium text-prestige-navy backdrop-blur-sm sm:max-w-none"
                    >
                      {row.feature}
                    </th>
                    {row.values.map((cell, j) => (
                      <td key={`${row.feature}-${j}`} className="px-4 py-3.5 text-foreground/[0.85]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-gallery-gap">
          <h2 className="font-display text-[clamp(1.45rem,min(5vw,1.92rem),1.92rem)] leading-snug-soft text-prestige-navy">
            {MASTER_PLAN_KEY_FEATURES_HEADING}
          </h2>
          <ul className="mt-pillar columns-1 gap-x-orbit md:columns-2">
            {MASTER_PLAN_KEY_FEATURES.map((item) => (
              <li
                key={item}
                className="relative break-inside-avoid pl-[1rem] pt-4 font-sans text-body-relaxed text-muted before:absolute before:left-0 before:top-[0.92em] before:size-2 before:rounded-full before:bg-accent-gold/80 md:max-w-xl"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-pillar max-w-3xl text-center font-sans text-[1.015rem] leading-[1.8] tracking-[0.01em] text-foreground/[0.78]">
            {MASTER_PLAN_TOWER_SECTION.preface}
          </p>
        </section>

        <section className="mb-gallery-gap rounded-[clamp(22px,_3vw,32px)] border border-accent-bronze/14 bg-gradient-to-br from-prestige-mist/42 via-white/94 to-soft-stone/88 p-loft shadow-soft lg:p-orbit">
          <h2 className="font-display text-[clamp(1.52rem,min(5.2vw,2.06rem),2.06rem)] leading-snug-soft text-prestige-navy">
            {MASTER_PLAN_TOWER_SECTION.heading}
          </h2>
          <div className="mt-pillar grid gap-gallery-gap lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-relax">
              {MASTER_PLAN_TOWER_SECTION.paras.map((p) => (
                <p key={p.slice(0, 52)} className={proseMuted}>
                  {p}
                </p>
              ))}
            </div>
            <figure className="overflow-hidden rounded-[22px] border border-accent-bronze/14 bg-black/[0.04] shadow-soft">
              <div className="relative aspect-square w-full sm:aspect-[5/4]">
                <Image
                  alt={MASTER_PLAN_FIGURES[1].alt}
                  className="object-contain bg-prestige-mist/20 object-center"
                  fill
                  loading="lazy"
                  decoding="async"
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  src={MASTER_PLAN_FIGURES[1].src}
                />
              </div>
              <figcaption className="border-t border-accent-bronze/12 px-gallery-gap py-3 font-sans text-[0.64rem] uppercase tracking-[0.28em] text-muted">
                {MASTER_PLAN_FIGURES[1].caption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mb-gallery-gap grid gap-gallery-gap lg:grid-cols-2">
          <div className="rounded-3xl border border-prestige-navy/14 bg-white/93 p-loft shadow-soft">
            <h2 className="font-display text-[clamp(1.35rem,min(4.5vw,1.74rem),1.74rem)] text-prestige-navy">
              {MASTER_PLAN_APARTMENTS_SECTION.heading}
            </h2>
            <p className={`mt-relax ${proseMuted}`}>{MASTER_PLAN_APARTMENTS_SECTION.lead}</p>
            <p className="mt-4 font-semibold text-prestige-navy/[0.9]">{MASTER_PLAN_APARTMENTS_SECTION.variantIntro}</p>
            <ul className="mt-3 flex list-disc flex-col gap-3 pl-loft marker:text-accent-gold">
              {MASTER_PLAN_APARTMENTS_SECTION.variants.map((v) => (
                <li key={v} className={proseMuted}>
                  {v}
                </li>
              ))}
            </ul>
            <p className={`mt-pillar ${proseMuted}`}>{MASTER_PLAN_APARTMENTS_SECTION.footer}</p>
          </div>

          <div className="rounded-3xl border border-accent-bronze/16 bg-fog-soft/70 p-loft backdrop-blur-sm">
            <h2 className="font-display text-[clamp(1.35rem,min(4.5vw,1.74rem),1.74rem)] text-prestige-navy">
              {MASTER_PLAN_OPEN_SPACE_BLOCK.heading}
            </h2>
            {MASTER_PLAN_OPEN_SPACE_BLOCK.paras.map((p) => (
              <p key={p} className={`mt-relax ${proseMuted}`}>
                {p}
              </p>
            ))}
          </div>
        </section>

        <div className="mb-gallery-gap flex flex-col gap-gallery-gap">
          <article className="rounded-3xl border border-accent-bronze/14 bg-ivory/95 p-loft lg:p-orbit">
            <h2 className="font-display text-[clamp(1.42rem,min(5vw,1.94rem),1.94rem)] text-prestige-navy">
              {MASTER_PLAN_REPRESENT_SECTION.heading}
            </h2>
            <p className="mx-auto mt-pillar max-w-3xl text-center font-sans text-[1.02rem] leading-[1.8] text-muted">
              {MASTER_PLAN_REPRESENT_SECTION.body}
            </p>
          </article>

          <article className="rounded-3xl border border-prestige-navy/12 bg-white/93 p-loft lg:p-orbit">
            <h2 className="font-display text-[clamp(1.42rem,min(5vw,1.94rem),1.94rem)] text-prestige-navy">
              {MASTER_PLAN_BUYERS_SECTION.heading}
            </h2>
            <div className="mt-pillar mx-auto flex max-w-3xl flex-col gap-relax font-sans text-body-relaxed text-muted">
              {MASTER_PLAN_BUYERS_SECTION.paras.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </article>
        </div>

        <section className="mb-gallery-gap">
          <h2 className="font-display text-[clamp(1.42rem,min(5vw,1.94rem),1.94rem)] leading-snug text-prestige-navy">
            {MASTER_PLAN_CLUBHOUSE_SECTION.heading}
          </h2>
          <p className={`mt-relax max-w-3xl ${proseMuted}`}>{MASTER_PLAN_CLUBHOUSE_SECTION.lead}</p>
          <p className="mt-5 font-semibold uppercase tracking-[0.18em] text-prestige-navy/[0.88]">
            {MASTER_PLAN_CLUBHOUSE_SECTION.bulletsIntro}
          </p>
          <ul className="mt-4 columns-2 gap-x-orbit md:columns-3">
            {MASTER_PLAN_CLUBHOUSE_SECTION.clubhouseFeatures.map((f) => (
              <li
                key={f}
                className="relative break-inside-avoid pl-[1rem] py-2 text-[0.9025rem] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:size-[5px] before:rounded-full before:bg-accent-gold/88"
              >
                {f}
              </li>
            ))}
          </ul>

          <h3 className="mt-orbit font-display text-[1.38rem] text-prestige-navy">{MASTER_PLAN_CLUBHOUSE_SECTION.sportsHeading}</h3>
          <ul className="mt-gallery-gap flex flex-wrap gap-x-gallery-gap gap-y-2 md:gap-x-orbit">
            {MASTER_PLAN_CLUBHOUSE_SECTION.sportsFeatures.map((f) => (
              <li
                key={f}
                className="rounded-full border border-accent-bronze/18 bg-soft-stone/60 px-ribbon py-2 font-sans text-[0.75rem] font-medium uppercase tracking-[0.22em] text-prestige-navy/85"
              >
                {f}
              </li>
            ))}
          </ul>

          <figure className="mt-gallery-gap overflow-hidden rounded-[clamp(22px,_3vw,32px)] border border-accent-bronze/16 bg-white shadow-soft">
            <div className="relative aspect-[16/11] w-full">
              <Image
                alt={MASTER_PLAN_FIGURES[2].alt}
                className="object-contain bg-prestige-mist/35 object-center"
                fill
                loading="lazy"
                decoding="async"
                quality={90}
                sizes="(max-width: 1180px) 100vw, 1180px"
                src={MASTER_PLAN_FIGURES[2].src}
              />
            </div>
            <figcaption className="border-t border-accent-bronze/14 px-loft py-4 font-sans text-micro uppercase tracking-[0.32em] text-muted">
              {MASTER_PLAN_FIGURES[2].caption}
            </figcaption>
          </figure>
        </section>

        <section className="mb-gallery-gap rounded-3xl border border-accent-bronze/14 bg-white/93 p-loft lg:p-orbit">
          <h2 className="font-display text-[clamp(1.42rem,min(5vw,1.94rem),1.94rem)]">{MASTER_PLAN_ROADS_SECURITY_SECTION.heading}</h2>
          <div className={`mt-relax flex max-w-3xl flex-col gap-relax ${proseMuted}`}>
            {MASTER_PLAN_ROADS_SECURITY_SECTION.paras.map((p, i) => (
              <p key={`${p.slice(0, 42)}-${i}`}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mb-gallery-gap rounded-3xl border border-prestige-navy/12 bg-gradient-to-br from-white via-fog-soft/90 to-prestige-mist/50 p-loft lg:p-orbit">
          <h2 className="font-display text-[clamp(1.42rem,min(5vw,1.94rem),1.94rem)] text-prestige-navy">{MASTER_PLAN_DOWNLOAD_SECTION.heading}</h2>
          {MASTER_PLAN_DOWNLOAD_SECTION.paras.map((p) => (
            <p key={p.slice(0, 48)} className={`mt-relax ${proseMuted}`}>
              {p}
            </p>
          ))}
          <div className="mt-orbit flex flex-wrap items-center gap-pillar">
            {canDownloadMasterPdf === true ? (
              <SecondaryButton href={masterPdf ?? "#"} prefetch={false} {...(masterPdf.startsWith("/") ? { download: true } : {})}>
                Download master plan PDF
              </SecondaryButton>
            ) : null}
            <OpenConciergeButton className="w-full rounded-full px-ribbon sm:w-auto">
              Concierge briefing
            </OpenConciergeButton>
            <SecondaryButton href="/#documents" prefetch={false} className="w-full rounded-full px-ribbon sm:w-auto">
              Documents vault
            </SecondaryButton>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="mb-gallery-gap">
          <SectionHeading accent="gold" align="center" id="faq-heading" title={MASTER_PLAN_FAQ_HEADING} />
          <dl className="mx-auto mt-orbit grid max-w-3xl gap-ribbon">
            {MASTER_PLAN_FAQS.map((faq, idx) => (
              <details
                key={faq.q}
                className={cn(
                  "group rounded-3xl border border-accent-bronze/16 bg-white/93 p-loft shadow-soft backdrop-blur-[2px]",
                  "open:border-accent-gold/28",
                )}
              >
                <summary className="cursor-pointer select-none font-display text-[1.065rem] font-medium tracking-[-0.012em] text-prestige-navy transition-colors marker:text-accent-gold group-open:text-accent-gold">
                  <span className="mr-ribbon font-sans text-micro font-semibold tracking-[0.22em] text-muted">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </summary>
                <dd className="mt-relax ml-0 border-t border-accent-bronze/10 pt-gallery-gap font-sans text-body-relaxed text-muted">{faq.a}</dd>
              </details>
            ))}
          </dl>
        </section>

        <footer className="border-t border-accent-bronze/15 pt-gallery-gap font-sans text-[0.64rem] uppercase leading-relaxed tracking-[0.3em] text-muted">
          {MASTER_PLAN_PAGE_ATTRIBUTION}
        </footer>
      </Container>
    </article>
  );
}
