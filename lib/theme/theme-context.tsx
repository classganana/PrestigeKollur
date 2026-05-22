"use client";

import { useProject } from "@/lib/project/project-context";

import type { ThemeDefinition } from "@/lib/theme/types";

export function useTheme(): ThemeDefinition {
  return useProject().theme;
}
