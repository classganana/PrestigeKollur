import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { PartnerChannelDisclosure } from "@/components/layout/partner-channel-disclosure";
import { resolveProject } from "@/lib/project/resolve-project";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { goldenDoorsPrivacyPolicyContent } from "@/projects/golden-doors/content/privacy-policy-page";
import { PrivacyPolicyView } from "@/sections/privacy-policy-view";

const project = resolveProject();
const isBrandHub = project.siteType === "brand-hub";

export const metadata: Metadata = isBrandHub
  ? buildPageMetadata({
      seo: project.seo,
      title: goldenDoorsPrivacyPolicyContent.metadata.title,
      description: goldenDoorsPrivacyPolicyContent.metadata.description,
      path: "/privacy-policy",
    })
  : buildPageMetadata({
      seo: project.seo,
      title: "Home",
      description: project.seo.description,
      path: "/",
    });

export default function PrivacyPolicyPage() {
  if (!isBrandHub) {
    redirect("/");
  }

  return (
    <>
      <PrivacyPolicyView content={goldenDoorsPrivacyPolicyContent} />
      <PartnerChannelDisclosure />
    </>
  );
}
