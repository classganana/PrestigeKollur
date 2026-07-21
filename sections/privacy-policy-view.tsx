import Link from "next/link";

import { Container } from "@/components/ui/container";
import type { PrivacyPolicyPageContent } from "@/projects/golden-doors/content/privacy-policy-page";

/** Plain legal page — minimal styling for Golden Doors brand hub. */
export function PrivacyPolicyView({ content }: { content: PrivacyPolicyPageContent }) {
  const { lastUpdated, intro, sections } = content;

  return (
    <div className="relative min-h-[70vh] bg-[#0c0906] text-[#EBE4D6]">
      <Container className="relative pb-section-y pt-[clamp(6.5rem,14vw,8.5rem)]">
        <p className="mb-8 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#C9A227]/75">
          <Link
            href="/"
            className="transition-colors hover:text-[#E8C65A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]/70"
          >
            Home
          </Link>
          <span className="mx-2 text-[#C9A227]/40" aria-hidden>
            /
          </span>
          <span className="text-[#EBE4D6]/70">Privacy Policy</span>
        </p>

        <header className="max-w-[42rem]">
          <h1 className="font-display text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#FAF7EF]">
            Privacy Policy
          </h1>
          <p className="mt-3 font-sans text-[0.78rem] text-[#C9BFB0]">
            Last updated: {lastUpdated}
          </p>
          <p className="mt-6 font-sans text-[0.98rem] leading-[1.75] text-[#EBE4D6]">{intro}</p>
        </header>

        <div className="mt-12 max-w-[46rem] space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#C9A227]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="font-sans text-[0.92rem] leading-[1.72] text-[#EBE4D6]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
