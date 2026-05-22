import { resolveProject } from "@/lib/project/resolve-project";

import type { ThemeDefinition } from "@/lib/theme/types";

/** Visual identity for the active project build. */
export function resolveTheme(): ThemeDefinition {
  return resolveProject().theme;
}
