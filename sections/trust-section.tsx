import dynamic from "next/dynamic";

import type { TrustContent } from "@/lib/content/types";

const TrustUrbanSection = dynamic(
  () =>
    import("@/sections/trust/trust-urban-section").then((mod) => ({
      default: mod.TrustUrbanSection,
    })),
  { loading: () => <TrustSectionSkeleton /> },
);

function TrustSectionSkeleton() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading trust section"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/12 bg-surface pb-section-y sm:scroll-mt-28"
    >
      <div className="mx-auto h-56 max-w-[min(1180px,calc(100vw-3rem))] animate-pulse px-6" />
    </section>
  );
}

export type TrustSectionVariant = "urban";

type Props = {
  content: TrustContent;
  variant?: TrustSectionVariant;
};

export function TrustSection({ content, variant = "urban" }: Props) {
  if (variant === "urban") {
    return <TrustUrbanSection content={content} />;
  }

  return <TrustUrbanSection content={content} />;
}
