"use client";

import Image from "next/image";

import { motion, useReducedMotion } from "framer-motion";

import { staggerChild, staggerContainer } from "@/animations";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Container } from "@/components/ui/container";
import { useConciergeModal } from "@/components/providers/concierge-modal-provider";
import type { PortfolioProjectCard, ProjectPortfolioContent } from "@/lib/content/types";
import { trackProjectClick } from "@/lib/analytics/track-conversion";
import { useProject } from "@/lib/project/project-context";
import { cn } from "@/lib/cn";

function withUtm(url: string): string {
  try {
    const parsed = new URL(url);
    if (!parsed.searchParams.has("utm_source")) {
      parsed.searchParams.set("utm_source", "golden-doors");
      parsed.searchParams.set("utm_medium", "referral");
    }
    return parsed.toString();
  } catch {
    const sep = url.includes("?") ? "&" : "?";
    return `${url}${sep}utm_source=golden-doors&utm_medium=referral`;
  }
}

function PortfolioRow({
  project,
  viewLabel,
  interestLabel,
  index,
}: {
  project: PortfolioProjectCard;
  viewLabel: string;
  interestLabel: string;
  index: number;
}) {
  const { leadSourceTag } = useProject();
  const { openWithPreferredProject } = useConciergeModal();
  const reduceMotion = useReducedMotion();
  const imageRight = index % 2 === 1;

  return (
    <motion.article
      variants={reduceMotion ? undefined : staggerChild}
      className={cn(
        "grid overflow-hidden border-t border-[#C9A227]/30",
        "lg:grid-cols-2 lg:min-h-[28rem]",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/11] bg-[#0c0906] lg:aspect-auto lg:min-h-full",
          imageRight && "lg:order-2",
        )}
      >
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,9,6,0.35),transparent_45%)] lg:hidden" />
      </div>

      <div
        className={cn(
          "flex flex-col justify-center gap-5 bg-[#14100C] px-6 py-9 sm:px-10 sm:py-12 lg:px-12",
          imageRight && "lg:order-1",
        )}
      >
        <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.36em] text-[#C9A227]">
          {project.developerName}
        </p>

        <div>
          <h3 className="font-display text-[clamp(1.75rem,3.2vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#FAF7EF]">
            {project.name}
          </h3>
          <p className="mt-2 font-sans text-[0.95rem] leading-relaxed text-[#EBE4D6]">
            {project.location}
          </p>
        </div>

        <p className="font-sans text-[0.95rem] font-medium tracking-[0.02em] text-[#E8D9B0]">
          {project.configuration}
          <span className="mx-2 text-[#C9A227]/60">·</span>
          {project.priceBand}
        </p>

        <ul className="grid gap-2 sm:grid-cols-2">
          {project.highlights.slice(0, 4).map((item) => (
            <li
              key={item}
              className="font-sans text-[0.86rem] leading-snug text-[#EBE4D6]/[0.88] before:mr-2 before:text-[#C9A227] before:content-['—']"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={withUtm(project.externalUrl)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackProjectClick({
                leadSource: leadSourceTag,
                projectId: project.id,
                placement: "portfolio_card",
              })
            }
            className={cn(
              "inline-flex min-h-touch items-center justify-center rounded-full",
              "border border-[#C9A227]/70 px-7 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.28em]",
              "text-[#E8D9B0] transition-colors hover:border-[#C9A227] hover:bg-[#C9A227]/15 hover:text-[#FAF7EF]",
            )}
          >
            {viewLabel}
            <span aria-hidden className="ml-2">
              →
            </span>
          </a>

          <PrimaryButton
            type="button"
            variant="champagne"
            className="w-full sm:w-auto"
            onClick={() => openWithPreferredProject(project.id)}
          >
            {interestLabel}
          </PrimaryButton>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectPortfolioSection({ content }: { content: ProjectPortfolioContent }) {
  const reduceMotion = useReducedMotion();
  const { heading, projects, viewProjectLabel, expressInterestLabel } = content;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-[5.625rem] border-t border-[#C9A227]/20 bg-[#0c0906] sm:scroll-mt-28"
    >
      <Container className="pb-8 pt-[clamp(2.75rem,6.5vw,4rem)] sm:pb-10">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="max-w-[40rem]"
        >
          {heading.eyebrow ? (
            <motion.p
              variants={reduceMotion ? undefined : staggerChild}
              className="font-sans text-micro uppercase tracking-[0.38em] text-[#C9A227]"
            >
              {heading.eyebrow}
            </motion.p>
          ) : null}
          <motion.h2
            id="projects-heading"
            variants={reduceMotion ? undefined : staggerChild}
            className="mt-4 font-display text-[clamp(1.85rem,4vw,2.65rem)] font-semibold leading-[1.08] tracking-[-0.022em] text-[#FAF7EF]"
          >
            {heading.title}
          </motion.h2>
          {heading.lead ? (
            <motion.p
              variants={reduceMotion ? undefined : staggerChild}
              className="mt-4 font-sans text-[1rem] leading-[1.68] text-[#EBE4D6] sm:text-[1.035rem]"
            >
              {heading.lead}
            </motion.p>
          ) : null}
        </motion.div>
      </Container>

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.08 }}
        variants={reduceMotion ? undefined : staggerContainer}
        className="border-b border-[#C9A227]/30"
      >
        {projects.map((project, index) => (
          <PortfolioRow
            key={project.id}
            project={project}
            index={index}
            viewLabel={viewProjectLabel}
            interestLabel={expressInterestLabel}
          />
        ))}
      </motion.div>
    </section>
  );
}
