import type { ProjectPortfolioContent } from "@/lib/content/types";

import { goldenDoorsMediaManifest } from "@/projects/golden-doors/media-manifest";

/**
 * Active portfolio cards — edit this file when adding or removing projects.
 * `externalUrl` should point at the live microsite domain (or localhost in dev).
 */
export const goldenDoorsPortfolioContent: ProjectPortfolioContent = {
  heading: {
    eyebrow: "Active listings",
    title: "Projects we represent",
    lead: "Premium apartments and villa communities across Hyderabad — open a project site where available, or leave interest with Golden Doors directly.",
  },
  viewProjectLabel: "View project",
  expressInterestLabel: "Express interest",
  projects: [
    {
      id: "prestige-kollur",
      name: "Prestige Kollur",
      location: "Velimela · Tellapur–Kollur, Hyderabad",
      configuration: "2, 3 & 4 BHK",
      priceBand: "From ₹93 L*",
      highlights: [
        "~28.7-acre forest-themed township",
        "Twin clubhouses · 5,120 residences",
        "ORR Exit 2 connectivity",
        "Prestige Group × Swela Realty",
      ],
      imageSrc: goldenDoorsMediaManifest.paths.prestigeCard,
      imageAlt: "Prestige Kollur — township elevation.",
      externalUrl:
        process.env.NEXT_PUBLIC_PORTFOLIO_PRESTIGE_URL?.trim() ||
        "https://golden-grove-tellapur.site",
      developerName: "Prestige Group",
    },
    {
      id: "godrej-kukatpally",
      name: "Godrej Kukatpally",
      enabled: false,
      location: "KPHB · Kukatpally, Hyderabad",
      configuration: "3 & 4 BHK",
      priceBand: "From ₹2.11 Cr*",
      highlights: [
        "Twin 45-storey towers",
        "Minutes from HITEC City & Mindspace",
        "Brooklyn-inspired architecture",
        "Godrej Properties",
      ],
      imageSrc: goldenDoorsMediaManifest.paths.godrejCard,
      imageAlt: "Godrej Kukatpally — twin tower elevation.",
      externalUrl:
        process.env.NEXT_PUBLIC_PORTFOLIO_GODREJ_URL?.trim() ||
        "https://godrej-kukatpally-new-launch.site",
      developerName: "Godrej Properties",
    },
    {
      id: "vertex-viva-florenza",
      name: "Vertex Viva – Florenza",
      location: "Tukkuguda · Inside ORR, Hyderabad",
      configuration: "4 & 5 BHK triplex (G+2)",
      priceBand: "355+ sq. yd · enquire for pricing*",
      highlights: [
        "HMDA & RERA approved · 16.5-acre gated community",
        "105 villas · 4BHK & 5BHK from 5,353 sq. ft.",
        "35,000 sq. ft. clubhouse · 150 ft. entrance road",
        "ORR Exit 14 · ~30 min to Gachibowli",
      ],
      imageSrc: goldenDoorsMediaManifest.paths.vertexFlorenzaCard,
      imageAlt: "Vertex Viva Florenza — triplex villa community at dusk.",
      brochurePdf: "/documents/golden-doors/vertex-viva-florenza.pdf",
      developerName: "Vertex",
      badge: "Villas",
    },
    {
      id: "vertex-viva-calista",
      name: "Vertex Viva – Calista",
      location: "Tukkuguda · Inside ORR, Hyderabad",
      configuration: "Exclusive villas",
      priceBand: "226–280+ sq. yd · enquire for pricing*",
      highlights: [
        "10-acre landscaped gated community",
        "123 exclusive villas · 150 ft. grand entrance",
        "3 min to ORR · 5 min to RGIA airport",
        "Near Fab City, Financial District & Future City",
      ],
      imageSrc: goldenDoorsMediaManifest.paths.vertexCalistaCard,
      imageAlt: "Vertex Viva Calista — luxury villa elevation at twilight.",
      brochurePdf: "/documents/golden-doors/vertex-viva-calista.pdf",
      developerName: "Vertex",
      badge: "Villas",
    },
    {
      id: "vertex-kingston-park",
      name: "Vertex Kingston Park",
      location: "Nallagandla · Gachibowli, Hyderabad",
      configuration: "Ultra-luxury villas (G+2)",
      priceBand: "307–460 sq. yd · 4,159–7,400 sq. ft.*",
      highlights: [
        "RERA P02400002807 · 40-acre gated community",
        "250 villas · abutting 2,400-acre HCU green belt",
        "50,000 sq. ft. clubhouse · sports & wellness arena",
        "5 min to Gachibowli · 10 min to WIPRO Circle",
      ],
      imageSrc: goldenDoorsMediaManifest.paths.vertexKingstonParkCard,
      imageAlt: "Vertex Kingston Park — clubhouse and tennis court at Nallagandla.",
      brochurePdf: "/documents/golden-doors/vertex-kingston-park.pdf",
      developerName: "Vertex",
      badge: "Villas",
    },
  ],
};
