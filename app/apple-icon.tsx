import { ImageResponse } from "next/og";

import { FaviconMark } from "@/lib/theme/favicon-mark";
import { resolveFavicon } from "@/lib/theme/resolve-favicon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS / Android home-screen icon — same mark at touch-friendly size. */
export default function AppleIcon() {
  const favicon = resolveFavicon();

  return new ImageResponse(<FaviconMark favicon={favicon} size={180} />, size);
}
