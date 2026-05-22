import type { LocationContent } from "@/lib/content/types";
import { LOCATION_FACTS } from "@/projects/prestige-kollur/project-facts";

export const prestigeKollurLocationContent: LocationContent = {
  heading: {
    eyebrow: "Arrival geometry",
    title: "Velimela · Tellapur–Kollur wealth corridor",
    lead: LOCATION_FACTS.landmark,
  },
  facts: {
    addressLines: [...LOCATION_FACTS.addressLines],
    landmark: LOCATION_FACTS.landmark,
    lat: LOCATION_FACTS.lat,
    lng: LOCATION_FACTS.lng,
    proximity: [...LOCATION_FACTS.proximity],
    mapEmbedTitle: "Approximate Prestige Kollur context map",
    mapCaption:
      "Pin reflects partner-published coordinates (~17.51°N, 78.27°E) — validate against survey pegs before acquisition decisions.",
  },
  postalLabel: "Postal skeleton",
  connectivityLabel: "Connectivity shorthand",
  conciergeCtaLabel: "Book disciplined site tour",
};
