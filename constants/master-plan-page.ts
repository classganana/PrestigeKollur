/**
 * Editorial master-plan page — narratives and tables synthesized from Prestige Golden Grove’s
 * public master-plan materials (prestigegoldengrove.live). Plan WebPs mirrored under `/public/media/master-plan/`.
 */

import { OFFICIAL_SITE_MEDIA_ATTRIBUTION } from "@/constants/brochure-media";

export const MASTER_PLAN_PAGE_ATTRIBUTION = OFFICIAL_SITE_MEDIA_ATTRIBUTION;

export const MASTER_PLAN_METADATA = {
  title: "Master plan",
  description:
    "Prestige Golden Grove — 28.7-acre township layout: towers, open space ratio, clubhouse programming, comparative technical read, FAQs, and download posture.",
} as const;

export const MASTER_PLAN_FIGURES = [
  {
    key: "integrated",
    src: "/media/official/plan-master.webp",
    alt: "Prestige Golden Grove master plan illustration.",
    caption: "Integrated master plan",
  },
  {
    key: "tower",
    src: "/media/master-plan/prestige-golden-grove-tower-plan.webp",
    alt: "Tower plan — Prestige Golden Grove ten towers.",
    caption: "Tower plan",
  },
  {
    key: "clubhouse",
    src: "/media/master-plan/master-plan-of-clubhouse-and-community-spaces.webp",
    alt: "Master plan of Prestige Golden Grove clubhouse and community spaces.",
    caption: "Clubhouse & community spaces",
  },
] as const;

export const MASTER_PLAN_LEAD_PARAS = [
  "Prestige Golden Grove’s expansive and future-focused Master Plan is crafted across 28.7 acres, showcasing more than 60 planned features and open-area highlights within this landmark township in Kollur (Velimela), West Hyderabad. The project includes 5120+ luxury apartments spread across 10 high-rise towers, each rising to 2 Basements + 3 Podium + 52 Floors. Only 20% of the total built-up area is used for construction.",
  "These Master Plan PDFs will clearly display every major detail of the layout, including tower placements, entry and exit points, clubhouse positioning, amenity clusters, landscaped zones, and all outdoor spaces, offering a complete top-view understanding of how the township is organised from end to end.",
  "The layout of Prestige Golden Grove includes defined entrance and exit points, 2 clubhouses, 10 apartment towers, and 60+ outdoor amenities. More than 80% of the land area is reserved for open space with greenery, parks, water features and amenities.",
] as const;

export const MASTER_PLAN_COMPARISON_COLUMNS = [
  "Prestige Golden Grove",
  "The Prestige City",
  "Spring Heights",
  "Prestige Clairemont",
  "Vaishnaoi Rainbow",
] as const;

export const MASTER_PLAN_COMPARISON_ROWS: Array<{ feature: string; values: string[] }> = [
  {
    feature: "Land Parcel",
    values: ["28.7 Acres", "64 Acres", "10.6 Acres", "7.56 Acres", "2.42 Acres"],
  },
  {
    feature: "Building Footprint",
    values: ["Only 20%", "30%", "20%", "12%", "40%"],
  },
  {
    feature: "Open Space Ratio",
    values: ["80% (4:1 Green-to-Built)", "70%", "80%", "88%", "75%"],
  },
  {
    feature: "Tower Height",
    values: ["2B+3P+52 Floors", "B+G+41 Floors", "4B+G+35 Floors", "2B+4P+39 Floors", "2B+5P+36 Floors"],
  },
  {
    feature: "Unit Density",
    values: ["178 Flats/Acre", "~72 (Mixed-use)", "~156 Flats/Acre", "~122 Flats/Acre", "62 (Ultra-Low)"],
  },
  {
    feature: "Clubhouse Scale",
    values: ["2.4L sq. ft. (Twin Clubs)", "2.5L sq. ft.", "50,000 sq. ft.", "40,000 sq. ft.", "25,000 sq. ft."],
  },
  {
    feature: "Tower Orientation",
    values: ["Height-Balanced (Airflow)", "Lake-Facing Linear", "Reservoir Parallel", "Smart-City Grid", "Single Tower Lakefront"],
  },
  {
    feature: "Unique Zone",
    values: ["11-Acre Central Forest", "7-Acre Forum Mall", "34th Floor Lounge", "Neopolis Smart Hub", "Unobstructed Lake View"],
  },
];

