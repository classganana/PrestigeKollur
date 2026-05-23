import dynamic from "next/dynamic";

import type { HighlightsContent } from "@/lib/content/types";

const HighlightsUrbanSection = dynamic(
  () =>
    import("@/sections/highlights/highlights-urban-section").then((mod) => ({
      default: mod.HighlightsUrbanSection,
    })),
  { loading: () => <HighlightsSectionSkeleton /> },
);

function HighlightsSectionSkeleton() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading project highlights"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/12 bg-forest-strong sm:scroll-mt-28"
    >
      <div className="mx-auto h-64 max-w-[min(1180px,calc(100vw-3rem))] animate-pulse px-6 py-section-y" />
    </section>
  );
}

export type HighlightsSectionVariant = "urban";

type Props = {
  content: HighlightsContent;
  variant?: HighlightsSectionVariant;
};

export function HighlightsSection({ content, variant = "urban" }: Props) {
  if (variant === "urban") {
    return <HighlightsUrbanSection content={content} />;
  }

  return <HighlightsUrbanSection content={content} />;
}
