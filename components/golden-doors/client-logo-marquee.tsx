"use client";

import Image from "next/image";

import type { ClientLogo } from "@/projects/golden-doors/content/clients-page";
import { cn } from "@/lib/cn";

type ClientLogoMarqueeProps = {
  logos: readonly ClientLogo[];
  className?: string;
};

/**
 * Infinite horizontal logo strip — mirrors the client reference marquee.
 */
export function ClientLogoMarquee({ logos, className }: ClientLogoMarqueeProps) {
  if (logos.length === 0) return null;

  const loop = [...logos, ...logos];

  return (
    <div
      className={cn(
        "group relative overflow-hidden border-y border-[#C9A227]/20 bg-[#FAF7EF]/[0.04]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0c0906] to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0c0906] to-transparent sm:w-24"
      />

      <div className="flex animate-gd-client-scroll-fast items-center whitespace-nowrap py-5 will-change-transform transform-gpu sm:animate-gd-client-scroll group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6 motion-reduce:whitespace-normal motion-reduce:py-8">
        {loop.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="relative mx-6 h-16 w-36 shrink-0 sm:mx-8 sm:h-20 sm:w-40"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="160px"
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
