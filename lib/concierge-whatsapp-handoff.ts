/** Persists “opened concierge via WhatsApp CTA” across renders until enquiry POST consumes it (refs alone were dropping before submit). */

const STORAGE_KEY = "vl-concierge-wa-enquiry-handoff";

export function conciergeWaHandoffPeek(): boolean {
  try {
    return typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function conciergeWaHandoffSet(active: boolean): void {
  try {
    if (typeof window === "undefined") return;

    if (active) sessionStorage.setItem(STORAGE_KEY, "1");
    else sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* Private mode / quota — ignore */
  }
}

export function conciergeWaHandoffConsume(): boolean {
  try {
    if (typeof window === "undefined") return false;

    const active = sessionStorage.getItem(STORAGE_KEY) === "1";

    sessionStorage.removeItem(STORAGE_KEY);

    return active;
  } catch {
    return false;
  }
}
