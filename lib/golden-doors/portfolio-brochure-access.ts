const STORAGE_KEY = "golden-doors-brochure-unlocks";
export const BROCHURE_UNLOCK_EVENT = "golden-doors-brochure-unlock";

function readUnlocks(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];

    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function isPortfolioBrochureUnlocked(projectId: string): boolean {
  return readUnlocks().includes(projectId);
}

export function unlockPortfolioBrochure(projectId: string): void {
  if (typeof window === "undefined") return;

  const ids = readUnlocks();
  if (ids.includes(projectId)) return;

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids, projectId]));
  window.dispatchEvent(new CustomEvent(BROCHURE_UNLOCK_EVENT, { detail: projectId }));
}

export function listUnlockedPortfolioBrochures(): string[] {
  return readUnlocks();
}

/** Starts a same-origin PDF download in the browser (used after enquiry submit). */
export function triggerPortfolioBrochureDownload(href: string): void {
  if (typeof window === "undefined" || href.trim().length === 0) return;

  const filename = href.split("/").pop() ?? "brochure.pdf";
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = filename;
  anchor.rel = "noopener";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
