import { Container, RevealAnimation, SectionHeading } from "@/components/ui";
import { DocumentRequestTile } from "@/components/project/document-request-tile";
import {
  GOLDEN_GROVE_MASTER_PLAN_PAGE_PATH,
  goldenGroveDocumentLinks,
} from "@/constants/golden-grove-project";

export function ProjectDocumentsSection() {
  const docs = goldenGroveDocumentLinks();

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
            eyebrow="Collateral vault"
            title="Brochure · costing deck · master plan"
            lead="One-tap PDF downloads appear automatically when NEXT_PUBLIC_DOC_* points at a .pdf (site path under /documents/… or HTTPS). Until then, taps open concierge so outreach stays controlled."
          />
        </RevealAnimation>

        <div className="grid gap-gallery-gap md:grid-cols-3">
          <RevealAnimation>
            <DocumentRequestTile
              title="Project brochure"
              description="Tower narratives, amenity scripture, indicative interiors."
              href={docs.brochure}
              isDirectPdf={docs.brochureIsDirectPdf}
            />
          </RevealAnimation>
          <RevealAnimation>
            <DocumentRequestTile
              title="Cost sheet"
              description="PLC ladders, parking bundles, milestone overlays."
              href={docs.costSheet}
              isDirectPdf={docs.costSheetIsDirectPdf}
            />
          </RevealAnimation>
          <RevealAnimation>
            <DocumentRequestTile
              title="Master plan"
              description="Forest spine sequencing · clubhouse bifurcation · retail edge."
              href={docs.masterPlan}
              isDirectPdf={docs.masterPlanIsDirectPdf}
              browseHref={GOLDEN_GROVE_MASTER_PLAN_PAGE_PATH}
              browseCta="View master plan"
            />
          </RevealAnimation>
        </div>
      </Container>
    </section>
  );
}
