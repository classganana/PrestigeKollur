import dynamic from "next/dynamic";

import type { ConnectivityContent } from "@/lib/content/types";

import { ConnectivityEditorialSection } from "@/sections/connectivity/connectivity-editorial-section";

const ConnectivityCorridorSection = dynamic(
  () =>
    import("@/sections/connectivity/connectivity-corridor-section").then((mod) => ({
      default: mod.ConnectivityCorridorSection,
    })),
  { loading: () => <ConnectivitySectionSkeleton /> },
);

function ConnectivitySectionSkeleton() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading connectivity section"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/10 bg-surface pb-section-y sm:scroll-mt-28"
    >
      <div className="mx-auto h-72 max-w-[min(1180px,calc(100vw-3rem))] animate-pulse px-6" />
    </section>
  );
}

export type ConnectivitySectionVariant = "editorial" | "corridor";

type Props = {
  content: ConnectivityContent;
  variant?: ConnectivitySectionVariant;
};

/** Connectivity router — editorial split (Prestige) vs corridor tiers (urban high-rise). */
export function ConnectivitySection({ content, variant = "editorial" }: Props) {
  if (variant === "corridor" && content.corridorTiers !== undefined && content.corridorTiers.length > 0) {
    return <ConnectivityCorridorSection content={content} />;
  }

  return <ConnectivityEditorialSection content={content} />;
}
