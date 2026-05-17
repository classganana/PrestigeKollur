"use client";

import { useEffect, useState } from "react";

/** Avoids SSR / hydration divergence for strictly client behaviours. */
export function useHasMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
