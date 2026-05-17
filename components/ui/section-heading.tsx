import { cn } from "@/lib/cn";

type Accent = "olive" | "gold";

type Props = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  accent?: Accent;
  className?: string;
};

const accentLine = {
  olive: "bg-gradient-to-r from-accent-olive/80 via-accent-gold/45 to-accent-olive/15",
  gold: "bg-gradient-to-r from-accent-gold/90 via-accent-bronze/45 to-accent-gold/10",
};

/**
 * Editorial section rhythm mirroring brochure spreads.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  accent = "gold",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "relative flex max-w-3xl flex-col gap-6",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "font-sans text-micro uppercase tracking-[0.42em]",
            accent === "olive" ? "text-accent-olive" : "text-accent-gold/90",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <div
        aria-hidden
        className={cn(
          "h-px w-16 rounded-full opacity-90 sm:w-24",
          align === "center" && "self-center",
          accentLine[accent],
        )}
      />
      <h2
        id={id}
        className="font-display leading-tight-soft text-fluid-section text-foreground sm:leading-snug-soft"
      >
        {title}
      </h2>
      {lead ? (
        <div
          className={cn(
            "text-body-relaxed font-sans text-foreground/78 sm:text-foreground/[0.82]",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
          )}
        >
          {lead}
        </div>
      ) : null}
    </div>
  );
}
