"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/cn";
import { usePreferLiteMotion } from "@/hooks/use-prefer-lite-motion";

/** Atmospheric treatment for brochure stills inside editorial narratives. */
export type EditorialParallaxTone =
  | "default"
  | "grove-vertical"
  | "twilight-horizontal"
  | "skyline-vertical"
  | "skyline-horizontal";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  caption?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  /** Layers + focal crop tuned for grove-led portraits or dusk horizontals. */
  tone?: EditorialParallaxTone;
};

/** Brochure still with restrained parallax drift; honours reduced motion. */
export function EditorialParallaxFrame({
  src,
  alt,
  sizes,
  caption,
  className,
  rounded = "rounded-[clamp(26px,_3.8vw,_40px)]",
  priority = false,
  tone = "default",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const lite = usePreferLiteMotion();
  const disableParallax = lite || reduceMotion === true;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const shift = useTransform(
    scrollYProgress,
    [0, 1],
    disableParallax ? [0, 0] : [22, -22],
  );

  const parallaxBleed = disableParallax
    ? tone === "twilight-horizontal" || tone === "skyline-horizontal"
      ? "inset-[-5%]"
      : tone === "grove-vertical" || tone === "skyline-vertical"
        ? "inset-[-4%]"
        : "inset-[-3%]"
    : tone === "twilight-horizontal" || tone === "skyline-horizontal"
      ? "inset-[-11%]"
      : tone === "grove-vertical" || tone === "skyline-vertical"
        ? "inset-[-9%]"
        : "inset-[-7%]";

  /** Soft vignette masks — feathers PDF margins/caption gutters into page tone. */
  const imageEdgeMask =
    tone === "grove-vertical" || tone === "skyline-vertical"
      ? cn(
          "[mask-image:radial-gradient(ellipse_94%_96%_at_48%_40%,black_62%,transparent_100%)]",
          "[-webkit-mask-image:radial-gradient(ellipse_94%_96%_at_48%_40%,black_62%,transparent_100%)]",
          "[mask-size:100%_100%] [-webkit-mask-size:100%_100%] [mask-repeat:no-repeat]",
        )
      : tone === "twilight-horizontal" || tone === "skyline-horizontal"
        ? cn(
            "[mask-image:radial-gradient(ellipse_97%_86%_at_50%_40%,black_52%,transparent_100%)]",
            "[-webkit-mask-image:radial-gradient(ellipse_97%_86%_at_50%_40%,black_52%,transparent_100%)]",
            "[mask-size:100%_100%] [-webkit-mask-size:100%_100%] [mask-repeat:no-repeat]",
          )
        : undefined;

  return (
    <figure
      ref={ref}
      className={cn(
        "group relative overflow-hidden bg-soft-stone/40 shadow-soft ring-1 ring-inset ring-black/[0.04]",
        rounded,
        className,
      )}
    >
      <motion.div
        className={cn(
          "pointer-events-none absolute",
          !disableParallax && "will-change-transform",
          parallaxBleed,
        )}
        style={{ y: shift }}
      >
        <div className={cn("absolute inset-0", imageEdgeMask)}>
          <Image
            alt={alt}
            src={src}
            fill
            priority={priority}
            sizes={sizes}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            quality={priority ? 82 : 80}
            className={cn(
              "h-full w-full object-cover duration-[780ms] ease-luxury motion-reduce:transition-none",
              "supports-[pointer:fine]:transition-[filter] supports-[pointer:fine]:group-hover:brightness-[1.035]",
              "motion-reduce:group-hover:brightness-100",
              tone === "grove-vertical" &&
                "scale-[1.16] max-lg:scale-[1.13] object-[48%_38%] sm:object-[46%_36%]",
              tone === "skyline-vertical" &&
                "scale-[1.12] max-lg:scale-[1.1] object-[50%_28%] sm:object-[50%_24%]",
              (tone === "twilight-horizontal" || tone === "skyline-horizontal") &&
                "scale-[1.26] max-lg:scale-[1.2] sm:scale-[1.22] object-[50%_36%] sm:object-[50%_34%] lg:object-[50%_38%]",
              tone === "skyline-horizontal" && "object-[50%_32%] sm:object-[50%_30%]",
            )}
          />
        </div>

        {tone === "default" ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-[hsla(40,28%,94%,0.18)]"
          />
        ) : tone === "grove-vertical" ? (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[min(26%,220px)] bg-gradient-to-b from-[hsla(40,38%,96%,0.9)] via-[hsla(40,32%,96%,0.45)] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(34%,260px)] bg-gradient-to-t from-[hsla(95,22%,93%,0.92)] via-[hsla(44,33%,94%,0.42)] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/43 via-transparent to-[hsla(42,42%,95%,0.16)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[hsla(38,48%,93%,0.11)] via-transparent to-[hsla(152,30%,21%,0.28)] opacity-90 mix-blend-multiply"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_96%_at_68%_8%,transparent_62%,rgba(12,54,43,0.18)_100%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,hsla(40,42%,94%,0.55)_0%,transparent_22%,transparent_78%,hsla(40,38%,93%,0.52)_100%)] opacity-[0.75]"
            />
          </>
        ) : tone === "skyline-vertical" ? (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[min(28%,240px)] bg-gradient-to-b from-[hsla(220,16%,96%,0.88)] via-[hsla(220,12%,96%,0.38)] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(38%,280px)] bg-gradient-to-t from-[hsla(225,18%,8%,0.88)] via-[hsla(225,14%,12%,0.42)] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-[hsla(220,24%,94%,0.1)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_92%_at_72%_6%,transparent_58%,rgba(15,17,21,0.22)_100%)]"
            />
          </>
        ) : tone === "twilight-horizontal" ? (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[min(30%,260px)] bg-gradient-to-b from-[#070f0f]/93 via-[#070f0f]/40 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(42%,340px)] bg-gradient-to-t from-[#050c0f]/94 via-[#050c0f]/45 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,16,13,0.44)_0%,transparent_22%,transparent_78%,rgba(5,16,13,0.46)_100%)] opacity-[0.96]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030907]/76 via-transparent to-[hsla(200,38%,93%,0.05)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_115%_78%_at_50%_88%,rgba(3,26,21,0.62),transparent_56%)]"
            />
          </>
        ) : tone === "skyline-horizontal" ? (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[min(32%,280px)] bg-gradient-to-b from-[#0a0c10]/92 via-[#0a0c10]/38 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(44%,360px)] bg-gradient-to-t from-[#06070a]/94 via-[#06070a]/48 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,14,0.42)_0%,transparent_24%,transparent_76%,rgba(8,10,14,0.44)_100%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_76%_at_50%_90%,rgba(5,6,8,0.58),transparent_54%)]"
            />
          </>
        ) : (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-[hsla(40,28%,94%,0.18)]"
          />
        )}
      </motion.div>

      {caption !== undefined && caption !== "" ? (
        <figcaption className="pointer-events-none absolute bottom-loft left-pillar right-pillar">
          <span
            className={cn(
              "font-sans text-micro uppercase tracking-[0.38em] text-fog-soft/[0.9]",
              "drop-shadow-[0_2px_14px_rgba(4,10,9,0.55)] sm:tracking-[0.39em]",
            )}
          >
            {caption}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
