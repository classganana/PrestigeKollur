import type { HeroContent } from "@/lib/content/types";

import { HeroEditorialSection } from "@/sections/hero/hero-editorial-section";
import { HeroUrbanSection } from "@/sections/hero/hero-urban-section";

export type HeroSectionVariant = "editorial" | "urban";

type Props = {
  content: HeroContent;
  variant?: HeroSectionVariant;
};

/** Hero router — layout variants driven by project section manifest. */
export function HeroSection({ content, variant = "editorial" }: Props) {
  if (variant === "urban") {
    return <HeroUrbanSection content={content} />;
  }

  return <HeroEditorialSection content={content} />;
}
