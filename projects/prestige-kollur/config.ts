import type { ProjectConfig } from "@/lib/project/types";

import { prestigeKollurAnalytics } from "@/projects/prestige-kollur/analytics";
import { prestigeKollurContent } from "@/projects/prestige-kollur/content";
import { prestigeKollurSectionManifest } from "@/projects/prestige-kollur/sections";
import { prestigeKollurSeo } from "@/projects/prestige-kollur/seo";
import { prestigeKollurSite } from "@/projects/prestige-kollur/site";
import { prestigeKollurTheme } from "@/projects/prestige-kollur/theme";

export const prestigeKollurConfig: ProjectConfig = {
  slug: "prestige-kollur",
  leadSourceTag: "prestige-kollur-web",
  site: prestigeKollurSite,
  theme: prestigeKollurTheme,
  content: prestigeKollurContent,
  sections: prestigeKollurSectionManifest,
  seo: prestigeKollurSeo,
  analytics: prestigeKollurAnalytics,
};
