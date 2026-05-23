import dynamic from "next/dynamic";
import type { ComponentType } from "react";

import { Container } from "@/components/ui/container";
import type { ProjectContentPack } from "@/lib/content/types";
import type { HighlightsContent, StorytellingContent, TrustContent } from "@/lib/content/types";
import { getSectionDefinition } from "@/lib/project/section-registry";
import type { SectionId, SectionManifestEntry } from "@/lib/project/section-types";

import { AmenitiesSection } from "@/sections/amenities-section";
import { ConnectivitySection } from "@/sections/connectivity-section";
import { CtaFooterSection } from "@/sections/cta-footer-section";
import { FloorPlanTeaserSection } from "@/sections/floor-plan-teaser-section";
import { HeroSection } from "@/sections/hero-section";
import { HighlightsSection } from "@/sections/highlights-section";
import { LocationMapSection } from "@/sections/location-map-section";
import { PaymentEoiSection } from "@/sections/payment-eoi-section";
import { PricingPlansSection } from "@/sections/pricing-plans-section";
import { ProjectDocumentsSection } from "@/sections/project-documents-section";
import { ProjectOverviewSection } from "@/sections/project-overview-section";
import { SpecificationsSection } from "@/sections/specifications-section";
import { TownshipSection } from "@/sections/township-section";
import { TrustSection } from "@/sections/trust-section";

const CinematicTownshipSection = dynamic(
  () =>
    import("@/sections/cinematic-township-section").then((mod) => ({
      default: mod.CinematicTownshipSection,
    })),
  {
    loading: () => (
      <section
        aria-busy="true"
        aria-label="Loading township cinematic section"
        className="scroll-mt-28 border-t border-accent-bronze/10 bg-twilight-soft/45"
      >
        <Container>
          <div className="aspect-[210/114] animate-pulse rounded-[clamp(24px,_3.4vw,_40px)] bg-soft-stone/75 shadow-soft ring-1 ring-black/[0.04] sm:aspect-[219/106]" />
        </Container>
      </section>
    ),
  },
);

const GallerySection = dynamic(() => import("@/sections/gallery-section"), {
  loading: () => (
    <section className="px-6 py-section-y" aria-busy="true" aria-label="Loading gallery">
      <div className="mx-auto h-72 max-w-[min(1180px,_calc(100vw-3rem))] animate-pulse rounded-[32px] bg-soft-stone/80" />
    </section>
  ),
});

const StorytellingIdentitySection = dynamic(
  () =>
    import("@/sections/storytelling-identity-section").then((mod) => ({
      default: mod.StorytellingIdentitySection,
    })),
  {
    loading: () => (
      <section
        aria-busy="true"
        aria-label="Loading storytelling section"
        className="border-t border-accent-bronze/10 bg-surface py-section-y"
      >
        <Container>
          <div className="mx-auto h-48 max-w-3xl animate-pulse rounded-[28px] bg-soft-stone/70" />
        </Container>
      </section>
    ),
  },
);

type SectionRendererProps = {
  entry: SectionManifestEntry;
  content: ProjectContentPack;
};

type SectionComponentProps = {
  content: unknown;
};

const STATIC_SECTION_RENDERERS: Record<
  SectionId,
  ComponentType<SectionComponentProps> | null
> = {
  hero: HeroSection as ComponentType<SectionComponentProps>,
  overview: ProjectOverviewSection as ComponentType<SectionComponentProps>,
  storytelling: null,
  highlights: HighlightsSection as ComponentType<SectionComponentProps>,
  amenities: AmenitiesSection as ComponentType<SectionComponentProps>,
  pricing: PricingPlansSection as ComponentType<SectionComponentProps>,
  "floor-plans": FloorPlanTeaserSection as ComponentType<SectionComponentProps>,
  payments: PaymentEoiSection as ComponentType<SectionComponentProps>,
  documents: ProjectDocumentsSection as ComponentType<SectionComponentProps>,
  connectivity: ConnectivitySection as ComponentType<SectionComponentProps>,
  "cinematic-township": null,
  township: TownshipSection as ComponentType<SectionComponentProps>,
  specifications: SpecificationsSection as ComponentType<SectionComponentProps>,
  gallery: null,
  location: LocationMapSection as ComponentType<SectionComponentProps>,
  trust: TrustSection as ComponentType<SectionComponentProps>,
  "cta-footer": CtaFooterSection as ComponentType<SectionComponentProps>,
};

