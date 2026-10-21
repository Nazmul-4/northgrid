import { NavCategory, Partner, ColocationPlan, StarlinkKit, HeroMetric, ComplianceBadge, FAQItem, ServiceDetailPage, TeamMember, NavLink } from "@/types";

// ============================================
// MEGA-MENU NAVIGATION DATA
// ============================================
// ============================================
// HOME NAV LINK (standalone, no dropdown)
// ============================================

export const homeNavLink: NavLink = {
  label: "Home",
  href: "/",
  description: "Return to the NorthGrid homepage",
};
export const navCategories: NavCategory[] = [
  
  {
  title: "Company",
  links: [
    {
      label: "Our Story",
      href: "/about/story",
      description: "Learn about NorthGrid's mission and values",
    },
    {
      label: "Leadership Team",
      href: "/about/leadership",
      description: "Meet the people driving our infrastructure forward",
    },
  ],
},
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

// ============================================
// COMPLIANCE BADGES
// ============================================

export const complianceBadges: ComplianceBadge[] = [
  {
    title: "Tier III Design",
    description: "N+1 redundant power and cooling infrastructure",
  },
  {
    title: "ISO 27001 Aligned",
    description: "Information security management best practices",
  },
  {
    title: "24/7 NOC Monitoring",
    description: "Round-the-clock network operations center coverage",
  },
  {
    title: "Biometric Access Control",
    description: "Multi-factor physical security at every entry point",
  },
];

// ============================================
// FREQUENTLY ASKED QUESTIONS
// ============================================

export const faqItems: FAQItem[] = [
  {
    question: "What is the minimum contract period for colocation?",
    answer:
      "Our standard colocation contracts start at a 12-month term, with discounted pricing available for 24 and 36-month commitments.",
  },
  {
    question: "Do you provide remote hands support?",
    answer:
      "Yes, our on-site technical team is available 24/7 to assist with hardware reboots, cable management, and basic troubleshooting at no extra charge for registered clients.",
  },
  {
    question: "Can I upgrade from a shared rack to a private cage later?",
    answer:
      "Absolutely. Our infrastructure is designed for seamless scaling — most clients start with partial rack space and expand into private cages as their business grows.",
  },
  {
    question: "What internet connectivity options are available?",
    answer:
      "We offer direct BDIX peering, multiple Tier-1 international bandwidth providers, and Starlink hardware for redundant failover connectivity.",
  },
];

// ============================================
// RACK SPACE SERVICE DETAIL
// ============================================

export const rackSpaceService: ServiceDetailPage = {
  slug: "racks",
  title: "Rack Space Colocation",
  tagline: "Flexible rack space built for growing infrastructure needs",
  description:
    "From a single quarter rack to a full 42U cabinet, our rack space colocation gives you secure, redundant, and scalable deployment options without the overhead of building your own facility.",
  features: [
    {
      icon: "Zap",
      title: "Redundant Power",
      description: "Dual power feeds with automatic failover on every rack",
    },
    {
      icon: "Eye",
      title: "24/7 Monitoring",
      description: "Real-time environmental and security monitoring",
    },
    {
      icon: "TrendingUp",
      title: "Scalable Capacity",
      description: "Upgrade from quarter rack to full cabinet anytime",
    },
    {
      icon: "Link2",
      title: "Cross-Connect Ready",
      description: "Direct cross-connects to carriers and peering partners",
    },
  ],
  specs: [
    { label: "Rack Sizes", value: "10U, 20U, 42U" },
    { label: "Power Options", value: "16A Single / 32A Dual Feed" },
    { label: "Network Uplinks", value: "100 Mbps - 10 Gbps" },
    { label: "Facility Access", value: "24/7/365 with biometric entry" },
  ],
};

// ============================================
// PRIVATE CAGE SERVICE DETAIL
// ============================================

export const privateCageService: ServiceDetailPage = {
  slug: "cages",
  title: "Private Cage Colocation",
  tagline: "Dedicated, secured enclosures for enterprise-grade isolation",
  description:
    "For businesses with strict compliance or security requirements, our private cages provide a fully isolated footprint with custom access control, separate from shared rack environments.",
  features: [
    {
      icon: "Lock",
      title: "Dedicated Access Control",
      description: "Independent keycard and biometric access limited to your team",
    },
    {
      icon: "Building2",
      title: "Custom Build-Out",
      description: "Cage dimensions and layout tailored to your hardware",
    },
    {
      icon: "Ruler",
      title: "Scalable Footprint",
      description: "Expand your cage size as your infrastructure grows",
    },
    {
      icon: "Clock",
      title: "Priority Support",
      description: "Dedicated account manager and faster response SLAs",
    },
  ],
  specs: [
    { label: "Cage Sizes", value: "Custom sq. ft. layouts" },
    { label: "Access Control", value: "Independent biometric + keycard" },
    { label: "Power Capacity", value: "Up to custom high-density design" },
    { label: "Deployment Lead Time", value: "2-4 weeks from contract signing" },
  ],
};

// ============================================
// POWER & COOLING SERVICE DETAIL
// ============================================

export const powerCoolingService: ServiceDetailPage = {
  slug: "power",
  title: "Power & Cooling Infrastructure",
  tagline: "N+1 redundant power with precision cooling",
  description:
    "Our facility is engineered around uninterrupted uptime — dual utility feeds, battery backup, diesel generator failover, and precision cooling designed to keep hardware running at optimal temperature year-round.",
  features: [
    {
      icon: "PlugZap",
      title: "Dual Utility Feeds",
      description: "Independent grid connections with automatic transfer switching",
    },
    {
      icon: "BatteryCharging",
      title: "UPS Battery Backup",
      description: "Instant failover protection during power fluctuations",
    },
    {
      icon: "Fuel",
      title: "Diesel Generator Backup",
      description: "Extended runtime generators for prolonged outages",
    },
    {
      icon: "Snowflake",
      title: "Precision Cooling",
      description: "N+1 redundant CRAC units maintaining optimal rack temperature",
    },
  ],
  specs: [
    { label: "Power Redundancy", value: "N+1 Configuration" },
    { label: "Cooling System", value: "Precision CRAC, N+1 Redundant" },
    { label: "PUE Rating", value: "Below 1.5" },
    { label: "Generator Runtime", value: "72+ hours at full load" },
  ],
};

// ============================================
// BDIX PEERING SERVICE DETAIL
// ============================================

export const bdixPeeringService: ServiceDetailPage = {
  slug: "bdix",
  title: "BDIX Peering",
  tagline: "Direct access to the Bangladesh Internet Exchange",
  description:
    "Our facility maintains direct peering with BDIX, dramatically reducing latency for local traffic and improving performance for domestic users accessing your hosted services.",
  features: [
    {
      icon: "Zap",
      title: "Low Latency Routing",
      description: "Local traffic routed directly, bypassing international hops",
    },
    {
      icon: "Network",
      title: "Optimized Local Traffic",
      description: "Improved speed for domestic users and ISPs",
    },
    {
      icon: "Link2",
      title: "Redundant Peering Links",
      description: "Multiple upstream connections preventing single points of failure",
    },
    {
      icon: "Activity",
      title: "24/7 Network Monitoring",
      description: "Real-time traffic analysis and automatic rerouting",
    },
  ],
  specs: [
    { label: "Peering Type", value: "Direct BDIX Member" },
    { label: "Average Local Latency", value: "Under 5ms" },
    { label: "Connected ISPs", value: "40+ domestic networks" },
    { label: "Uptime SLA", value: "99.982%" },
  ],
};

// ============================================
// STARLINK HARDWARE SERVICE DETAIL
// ============================================

export const starlinkHardwareService: ServiceDetailPage = {
  slug: "starlink",
  title: "Starlink Hardware & Connectivity",
  tagline: "Satellite-powered redundancy for mission-critical uptime",
  description:
    "For businesses that cannot tolerate downtime, our Starlink hardware kits provide an independent satellite connectivity layer — ideal as a primary link for remote sites or automatic failover for critical operations.",
  features: [
    {
      icon: "Satellite",
      title: "Low Earth Orbit Coverage",
      description: "Faster response times than traditional geostationary satellites",
    },
    {
      icon: "Globe",
      title: "Nationwide Availability",
      description: "Reliable connectivity even in remote or underserved areas",
    },
    {
      icon: "Zap",
      title: "Automatic Failover",
      description: "Seamlessly switches over during primary connection outages",
    },
    {
      icon: "Wifi",
      title: "Quick Deployment",
      description: "Operational within hours of hardware installation",
    },
  ],
  specs: [
    { label: "Kit Options", value: "Mini, Standard, High Performance" },
    { label: "Max Throughput", value: "Up to 500 Mbps" },
    { label: "Typical Latency", value: "15-50ms" },
    { label: "Mount Types", value: "Tripod, Roof/Pole, Flat High-Performance" },
  ],
};

// ============================================
// DEDICATED FIBER SERVICE DETAIL
// ============================================

export const dedicatedFiberService: ServiceDetailPage = {
  slug: "fiber",
  title: "Dedicated Fiber Connectivity",
  tagline: "Point-to-point fiber links across Dhaka",
  description:
    "Our dedicated fiber connections provide guaranteed, symmetric bandwidth between your business locations and our data center — with no contention or sharing with other customers.",
  features: [
    {
      icon: "Cable",
      title: "Point-to-Point Links",
      description: "Direct fiber connection with no shared infrastructure",
    },
    {
      icon: "Gauge",
      title: "Guaranteed Bandwidth",
      description: "Symmetric upload and download speeds, no throttling",
    },
    {
      icon: "MapPin",
      title: "Diverse Physical Routing",
      description: "Separate physical paths available for redundancy",
    },
    {
      icon: "ShieldCheck",
      title: "Carrier-Grade SLA",
      description: "Guaranteed uptime with financially backed commitments",
    },
  ],
  specs: [
    { label: "Link Types", value: "Point-to-Point, Point-to-Multipoint" },
    { label: "Bandwidth Range", value: "10 Mbps - 10 Gbps" },
    { label: "Average Latency", value: "Under 3ms (metro area)" },
    { label: "Coverage Area", value: "Greater Dhaka Metropolitan Area" },
  ],
};

// ============================================
// SECURITY STANDARDS SERVICE DETAIL
// ============================================

export const securityStandardsService: ServiceDetailPage = {
  slug: "security",
  title: "Security Standards",
  tagline: "Multi-layered physical and digital security protocols",
  description:
    "Our facility combines physical access control, continuous surveillance, and trained security personnel to protect your infrastructure around the clock. Every layer is designed to prevent unauthorized access before it happens.",
  features: [
    {
      icon: "Fingerprint",
      title: "Biometric Access Control",
      description: "Multi-factor authentication at every facility entry point",
    },
    {
      icon: "Camera",
      title: "24/7 CCTV Surveillance",
      description: "Continuous recorded monitoring of all facility zones",
    },
    {
      icon: "DoorClosed",
      title: "Mantrap Entry Systems",
      description: "Single-person verified access preventing tailgating",
    },
    {
      icon: "UserCheck",
      title: "On-Site Security Personnel",
      description: "Trained staff physically present around the clock",
    },
  ],
  specs: [
    { label: "Access Control", value: "Biometric + Keycard, Multi-Factor" },
    { label: "Surveillance Coverage", value: "100% of facility, 90-day retention" },
    { label: "Security Staffing", value: "24/7/365 on-site personnel" },
    { label: "Visitor Policy", value: "Pre-authorized, escorted access only" },
  ],
};

// ============================================
// UPTIME SLA SERVICE DETAIL
// ============================================

export const uptimeSlaService: ServiceDetailPage = {
  slug: "sla",
  title: "Uptime SLA",
  tagline: "99.982% guaranteed uptime commitment",
  description:
    "We back our infrastructure with a financially-backed service level agreement. Redundant systems, proactive monitoring, and rapid incident response work together to keep your operations running without interruption.",
  features: [
    {
      icon: "Activity",
      title: "Proactive Monitoring",
      description: "Real-time alerts catch issues before they cause downtime",
    },
    {
      icon: "Building2",
      title: "Redundant Infrastructure",
      description: "N+1 power, cooling, and network paths across the facility",
    },
    {
      icon: "Siren",
      title: "Rapid Incident Response",
      description: "On-site engineering team responds within minutes",
    },
    {
      icon: "FileCheck",
      title: "Financially-Backed SLA",
      description: "Service credits issued automatically for any missed targets",
    },
  ],
  specs: [
    { label: "Guaranteed Uptime", value: "99.982% Annually" },
    { label: "Power Redundancy", value: "N+1 Configuration" },
    { label: "Network Redundancy", value: "Multi-carrier, diverse routing" },
    { label: "Incident Response Time", value: "Under 15 minutes" },
  ],
};



// ============================================
// COMPANY STORY (reuses ServiceDetailPage shape)
// ============================================

export const companyStoryService: ServiceDetailPage = {
  slug: "story",
  title: "About NorthGrid",
  tagline: "Building Bangladesh's digital backbone, one rack at a time",
  description:
    "NorthGrid Data Centers was founded to solve a simple problem: Bangladeshi businesses needed enterprise-grade infrastructure without having to rely on facilities overseas. Today, we provide colocation, connectivity, and compliance-ready hosting trusted by growing businesses across the region.",
  features: [
    {
      icon: "ShieldCheck",
      title: "Reliability First",
      description: "Every design decision starts with uptime and redundancy",
    },
    {
      icon: "Lock",
      title: "Security by Default",
      description: "Physical and digital security built into every layer",
    },
    {
      icon: "TrendingUp",
      title: "Built to Scale",
      description: "Infrastructure that grows alongside our clients' needs",
    },
    {
      icon: "UserCheck",
      title: "Customer-Centric",
      description: "Dedicated support teams who understand your business",
    },
  ],
  specs: [
    { label: "Founded", value: "2019" },
    { label: "Headquarters", value: "Dhaka, Bangladesh" },
    { label: "Team Size", value: "60+ Engineers & Support Staff" },
    { label: "Clients Served", value: "200+ Businesses" },
  ],
};

// ============================================
// LEADERSHIP TEAM MEMBERS
// ============================================

export const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "Arif Rahman",
    role: "Chief Executive Officer",
    bio: "15+ years in telecommunications infrastructure, previously led network operations at a regional ISP.",
  },
  {
    id: "cto",
    name: "Nusrat Jahan",
    role: "Chief Technology Officer",
    bio: "Specializes in data center architecture and network redundancy design across South Asia.",
  },
  {
    id: "security-head",
    name: "Tanvir Ahmed",
    role: "Head of Security & Compliance",
    bio: "Former information security consultant focused on ISO 27001 aligned infrastructure practices.",
  },
  {
    id: "ops-head",
    name: "Farah Hossain",
    role: "Head of Operations",
    bio: "Oversees 24/7 facility operations, client onboarding, and service level management.",
  },
];