import { ImageResponse } from "next/og";

import { FaviconMark } from "@/lib/theme/favicon-mark";
import { resolveFavicon } from "@/lib/theme/resolve-favicon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Tab favicon — project monogram baked in at build time. */
export default function Icon() {
  const favicon = resolveFavicon();

  return new ImageResponse(<FaviconMark favicon={favicon} size={32} />, size);
}
