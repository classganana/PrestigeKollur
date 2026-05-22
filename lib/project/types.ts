import type { ProjectContentPack } from "@/lib/content/types";
import type { SectionManifest } from "@/lib/project/section-types";
import type { ProjectAnalyticsConfig, ProjectSeoConfig } from "@/lib/seo/types";
import type { ThemeDefinition } from "@/lib/theme/types";
import type { prestigeKollurSite } from "@/projects/prestige-kollur/site";

/** Known deployable projects — extend when adding e.g. `godrej-kukatpally`. */
export type ProjectSlug = "prestige-kollur";

export type SiteIdentity = typeof prestigeKollurSite;

export type ProjectConfig = {
  slug: ProjectSlug;
  /** Stable analytics tag for concierge / Sheet intake rows. */
  leadSourceTag: string;
  site: SiteIdentity;
  theme: ThemeDefinition;
  content: ProjectContentPack;
  /** Home page section order, optional toggles, and future variants. */
  sections: SectionManifest;
  seo: ProjectSeoConfig;
  analytics: ProjectAnalyticsConfig;
};
