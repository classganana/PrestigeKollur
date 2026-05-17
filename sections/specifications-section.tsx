import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import { SPEC_SNIPPETS } from "@/constants/golden-grove-project";

export function SpecificationsSection() {
  return (
    <section
      id="specifications"
      aria-labelledby="specifications-heading"
      className="scroll-mt-28 border-t border-accent-bronze/10 bg-twilight-soft/60 pb-section-y pt-section-y"
    >
      <Container>
        <RevealAnimation className="mb-gallery-gap">
          <SectionHeading
            id="specifications-heading"
            eyebrow="Specifications"
            title="Structural rigour · interior palettes · services spine"
            lead="Digest distilled from Prestige specification manuals — defer MEP nuances & acoustic datasheets to specialist desk sessions."
          />
        </RevealAnimation>

        <div className="grid gap-loft lg:grid-cols-3">
          {SPEC_SNIPPETS.map((cluster) => (
            <RevealAnimation key={cluster.heading}>
              <article className="flex h-full flex-col gap-4 rounded-[26px] border border-accent-bronze/16 bg-fog-soft/90 p-loft shadow-soft backdrop-blur-sm">
                <h3 className="font-display text-[1.42rem] text-foreground">{cluster.heading}</h3>
                <ul className="space-y-3 font-sans text-body-relaxed text-muted">
                  {cluster.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </Container>
    </section>
  );
}
