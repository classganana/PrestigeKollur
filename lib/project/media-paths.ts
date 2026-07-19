import type { ProjectSlug } from "@/lib/project/types";

/** Canonical public media roots — one directory per deployable project. */
export const PROJECT_MEDIA_ROOT: Record<ProjectSlug, string> = {
  "prestige-kollur": "/media/official",
  "godrej-kukatpally": "/media/godrej-kukatpally",
  "golden-doors": "/media/golden-doors",
};

const PRESTIGE_LEAK_PATTERN = /\/media\/official\b|prestige-golden-grove|banner-pool|plan-2bhk|plan-3bhk-1516|plan-4bhk-2900/i;

/**
 * Guard — Godrej content must never reference Prestige `/media/official/` assets.
 */
export function assertProjectMediaIsolation(
  slug: ProjectSlug,
  src: string,
): string {
  if (slug === "godrej-kukatpally" && PRESTIGE_LEAK_PATTERN.test(src)) {
    throw new Error(
      `[media] Prestige asset leak in Godrej content: "${src}". Use ${PROJECT_MEDIA_ROOT["godrej-kukatpally"]}/ only.`,
    );
  }

  return src;
}

/** Walks a resolved content pack and fails the build if Prestige media paths appear in Godrej. */
export function assertContentPackMediaIsolation(slug: ProjectSlug, pack: unknown): void {
  if (slug !== "godrej-kukatpally") {
    return;
  }

  const serialized = JSON.stringify(pack);

  if (PRESTIGE_LEAK_PATTERN.test(serialized)) {
    const match = serialized.match(PRESTIGE_LEAK_PATTERN);

    throw new Error(
      `[media] Prestige asset leak in ${slug} content pack: "${match?.[0] ?? "unknown"}". Use ${PROJECT_MEDIA_ROOT["godrej-kukatpally"]}/ only.`,
    );
  }
}
