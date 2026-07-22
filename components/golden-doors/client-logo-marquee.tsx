"use client";

import Image from "next/image";

import type { ClientLogo } from "@/projects/golden-doors/content/clients-page";
import { cn } from "@/lib/cn";

type ClientLogoMarqueeProps = {
  logos: readonly ClientLogo[];
  className?: string;
};

function LogoStrip({ logos }: { logos: readonly ClientLogo[] }) {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="relative mx-4 h-14 w-28 shrink-0 sm:mx-6 sm:h-16 sm:w-36 md:h-20 md:w-40"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            sizes="(max-width: 640px) 128px, 160px"
            className="pointer-events-none object-contain select-none"
            draggable={false}
            unoptimized
          />
        </div>
      ))}
    </>
  );
}

/**
 * Infinite horizontal logo strip — auto-scroll only; no hover pause or touch scroll.
 */
export function ClientLogoMarquee({ logos, className }: ClientLogoMarqueeProps) {
  if (logos.length === 0) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden border-y border-[#C9A227]/20 bg-[#FAF7EF]/[0.04]",
        "touch-none select-none",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0c0906] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0c0906] to-transparent sm:w-20" />

      <div
        className={cn(
          "pointer-events-none flex w-max flex-nowrap py-4 sm:py-5",
          "animate-gd-client-scroll-fast will-change-transform transform-gpu sm:animate-gd-client-scroll",
          "motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:overflow-hidden",
        )}
      >
        <div className="flex shrink-0 flex-nowrap">
          <LogoStrip logos={logos} />
        </div>
        <div className="flex shrink-0 flex-nowrap">
          <LogoStrip logos={logos} />
        </div>
      </div>
    </div>
  );
}
