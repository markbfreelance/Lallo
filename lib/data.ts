/* ──────────────────────────────────────────────
   TYPED DATA — Municipality of Lallo, Cagayan
   ────────────────────────────────────────────── */

// ── Interfaces ────────────────────────────────

export interface Official {
  id: string;
  name: string;
  title: string;
  role: "mayor" | "vice-mayor" | "councilor" | "ex-officio" | "department";
  photo?: string; // path in /public
  quote?: string;
  committee?: string;
  placeholder?: boolean; // true = name/photo not yet verified
}

export interface Ordinance {
  id: string;
  title: string;
  referenceNumber: string;
  dateApproved: string; // ISO date string
  summary: string;
  category: "Ordinance" | "Resolution" | "Advisory" | "Program";
  year: number;
  pdfUrl?: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "Heritage" | "Nature" | "Faith" | "Food";
  bestTimeToVisit?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  thumbnail?: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  title: string;
  icon: string; // lucide icon name
  placeholder?: boolean;
}

// ── Officials ─────────────────────────────────

export const officials: Official[] = [
  {
    id: "mayor",
    name: "Hon. Oliver Pascual",
    title: "Municipal Mayor",
    role: "mayor",
    quote:
      "Together, let us build a Lallo that is progressive, transparent, and deeply rooted in our shared heritage as people of the Cagayan River.",
  },
  {
    id: "vice-mayor",
    name: "[PLACEHOLDER — Vice Mayor]",
    title: "Municipal Vice Mayor / Presiding Officer, Sangguniang Bayan",
    role: "vice-mayor",
    placeholder: true,
  },
  {
    id: "sb-1",
    name: "[PLACEHOLDER — Councilor 1]",
    title: "SB Member",
    role: "councilor",
    committee: "Committee on Appropriations",
    placeholder: true,
  },
  {
    id: "sb-2",
    name: "[PLACEHOLDER — Councilor 2]",
    title: "SB Member",
    role: "councilor",
    committee: "Committee on Laws & Ordinances",
    placeholder: true,
  },
  {
    id: "sb-3",
    name: "[PLACEHOLDER — Councilor 3]",
    title: "SB Member",
    role: "councilor",
    committee: "Committee on Health & Sanitation",
    placeholder: true,
  },
  {
    id: "sb-4",
    name: "[PLACEHOLDER — Councilor 4]",
    title: "SB Member",
    role: "councilor",
    committee: "Committee on Agriculture & Food",
    placeholder: true,
  },
  {
    id: "sb-5",
    name: "[PLACEHOLDER — Councilor 5]",
    title: "SB Member",
    role: "councilor",
    committee: "Committee on Infrastructure",
    placeholder: true,
  },
  {
    id: "sb-6",
    name: "[PLACEHOLDER — Councilor 6]",
    title: "SB Member",
    role: "councilor",
    committee: "Committee on Education & Culture",
    placeholder: true,
  },
  {
    id: "sb-7",
    name: "[PLACEHOLDER — Councilor 7]",
    title: "SB Member",
    role: "councilor",
    committee: "Committee on Tourism & Trade",
    placeholder: true,
  },
  {
    id: "sb-8",
    name: "[PLACEHOLDER — Councilor 8]",
    title: "SB Member",
    role: "councilor",
    committee: "Committee on Peace & Order",
    placeholder: true,
  },
  {
    id: "abc-president",
    name: "[PLACEHOLDER — ABC President]",
    title: "Association of Barangay Captains President (Ex-Officio)",
    role: "ex-officio",
    placeholder: true,
  },
  {
    id: "sk-president",
    name: "[PLACEHOLDER — SK Federation President]",
    title: "SK Federation President (Ex-Officio)",
    role: "ex-officio",
    placeholder: true,
  },
];

// ── Departments ───────────────────────────────

