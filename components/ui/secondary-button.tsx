import { forwardRef } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/cn";

export const secondaryButtonClass = cn(
  "inline-flex min-h-touch cursor-pointer items-center justify-center rounded-full px-8 py-text-y",
  "border border-accent-bronze/45 bg-transparent text-body-sm uppercase tracking-[0.2em]",
  "text-muted transition-[border-color,color,transform,background-color] duration-[460ms]",
  "ease-luxury hover:border-accent-gold hover:text-accent-gold hover:bg-fog-soft/88",
  "motion-reduce:transform-none motion-reduce:transition-none",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/80",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type StyledLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export type SecondaryButtonProps =
  | (ButtonProps & { href?: undefined })
  | StyledLinkProps;

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
      ...linkRest
    } = props as StyledLinkProps;

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        prefetch={prefetch}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        replace={replace}
        {...linkRest}
        className={cn(secondaryButtonClass, className)}
      >
        {children}
      </Link>
    );
  }

  const { className, children, ...btn } = props as ButtonProps;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      {...btn}
      className={cn(secondaryButtonClass, className)}
    >
      {children}
    </button>
  );
});
