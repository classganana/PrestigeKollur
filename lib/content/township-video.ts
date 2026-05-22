/**
 * Township fly-through source resolution — env-driven, shared across projects.
 */

export function normalizeTownshipFlythroughCloudinarySrc(raw: string): string {
  const trimmed = raw.trim();

  if (trimmed.length === 0) return trimmed;

  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);

    if (url.hostname !== "res.cloudinary.com") return trimmed;

    let { pathname } = url;

    if (pathname.includes("f_mp4")) return trimmed;

    if (!pathname.includes("/video/upload/")) return trimmed;

    pathname = pathname.replace("/video/upload/", "/video/upload/f_mp4/");

    url.pathname = pathname;

    return url.toString();
  } catch {
    return trimmed;
  }
}

export function townshipFlythroughMimeType(src: string): string {
  const lower = src.toLowerCase();

  if (lower.includes("/f_mp4") || lower.endsWith(".mp4")) return "video/mp4";

  if (lower.endsWith(".webm")) return "video/webm";

  if (lower.endsWith(".mov")) return "video/quicktime";

  return "video/mp4";
}

export function resolveTownshipFlythroughSrc(): string {
  const env = process.env.NEXT_PUBLIC_TOWNSHIP_FLYTHROUGH_SRC;

  const raw =
    typeof env === "string" && env.trim().length > 0
      ? env.trim()
      : "/media/township/flythrough.mp4";

  return normalizeTownshipFlythroughCloudinarySrc(raw);
}
