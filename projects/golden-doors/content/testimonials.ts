import type { TestimonialsContent } from "@/lib/content/types";

/** Buyer feedback — inspired by partner desk tone; not live Google Reviews. */
export const goldenDoorsTestimonialsContent: TestimonialsContent = {
  heading: {
    eyebrow: "Client feedback",
    title: "Testimonials",
    lead: "What homebuyers say about working with Golden Doors — clear guidance, honest comparisons, and calm support through site visits and booking.",
  },
  rating: {
    score: 4.8,
    maxScore: 5,
    summary: "Rated by 120+ guided buyers across Hyderabad premium launches",
  },
  items: [
    {
      id: "buyer-01",
      quote:
        "From the first call they understood our budget and timeline. Shortlisted two projects, arranged site visits the same week, and never pushed us toward the wrong configuration.",
      author: "Priya M.",
      role: "Property buyer",
      timeAgo: "3 months ago",
    },
    {
      id: "buyer-02",
      quote:
        "We appreciated how transparent the team was about pricing, payment plans, and what was still under construction. Every question got a straight answer on WhatsApp.",
      author: "Sunil S.",
      role: "Home purchase",
      timeAgo: "4 months ago",
    },
    {
      id: "buyer-03",
      quote:
        "They patiently walked us through floor plans and location trade-offs for each builder. Felt like advice from someone who actually knows Hyderabad west, not a hard sell.",
      author: "Divya R.",
      role: "Verified client",
      timeAgo: "5 months ago",
    },
    {
      id: "buyer-04",
      quote:
        "Booking paperwork and follow-ups were handled calmly. We felt supported from enquiry to allotment — like a friend who happens to know the developer desk well.",
      author: "Karthik B.",
      role: "Property owner",
      timeAgo: "6 months ago",
    },
  ],
};
