"use client";

import { PrimaryButton, type PrimaryButtonVariant } from "@/components/ui/primary-button";
import { useConciergeModal } from "@/components/providers/concierge-modal-provider";
import type { ConversionPlacement } from "@/lib/analytics/track-conversion";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: PrimaryButtonVariant;
};

/** Primary-styled trigger that opens concierge modal instead of `#cta`. */

export function OpenConciergeButton({ children, className, variant = "primary" }: Props) {
  const { open } = useConciergeModal();

  return (
    <PrimaryButton type="button" variant={variant} onClick={open} className={className}>
      {children}
    </PrimaryButton>
  );
}

/** Opens concierge; successful form submit then launches WhatsApp with the enquiry text (Sheet POST unchanged). */

export function OpenWhatsAppConciergeButton({
  children,
  className,
  placement = "concierge_handoff",
}: Props & { placement?: ConversionPlacement }) {
  const { openForWhatsAppHandoff } = useConciergeModal();

  return (
    <PrimaryButton
      type="button"
      variant="hero-enquiry"
      onClick={() => openForWhatsAppHandoff(placement)}
      className={className}
    >
      {children}
    </PrimaryButton>
  );
}
