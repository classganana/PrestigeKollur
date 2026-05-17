"use client";

import { useReducedMotion } from "framer-motion";

import { useIsBelowMdViewport } from "@/hooks/use-below-md";

/**
 * Lightweight motion / effects profile: narrow viewport or reduced-motion.
 * Use to skip scroll-linked transforms, soften entrance animation, tone down blur, etc.
 */
export function usePreferLiteMotion(): boolean {
  const belowMd = useIsBelowMdViewport();
  const reduceMotion = useReducedMotion() === true;

  return belowMd || reduceMotion;
}
