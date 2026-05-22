import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import { DocumentRequestTile } from "@/components/project/document-request-tile";
import type { DocumentsContent } from "@/lib/content/types";
import { goldenGroveDocumentLinks } from "@/projects/prestige-kollur/project-facts";

export function ProjectDocumentsSection({ content }: { content: DocumentsContent }) {
  const docs = goldenGroveDocumentLinks();
  const [brochureTile, costSheetTile, masterPlanTile] = content.tiles;

  return (
    <section
      id="documents"
      aria-labelledby="documents-heading"
      className="scroll-mt-28 border-t border-accent-bronze/10 bg-surface pb-section-y pt-section-y"
    >
      <Container>
        <RevealAnimation className="mb-gallery-gap">
          <SectionHeading
            id="documents-heading"
            eyebrow={content.heading.eyebrow}
            title={content.heading.title}
            lead={content.heading.lead}
          />
        </RevealAnimation>

        <div className="grid gap-gallery-gap md:grid-cols-3">
          <RevealAnimation>
            <DocumentRequestTile
              title={brochureTile.title}
              description={brochureTile.description}
              href={docs.brochure}
              isDirectPdf={docs.brochureIsDirectPdf}
            />
          </RevealAnimation>
          <RevealAnimation>
            <DocumentRequestTile
              title={costSheetTile.title}
              description={costSheetTile.description}
              href={docs.costSheet}
              isDirectPdf={docs.costSheetIsDirectPdf}
            />
          </RevealAnimation>
          <RevealAnimation>
            <DocumentRequestTile
              title={masterPlanTile.title}
              description={masterPlanTile.description}
              href={docs.masterPlan}
              isDirectPdf={docs.masterPlanIsDirectPdf}
              browseHref={masterPlanTile.browseHref}
              browseCta={masterPlanTile.browseCta}
            />
          </RevealAnimation>
        </div>
      </Container>
    </section>
  );
}
