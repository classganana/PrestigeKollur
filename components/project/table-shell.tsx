import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function TableShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-[22px] border border-accent-bronze/15 bg-fog-soft/80 shadow-soft ring-1 ring-black/[0.03]",
        className,
      )}
    >
      <table className="min-w-full border-collapse text-left font-sans text-[0.8225rem] leading-snug text-foreground">
        {children}
      </table>
    </div>
  );
}
