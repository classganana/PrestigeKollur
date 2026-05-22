import { resolveContent } from "@/lib/content/resolve-content";
import { resolvePageSections } from "@/lib/project/resolve-sections";
import { RenderPageSections } from "@/lib/project/render-sections";

export default function Page() {
  const content = resolveContent();
  const sections = resolvePageSections();

  return <RenderPageSections sections={sections} content={content} />;
}
