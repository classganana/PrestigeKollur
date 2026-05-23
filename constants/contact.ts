/** Build enquiry deeplinks; WhatsApp-first when NEXT_PUBLIC_WHATSAPP_PHONE is set. */

import { resolveProject } from "@/lib/project/resolve-project";

function whatsappMessages() {
  return resolveProject().site.whatsappMessages;
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function whatsappPhoneDigits(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  if (raw == null || raw.trim().length === 0) return null;

  let phone = digitsOnly(raw);

  if (phone.length === 0) return null;

  /** Common mistake: Indian mobiles entered as 10 digits — wa.me expects country code (e.g. 91…). */
  if (phone.length === 10 && /^[6-9]\d{9}$/.test(phone)) {
    phone = `91${phone}`;
  }

  return phone;
}

/** `tel:+…` voice link — explicit `NEXT_PUBLIC_VOICE_PHONE`, else WhatsApp digits if present. */

export function enquiryTelHref(): string | null {
  const rawVoice = process.env.NEXT_PUBLIC_VOICE_PHONE;

  if (typeof rawVoice === "string" && rawVoice.trim().length > 0) {
    let digits = digitsOnly(rawVoice);
    if (digits.length === 0) return null;
    /** Same as WhatsApp: bare 10-digit Indian mobile → E.164 91… (else `tel:+732…` is parsed as Russia +7). */
    if (digits.length === 10 && /^[6-9]\d{9}$/.test(digits)) {
      digits = `91${digits}`;
    }
    return `tel:+${digits}`;
  }

  const wa = whatsappPhoneDigits();

  return wa !== null ? `tel:+${wa}` : null;
}

/** Encodes a WhatsApp deep link when a phone env is configured. */
export function buildWhatsAppUrl(message: string): string | null {
  const phone = whatsappPhoneDigits();
  if (phone == null) return null;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function enquiryWhatsAppUrl(): string | null {
  const message =
    process.env.NEXT_PUBLIC_WHATSAPP_PREFILL_MESSAGE != null &&
    process.env.NEXT_PUBLIC_WHATSAPP_PREFILL_MESSAGE.length > 0
      ? process.env.NEXT_PUBLIC_WHATSAPP_PREFILL_MESSAGE
      : whatsappMessages().default;

  return buildWhatsAppUrl(message);
}

/** Location-and-connectivity focussed pre-fill for editorial “Get details” CTA paths. */

export function connectivityWhatsAppUrl(): string | null {
  return buildWhatsAppUrl(whatsappMessages().connectivity);
}

export function whatsappScheduleVisitUrl(): string | null {
  return buildWhatsAppUrl(whatsappMessages().scheduleVisit);
}

export function whatsappFloorPlansUrl(): string | null {
  return buildWhatsAppUrl(whatsappMessages().floorPlans);
}

export function whatsappAvailabilityUrl(): string | null {
  return buildWhatsAppUrl(whatsappMessages().availability);
}
