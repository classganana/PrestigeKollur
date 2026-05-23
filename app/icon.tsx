import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Neutral favicon — theme-agnostic mark for multi-project builds. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0d0f14",
          border: "1px solid rgba(184, 164, 128, 0.42)",
          borderRadius: 8,
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#e2d6be",
            borderRadius: 1,
            height: 14,
            width: 14,
          }}
        />
      </div>
    ),
    size,
  );
}