export const MASTER_PLAN_KEY_FEATURES_HEADING = "Key Features in the Master Plan Layout";

export const MASTER_PLAN_KEY_FEATURES = [
  "Tower Placement and Orientation",
  "Kid’s Play Zones",
  "Outdoor Sports Courts",
  "Clubhouses in each phase",
  "60+ Modern Amenities",
  "Dedicated Parking Areas",
  "Entry/Exit Gates and Driveway",
  "Jogging Tracks and Walkways",
  "Landscaped Gardens and Parks",
  "Spaces for Future Development",
] as const;

export const MASTER_PLAN_TOWER_SECTION = {
  preface:
    "The master plan ensures that every apartment offers scenic views from the tall towers, privacy, natural light, and a well-ventilated area, surrounded by lush greenery.",
  heading: "Tower Plan – Prestige Golden Grove",
  paras: [
    "The tower plan of Prestige Golden Grove shows a clear design of the project’s 10 high-rise towers. It shows a pictorial illustration of the residential towers that are arranged in a spacious way to maximise comfort for residents. All the towers are strategically designed to optimise airflow and offer alluring views of lush green surroundings.",
    "Tower T05 exactly faces the amenities area. Tower T06 offers delightful swimming pool views. Additionally, the 2 distinct clubhouses are thoughtfully positioned close to Towers T07, T08, and T09. Outdoor amenities, including a volleyball court, a children's play area, a tennis court, a badminton court, and a cricket practice area, are situated adjacent to Tower T09.",
  ],
} as const;

export const MASTER_PLAN_APARTMENTS_SECTION = {
  heading: "Apartment Types and Unit Distribution",
  lead: "The apartments are Vaastu-compliant, to provide positive energy and atmosphere. Smart layouts are there that provide ample storage space and modern interiors.",
  variantIntro: "Prestige Golden Grove offers a variety of apartments:",
  variants: [
    "2 BHK – 1,169 sq. ft. to 1,281 sq. ft.",
    "3 BHK – 1,516 sq. ft. to 2,462 sq. ft.",
    "4 BHK – 2,723 sq. ft. to 3,013 sq. ft.",
  ],
  footer:
    "All these units are distributed over the huge towers, and the housing units above the 5th floor will have extra floor rise charges.",
} as const;

export const MASTER_PLAN_OPEN_SPACE_BLOCK = {
  heading: "Open Space and Green Zone Ratio:",
  paras: [
    "The master plan is planned with 80% of open space, which adds to the efficiency of the building footprint. The green zone ratio is 4:1, which makes it one of the eco-friendly projects in Hyderabad.",
  ],
} as const;

export const MASTER_PLAN_REPRESENT_SECTION = {
  heading: "What does the Master Plan truly represent?",
  body: "The master plan of Prestige Golden Grove is more than a layout – it is a snapshot of how everyday life will flow inside this 28.7-acre community. It shows how the open spaces, tower clusters, and amenity zones are arranged in a way that keeps the township organised, walkable, and comfortable for families. Every zone has been planned with a clear purpose so that residents get a balanced mix of privacy, convenience, and community spaces.",
} as const;

export const MASTER_PLAN_BUYERS_SECTION = {
  heading: "Why the Master Plan Matters for Buyers",
  paras: [
    "Most homebuyers look at the master plan first because it helps them understand how the towers are positioned, how far the amenities are, and how much space is left open. When a township is planned well, it means better ventilation, more green areas, shorter walking distances, and safer internal movement. Prestige Golden Grove follows this logic by keeping a large portion of the land for gardens, activity zones, and vehicle-free pathways.",
    "The towers inside Prestige Golden Grove are arranged in a height-balanced pattern. Taller towers are placed along the outer stretch, and the inner stretch has a mix of tower heights to preserve views and airflow. This zoning ensures that most homes get long-range views of parks, central greens, water features, or the skyline without blockage from neighbouring towers.",
  ],
} as const;

