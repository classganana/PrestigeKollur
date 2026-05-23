import Image from "next/image";

import type { ConnectivityMapFrame, ConnectivityMapNode } from "@/lib/content/types";
import { themeClasses } from "@/lib/theme/theme-classes";
import { cn } from "@/lib/cn";

type Props = {
  mapFrame: ConnectivityMapFrame;
  mapEyebrow?: string;
  imageCaption?: string;
  nodes?: readonly ConnectivityMapNode[];
  className?: string;
};

/** Curated corridor atlas — desaturated source map with metropolitan overlay treatment. */
export function ConnectivityAtlasPlate({
  mapFrame,
  mapEyebrow,
  imageCaption,
  nodes,
  className,
}: Props) {
  const imageFocus = mapFrame.imageFocus ?? "50% 50%";
  const hasNodes = nodes != null && nodes.length > 0;

  return (
    <figure className={cn("min-w-0", className)}>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        {mapEyebrow ? (
          <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-accent-bronze">
            {mapEyebrow}
          </p>
        ) : null}
        <p className="ml-auto font-sans text-[0.54rem] uppercase tracking-[0.26em] text-muted">
          {mapFrame.atlasMicroline}
        </p>
      </div>

      <div
        className={cn(
          "relative isolate overflow-hidden rounded-[clamp(20px,2.6vw,26px)] p-[3px]",
          themeClasses.connectivityAtlasFrame,
        )}
      >
        <div className="relative aspect-[5/4] overflow-hidden rounded-[clamp(17px,2.2vw,22px)] sm:aspect-[4/3]">
          <Image
            alt={mapFrame.alt}
            fill
            className={cn("object-cover", themeClasses.connectivityAtlasImage)}
            decoding="async"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 40vw"
            quality={86}
            src={mapFrame.src}
            style={{ objectPosition: imageFocus }}
          />

          <div
            aria-hidden
            className={cn("pointer-events-none absolute inset-0", themeClasses.connectivityAtlasWash)}
          />
          <div
            aria-hidden
            className={cn("pointer-events-none absolute inset-0", themeClasses.connectivityAtlasVignette)}
          />
          <div
            aria-hidden
            className={cn("pointer-events-none absolute inset-0", themeClasses.connectivityAtlasAccent)}
          />
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0",
              themeClasses.connectivityAtlasScrimBottom,
            )}
          />

          {hasNodes ? (
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
              {nodes.map((node) => (
                <AtlasNode key={node.label} node={node} />
              ))}
            </div>
          ) : null}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-champagne/35 to-transparent"
          />
        </div>
      </div>

      {hasNodes ? (
        <ul
          role="list"
          aria-label="Corridor map destinations"
          className="mt-3 flex flex-wrap gap-2 sm:hidden"
        >
          {nodes.map((node) => (
            <li
              key={node.label}
              className={cn(
                "rounded-full px-2.5 py-1 font-sans text-[0.5625rem] font-medium uppercase tracking-[0.14em]",
                node.role === "anchor"
                  ? "border border-accent-champagne/35 bg-forest-strong text-accent-champagne"
                  : "border border-accent-bronze/20 bg-fog-soft text-foreground",
              )}
            >
              {node.label}
            </li>
          ))}
        </ul>
      ) : null}

      {imageCaption ? (
        <figcaption className="mt-3 font-sans text-[0.58rem] uppercase leading-snug tracking-[0.28em] text-muted">
          {imageCaption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function AtlasNode({ node }: { node: ConnectivityMapNode }) {
  const isAnchor = node.role === "anchor";

  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: node.x, top: node.y }}
    >
      <span
        className={cn(
          "relative rounded-full",
          isAnchor
            ? "size-3 bg-accent-champagne shadow-[0_0_16px_rgba(184,164,128,0.65)] ring-[3px] ring-accent-champagne/40"
            : "size-2 bg-fog-soft ring-2 ring-forest-strong/25",
        )}
      >
        {isAnchor ? (
          <span className="absolute -inset-1 rounded-full bg-accent-champagne/30 blur-[2px]" />
        ) : null}
      </span>
      <span
        className={cn(
          "mt-1.5 max-w-[10rem] rounded-full px-2 py-0.5 text-center font-sans uppercase leading-tight tracking-[0.16em]",
          "bg-forest-strong/78 backdrop-blur-[3px]",
          isAnchor
            ? "text-[0.54rem] font-semibold text-accent-champagne"
            : "text-[0.48rem] font-medium text-fog-soft",
        )}
      >
        {node.label}
      </span>
    </div>
  );
}
