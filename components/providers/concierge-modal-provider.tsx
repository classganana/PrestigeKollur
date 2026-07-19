"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";

import { ConciergeConversionPanel } from "@/components/conversion/concierge-conversion-panel";
import type { ConversionPlacement } from "@/lib/analytics/track-conversion";
import { trackWhatsAppClick } from "@/lib/analytics/track-conversion";
import { useProject, useSite } from "@/lib/project/project-context";
import {
  conciergeWaHandoffConsume,
  conciergeWaHandoffPeek,
  conciergeWaHandoffSet,
} from "@/lib/concierge-whatsapp-handoff";
import { cn } from "@/lib/cn";

/** Fields that participate in sequential focus inside the concierge shell. */

const CONCIERGE_FOCUSABLE_SELECTOR = [
  "a[href]",
  'button:not([disabled]):not([aria-hidden="true"])',
  "textarea:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden="true"])',
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

function listFocusables(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(CONCIERGE_FOCUSABLE_SELECTOR)).filter((el) => {
    if (el.closest('[aria-hidden="true"]')) return false;
    if (el.hasAttribute("hidden")) return false;

    const style = window.getComputedStyle(el);
    if (style.visibility === "hidden" || style.display === "none") return false;

    return true;
  });
}

type ConciergeModalContextValue = {
  open: () => void;
  /** Opens concierge with a portfolio project pre-selected (brand-hub Express Interest). */
  openWithPreferredProject: (projectId: string) => void;
  /** Opens concierge; after the next successful enquiry POST, launch WhatsApp with the same payload text. */
  openForWhatsAppHandoff: (placement?: ConversionPlacement) => void;
  close: () => void;
  isOpen: boolean;
  /** Preferred portfolio project id when opened from a card CTA. */
  preferredProjectId: string | null;
  /** Read handoff intent without clearing it (used before async submit so we can open a placeholder tab synchronously). */
  peekWhatsAppHandoff: () => boolean;
  consumeWhatsAppHandoff: () => boolean;
};

const ConciergeModalContext = createContext<ConciergeModalContextValue | null>(null);

export function useConciergeModal(): ConciergeModalContextValue {
  const ctx = useContext(ConciergeModalContext);
  if (ctx === null) {
    throw new Error("useConciergeModal must be used within ConciergeModalProvider");
  }
  return ctx;
}

type ConciergeOverlayProps = {
  titleId: string;
  onDismiss: () => void;
};

/**
 * Portalled overlay (not `<dialog>` + `showModal()`).
 *
 * Lenis smooth scrolling keeps handling wheel on `document` unless we `stop()` it and mark this
 * subtree with `data-lenis-prevent` so nested `overflow-y-auto` scrolls natively. Backdrop uses a
 * non-passive wheel listener so the dimmed area cannot scroll the page underneath.
 */
