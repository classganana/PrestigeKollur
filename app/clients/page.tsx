import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PartnerChannelDisclosure } from "@/components/layout/partner-channel-disclosure";
import { resolveProject } from "@/lib/project/resolve-project";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { goldenDoorsClientsPageContent } from "@/projects/golden-doors/content/clients-page";
import { OurClientsView } from "@/sections/our-clients-view";

const project = resolveProject();
const isBrandHub = project.siteType === "brand-hub";

export const metadata: Metadata = isBrandHub
  ? buildPageMetadata({
      seo: project.seo,
      title: goldenDoorsClientsPageContent.metadata.title,
      description: goldenDoorsClientsPageContent.metadata.description,
      path: "/clients",
    })
  : buildPageMetadata({
      seo: project.seo,
      title: "Home",
      description: project.seo.description,
      path: "/",
    });

export default function ClientsPage() {
  if (!isBrandHub) {
    redirect("/");
  }

  return (
    <>
      <OurClientsView content={goldenDoorsClientsPageContent} />
      <PartnerChannelDisclosure />
    </>
  );
}
