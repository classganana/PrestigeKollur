import { forwardRef } from "react";
import Link from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/lib/cn";

const classes = cn(
  "inline-flex min-h-touch cursor-pointer items-center justify-center rounded-full px-8 py-text-y",
  "border border-accent-bronze/30 bg-forest text-body-sm font-sans uppercase tracking-[0.22em] text-fog",
  "shadow-soft transition-[background-color,transform,color,box-shadow] duration-[480ms]",
  "ease-luxury hover:-translate-y-px hover:border-accent-gold/45 hover:bg-forest-strong hover:shadow-elevated",
  "motion-reduce:transform-none motion-reduce:transition-none",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/80",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

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

export type PrimaryButtonProps = PropsAsButton | PropsAsLink;

/** Deep forest primary control with restrained champagne accent */
export const PrimaryButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PrimaryButtonProps
>(function PrimaryButton(props, ref) {
  if ("href" in props && props.href !== undefined && props.href !== null) {
    const { href, className, children, ...anchorRest } = props as PropsAsLink;

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        {...anchorRest}
        className={cn(classes, className)}
      >
        {children}
      </Link>
    );
  }

  const { className, children, type = "button", ...btn } = props as PropsAsButton;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      {...btn}
      className={cn(classes, className)}
    >
      {children}
    </button>
  );
});
