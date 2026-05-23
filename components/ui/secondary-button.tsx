import { forwardRef } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/cn";
import { themeClasses } from "@/lib/theme/theme-classes";

export type SecondaryButtonVariant = "default" | "hero-campaign";

const secondaryButtonBase = cn(
  "inline-flex min-h-touch cursor-pointer items-center justify-center rounded-full px-8 py-text-y",
  "text-body-sm uppercase tracking-[0.2em]",
  "motion-reduce:transform-none motion-reduce:transition-none",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/80",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

function secondaryButtonClasses(variant: SecondaryButtonVariant = "default") {
  if (variant === "hero-campaign") {
    return cn(
      secondaryButtonBase,
      "font-sans font-semibold",
      themeClasses.heroCampaignSecondaryCta,
      "shadow-none hover:-translate-y-px hover:shadow-none motion-reduce:hover:translate-y-0",
    );
  }

  return cn(
    secondaryButtonBase,
    "border border-accent-bronze/45 bg-transparent text-muted",
    "transition-[border-color,color,transform,background-color] duration-[460ms] ease-luxury",
    "hover:border-accent-gold hover:text-accent-gold hover:bg-fog-soft/88",
  );
}

/** @deprecated Use `secondaryButtonClasses()` — kept for call sites that spread the class string. */
export const secondaryButtonClass = secondaryButtonClasses("default");

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type StyledLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

type SharedSecondaryButtonProps = {
  /** `hero-campaign` — glass outline on dark campaign heroes; readable without hover. */
  variant?: SecondaryButtonVariant;
};

export type SecondaryButtonProps = SharedSecondaryButtonProps &
  ((ButtonProps & { href?: undefined }) | StyledLinkProps);

export const SecondaryButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  SecondaryButtonProps
>(function SecondaryButton(props, ref) {
  if ("href" in props && props.href) {
    const {
      className,
      children,
      prefetch,
      scroll,
      shallow,
      locale,
      replace,
      variant = "default",
      ...linkRest
    } = props as StyledLinkProps & SharedSecondaryButtonProps;

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        prefetch={prefetch}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        replace={replace}
        {...linkRest}
        className={cn(secondaryButtonClasses(variant), className)}
      >
        {children}
      </Link>
    );
  }

  const { className, children, variant = "default", ...btn } = props as ButtonProps &
    SharedSecondaryButtonProps;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      {...btn}
      className={cn(secondaryButtonClasses(variant), className)}
    >
      {children}
    </button>
  );
});