function ConciergeOverlay({ titleId, onDismiss }: ConciergeOverlayProps) {
  const site = useSite();
  const { preferredProjectId } = useConciergeModal();
  const lenis = useLenis();

  const panelRef = useRef<HTMLDivElement | null>(null);

  const scrollBodyRef = useRef<HTMLDivElement | null>(null);

  const backdropRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const body = document.body;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = prevOverflow;
    };
  }, []);

  useLayoutEffect(() => {
    if (lenis == null) return;

    lenis.stop();

    return () => {
      lenis.start();
    };
  }, [lenis]);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    const scrollBody = scrollBodyRef.current;

    const focusTarget =
      scrollBody?.querySelector<HTMLElement>("#concierge-m-name") ??
      (panel !== null ? listFocusables(panel)[0] : undefined) ??
      panel ??
      null;

    focusTarget?.focus({ preventScroll: true });
  }, []);

  useLayoutEffect(() => {
    const backdrop = backdropRef.current;
    if (backdrop === null) return;

    const blockScrollChaining = (event: WheelEvent) => {
      event.preventDefault();
    };

    backdrop.addEventListener("wheel", blockScrollChaining, { passive: false });

    return () => {
      backdrop.removeEventListener("wheel", blockScrollChaining);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onDismiss();

        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (panel === null) return;

      const focusables = listFocusables(panel);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!panel.contains(active)) {
        event.preventDefault();
        first.focus();

        return;
      }

      if (event.shiftKey) {
        if (active === first) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onDismiss]);

  const shell = (
    <div
      className="fixed inset-0 z-[200] isolate"
      role="presentation"
      data-lenis-prevent
    >
      <div
        ref={backdropRef}
        aria-hidden
        data-lenis-prevent
        className="absolute inset-0 z-0 bg-black/52 backdrop-blur-[1.5px]"
        onClick={() => {
          onDismiss();
        }}
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[1]",
          "flex justify-center px-3 pb-[max(1.25rem,_env(safe-area-inset-bottom,0px))]",
          "pt-[max(4vh,_env(safe-area-inset-top,0px))] sm:px-5",
        )}
      >
        <div
          ref={panelRef}
          role="dialog"
          aria-modal={true}
          aria-labelledby={titleId}
          tabIndex={-1}
          data-lenis-prevent
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={cn(
            "pointer-events-auto mb-auto flex max-h-[min(92dvh,_900px)] w-[min(34rem,_calc(100vw-1.5rem))] min-h-0 min-w-0 shrink-0 flex-col overflow-hidden rounded-[clamp(22px,_3vw,_30px)] outline-none ring-0",
            "theme-shell-deep border border-accent-champagne/35 p-0 shadow-modal",
            "overscroll-y-contain",
          )}
        >
          <header className="flex shrink-0 items-start justify-between gap-4 px-loft pb-ribbon pt-loft">
            <div className="min-w-0">
              <p
                id={titleId}
                className="font-display text-[clamp(1.38rem,_4vw,_1.75rem)] leading-snug tracking-[-0.015em]"
              >
                {site.contactLabel}
              </p>
            </div>
            <button
              type="button"
              aria-label="Close concierge"
              onClick={onDismiss}
              className={cn(
                "rounded-full border border-inverse-muted/40 p-2 text-inverse transition-colors duration-150",
                "hover:border-accent-gold/52 hover:bg-white/[0.06] hover:text-accent-champagne",
                "motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold",
              )}
            >
              <X className="size-5" aria-hidden strokeWidth={1.4} />
            </button>
          </header>

          <div
            ref={scrollBodyRef}
            data-lenis-prevent
            className="concierge-modal-scroll flex min-h-0 min-w-0 max-w-full flex-1 flex-col px-loft pb-loft"
          >
            <div className="min-w-0 max-w-full flex-1">
              <ConciergeConversionPanel
                presentation="modal"
                preferredProjectId={preferredProjectId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;

  return createPortal(shell, document.body);
}

/** Lightweight concierge shell — parity with `#cta`, without snapping scroll. */

export function ConciergeModalProvider({ children }: { children: ReactNode }) {
  const { leadSourceTag } = useProject();
  const [isOpen, setIsOpen] = useState(false);
  const [preferredProjectId, setPreferredProjectId] = useState<string | null>(null);

  const titleId = useId();

  const open = useCallback(() => {
    conciergeWaHandoffSet(false);
    setPreferredProjectId(null);
    setIsOpen(true);
  }, []);

  const openWithPreferredProject = useCallback((projectId: string) => {
    conciergeWaHandoffSet(false);
    setPreferredProjectId(projectId);
    setIsOpen(true);
  }, []);

  const openForWhatsAppHandoff = useCallback(
    (placement: ConversionPlacement = "concierge_handoff") => {
      trackWhatsAppClick({ leadSource: leadSourceTag, placement });
      conciergeWaHandoffSet(true);
      setPreferredProjectId(null);
      setIsOpen(true);
    },
    [leadSourceTag],
  );

  const close = useCallback(() => {
    conciergeWaHandoffSet(false);
    setPreferredProjectId(null);
    setIsOpen(false);
  }, []);

  const peekWhatsAppHandoff = useCallback(() => conciergeWaHandoffPeek(), []);

  const consumeWhatsAppHandoff = useCallback(() => conciergeWaHandoffConsume(), []);

  const value = useMemo(
    () => ({
      open,
      openWithPreferredProject,
      openForWhatsAppHandoff,
      close,
      isOpen,
      preferredProjectId,
      peekWhatsAppHandoff,
      consumeWhatsAppHandoff,
    }),
    [
      close,
      consumeWhatsAppHandoff,
      open,
      openForWhatsAppHandoff,
      openWithPreferredProject,
      peekWhatsAppHandoff,
      preferredProjectId,
      isOpen,
    ],
  );

  return (
    <ConciergeModalContext.Provider value={value}>
      {children}

      {isOpen ? <ConciergeOverlay titleId={titleId} onDismiss={close} /> : null}
    </ConciergeModalContext.Provider>
  );
}
