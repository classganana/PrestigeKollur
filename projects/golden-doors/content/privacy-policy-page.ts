export type PrivacyPolicySection = {
  title: string;
  paragraphs: readonly string[];
};

export type PrivacyPolicyPageContent = {
  metadata: {
    title: string;
    description: string;
  };
  lastUpdated: string;
  intro: string;
  sections: readonly PrivacyPolicySection[];
};

/** Generic privacy policy — sufficient for marketing / ads compliance; not legal advice. */
export const goldenDoorsPrivacyPolicyContent: PrivacyPolicyPageContent = {
  metadata: {
    title: "Privacy Policy",
    description:
      "How Golden Doors Real Estate collects, uses, and protects personal information submitted through this website.",
  },
  lastUpdated: "July 20, 2026",
  intro:
    "Golden Doors Real Estate (“Golden Doors”, “we”, “us”) operates this website to share information about premium residential projects in Hyderabad and to respond to buyer enquiries. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using this site, you agree to the practices described below.",
  sections: [
    {
      title: "Information we collect",
      paragraphs: [
        "When you submit an enquiry form, request a callback, or contact us through WhatsApp or similar channels linked from this site, we may collect details such as your name, phone number, email address, city, budget range, and project preferences.",
        "We may also collect technical information automatically, including your IP address, browser type, device information, pages visited, and approximate location derived from your IP address.",
      ],
    },
    {
      title: "How we use your information",
      paragraphs: [
        "We use the information you provide to respond to your enquiry, arrange site visits, share project details, and follow up on booking-related requests.",
        "We may use aggregated or de-identified data to understand site traffic, improve our content, and measure the effectiveness of our marketing campaigns.",
        "We do not sell your personal information to third parties.",
      ],
    },
    {
      title: "Cookies and analytics",
      paragraphs: [
        "This website may use cookies and similar technologies to remember preferences, measure traffic, and support advertising or analytics tools (including services such as Google Analytics and Google Ads).",
        "You can control cookies through your browser settings. Disabling cookies may limit some site features.",
      ],
    },
    {
      title: "Advertising and remarketing",
      paragraphs: [
        "We may use online advertising platforms, including Google, to promote our services. These platforms may use cookies or device identifiers to show relevant ads and measure campaign performance.",
        "Google’s use of advertising data is governed by Google’s own policies. You can manage ad personalization through your Google account settings and industry opt-out tools where available.",
      ],
    },
    {
      title: "Sharing with third parties",
      paragraphs: [
        "We may share enquiry details with authorized developer partners, site teams, or service providers only when needed to fulfill your request (for example, scheduling a site visit or processing a booking-related follow-up).",
        "We may also disclose information if required by law, court order, or to protect the rights, safety, and security of Golden Doors, our users, or others.",
      ],
    },
    {
      title: "Data retention and security",
      paragraphs: [
        "We retain enquiry records for as long as needed to respond to you, maintain business records, and comply with applicable obligations.",
        "We take reasonable steps to protect personal information, but no method of transmission or storage is completely secure.",
      ],
    },
    {
      title: "Your choices",
      paragraphs: [
        "You may ask us to update or delete enquiry information we hold, subject to legal and contractual requirements.",
        "You may opt out of marketing follow-ups at any time by telling us during a call or message thread initiated from this site.",
      ],
    },
    {
      title: "Children’s privacy",
      paragraphs: [
        "This website is not directed at children under 18, and we do not knowingly collect personal information from children.",
      ],
    },
    {
      title: "Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will reflect the latest revision. Continued use of the site after changes means you accept the updated policy.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "For privacy-related questions, contact Golden Doors through the enquiry form or WhatsApp link on this website.",
        "Golden Doors acts as a channel partner and facilitator between customers and developers. This policy applies to information collected through this website only.",
      ],
    },
  ],
};