const DYNAMIC_SECTION_RENDERERS: Partial<
  Record<SectionId, ComponentType<SectionComponentProps>>
> = {
  storytelling: StorytellingIdentitySection as ComponentType<SectionComponentProps>,
  "cinematic-township": CinematicTownshipSection as ComponentType<SectionComponentProps>,
  gallery: GallerySection as ComponentType<SectionComponentProps>,
};

function resolveSectionContent(
  id: SectionId,
  content: ProjectContentPack,
): unknown {
  const { contentKey } = getSectionDefinition(id);
  const slice = content[contentKey];

  if (slice === undefined) {
    throw new Error(
      `Section "${id}" requires content.${String(contentKey)} but it is missing from the active project pack.`,
    );
  }

  return slice;
}

function SectionRenderer({ entry, content }: SectionRendererProps) {
  const definition = getSectionDefinition(entry.id);
  const sectionContent = resolveSectionContent(entry.id, content);
  const variant = entry.variant;

  if (definition.load === "dynamic") {
    const DynamicSection = DYNAMIC_SECTION_RENDERERS[entry.id];

    if (DynamicSection === undefined) {
      throw new Error(`No dynamic renderer registered for section "${entry.id}".`);
    }

    if (entry.id === "storytelling") {
      return (
        <StorytellingIdentitySection
          content={sectionContent as StorytellingContent}
          variant={variant === "urban" ? "urban" : "editorial"}
        />
      );
    }

    return <DynamicSection content={sectionContent} />;
  }

  const StaticSection = STATIC_SECTION_RENDERERS[entry.id];

  if (StaticSection === null || StaticSection === undefined) {
    throw new Error(`No static renderer registered for section "${entry.id}".`);
  }

  if (entry.id === "overview") {
    return (
      <ProjectOverviewSection
        content={sectionContent as ProjectContentPack["overview"]}
        variant={variant === "urban" ? "urban" : "editorial"}
      />
    );
  }

  if (entry.id === "hero") {
    return (
      <HeroSection
        content={sectionContent as ProjectContentPack["hero"]}
        variant={variant === "urban" ? "urban" : "editorial"}
      />
    );
  }

  if (entry.id === "connectivity") {
    return (
      <ConnectivitySection
        content={sectionContent as ProjectContentPack["connectivity"]}
        variant={variant === "corridor" ? "corridor" : "editorial"}
      />
    );
  }

  if (entry.id === "amenities") {
    return (
      <AmenitiesSection
        content={sectionContent as ProjectContentPack["amenities"]}
        variant={variant === "urban" ? "urban" : "editorial"}
      />
    );
  }

  if (entry.id === "highlights") {
    return (
      <HighlightsSection
        content={sectionContent as HighlightsContent}
        variant="urban"
      />
    );
  }

  if (entry.id === "trust") {
    return (
      <TrustSection
        content={sectionContent as TrustContent}
        variant="urban"
      />
    );
  }

  return <StaticSection content={sectionContent} />;
}

export type RenderPageSectionsProps = {
  sections: SectionManifestEntry[];
  content: ProjectContentPack;
};

/** Renders the project page manifest in order — structure only; sections own layout/motion. */
export function RenderPageSections({ sections, content }: RenderPageSectionsProps) {
  return (
    <>
      {sections.map((entry) => (
        <SectionRenderer key={`${entry.id}-${entry.variant ?? "default"}`} entry={entry} content={content} />
      ))}
    </>
  );
}
