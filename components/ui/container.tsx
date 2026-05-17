import { cn } from "@/lib/cn";

const column = [
  "max-w-[min(1180px,calc(100dvw-2.5rem))]",
  "sm:max-w-[min(1180px,calc(100dvw-3rem))]",
  "xl:max-w-[min(1240px,calc(100dvw-5rem))]",
];

type Props = {
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
};

/**
 * Central reading column tuned for cinematic hero-to-editorial pacing.
 */
export function Container({ children, className, bleed = false }: Props) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full min-w-0 max-w-full",
        bleed ? "" : [...column, "px-5 py-section-y sm:px-8 xl:px-10"],
        className,
      )}
    >
      {children}
    </div>
  );
}
