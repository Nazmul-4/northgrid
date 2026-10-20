import { NavCategory, Partner, ColocationPlan, StarlinkKit, HeroMetric } from "@/types";

// ============================================
// MEGA-MENU NAVIGATION DATA
// ============================================

export const navCategories: NavCategory[] = [
  {
    title: "Colocation",
    links: [
      {
        label: "Rack Space",
        href: "/colocation/racks",
        description: "Quarter, Half, and Full Cabinet options",
      },
      {
        label: "Private Cages",
        href: "/colocation/cages",
        description: "Dedicated secured enclosures for enterprise clients",
      },
      {
        label: "Power & Cooling",
        href: "/colocation/power",
        description: "N+1 redundant power with precision cooling",
      },
    ],
  },
  {
    title: "Connectivity",
    links: [
      {
        label: "BDIX Peering",
        href: "/network/bdix",
        description: "Direct access to Bangladesh Internet Exchange",
      },
      {
        label: "Starlink Hardware",
        href: "/network/starlink",
        description: "Satellite internet kits for remote connectivity",
      },
      {
        label: "Dedicated Fiber",
        href: "/network/fiber",
        description: "Point-to-point fiber links across Dhaka",
      },
    ],
  },
  {
    title: "Compliance",
    links: [
      {
        label: "Security Standards",
        href: "/compliance/security",
        description: "24/7 biometric access and CCTV monitoring",
      },
      {
        label: "Uptime SLA",
        href: "/compliance/sla",
        description: "99.982% guaranteed uptime commitment",
      },
    ],
  },
];

// ============================================
// PARTNER / TECHNOLOGY LOGOS DATA
// (Generic names - no real trademarked logos used)
// ============================================

export const partners: Partner[] = [
  { name: "Enterprise Hardware Partner", category: "Servers" },
  { name: "Network Security Partner", category: "Firewalls" },
  { name: "Structured Cabling Partner", category: "Networking" },
  { name: "Power Systems Partner", category: "UPS & Backup" },
  { name: "Cooling Solutions Partner", category: "HVAC" },
  { name: "Fiber Optics Partner", category: "Connectivity" },
];

// ============================================
// COLOCATION PRICING PLANS
// ============================================

export const colocationPlans: ColocationPlan[] = [
  {
    id: "quarter-rack",
    name: "1/4 Rack",
    description: "Perfect for startups and small deployments",
    priceMonthly: 15000,
    priceAnnual: 150000,
    powerFeed: ["16A Single Feed"],
    specs: ["10U Rack Space", "100 Mbps Bandwidth", "Shared Cooling"],
  },
  {
    id: "half-rack",
    name: "Half Rack",
    description: "Ideal for growing businesses with moderate workloads",
    priceMonthly: 28000,
    priceAnnual: 280000,
    powerFeed: ["16A Single Feed", "32A Dual Feed"],
    specs: ["20U Rack Space", "500 Mbps Bandwidth", "Dedicated Cooling Zone"],
    featured: true,
  },
  {
    id: "full-cabinet",
    name: "Full Cabinet",
    description: "Enterprise-grade dedicated cabinet space",
    priceMonthly: 48000,
    priceAnnual: 480000,
    powerFeed: ["32A Dual Feed"],
    specs: ["42U Rack Space", "1 Gbps Bandwidth", "Priority Support"],
  },
  {
    id: "private-cage",
    name: "Private Cage",
    description: "Fully isolated, custom-built enclosure",
    priceMonthly: 120000,
    priceAnnual: 1200000,
    powerFeed: ["32A Dual Feed", "Custom Power Design"],
    specs: ["Custom Sq. Ft Space", "10 Gbps Bandwidth", "Dedicated Access Control"],
  },
];

// ============================================
// STARLINK HARDWARE KITS
// ============================================

export const starlinkKits: StarlinkKit[] = [
  {
    id: "mini-kit",
    name: "Mini Kit",
    priceBDT: 45000,
    throughput: "Up to 100 Mbps",
    latency: "25-50ms",
    mountType: "Portable Tripod",
    description: "Compact and portable, ideal for temporary setups",
  },
  {
    id: "standard-kit",
    name: "Standard Kit",
    priceBDT: 65000,
    throughput: "Up to 220 Mbps",
    latency: "20-40ms",
    mountType: "Roof/Pole Mount",
    description: "Reliable performance for small offices and homes",
  },
  {
    id: "high-performance-kit",
    name: "High Performance",
    priceBDT: 150000,
    throughput: "Up to 500 Mbps",
    latency: "15-30ms",
    mountType: "Flat High-Performance Mount",
    description: "Maximum throughput for business-critical operations",
  },
];

// ============================================
// HERO METRICS DATA
// ============================================

export const heroMetrics: HeroMetric[] = [
  { value: 500, suffix: "+", label: "Racks Deployed" },
  { value: 5, suffix: " MW", label: "Power Capacity" },
  { value: 5, prefix: "<", suffix: "ms", label: "Network Latency" },
];