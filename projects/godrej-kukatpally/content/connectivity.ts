import type { ConnectivityContent } from "@/lib/content/types";

import { godrejKukatpallyMediaManifest } from "@/projects/godrej-kukatpally/media-manifest";

export const godrejKukatpallyConnectivityContent: ConnectivityContent = {
  eyebrow: "Connectivity · IT corridor",
  headlineLines: ["The IT corridor", "starts here."],
  lead: "KPHB places you inside the city's most active commute orbit — IT parks, metro nodes, and ORR access without retreating from metropolitan pace.",
  metricsDisclaimer:
    "Approximate peak-hour drive times · validate during concierge-led site visits",
  primaryMetrics: [
    {
      timeBand: "5 min",
      headline: "Mindspace IT Park",
      note: "Raheja Mindspace · Madhapur spillover",
    },
    {
      timeBand: "8 min",
      headline: "HITEC City",
      note: "Primary western IT hub",
    },
    {
      timeBand: "16 min",
      headline: "Financial District",
      note: "Nanakramguda · Gachibowli arc",
    },
    {
      timeBand: "28 min",
      headline: "RGIA Airport",
      note: "ORR southern glide · illustrative",
    },
  ],
  corridorTiers: [
    {
      tierBand: "Under 10 min",
      tierLabel: "Daily commute orbit",
      destinations: [
        { name: "Mindspace IT Park", detail: "~5 min" },
        { name: "HITEC City", detail: "~8 min" },
        { name: "Cyber Towers / Madhapur", detail: "~8–10 min" },
        { name: "KPHB Metro Station", detail: "~7–8 min" },
      ],
    },
    {
      tierBand: "10 – 20 min",
      tierLabel: "Metro & retail spine",
      destinations: [
        { name: "Forum Sujana / Nexus Mall", detail: "~6–10 min" },
        { name: "LuLu Mall Hyderabad", detail: "~9 min" },
        { name: "Outer Ring Road (ORR)", detail: "~9–11 min" },
        { name: "Gachibowli", detail: "~10 min" },
      ],
    },
    {
      tierBand: "20 min +",
      tierLabel: "City & airport reach",
      destinations: [
        { name: "Financial District", detail: "~16 min" },
        { name: "Begumpet / Secunderabad", detail: "~14–18 min" },
        { name: "Rajiv Gandhi Intl. Airport", detail: "~28–32 min" },
      ],
    },
  ],
  essentialMetrics: [
    {
      cluster: "Metro",
      span: "KPHB · JNTU",
      detail: "Blue Line nodes · 7–8 min",
    },
    {
      cluster: "NH-65",
      span: "3 min",
      detail: "Primary arterial frontage",
    },
    {
      cluster: "Tech parks",
      span: "5–16 min",
      detail: "Mindspace · HITEC · Financial District",
    },
    {
      cluster: "Healthcare",
      span: "4–13 min",
      detail: "AIG · CARE · Apollo Spectra orbit",
    },
  ],
  essentialClusterLabel: "Infrastructure matrix",
  mapEyebrow: "Corridor atlas",
  mapFrame: {
    src: godrejKukatpallyMediaManifest.paths.planLocation,
    alt: "Godrej Kukatpally — KPHB IT corridor connectivity atlas.",
    caption: "KPHB anchor · western IT belt · illustrative corridor radii",
    atlasMicroline: "Curated atlas",
    imageFocus: "50% 52%",
  },
  mapNodes: [
    { label: "Godrej Kukatpally", x: "51%", y: "47%", role: "anchor" },
    { label: "HITEC City", x: "73%", y: "58%", role: "node" },
    { label: "Mindspace", x: "69%", y: "50%", role: "node" },
    { label: "ORR", x: "34%", y: "66%", role: "node" },
  ],
  imageCaption: "Metropolitan corridor context · key nodes only",
  atlasNote: "Distances illustrative · subject to traffic and infrastructure updates",
  ctaSupport:
    "Request a concierge-led corridor drive — HITEC City, Mindspace, and metro nodes mapped to your commute window.",
};
