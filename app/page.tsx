import dynamic from "next/dynamic";

import { Container } from "@/components/ui/container";
import { AmenitiesSection } from "@/sections/amenities-section";
import { ConnectivitySection } from "@/sections/connectivity-section";

import { CtaFooterSection } from "@/sections/cta-footer-section";
import { HeroSection } from "@/sections/hero-section";

import { LocationMapSection } from "@/sections/location-map-section";
import { PaymentEoiSection } from "@/sections/payment-eoi-section";
import { FloorPlanTeaserSection } from "@/sections/floor-plan-teaser-section";
import { PricingPlansSection } from "@/sections/pricing-plans-section";
import { ProjectDocumentsSection } from "@/sections/project-documents-section";
import { ProjectOverviewSection } from "@/sections/project-overview-section";
import { SpecificationsSection } from "@/sections/specifications-section";

import { TownshipSection } from "@/sections/township-section";

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
    <section className="px-6 py-section-y">
      <div className="mx-auto h-72 max-w-[min(1180px,_calc(100vw-3rem))] animate-pulse rounded-[32px] bg-soft-stone/80" />
    </section>
  ),
});

export default function Page() {
  return (
    <>
      <HeroSection />
      <ProjectOverviewSection />
      <AmenitiesSection />
      <PricingPlansSection />
      <FloorPlanTeaserSection />
      <PaymentEoiSection />
      <ProjectDocumentsSection />
      <ConnectivitySection />
      <CinematicTownshipSection />
      <TownshipSection />

      <SpecificationsSection />
      <GallerySection />
      <LocationMapSection />
      <CtaFooterSection />
    </>
  );
}
