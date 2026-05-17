"use client";

import { useSyncExternalStore } from "react";

import { useHasMounted } from "@/hooks/use-has-mounted";

/** Matches Tailwind `md` breakpoint (below 768px). */
export const BELOW_MD_MEDIA = "(max-width: 767px)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(BELOW_MD_MEDIA);
  mq.addEventListener("change", onChange);

  return () => mq.removeEventListener("change", onChange);
}

function getSnapIsBelowMd(): boolean {
  return window.matchMedia(BELOW_MD_MEDIA).matches;
}

/**
 * Narrow-viewport detector (SSR-safe — false until mounted to avoid hydration mismatch).
 */
export function useIsBelowMdViewport(): boolean {
  const mounted = useHasMounted();
  const matches = useSyncExternalStore(subscribe, getSnapIsBelowMd, () => false);

  return mounted && matches;
}
