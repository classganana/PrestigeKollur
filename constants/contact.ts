/** Build enquiry deeplinks; WhatsApp-first when NEXT_PUBLIC_WHATSAPP_PHONE is set. */

const DEFAULT_NOTE =
  "Hello — I'd love to enquire about Prestige Kollur (Velimela / Tellapur–Kollur, Hyderabad). Please share the next thoughtful step.";

const CONNECTIVITY_NOTE =
  "Hello — Could you share location & connectivity context for Prestige Kollur (ORR Exit 2 reach, Financial District / HITEC cadence, airport, schools & hospitals)? Thank you.";

/** Intent-specific concierge templates — parity with cinematic tone, shortened for WhatsApp. */

export const SCHEDULE_VISIT_NOTE =
  "Hello — I'd like to schedule a private site visit for Prestige Kollur when you have availability. Kindly propose a few considerate windows.";

export const FLOOR_PLANS_NOTE =
  "Hello — Could you please share floor plans / typology context for Prestige Kollur when convenient?";

export const AVAILABILITY_NOTE =
  "Hello — I'm exploring availability / inventory guidance for Prestige Kollur and would appreciate discreet next steps.";

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
    const digits = digitsOnly(rawVoice);

    return digits.length > 0 ? `tel:+${digits}` : null;
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
      : DEFAULT_NOTE;

  return buildWhatsAppUrl(message);
}

/** Location-and-connectivity focussed pre-fill for editorial “Get details” CTA paths. */

export function connectivityWhatsAppUrl(): string | null {
  return buildWhatsAppUrl(CONNECTIVITY_NOTE);
}

export function whatsappScheduleVisitUrl(): string | null {
  return buildWhatsAppUrl(SCHEDULE_VISIT_NOTE);
}

export function whatsappFloorPlansUrl(): string | null {
  return buildWhatsAppUrl(FLOOR_PLANS_NOTE);
}

export function whatsappAvailabilityUrl(): string | null {
  return buildWhatsAppUrl(AVAILABILITY_NOTE);
}
