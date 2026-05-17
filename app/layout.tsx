import type { Metadata, Viewport } from "next";

import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

import "@/styles/globals.css";

import { MobileStickyConversionBar } from "@/components/conversion/mobile-sticky-conversion-bar";
import { DesktopConciergeFloats } from "@/components/floating/desktop-concierge-floats";
import { GrainOverlay } from "@/components/decorative/grain-overlay";
import { SiteChrome } from "@/components/layout/site-chrome";

import { ConciergeModalProvider } from "@/components/providers/concierge-modal-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

import { SITE } from "@/constants/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],

  weight: ["300", "400", "500", "600"],

  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL != null &&
  process.env.NEXT_PUBLIC_SITE_URL.length > 0
    ? process.env.NEXT_PUBLIC_SITE_URL
    : undefined;

export const metadata: Metadata = {
  ...(siteUrl !== undefined ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: SITE.metadataTitle,
    template: `%s · ${SITE.metadataTitle}`,
  },

  description: SITE.description,

  robots: "index,follow",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: SITE.metadataTitle,
    description: SITE.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#f9f7f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE.locale} className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">
        <SmoothScroll>
          <ConciergeModalProvider>
            <GrainOverlay />
            <SiteChrome label={SITE.name} subtitle={SITE.chromeSubtitle} />

            <main className="relative z-10 min-w-0 overflow-x-clip pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] md:pb-0">
              {children}
            </main>
            <MobileStickyConversionBar />
            <DesktopConciergeFloats />
          </ConciergeModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
