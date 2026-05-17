"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import { PrimaryButton } from "@/components/ui/primary-button";
import { useConciergeModal } from "@/components/providers/concierge-modal-provider";
import { buildWhatsAppUrl } from "@/constants/contact";
import {
  buildConciergeLeadBody,
  CONCIERGE_LEAD_SOURCE,
  conciergeFallbackMailto,
} from "@/constants/enquiry";
import { cn } from "@/lib/cn";

const FIELD = cn(
  "w-full rounded-2xl border border-foreground/18 bg-inverse px-[1rem] py-[0.74rem]",
  "font-sans text-[1.0225rem] leading-[1.5] text-forest-strong shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] placeholder:text-foreground/50",
  "transition-[border-color,box-shadow] duration-[260ms] ease-out",
  "focus:border-accent-gold/70 focus:outline-none focus:ring-2 focus:ring-accent-gold/45 focus:ring-offset-2 focus:ring-offset-[#131b17]",
);

const LABEL =
  "font-sans text-[0.58rem] font-semibold uppercase leading-snug tracking-[0.38em] text-accent-champagne";

type Status = "idle" | "submitting" | "success" | "error";

const interestOptions = [
  { value: "site_visit", label: "Site visit" },
  { value: "floor_plans", label: "Floor plans" },
  { value: "availability", label: "Availability" },
  { value: "general", label: "General enquiry" },
] as const;

type ConciergeFormInstanceProps = {
  /** Passed to `<form id>` — must be unique if footer + modal both mount briefly. */
  formDomId?: string;
  /** Prefix for labelled control ids (`{prefix}-name`, etc.). */
  fieldIdPrefix?: string;
};

