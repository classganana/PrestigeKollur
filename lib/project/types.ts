import type { ProjectContentPack } from "@/lib/content/types";
import type { SectionManifest } from "@/lib/project/section-types";
import type { ProjectAnalyticsConfig, ProjectSeoConfig } from "@/lib/seo/types";
import type { ThemeDefinition } from "@/lib/theme/types";
import type { godrejKukatpallySite } from "@/projects/godrej-kukatpally/site";
import type { prestigeKollurSite } from "@/projects/prestige-kollur/site";

/** Known deployable projects. */
export type ProjectSlug = "prestige-kollur" | "godrej-kukatpally";

export type SiteIdentity = typeof prestigeKollurSite | typeof godrejKukatpallySite;

/** Partner disclosure, marks, and default lockup assets — per-project branding layer. */
export type PartnerBranding = {
  disclosure: string;
  marksLine: string;
  defaultProjectLogoSrc: string;
  defaultCorpMarkSrc: string;
  partnerLogoAlt: string;
};

export type ProjectConfig = {
  slug: ProjectSlug;
  /** Stable analytics tag for concierge / Sheet intake rows. */
  leadSourceTag: string;
  site: SiteIdentity;
  branding: PartnerBranding;
  theme: ThemeDefinition;
  content: ProjectContentPack;
  /** Home page section order, optional toggles, and future variants. */
  sections: SectionManifest;
  seo: ProjectSeoConfig;
  analytics: ProjectAnalyticsConfig;
};