export const departments: Department[] = [
  {
    id: "mpdc",
    name: "Municipal Planning & Development Office",
    head: "[PLACEHOLDER]",
    title: "Municipal Planning & Development Coordinator",
    icon: "ClipboardList",
    placeholder: true,
  },
  {
    id: "treasurer",
    name: "Municipal Treasurer's Office",
    head: "[PLACEHOLDER]",
    title: "Municipal Treasurer",
    icon: "Landmark",
    placeholder: true,
  },
  {
    id: "agriculture",
    name: "Municipal Agriculture Office",
    head: "[PLACEHOLDER]",
    title: "Municipal Agriculturist",
    icon: "Wheat",
    placeholder: true,
  },
  {
    id: "mswdo",
    name: "Municipal Social Welfare & Development Office",
    head: "[PLACEHOLDER]",
    title: "MSWDO Head",
    icon: "Heart",
    placeholder: true,
  },
  {
    id: "health",
    name: "Municipal Health Office",
    head: "[PLACEHOLDER]",
    title: "Municipal Health Officer",
    icon: "Stethoscope",
    placeholder: true,
  },
  {
    id: "engineering",
    name: "Municipal Engineering Office",
    head: "[PLACEHOLDER]",
    title: "Municipal Engineer",
    icon: "HardHat",
    placeholder: true,
  },
];

// ── Ordinances & Resolutions ──────────────────

export const ordinances: Ordinance[] = [
  {
    id: "ord-2025-015",
    title: "An Ordinance Regulating the Use of Single-Use Plastics within the Municipality of Lallo",
    referenceNumber: "Ordinance No. 2025-015",
    dateApproved: "2025-09-12",
    summary:
      "Prohibits the distribution and use of single-use plastic bags and styrofoam in commercial establishments, with a phased implementation period and penalties for non-compliance.",
    category: "Ordinance",
    year: 2025,
  },
  {
    id: "ord-2025-012",
    title: "An Ordinance Establishing the Municipal Disaster Risk Reduction and Management Fund",
    referenceNumber: "Ordinance No. 2025-012",
    dateApproved: "2025-07-20",
    summary:
      "Allocates 5% of the annual municipal budget to the MDRRM Fund for disaster preparedness, response, rehabilitation, and mitigation programs.",
    category: "Ordinance",
    year: 2025,
  },
  {
    id: "res-2025-045",
    title: "Resolution Supporting the Provincial Tourism Development Plan for Cagayan Valley",
    referenceNumber: "Resolution No. 2025-045",
    dateApproved: "2025-10-05",
    summary:
      "Expresses the municipality's support for the Province of Cagayan's tourism development initiative and pledges coordination on heritage site preservation.",
    category: "Resolution",
    year: 2025,
  },
  {
    id: "adv-2025-003",
    title: "Public Advisory on Typhoon Season Preparedness 2025",
    referenceNumber: "Advisory No. 2025-003",
    dateApproved: "2025-06-01",
    summary:
      "Reminds all barangays and residents of evacuation protocols, emergency contact numbers, and pre-positioned supply locations for the 2025 typhoon season.",
    category: "Advisory",
    year: 2025,
  },
  {
    id: "ord-2024-008",
    title: "An Ordinance Imposing a Curfew for Minors in the Municipality of Lallo",
    referenceNumber: "Ordinance No. 2024-008",
    dateApproved: "2024-03-15",
    summary:
      "Sets a 10:00 PM to 4:00 AM curfew for minors (17 and below) unless accompanied by a parent or guardian, with defined exemptions for school and work activities.",
    category: "Ordinance",
    year: 2024,
  },
  {
    id: "res-2024-032",
    title: "Resolution Requesting the DPWH for the Rehabilitation of the Lallo-Camalaniugan Road",
    referenceNumber: "Resolution No. 2024-032",
    dateApproved: "2024-08-22",
    summary:
      "Formally requests the Department of Public Works and Highways to prioritize the rehabilitation and widening of the deteriorating Lallo-Camalaniugan municipal road.",
    category: "Resolution",
    year: 2024,
  },
  {
    id: "prog-2025-001",
    title: "Lallo River Rangers: Community-Based Mangrove Reforestation Program",
    referenceNumber: "Program Ref. 2025-001",
    dateApproved: "2025-04-22",
    summary:
      "Launches a volunteer-driven mangrove reforestation initiative along the Cagayan River delta, targeting 10,000 seedlings planted in partnership with DENR and local fishing cooperatives.",
    category: "Program",
    year: 2025,
  },
  {
    id: "ord-2024-019",
    title: "An Ordinance Creating the Municipal Tourism Council of Lallo",
    referenceNumber: "Ordinance No. 2024-019",
    dateApproved: "2024-11-10",
    summary:
      "Establishes a dedicated Tourism Council to oversee, promote, and develop tourism activities and heritage site management within the municipality.",
    category: "Ordinance",
    year: 2024,
  },
];

// ── Tourist Attractions ───────────────────────

