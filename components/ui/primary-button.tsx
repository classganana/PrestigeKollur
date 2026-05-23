import { forwardRef } from "react";
import Link from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/lib/cn";

import { themeClasses } from "@/lib/theme/theme-classes";

export type PrimaryButtonVariant = "primary" | "hero-enquiry" | "champagne";

function primaryButtonClasses(variant: PrimaryButtonVariant = "primary") {
  const variantClass =
    variant === "hero-enquiry"
      ? themeClasses.ctaHeroEnquiry
      : variant === "champagne"
        ? themeClasses.ctaChampagne
        : themeClasses.ctaPrimary;

  return cn(
    "inline-flex min-h-touch cursor-pointer items-center justify-center rounded-full px-8 py-text-y",
    variantClass,
    "text-body-sm font-sans uppercase",
    variant === "primary" && "tracking-[0.22em]",
    (variant === "hero-enquiry" || variant === "champagne") && "font-semibold tracking-[0.2em]",
    variant === "hero-enquiry" && "text-forest-strong",
    "shadow-soft transition-[background-color,transform,color,box-shadow,border-color] duration-[480ms]",
    "ease-luxury hover:-translate-y-px hover:shadow-elevated",
    "motion-reduce:transform-none motion-reduce:transition-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/80",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
  );
}

type ButtonAttrs = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href">;

type PropsAsButton = ButtonAttrs & { href?: never };

type PropsAsLink = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextLinkProps
> &
  NextLinkProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href" | "className"> & {
    /** Links do not expose native button semantics */
    type?: never;
  };

type SharedPrimaryButtonProps = {
  /** `hero-enquiry` — champagne gradient CTA (hero); `champagne` — readable ink on champagne fill. */
  variant?: PrimaryButtonVariant;
};

export type PrimaryButtonProps = SharedPrimaryButtonProps & (PropsAsButton | PropsAsLink);

/** Deep forest primary control with restrained champagne accent */
export const PrimaryButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PrimaryButtonProps
>(function PrimaryButton(props, ref) {
  if ("href" in props && props.href !== undefined && props.href !== null) {
    const { href, className, children, variant = "primary", ...anchorRest } = props;

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        {...anchorRest}
        className={cn(primaryButtonClasses(variant), className)}
      >
        {children}
      </Link>
    );
  }

  const { className, children, type = "button", variant = "primary", ...btn } = props;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      {...btn}
      className={cn(primaryButtonClasses(variant), className)}
    >
      {children}
    </button>
  );
});
