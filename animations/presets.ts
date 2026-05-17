import type { Variants } from "framer-motion";

import { MOTION_DURATION, MOTION_EASE } from "@/constants/motion";

const ease = MOTION_EASE;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.editorial,
      ease,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MOTION_DURATION.base, ease },
  },
};

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(8% 6% 8% 6%)",
    scale: 1.04,
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: {
      duration: MOTION_DURATION.slow + 0.2,
      ease,
    },
  },
};

/** Parent wrapper for sequentially rising lines / cards */

export const staggerContainer: Variants = {
  hidden: {
    opacity: 1,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,

      delayChildren: 0.06,

      when: "beforeChildren",
    },
  },
};

/** Child pairing for staggerContainer — lighter than fadeUp */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,

    y: 0,

    transition: {
      duration: MOTION_DURATION.base,

      ease,
    },
  },
};

export const subtleParallaxRange = {
  gentle: [-18, 18] as [number, number],
  airy: [-28, 28] as [number, number],
};

/** Hero-specific cadence — slower, more ceremonial than section reveals. */

export const heroStaggerWrap: Variants = {
  hidden: {},

  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.38 },
  },
};

export const heroLineReveal: Variants = {
  hidden: { opacity: 0, y: 26 },

  visible: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 1.05,

      ease: MOTION_EASE,
    },
  },
};

export const heroTitleReveal: Variants = {
  hidden: { opacity: 0, y: 40 },

  visible: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 1.35,

      ease: MOTION_EASE,
    },
  },
};

/** Narrow / low-cost hero cadence — opacity + short translate only. */

export const heroStaggerWrapLite: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export const heroLineRevealLite: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: MOTION_EASE },
  },
};

export const heroTitleRevealLite: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: MOTION_EASE },
  },
};

/** Editorial storytelling pacing — roomy, ceremonial, hospitality-adjacent. */

export const storytellingScene: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.26,
      delayChildren: 0.18,

      when: "beforeChildren",
    },
  },
};

export const storytellingChapter: Variants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,

    y: 0,

    transition: { duration: 1.18, ease: MOTION_EASE },
  },
};

export const storytellingWhisper: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.92, ease: MOTION_EASE },
  },
};

export const storytellingImmersive: Variants = {
  hidden: { opacity: 0, scale: 1.025 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.52, ease: MOTION_EASE },
  },
};

/** Storytelling on narrow viewports — no scale choreography, tighter stagger. */

export const storytellingSceneLite: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
      when: "beforeChildren",
    },
  },
};

export const storytellingChapterLite: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: MOTION_EASE },
  },
};

export const storytellingWhisperLite: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: MOTION_EASE },
  },
};

export const storytellingImmersiveLite: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: MOTION_EASE },
  },
};
