import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PartnerChannelDisclosure } from "@/components/layout/partner-channel-disclosure";
import { resolveProject } from "@/lib/project/resolve-project";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { goldenDoorsServicesPageContent } from "@/projects/golden-doors/content/services-page";
import { ServicesOfferedView } from "@/sections/services-offered-view";

const project = resolveProject();
const isBrandHub = project.siteType === "brand-hub";

export const metadata: Metadata = isBrandHub
  ? buildPageMetadata({
      seo: project.seo,
      title: goldenDoorsServicesPageContent.metadata.title,
      description: goldenDoorsServicesPageContent.metadata.description,
      path: "/services",
    })
  : buildPageMetadata({
      seo: project.seo,
      title: "Home",
      description: project.seo.description,
      path: "/",
    });

export default function ServicesPage() {
  if (!isBrandHub) {
    redirect("/");
  }

  return (
    <>
      <ServicesOfferedView content={goldenDoorsServicesPageContent} />
      <PartnerChannelDisclosure />
    </>
  );
}