export const attractions: Attraction[] = [
  {
    id: "museum",
    name: "Lal-lo National Museum & Archaeological Sites",
    description:
      "One of the most significant archaeological sites in Southeast Asia, Lal-lo's shell middens and burial grounds have yielded artifacts dating back over 4,000 years. The national museum showcases pre-colonial pottery, stone tools, and evidence of early Austronesian settlement in the Cagayan Valley.",
    image: "/images/museum.png",
    category: "Heritage",
    bestTimeToVisit: "Year-round, Tuesday–Sunday",
  },
  {
    id: "church",
    name: "San Jacinto de Polonia Parish Church",
    description:
      "One of the oldest churches in the Cagayan Valley, this Spanish colonial-era parish church features centuries-old stone and brick architecture, a historic bell tower, and a serene courtyard. A testament to Lallo's deep-rooted Catholic heritage and colonial past.",
    image: "/images/church.png",
    category: "Faith",
    bestTimeToVisit: "Year-round, best during town fiesta (August)",
  },
  {
    id: "river",
    name: "Cagayan River Delta & Fishing Communities",
    description:
      "Experience life along the mighty Cagayan River — the longest river in the Philippines. Join local fishermen on traditional bangka boats, explore the river mouth where freshwater meets the sea, and witness the daily rhythms of riverside communities that have thrived here for centuries.",
    image: "/images/river.png",
    category: "Nature",
    bestTimeToVisit: "November–May (dry season)",
  },
  {
    id: "wetlands",
    name: "Mangrove Wetlands & Birdwatching",
    description:
      "Lallo's coastal wetlands and mangrove forests are a haven for migratory birds and endemic species. Egrets, herons, and kingfishers are commonly spotted. The mangroves also serve as vital nurseries for fish and shrimp, supporting the local fishing economy.",
    image: "/images/wetlands.png",
    category: "Nature",
    bestTimeToVisit: "October–March (migratory bird season)",
  },
  {
    id: "fiesta",
    name: "Lallo Town Fiesta & Cultural Celebrations",
    description:
      "The annual town fiesta is a vibrant celebration of Ibanag and Itawes culture featuring street parades, traditional dances, beauty pageants, agricultural fairs, and community feasts. Experience the warmth and hospitality of Lallo's people at their most festive.",
    image: "/images/fiesta.png",
    category: "Heritage",
    bestTimeToVisit: "August (town fiesta month)",
  },
  {
    id: "food",
    name: "Local Delicacies & Cagayan Valley Cuisine",
    description:
      "Savor the flavors of the Cagayan Valley: from fresh river fish cooked in traditional Ibanag style (sinagan, pinakbet), to miki noodles, pancit batil patung, and kakanin rice cakes. Visit the local market for authentic ingredients and home-cooked specialties.",
    image: "/images/fiesta.png",
    category: "Food",
    bestTimeToVisit: "Year-round, visit the public market mornings",
  },
];

// ── News ──────────────────────────────────────

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "Municipal Hall Renovation Project Reaches 80% Completion",
    date: "2025-10-15",
    excerpt:
      "The ongoing renovation of the Lallo Municipal Hall is on track for its December 2025 completion target, featuring improved accessibility and modern office facilities.",
  },
  {
    id: "news-2",
    title: "Lallo River Rangers Plant 3,000th Mangrove Seedling",
    date: "2025-09-28",
    excerpt:
      "The community-based reforestation program hit a major milestone as volunteers from 12 barangays gathered for a mass planting event along the Cagayan River delta.",
  },
  {
    id: "news-3",
    title: "Free Medical Mission Serves Over 500 Residents",
    date: "2025-09-10",
    excerpt:
      "In partnership with the Provincial Health Office, the municipality conducted a free medical and dental mission at the Lallo Central School gymnasium.",
  },
  {
    id: "news-4",
    title: "DPWH Approves Funding for Lallo-Camalaniugan Road Rehabilitation",
    date: "2025-08-20",
    excerpt:
      "The Department of Public Works and Highways has confirmed ₱45 million in funding for the long-awaited rehabilitation of the Lallo-Camalaniugan municipal road.",
  },
];

// ── Stats ─────────────────────────────────────

export const municipalStats = [
  { label: "Barangays", value: 35, suffix: "" },
  { label: "Residents", value: 48000, suffix: "+" },
  { label: "Land Area (km²)", value: 700, suffix: "+" },
  { label: "Municipality Class", value: 1, suffix: "st Class" },
] as const;
