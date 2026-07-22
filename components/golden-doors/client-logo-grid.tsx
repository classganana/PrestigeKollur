"use client";

import Image from "next/image";

import type { ClientLogo } from "@/projects/golden-doors/content/clients-page";
import { cn } from "@/lib/cn";

type ClientLogoGridProps = {
  logos: readonly ClientLogo[];
  className?: string;
};

/** Developer logos — static centered grid (no marquee). */
export function ClientLogoGrid({ logos, className }: ClientLogoGridProps) {
  if (logos.length === 0) return null;

  return (
    <div
      className={cn(
        "rounded-[clamp(18px,2.4vw,22px)] border border-[#C9A227]/20 bg-[#FAF7EF]/[0.04] px-4 py-8 sm:px-8 sm:py-10",
        className,
      )}
    >
      <ul
        role="list"
        className="mx-auto grid max-w-[56rem] grid-cols-2 place-items-center gap-x-4 gap-y-8 xs:grid-cols-3 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5"
      >
        {logos.map((logo) => (
          <li key={logo.id} className="flex w-full max-w-[9.5rem] justify-center">
            <div className="relative h-14 w-full max-w-[8.5rem] sm:h-16 sm:max-w-[9.5rem] md:h-[4.5rem]">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="(max-width: 640px) 120px, 152px"
                className="object-contain object-center"
                unoptimized
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
