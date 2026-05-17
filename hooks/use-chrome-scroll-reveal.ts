"use client";

import type Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { useIsBelowMdViewport } from "@/hooks/use-below-md";
import { useHasMounted } from "@/hooks/use-has-mounted";

const TOP_THRESHOLD = 32;
const DELTA_MIN = 12;

/**
 * Hides fixed chrome while scrolling down; reveals on scroll up or near top of page.
 * Mobile: native `window` scroll. md+ (Lenis): `lenis.scroll`. Respects `prefers-reduced-motion`.
 */
export function useChromeScrollReveal() {
  const belowMd = useIsBelowMdViewport();
  const mounted = useHasMounted();
  const [chromeVisible, setChromeVisible] = useState(true);
  const lastYRef = useRef(0);
  const visibleRef = useRef(true);
  /** Skip first sample per scroll source so we do not treat initial Y vs 0 as “scroll down”. */
  const hasAppliedRef = useRef(false);

  const reducedMotion =
    mounted &&
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const applyScroll = useCallback((y: number) => {
    if (!hasAppliedRef.current) {
      hasAppliedRef.current = true;
      lastYRef.current = y;
      return;
    }
    const prev = lastYRef.current;
    let next: boolean;
    if (y <= TOP_THRESHOLD) {
      next = true;
    } else if (y < prev - DELTA_MIN) {
      next = true;
    } else if (y > prev + DELTA_MIN) {
      next = false;
    } else {
      next = visibleRef.current;
    }
    lastYRef.current = y;
    if (next !== visibleRef.current) {
      visibleRef.current = next;
      setChromeVisible(next);
    }
  }, []);

  useEffect(() => {
    hasAppliedRef.current = false;
  }, [belowMd]);

  useEffect(() => {
    if (!mounted || reducedMotion) return;
    if (!belowMd) return;

    visibleRef.current = true;
    setChromeVisible(true);

    const onScroll = () => applyScroll(window.scrollY);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted, reducedMotion, belowMd, applyScroll]);

  const onLenis = useCallback(
    (lenis: Lenis) => {
      if (!mounted || reducedMotion || belowMd) return;
      applyScroll(lenis.scroll);
    },
    [mounted, reducedMotion, belowMd, applyScroll],
  );

  useLenis(onLenis, [onLenis]);

  if (!mounted || reducedMotion) {
    return { chromeVisible: true as const };
  }

  return { chromeVisible };
}