export const MASTER_PLAN_CLUBHOUSE_SECTION = {
  heading: "Master Plan of Clubhouse and Community Spaces",
  lead: "The project has 2 clubhouses with modern indoor luxury amenities that will help engage your leisure time productively. It is a central area where you can spend your leisure time that enhances your overall living experience.",
  bulletsIntro: "Some of the features in the clubhouse are:",
  clubhouseFeatures: [
    "Entrance Plaza",
    "Gym",
    "Active Zone",
    "Activity Field",
    "Leisure Pool",
    "Senior Citizens Corner",
    "Walk Area",
    "Party Lawn",
    "Toddlers’ Park",
    "Portico",
    "Swimming Pool",
    "Jogging Park",
    "Tennis Court",
    "Bio Pond",
    "BBQ Area",
    "Outdoor Workspace",
    "Skating Lane",
    "Play Park",
    "Fitness Corner",
    "Kids Zone",
    "Aqua Park",
    "Eco Pond",
    "Sports Facilities",
    "Yoga Deck",
    "Cricket Net",
    "Basketball Court",
    "Volleyball Court",
    "Walking Track",
    "Cycling Track",
  ],
  sportsHeading: "Sports Facilities",
  sportsFeatures: [
    "Cricket net",
    "Tennis courts",
    "Basketball courts",
    "Volleyball Courts",
    "Gym",
    "Swimming pool",
    "Walking track",
    "Yoga deck",
  ],
} as const;

export const MASTER_PLAN_ROADS_SECURITY_SECTION = {
  heading: "Township Layout and Internal Road Network",
  paras: [
    "The internal roads are wide with separate pedestrian walkways and cycle tracks for better safety and easy movement. Two controlled entry, exit points help to manage traffic efficiently.",
    "The entrances and exits of the project are fully monitored 24/7. There is are well-trained security team 24*7 at the entry and exit gates. There are CCTV cameras 24/7 all around the common areas for the safety of residents.",
    "The Prestige Golden Grove Master Plan Review gives a complete explanation of the full project from early buyers, which helps new homebuyers to decide whether the new project will suit them. Real Estate experts have reviewed the Prestige Golden Grove master plan and have given a rating of 4.7 out of 5.",
  ],
} as const;

export const MASTER_PLAN_DOWNLOAD_SECTION = {
  heading: "Master Plan PDF and Downloads",
  paras: [
    "A detailed Prestige Golden Grove Master Plan PDF will be given after launch, which will show the full layout of the project, tower placements, along with colourful pictures. Buyers can download the master plan PDF of Prestige Golden Grove for free on this website.",
    "The Prestige Golden Grove Master Plan model is also displayed at the project site. The visual of the master plan will give a clear view of how the project will look after it is completed.",
  ],
} as const;

export const MASTER_PLAN_FAQ_HEADING = "FAQs";

export const MASTER_PLAN_FAQS = [
  {
    q: "Will the Prestige Golden Grove master plan show the complete list of amenities that are added in this project?",
    a: "The master plan will display the complete list of the 60+ amenities, and it will also show where they will be placed inside the project.",
  },
  {
    q: "Will Prestige Golden Grove offer parking slots for all buyers?",
    a: "There are both open and closed parking slots, and every buyer will get their desired parking slot.",
  },
  {
    q: "When will the Prestige Golden Grove master plan resale start?",
    a: "The resale of flats at the Prestige Golden Grove Master Plan will start after the homeowners get ownership of their flats. Tentatively, the Prestige Golden Grove Master Plan Resale will start after March 2031.",
  },
  {
    q: "Are all the flats in Prestige Golden Grove based on Vaastu?",
    a: "All the flats in the Prestige Golden Grove project are based on Vaastu with West, North, and East facing to radiate positive energy.",
  },
  {
    q: "Will Prestige Golden Grove include a clubhouse?",
    a: "The project will include a clubhouse, which is loaded with indoor luxury features that include a spa, a card games room, a gym, a swimming pool, party halls, and much more.",
  },
  {
    q: "How many towers and phases are shown in the Prestige Golden Grove master plan?",
    a: "The master plan shows 10 residential towers planned across different clusters, with separate zones for clubhouses, sports courts, kids’ areas, and garden spaces.",
  },
  {
    q: "How does the Prestige Golden Grove master plan help in daily living?",
    a: "The layout keeps basics like towers, parking, clubhouse and play areas well-organised, so residents have short walking distances, clear vehicle routes, and easy access to common amenities.",
  },
] as const;
