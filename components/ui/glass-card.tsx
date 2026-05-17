import { cn } from "@/lib/cn";

type Tint = "fog" | "ivory";

type Props = {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
  tint?: Tint;
};

/** Layered translucent panel invoking hospitality lobby tactility */
export function GlassCard({ children, className, padded = true, tint = "fog" }: Props) {
  return (
    <div
      className={cn(
        "rounded-[clamp(22px,_4vw,_32px)] border border-accent-bronze/18",
        tint === "ivory"
          ? "bg-gradient-to-br from-ivory/96 via-soft-stone/88 to-soft-stone-glow/94"
          : "bg-gradient-to-br from-fog-strong/92 via-fog/65 to-soft-stone-glow/92",
        "shadow-soft backdrop-blur-[18px]",
        "transition-[border-color,box-shadow,transform] duration-[520ms] ease-luxury",
        "motion-reduce:transition-none",
        "hover:-translate-y-0.5 hover:border-accent-gold/28 hover:shadow-subtleGlow",
        "motion-reduce:hover:translate-y-0",
        padded ? "p-7 sm:p-9" : "",
        className,
      )}
    >
      {children}
    </div>
  );
}
