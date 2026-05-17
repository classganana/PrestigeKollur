"use client";

import { SecondaryButton } from "@/components/ui/secondary-button";
import { useConciergeModal } from "@/components/providers/concierge-modal-provider";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function OpenConciergeSecondaryButton({ children, className }: Props) {
  const { open } = useConciergeModal();

  return (
    <SecondaryButton type="button" onClick={open} className={className}>
      {children}
    </SecondaryButton>
  );
}
