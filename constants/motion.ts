/**
 * Luxury pacing: understated easing curves and durations.
 * Used by Framer presets and stagger orchestration.
 */
export const MOTION_DURATION = {
  /** Micro-interactions (hover focus) */
  fast: 0.35,
  /** Section choreography */
  base: 0.85,
  /** Hero / cinematic beats */
  slow: 1.35,
  /** Image / panel reveals */
  editorial: 1.85,
} as const;

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const TRANSITION_SLOW = `cubic-bezier(${MOTION_EASE.join(", ")})`;
