"use client";

import { type PropsWithChildren, type CSSProperties } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { fadeUp as fadePreset } from "@/animations/presets";

type Props = Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "animate" | "variants"
> &
  PropsWithChildren<{
    className?: string;
    variants?: Variants;
    disableViewport?: boolean;
    style?: CSSProperties;
  }>;

/** Viewport-triggered choreography with reduced-motion safeguards */
export function RevealAnimation({
  children,
  className,
  variants,
  disableViewport,
  ...rest
}: Props) {
  const reduceMotion = useReducedMotion();

  const activeVariants = variants ?? fadePreset;

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : activeVariants}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={
        disableViewport
          ? undefined
          : { once: true, margin: "-12% 0px -12% 0px", amount: 0.32 }
      }
      {...rest}
    >
      {children}
    </motion.div>
  );
}
