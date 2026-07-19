import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { FaviconMark } from "@/lib/theme/favicon-mark";
import { resolveFavicon } from "@/lib/theme/resolve-favicon";
import { getActiveProjectSlug } from "@/lib/project/resolve-project";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS / Android home-screen icon. */
export default async function AppleIcon() {
  if (getActiveProjectSlug() === "golden-doors") {
    const bytes = await readFile(
      join(process.cwd(), "public/partners/golden-doors-apple-touch.png"),
    );
    return new Response(bytes, {
      headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" },
    });
  }

  const favicon = resolveFavicon();
  return new ImageResponse(<FaviconMark favicon={favicon} size={180} />, size);
}
