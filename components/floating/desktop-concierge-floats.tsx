"use client";

import { CallFloatingCta } from "@/components/floating/call-floating-cta";
import { WhatsAppFloatingCta } from "@/components/floating/whatsapp-floating-cta";
import { enquiryTelHref, enquiryWhatsAppUrl } from "@/constants/contact";
import { useSite } from "@/lib/project/project-context";

export function DesktopConciergeFloats() {
  const site = useSite();
  const whatsappHref = enquiryWhatsAppUrl();

  const callHref = enquiryTelHref();

  return (
    <>
      {callHref !== null ? <CallFloatingCta telHref={callHref} /> : null}

      <WhatsAppFloatingCta
        whatsappHref={whatsappHref}
        fallbackHref={site.contactHref}
      />
    </>
  );
}
