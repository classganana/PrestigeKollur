import { cn } from "@/lib/cn";
import { themeClasses } from "@/lib/theme/theme-classes";

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
        tint === "ivory" ? themeClasses.surfaceGlassIvory : themeClasses.surfaceGlassFog,
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
