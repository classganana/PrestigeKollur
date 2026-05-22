import { Cormorant_Garamond, DM_Sans, Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import type { ThemeId } from "@/lib/theme/types";

const prestigeDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const prestigeSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const godrejDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const godrejSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

/** Applies the active theme’s Next font variables on `<html>`. */
export function themeFontClasses(themeId: ThemeId): string {
  switch (themeId) {
    case "godrej-kukatpally":
      return `${godrejDisplay.variable} ${godrejSans.variable}`;
    case "prestige-kollur":
    default:
      return `${prestigeDisplay.variable} ${prestigeSans.variable}`;
  }
}
