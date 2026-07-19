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
    lead: "Two premium launches in Hyderabad — open the full project site, or leave interest with Golden Doors directly.",
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
        "https://prestige.example.com",
      developerName: "Prestige Group",
    },
    {
      id: "godrej-kukatpally",
      name: "Godrej Kukatpally",
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
        "https://godrej.example.com",
      developerName: "Godrej Properties",
    },
  ],
};