export function ConciergeEnquiryForm({
  formDomId = "concierge-enquiry-form",
  fieldIdPrefix = "concierge",
}: ConciergeFormInstanceProps) {
  const nameId = `${fieldIdPrefix}-name`;
  const phoneId = `${fieldIdPrefix}-phone`;
  const interestId = `${fieldIdPrefix}-interest`;
  const messageId = `${fieldIdPrefix}-message`;
  const faxTrapName = `${fieldIdPrefix}-fax-trap`;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<string>(interestOptions[0].value);
  const [message, setMessage] = useState("");
  const [fax, setFax] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");
  const [serverIntakeConfigured, setServerIntakeConfigured] = useState<boolean | null>(null);

  const { consumeWhatsAppHandoff, peekWhatsAppHandoff } = useConciergeModal();

  const fallbackEmail = conciergeFallbackMailto();

  useEffect(() => {
    let cancelled = false;

    void fetch("/api/enquiry")
      .then((res) => res.json())
      .then((data: unknown) => {
        if (cancelled) return;

        setServerIntakeConfigured(
          typeof data === "object" &&
            data !== null &&
            "configured" in data &&
            (data as { configured: unknown }).configured === true,
        );
      })
      .catch(() => {
        if (!cancelled) setServerIntakeConfigured(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    if (fax.trim().length > 0) return;

    setFeedback("");

    const trimmedName = name.trim();

    const trimmedPhone = phone.trim();

    if (trimmedName.length < 2) {
      setStatus("error");

      setFeedback("Please share your name.");

      return;
    }

    if (trimmedPhone.replace(/\D/g, "").length < 8) {
      setStatus("error");

      setFeedback("Please enter a reachable phone number.");

      return;
    }

    const interestLabel =
      interestOptions.find((o) => o.value === interest)?.label ?? interest;

    const payload = {
      name: trimmedName,
      phone: trimmedPhone,
      interest: interestLabel,
      message: message.trim(),
      source: CONCIERGE_LEAD_SOURCE,
    };

    setStatus("submitting");

    /** Popup blockers allow tabs opened synchronously on submit; navigate after fetch completes. */
    const reserveWaTab =
      peekWhatsAppHandoff() === true && buildWhatsAppUrl(".") !== null;

    let waShell: Window | null = null;

    if (reserveWaTab === true) {
      waShell = window.open("about:blank", "_blank");
    }

    const openFallbackMailto = () => {
      if (fallbackEmail === null || fallbackEmail.length === 0) return;

      const body = buildConciergeLeadBody({
        interest: interestLabel,
        message: payload.message,
        name: trimmedName,
        phone: trimmedPhone,
      });

      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
        `Concierge enquiry · ${trimmedName}`,
      )}&body=${encodeURIComponent(body)}`;

      setStatus("success");

      setFeedback("Opening your mail composer with a discreet draft—kindly tap send.");
    };

    try {
      const response = await fetch("/api/enquiry", {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string; ok?: boolean }
        | null;

      if (response.ok) {
        const routeToWhatsApp = consumeWhatsAppHandoff();

        const leadText = buildConciergeLeadBody({
          interest: interestLabel,
          message: payload.message,
          name: trimmedName,
          phone: trimmedPhone,
        });

        const waUrl = routeToWhatsApp ? buildWhatsAppUrl(leadText) : null;

        setStatus("success");

        if (waUrl !== null) {
          let navigatedNewTab = false;

          if (waShell !== null && waShell.closed !== true) {
            try {
              waShell.location.replace(waUrl);
              navigatedNewTab = true;

              setFeedback(
                "Saved to our desk queue—WhatsApp opens with your details; please tap send there to reach us directly.",
              );
            } catch {
              try {
                waShell.close();
              } catch {
                /* ignore */
              }
            }
          }

          if (navigatedNewTab !== true) {
            window.location.assign(waUrl);

            setFeedback(
              "Saved—opening WhatsApp with your enquiry (pop-ups blocked or shell unavailable—we switched tabs for you).",
            );
          }
        } else if (routeToWhatsApp) {
          waShell?.close();

          setFeedback(
            "Saved to our desk queue. WhatsApp didn’t open because NEXT_PUBLIC_WHATSAPP_PHONE isn’t set in the environment—add your WhatsApp business number to .env.local and restart dev.",
          );
        } else {
          waShell?.close();

          setFeedback(
            "Received—our concierge replies with calm cadence, typically within one business day.",
          );
        }

        setName("");

        setPhone("");

        setInterest(interestOptions[0].value);

        setMessage("");

        return;
      }

      waShell?.close();

      if (response.status === 503) {
        if (fallbackEmail != null && fallbackEmail.length > 0) {
          openFallbackMailto();

          return;
        }

        setStatus("error");

        setFeedback(
          "Configure ENQUIRY_SCRIPT_URL or NEXT_PUBLIC_ENQUIRY_SCRIPT_URL on the server, or NEXT_PUBLIC_ENQUIRY_EMAIL for mail fallback.",
        );

        return;
      }

      const errMsg =
        data !== null &&
        typeof data === "object" &&
        typeof data.error === "string" &&
        data.error.length > 0
          ? data.error
          : `Request failed (${response.status})`;

      throw new Error(errMsg);
    } catch (cause) {
      waShell?.close();

      setStatus("error");

      const message =
        cause instanceof Error ? cause.message : "Unexpected submission failure.";

      setFeedback(
        `${message} You can retry, WhatsApp, or call—we reconcile everything manually.`,
      );
    }
  }

  return (
    <form
      id={formDomId}
      className="concierge-form-surface relative mt-loft flex w-full flex-col gap-loft text-left"
      onSubmit={onSubmit}
    >
      <input
        aria-hidden
        autoComplete="off"
        tabIndex={-1}
        name={faxTrapName}
        value={fax}
        className={cn(
          "pointer-events-none absolute left-[120%] h-px w-px rounded-sm border-none p-0",
          "opacity-0",
        )}
        onChange={(e) => setFax(e.target.value)}
      />

      <div className="grid gap-relax">
        <div className="space-y-relax">
          <label htmlFor={nameId} className={LABEL}>
            Name
          </label>

          <input
            id={nameId}
            required
            type="text"
            name={nameId}
            value={name}
            autoComplete="name"
            className={FIELD}
            placeholder="Preferred name"
            disabled={status === "submitting"}
            minLength={2}
            title="Preferred name"
            maxLength={90}
            spellCheck={false}
            enterKeyHint="next"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="space-y-relax">
          <label htmlFor={phoneId} className={LABEL}>
            Phone
          </label>

          <input
            disabled={status === "submitting"}
            id={phoneId}
            placeholder="+91 …"
            title="Reachable telephone"
            required
            className={FIELD}
            name={phoneId}
            value={phone}
            inputMode="tel"
            type="tel"
            autoComplete="tel"
            minLength={8}
            maxLength={24}
            enterKeyHint="next"
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div className="space-y-relax">
          <label htmlFor={interestId} className={LABEL}>
            Interest
          </label>

          <select
            disabled={status === "submitting"}
            id={interestId}
            title="Nature of enquiry"
            name={interestId}
            className={cn(
              FIELD,
              "appearance-none text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-forest-strong",
              "[&>option]:bg-inverse [&>option]:font-medium [&>option]:text-forest-strong [&>option]:tracking-[0.14em]",
            )}
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
          >
            {interestOptions.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-relax">
          <label htmlFor={messageId} className={LABEL}>
            Message
            <span className="ml-2 inline font-normal normal-case tracking-[0.12em] text-inverse-muted">
              · optional narrative
            </span>
          </label>

          <textarea
            spellCheck={true}
            name={messageId}
            id={messageId}
            rows={5}
            value={message}
            maxLength={1800}
            className={cn(
              FIELD,
              "min-h-[6.85rem] resize-y text-[0.9575rem] leading-[1.64]",
            )}
            placeholder="Architectural temperament, visitation windows…"
            disabled={status === "submitting"}
            enterKeyHint="send"
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-relax">
        <PrimaryButton
          className={cn(
            "min-h-touch min-w-[min(100%,200px)] border-accent-champagne/45 bg-accent-champagne px-ribbon text-[0.5925rem]",
            "tracking-[0.24em]",
            "text-forest-strong shadow-soft hover:bg-accent-gold hover:text-forest-strong",
          )}
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Submit discreet enquiry"}
        </PrimaryButton>
      </div>

      {feedback.length > 0 ? (
        <p
          className={cn(
            "max-w-xl font-sans text-[0.8225rem] leading-[1.68] tracking-[0.012em]",
            status === "error" ? "text-accent-champagne" : "text-inverse-muted",
          )}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {feedback}
        </p>
      ) : null}

      {serverIntakeConfigured === false && fallbackEmail === null ? (
        <p className="font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.34em] text-inverse-subtle">
          Connect ENQUIRY_SCRIPT_URL or NEXT_PUBLIC_ENQUIRY_SCRIPT_URL (Apps Script webhook), or
          NEXT_PUBLIC_ENQUIRY_EMAIL for capture. Restart dev after editing{" "}
          <span className="normal-case tracking-normal">.env.local</span>.
        </p>
      ) : null}
    </form>
  );
}
