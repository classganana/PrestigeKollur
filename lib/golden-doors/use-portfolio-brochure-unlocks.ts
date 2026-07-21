"use client";

import { useCallback, useEffect, useState } from "react";

import {
  BROCHURE_UNLOCK_EVENT,
  isPortfolioBrochureUnlocked,
  listUnlockedPortfolioBrochures,
} from "@/lib/golden-doors/portfolio-brochure-access";

/** Subscribes to localStorage unlock state for gated villa brochures. */
export function usePortfolioBrochureUnlocks() {
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);

  const refresh = useCallback(() => {
    setUnlockedIds(listUnlockedPortfolioBrochures());
  }, []);

  useEffect(() => {
    refresh();

    const onUnlock = () => refresh();
    window.addEventListener(BROCHURE_UNLOCK_EVENT, onUnlock);
    window.addEventListener("storage", onUnlock);

    return () => {
      window.removeEventListener(BROCHURE_UNLOCK_EVENT, onUnlock);
      window.removeEventListener("storage", onUnlock);
    };
  }, [refresh]);

  const isUnlocked = useCallback(
    (projectId: string) => unlockedIds.includes(projectId) || isPortfolioBrochureUnlocked(projectId),
    [unlockedIds],
  );

  return { unlockedIds, isUnlocked, refresh };
}
