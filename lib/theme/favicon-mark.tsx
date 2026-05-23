import type { FaviconDefinition } from "@/lib/theme/resolve-favicon";

type Props = {
  favicon: FaviconDefinition;
  /** Render size in px (32 for tab icon, 180 for Apple touch). */
  size: number;
};

/** Satori-safe favicon mark — bold monogram on themed plate. */
export function FaviconMark({ favicon, size }: Props) {
  const fontSize =
    favicon.monogram.length > 1 ? Math.round(size * 0.36) : Math.round(size * 0.54);
  const radius = Math.round((favicon.radius / 32) * size);
  const borderWidth = Math.max(1, Math.round(size / 16));

  return (
    <div
      style={{
        alignItems: "center",
        background: favicon.background,
        border: `${borderWidth}px solid ${favicon.border}`,
        borderRadius: radius,
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          color: favicon.foreground,
          fontSize,
          fontWeight: 700,
          letterSpacing: favicon.monogram.length > 1 ? -1 : 0,
          lineHeight: 1,
          marginTop: favicon.monogram.length === 1 ? Math.round(size * 0.02) : 0,
        }}
      >
        {favicon.monogram}
      </div>
    </div>
  );
}
