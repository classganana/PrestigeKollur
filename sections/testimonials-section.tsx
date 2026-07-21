"use client";

import { motion, useReducedMotion } from "framer-motion";

import { staggerChild, staggerContainer } from "@/animations";
import { Container } from "@/components/ui/container";
import type { TestimonialsContent } from "@/lib/content/types";
import { cn } from "@/lib/cn";

function StarRating({ score, maxScore }: { score: number; maxScore: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: maxScore }, (_, index) => {
        const fill = Math.min(1, Math.max(0, score - index));
        return (
          <span key={index} className="relative inline-block size-4 sm:size-[1.125rem]">
            <svg viewBox="0 0 20 20" className="size-full text-accent-bronze/25">
              <path
                fill="currentColor"
                d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z"
              />
            </svg>
            {fill > 0 ? (
              <span
                className="absolute inset-0 overflow-hidden text-accent-gold"
                style={{ width: `${fill * 100}%` }}
              >
                <svg viewBox="0 0 20 20" className="size-full">
                  <path
                    fill="currentColor"
                    d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z"
                  />
                </svg>
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

function AuthorAvatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <span
      aria-hidden
      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-bronze/15 font-sans text-[0.95rem] font-semibold uppercase text-accent-bronze"
    >
      {initial}
    </span>
  );
}

function TestimonialCard({
  item,
  reduceMotion,
}: {
  item: TestimonialsContent["items"][number];
  reduceMotion: boolean | null;
}) {
  return (
    <motion.li
      variants={reduceMotion ? undefined : staggerChild}
      className={cn(
        "flex h-full flex-col justify-between rounded-[clamp(18px,2.4vw,22px)]",
        "border border-accent-bronze/14 bg-ivory p-6 shadow-soft sm:p-7",
      )}
    >
      <div>
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="size-7 text-accent-bronze/35"
          fill="currentColor"
        >
          <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V14h3.17L4 22h5l1.17-8H7.17V11.2c0-1.2.97-2.17 2.16-2.17H12V6H7.17zm11 0A5.17 5.17 0 0 0 13 11.17V14h3.17L15 22h5l1.17-8H17.17V11.2c0-1.2.97-2.17 2.16-2.17H24V6h-5.83z" />
        </svg>
        <blockquote className="mt-4 font-sans text-[0.94rem] leading-[1.72] text-foreground/88">
          “{item.quote}”
        </blockquote>
      </div>

      <footer className="mt-6 flex items-center gap-3 border-t border-accent-bronze/10 pt-5">
        <AuthorAvatar name={item.author} />
        <div className="min-w-0">
          <p className="truncate font-sans text-[0.92rem] font-semibold text-foreground">
            {item.author}
          </p>
          <p className="font-sans text-[0.78rem] text-muted">{item.role}</p>
        </div>
        <p className="ml-auto shrink-0 font-sans text-[0.72rem] text-muted/80">{item.timeAgo}</p>
      </footer>
    </motion.li>
  );
}

/** Social proof band — rating summary and buyer quote cards (no live review widgets). */
export function TestimonialsSection({ content }: { content: TestimonialsContent }) {
  const reduceMotion = useReducedMotion();
  const { heading, rating, items } = content;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-[5.625rem] border-t border-accent-bronze/12 bg-fog-soft/45 pb-section-y pt-[clamp(2.75rem,6.5vw,4rem)] sm:scroll-mt-28"
    >
      <Container>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-[40rem]">
            {heading.eyebrow ? (
              <motion.p
                variants={reduceMotion ? undefined : staggerChild}
                className="font-sans text-micro uppercase tracking-[0.38em] text-accent-bronze"
              >
                {heading.eyebrow}
              </motion.p>
            ) : null}
            <motion.h2
              id="testimonials-heading"
              variants={reduceMotion ? undefined : staggerChild}
              className="mt-4 font-display text-[clamp(1.85rem,4vw,2.65rem)] font-semibold leading-[1.08] tracking-[-0.022em] text-foreground"
            >
              {heading.title}
            </motion.h2>
            {heading.lead ? (
              <motion.p
                variants={reduceMotion ? undefined : staggerChild}
                className="mt-4 font-sans text-[1rem] font-medium leading-[1.68] text-muted sm:text-[1.035rem]"
              >
                {heading.lead}
              </motion.p>
            ) : null}
          </div>

          <motion.div
            variants={reduceMotion ? undefined : staggerChild}
            className="shrink-0 rounded-[18px] border border-accent-bronze/14 bg-surface px-6 py-5 sm:px-7"
            aria-label={`${rating.score} out of ${rating.maxScore} average rating`}
          >
            <div className="flex items-center gap-3">
              <p className="font-display text-[clamp(2rem,4vw,2.65rem)] font-semibold tabular-nums leading-none tracking-[-0.03em] text-foreground">
                {rating.score}
                <span className="font-sans text-[1rem] font-medium text-muted">
                  {" "}
                  / {rating.maxScore}
                </span>
              </p>
              <StarRating score={rating.score} maxScore={rating.maxScore} />
            </div>
            <p className="mt-2 max-w-[16rem] font-sans text-[0.78rem] leading-relaxed text-muted">
              {rating.summary}
            </p>
          </motion.div>
        </motion.div>

        <motion.ul
          role="list"
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.12 }}
          variants={reduceMotion ? undefined : staggerContainer}
          className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {items.map((item) => (
            <TestimonialCard key={item.id} item={item} reduceMotion={reduceMotion} />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
