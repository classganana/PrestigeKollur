import type { ProjectConfig } from "@/lib/project/types";

import { godrejKukatpallyAnalytics } from "@/projects/godrej-kukatpally/analytics";
import { godrejKukatpallyBranding } from "@/projects/godrej-kukatpally/branding";
import { godrejKukatpallyContent } from "@/projects/godrej-kukatpally/content";
import { godrejKukatpallySectionManifest } from "@/projects/godrej-kukatpally/sections";
import { godrejKukatpallySeo } from "@/projects/godrej-kukatpally/seo";
import { godrejKukatpallySite } from "@/projects/godrej-kukatpally/site";
import { godrejKukatpallyTheme } from "@/projects/godrej-kukatpally/theme";

export const godrejKukatpallyConfig: ProjectConfig = {
  slug: "godrej-kukatpally",
  leadSourceTag: "godrej-kukatpally-web",
  site: godrejKukatpallySite,
  branding: godrejKukatpallyBranding,
  theme: godrejKukatpallyTheme,
  content: godrejKukatpallyContent,
  sections: godrejKukatpallySectionManifest,
  seo: godrejKukatpallySeo,
  analytics: godrejKukatpallyAnalytics,
};
