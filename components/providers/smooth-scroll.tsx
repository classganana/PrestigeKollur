"use client";

import { useMemo } from "react";
import type { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { useIsBelowMdViewport } from "@/hooks/use-below-md";

type Props = {
  children: React.ReactNode;
};

/**
 * Smooth scroll with Lenis (desktop / md+ only). Keeps modest easing without the “sticky” inertia that reads as laggy —
 * tuned lerp × wheel multiplier track native scroll momentum more closely.
 */
export function SmoothScroll({ children }: Props) {
  const mounted = useHasMounted();
  const belowMd = useIsBelowMdViewport();

  const reducedMotion =
    mounted &&
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const options = useMemo<LenisOptions>(
    () => ({
      // Higher lerp follows wheel input faster than the old ~0.07 preset (often felt sluggish on trackpads).
      lerp: 0.2,
      smoothWheel: true,
      wheelMultiplier: 1.05,
      syncTouch: false,
      touchMultiplier: 1,
      autoRaf: true,
    }),

    [],
  );

  if (!mounted || reducedMotion || belowMd) {
    return children;
  }

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
