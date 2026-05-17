"use client";

import { PrimaryButton } from "@/components/ui/primary-button";
import { useConciergeModal } from "@/components/providers/concierge-modal-provider";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Primary-styled trigger that opens concierge modal instead of `#cta`. */

export function OpenConciergeButton({ children, className }: Props) {
  const { open } = useConciergeModal();

  return (
    <PrimaryButton type="button" onClick={open} className={className}>
      {children}
    </PrimaryButton>
  );
}

/** Opens concierge; successful form submit then launches WhatsApp with the enquiry text (Sheet POST unchanged). */

export function OpenWhatsAppConciergeButton({ children, className }: Props) {
  const { openForWhatsAppHandoff } = useConciergeModal();

  return (
    <PrimaryButton type="button" onClick={openForWhatsAppHandoff} className={className}>
      {children}
    </PrimaryButton>
  );
}
