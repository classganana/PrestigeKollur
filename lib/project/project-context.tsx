"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import type { ProjectConfig, SiteIdentity } from "@/lib/project/types";

const ProjectContext = createContext<ProjectConfig | null>(null);

export function ProjectProvider({
  config,
  children,
}: {
  config: ProjectConfig;
  children: ReactNode;
}) {
  const value = useMemo(() => config, [config]);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export function useProject(): ProjectConfig {
  const ctx = useContext(ProjectContext);

  if (ctx === null) {
    throw new Error("useProject must be used within ProjectProvider.");
  }

  return ctx;
}

export function useSite(): SiteIdentity {
  return useProject().site;
}
