import type { ProjectConfig } from "@/lib/project/types";

import { goldenDoorsAnalytics } from "@/projects/golden-doors/analytics";
import { goldenDoorsBranding } from "@/projects/golden-doors/branding";
import { goldenDoorsContent } from "@/projects/golden-doors/content";
import { goldenDoorsSectionManifest } from "@/projects/golden-doors/sections";
import { goldenDoorsSeo } from "@/projects/golden-doors/seo";
import { goldenDoorsSite } from "@/projects/golden-doors/site";
import { goldenDoorsTheme } from "@/projects/golden-doors/theme";

export const goldenDoorsConfig: ProjectConfig = {
  slug: "golden-doors",
  siteType: "brand-hub",
  leadSourceTag: "golden-doors-web",
  site: goldenDoorsSite,
  branding: goldenDoorsBranding,
  theme: goldenDoorsTheme,
  content: goldenDoorsContent,
  sections: goldenDoorsSectionManifest,
  seo: goldenDoorsSeo,
  analytics: goldenDoorsAnalytics,
};
