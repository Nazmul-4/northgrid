// ============================================
// NAVIGATION TYPES
// Used for our Mega-Menu (Phase 6)
// ============================================

export interface NavLink {
  label: string;        // What the user sees, e.g. "Colocation"
  href: string;          // Where it links to, e.g. "/colocation"
  description: string;   // Short subtitle shown in the dropdown
}

export interface NavCategory {
  title: string;         // Column heading in the mega-menu, e.g. "Services"
  links: NavLink[];      // A list of NavLink items under this category
}

// ============================================
// PARTNER TYPES
// Used for our Logo Marquee (Phase 8)
// ============================================

export interface Partner {
  name: string;          // e.g. "Enterprise Hardware Partner"
  category: string;      // e.g. "Networking" or "Power Systems"
}

// ============================================
// COLOCATION PLAN TYPES
// Used for our Pricing Grid (Phase 9)
// ============================================

export interface ColocationPlan {
  id: string;                // unique ID, e.g. "quarter-rack"
  name: string;               // e.g. "1/4 Rack"
  description: string;        // short marketing line
  priceMonthly: number;       // price in BDT if billed monthly
  priceAnnual: number;        // price in BDT if billed annually (usually discounted)
  powerFeed: string[];        // e.g. ["16A Single Feed", "32A Dual Feed"]
  specs: string[];            // bullet point features
  featured?: boolean;         // optional: highlights this card as "Most Popular"
}

// ============================================
// STARLINK HARDWARE KIT TYPES
// Used for our Interactive Selector (Phase 10)
// ============================================

export interface StarlinkKit {
  id: string;                // unique ID, e.g. "mini-kit"
  name: string;               // e.g. "Mini Kit"
  priceBDT: number;           // price in Bangladeshi Taka
  throughput: string;         // e.g. "Up to 100 Mbps"
  latency: string;            // e.g. "25-50ms"
  mountType: string;          // e.g. "Portable Tripod"
  description: string;        // short description
}

// ============================================
// HERO METRICS TYPE
// Used for our animated counter strip (Phase 7)
// ============================================

export interface HeroMetric {
  value: number;        // the number to count up to, e.g. 500
  prefix?: string;       // optional symbol before the number, e.g. "<"
  suffix?: string;        // optional symbol after the number, e.g. "+" or " MW"
  label: string;          // description below the number, e.g. "Racks Deployed"
}

// ============================================
// COMPLIANCE BADGE TYPE
// Used for our trust-building badges (Phase 11)
// ============================================

export interface ComplianceBadge {
  title: string;         // e.g. "Tier III Design"
  description: string;   // short explanation
}

// ============================================
// FAQ TYPE
// Used for our FAQ Accordion (Phase 11)
// ============================================

export interface FAQItem {
  question: string;
  answer: string;
}

// ============================================
// SERVICE DETAIL PAGE TYPES
// Used for Rack Space, Private Cage, Power & Cooling pages (Phase 11.5)
// ============================================

export interface ServiceFeature {
  icon: string;          // key that matches our iconMap, e.g. "Zap"
  title: string;
  description: string;
}

export interface ServiceSpec {
  label: string;          // e.g. "Rack Sizes"
  value: string;           // e.g. "10U, 20U, 42U"
}

export interface ServiceDetailPage {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: ServiceFeature[];
  specs: ServiceSpec[];
}