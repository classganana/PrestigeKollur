import { GlassCard } from "@/components/ui/glass-card";
import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import type { TownshipContent } from "@/lib/content/types";

export function TownshipSection({ content }: { content: TownshipContent }) {
  const { heading, pillars } = content;

  return (
    <section id="township" aria-labelledby="township-heading" className="scroll-mt-28">
      <Container>
        <RevealAnimation className="mb-gallery-gap lg:mb-orbit">
          <SectionHeading
            id="township-heading"
            eyebrow={heading.eyebrow}
            title={heading.title}
            lead={heading.lead}
          />
        </RevealAnimation>

        <div className="grid gap-gallery-gap lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <RevealAnimation key={pillar.heading}>
              <GlassCard className="flex h-full flex-col border-accent-bronze/25 shadow-soft">
                <p className="font-sans text-micro uppercase tracking-[0.38em] text-accent-olive">
                  Pillar {i + 1}
                </p>
                <h3 className="mt-4 font-display text-[1.55rem] text-foreground">{pillar.heading}</h3>
                <p className="mt-4 flex-1 font-sans text-body-relaxed text-muted">{pillar.copy}</p>
                <p className="mt-6 font-sans text-[0.72rem] uppercase tracking-[0.28em] text-accent-gold/90">
                  {pillar.detail}
                </p>
              </GlassCard>
            </RevealAnimation>
          ))}
        </div>
      </Container>
    </section>
  );
}
