"use client";

import { useRef, type RefObject } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

type Options = {
  /** Vertical travel in px mapped across scroll segment */
  range?: [number, number];
};

/**
 * Slow editorial parallax for section backgrounds — keeps motion restrained.
 */
export function useParallaxSlow(options: Options = {}): {
  ref: RefObject<HTMLElement | null>;
  y: MotionValue<number>;
} {
  const range = options.range ?? [-22, 22];
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], range);

  return { ref, y };
}
