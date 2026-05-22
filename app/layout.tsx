import type { Metadata, Viewport } from "next";

import "@/styles/globals.css";

import { MobileStickyConversionBar } from "@/components/conversion/mobile-sticky-conversion-bar";
import { DesktopConciergeFloats } from "@/components/floating/desktop-concierge-floats";
import { GrainOverlay } from "@/components/decorative/grain-overlay";
import { SiteChrome } from "@/components/layout/site-chrome";
import { StructuredData } from "@/components/seo/structured-data";

import { AnalyticsProvider } from "@/components/providers/analytics-provider";
import { ConciergeModalProvider } from "@/components/providers/concierge-modal-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { themeFontClasses } from "@/lib/theme/fonts";
import { ProjectProvider } from "@/lib/project/project-context";
import { resolveProject } from "@/lib/project/resolve-project";
import { buildRootMetadata } from "@/lib/seo/metadata";
import { buildRootStructuredData } from "@/lib/seo/structured-data";

const project = resolveProject();
const site = project.site;
const theme = project.theme;
const rootStructuredData = buildRootStructuredData(project.seo, site);

export const metadata: Metadata = buildRootMetadata(project.seo);

export const viewport: Viewport = {
  themeColor: theme.viewportThemeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={site.locale}
      data-theme={theme.id}
      className={themeFontClasses(theme.id)}
    >
      <body className="font-sans">
        <StructuredData data={rootStructuredData} />
        <ProjectProvider config={project}>
          <AnalyticsProvider />
          <SmoothScroll>
            <ConciergeModalProvider>
              <GrainOverlay />
              <SiteChrome label={site.name} subtitle={site.chromeSubtitle} />

              <main className="relative z-10 min-w-0 overflow-x-clip pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] md:pb-0">
                {children}
              </main>
              <MobileStickyConversionBar />
              <DesktopConciergeFloats />
            </ConciergeModalProvider>
          </SmoothScroll>
        </ProjectProvider>
      </body>
    </html>
  );
}
