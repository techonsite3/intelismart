type ServiceSection = {
  title: string;
  items: string[];
};

type ServiceFAQ = {
  question: string;
  answer: string;
};

type ServiceFAQGroup = {
  title: string;
  items: ServiceFAQ[];
};

type ServiceImage = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  icon:
    | "managed"
    | "network"
    | "security"
    | "fiber"
    | "av"
    | "menu"
    | "datacenter"
    | "training"
    | "evaluation"
    | "voice";
  kicker: string;
  title: string;
  text: string;
  detail: string;
  bullets: string[];
  image: string;
  alt: string;
  heroImagePosition?: string;
  images?: ServiceImage[];
  sections: ServiceSection[];
  workflow?: ServiceSection;
  why: string[];
  cta: {
    title: string;
    primary: string;
    secondary: string;
  };
  addOns?: string[];
  faqs?: ServiceFAQ[];
  faqGroups?: ServiceFAQGroup[];
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-intelismart" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export const heroPoster = {
  src: "/video/intelismart-hero-poster.jpg",
  alt: "Technician walking through a server room aisle"
};

const serviceImagePath = "/images/services/";

export const services: Service[] = [
  {
    slug: "digital-menu-board-solutions",
    icon: "menu",
    kicker: "Display",
    title: "Digital Menu Board Solutions",
    text: "Dynamic menu displays that are easy to update, visually consistent, and built for single or multi-site operations.",
    detail:
      "Turn static menus into dynamic, revenue-driving displays with centralized control, polished layouts, and reliable playback.",
    bullets: [
      "Centralized menu and promotion updates",
      "Scheduled dayparts and limited-time offers",
      "Brand-aligned templates and motion graphics",
      "Offline playback resilience"
    ],
    image: `${serviceImagePath}Digital-Menu-Board-Solutions.png`,
    alt: "Digital menu screens above a restaurant counter",
    sections: [
      {
        title: "What You Get",
        items: [
          "Centralized Control - Update pricing, items, and promotions from one dashboard",
          "Real-Time Changes - Schedule dayparts, promos, and limited-time offers",
          "High-Impact Visuals - Clean layouts, motion graphics, and brand-aligned templates",
          "Multi-Location Sync - Push updates across all sites instantly",
          "Offline Resilience - Displays continue running even if internet drops",
          "Secure Access - Role-based permissions and audit trails"
        ]
      },
      {
        title: "Use Cases",
        items: [
          "Restaurants & Cafes - Menus, combos, upsells, and dayparting",
          "Churches & Events - Cafe menus, announcements, and schedules",
          "Retail Counters - Pricing boards, featured products, and promos",
          "Corporate Spaces - Cafeterias and internal communications"
        ]
      },
      {
        title: "Our Scope",
        items: [
          "Design - Menu layouts, content hierarchy, and brand styling",
          "Hardware - Commercial displays, mounts, and media players",
          "Installation - Cabling, power, network, and clean wall mounting",
          "Software - CMS setup, templates, and user access",
          "Integration - POS/menu data sync where applicable",
          "Support - Monitoring, updates, and content changes"
        ]
      }
    ],
    workflow: {
      title: "Typical Setup",
      items: [
        "Discovery - Menu structure, locations, and network readiness",
        "Design & Approval - Templates and sample screens",
        "Deployment - Install displays and configure CMS",
        "Go-Live - Load content and schedule playlists",
        "Training & Support - Staff onboarding and ongoing support"
      ]
    },
    why: [
      "Built on your existing network infrastructure",
      "Clean installs with professional cable management",
      "Scalable from single screen to multi-site rollouts",
      "Fast turnaround and reliable uptime"
    ],
    cta: {
      title: "Upgrade your menu experience.",
      primary: "Request Service",
      secondary: "Schedule Consultation"
    },
    addOns: [
      "Motion graphics packages with monthly content refresh",
      "Remote health monitoring and alerts",
      "Redundant players for mission-critical locations",
      "Analytics for impressions and dwell time via compatible hardware"
    ],
    faqs: [
      {
        question: "Can we update menus ourselves?",
        answer: "Yes. You can update content through a web dashboard with role-based access."
      },
      {
        question: "What happens if internet goes down?",
        answer: "Content keeps playing locally."
      },
      {
        question: "Can this integrate with our POS?",
        answer: "POS integration is available for select systems."
      },
      {
        question: "How long does install take?",
        answer: "Typically 1-3 days per location depending on scope."
      }
    ]
  },
  {
    slug: "av-media-systems",
    icon: "av",
    kicker: "Present",
    title: "Audio Visual & Media Systems",
    text: "Audio, video, control, streaming, and media systems for worship spaces, conference rooms, and live events.",
    detail:
      "Intelismart builds reliable AV systems that deliver clear audio, sharp visuals, and simple control.",
    bullets: [
      "Consistent audio coverage",
      "Projectors, LED walls, and displays",
      "One-touch room control",
      "Streaming and recording workflows"
    ],
    image: `${serviceImagePath}Audio-Visual-Media-Systems.png`,
    alt: "Conference room with wall displays and a meeting table",
    images: [
      {
        src: `${serviceImagePath}church-1.png`,
        alt: "Church auditorium with a large stage display and lighting"
      },
      {
        src: `${serviceImagePath}church-2.png`,
        alt: "Audio operator mixing sound in a church sanctuary"
      }
    ],
    sections: [
      {
        title: "What You Get",
        items: [
          "Consistent Audio Coverage - Even, intelligible sound across the room",
          "High-Quality Video - Projectors, LED walls, and displays tuned for your space",
          "Simple Control - One-touch operation through panels, tablets, or presets",
          "Clean Integration - AV tied into your network, streaming, and recording workflows",
          "Scalable Architecture - Add rooms, screens, or channels without redesign"
        ]
      },
      {
        title: "Core Capabilities",
        items: [
          "Audio Systems - Speakers, amps, DSP tuning, and wireless mics",
          "Video Systems - Projectors, LED walls, confidence monitors, and switching",
          "Control Systems - Centralized control with a clean user experience",
          "Streaming & Recording - Live streaming, multi-camera switching, and encoding",
          "Acoustic Treatment - Reduce echo and reverb for speech clarity",
          "Structured Cabling - Shielded runs, proper terminations, and labeled infrastructure"
        ]
      },
      {
        title: "Use Cases",
        items: [
          "Churches & Sanctuaries - FOH audio, stage monitoring, and live stream",
          "Conference Rooms - Video conferencing and presentation systems",
          "Event Spaces - Portable or fixed production setups",
          "Retail & Lobbies - Background audio, video walls, and signage integration"
        ]
      },
      {
        title: "Our Scope",
        items: [
          "Assessment - Room analysis, coverage mapping, and signal flow design",
          "System Design - Equipment selection, rack layouts, and wiring schematics",
          "Installation - Mounting, cabling, rack build, and commissioning",
          "Tuning & Calibration - DSP, EQ, gain structure, and video color/brightness",
          "Training - Operators and volunteers",
          "Support - Remote monitoring, maintenance, and upgrades"
        ]
      }
    ],
    workflow: {
      title: "Typical Workflow",
      items: [
        "Discovery - Goals, room specs, and existing gear",
        "Design & Proposal - Drawings and bill of materials",
        "Install - Hardware, cabling, and rack integration",
        "Commissioning - Audio tuning and video calibration",
        "Go-Live - Presets, scenes, and user training"
      ]
    },
    why: [
      "Engineering-first approach with coverage and signal flow before gear",
      "Reliable gain staging and redundancy where needed",
      "Systems non-technical staff can run confidently",
      "AV, network, and streaming working as one system"
    ],
    cta: {
      title: "Upgrade your AV experience.",
      primary: "Request Service",
      secondary: "Schedule Consultation"
    },
    addOns: [
      "Multi-camera production kits with PTZ and controller",
      "Dante/AV-over-IP distribution",
      "Redundant streaming encoders",
      "Preventive maintenance plans and remote health alerts"
    ],
    faqs: [
      {
        question: "Can you work with existing equipment?",
        answer: "Yes. We reuse and integrate existing equipment where viable."
      },
      {
        question: "Will it be easy to operate?",
        answer: "Yes. We design preset-based control for non-technical users."
      },
      {
        question: "Do you support live streaming?",
        answer: "Yes. We provide end-to-end setup and optimization."
      },
      {
        question: "How long is installation?",
        answer: "Typically 2-10 days depending on scope."
      }
    ]
  },
  {
    slug: "network-infrastructure",
    icon: "network",
    kicker: "Connect",
    title: "Network Infrastructure",
    text: "Fast, secure, scalable wired and wireless networks designed for performance, uptime, and growth.",
    detail:
      "Intelismart designs and deploys network infrastructure that keeps your business connected, protected, and ready to grow.",
    bullets: [
      "Structured cabling and fiber backbone",
      "Managed switching, routing, and VLANs",
      "Enterprise Wi-Fi coverage planning",
      "Firewall security and monitoring"
    ],
    image: `${serviceImagePath}Datacenter-Support-Services-2.png`,
    alt: "Close view of network cabling and rack infrastructure",
    sections: [
      {
        title: "What You Get",
        items: [
          "Reliable Connectivity - Stable wired and wireless performance across your space",
          "Structured Cabling - Clean, labeled Cat6/Cat6A and fiber installations",
          "Enterprise Wi-Fi - Seamless coverage with proper access point placement",
          "Network Segmentation - Separate traffic for staff, guests, and critical systems",
          "Security Built-In - Firewalls, VLANs, and access controls",
          "Scalable Design - Add devices, locations, and bandwidth without rework"
        ]
      },
      {
        title: "Core Capabilities",
        items: [
          "Structured Cabling - Cat6/Cat6A, fiber backbone, patch panels, and certification",
          "Switching & Routing - Managed switches, VLANs, QoS, and redundancy",
          "Wireless Networks - Site surveys, AP placement, and controller-based Wi-Fi",
          "Firewall & Security - Perimeter defense, VPN, and intrusion prevention",
          "Network Monitoring - Alerts, uptime tracking, and performance insights",
          "ISP Coordination - Circuit ordering, demarc setup, and failover design"
        ]
      },
      {
        title: "Use Cases",
        items: [
          "Offices & Commercial Spaces - Workstations, VoIP, and conferencing",
          "Churches & Campuses - Streaming, AV integration, and guest networks",
          "Retail & Hospitality - POS reliability, guest Wi-Fi, and security segmentation",
          "Multi-Site Businesses - Centralized management and site-to-site VPN"
        ]
      },
      {
        title: "Our Scope",
        items: [
          "Assessment - Current state, bandwidth needs, and coverage gaps",
          "Design - Topology, IP scheme, VLAN strategy, and equipment selection",
          "Installation - Cabling, racks, switches, firewalls, and APs",
          "Configuration - Routing, Wi-Fi tuning, and security policies",
          "Testing - Throughput, coverage validation, and failover checks",
          "Support - Monitoring, updates, and troubleshooting"
        ]
      }
    ],
    workflow: {
      title: "Typical Workflow",
      items: [
        "Discovery - Devices, usage patterns, and growth plans",
        "Design & Proposal - Network diagram and bill of materials",
        "Build - Cabling, rack integration, and hardware install",
        "Configure - VLANs, SSIDs, and firewall rules",
        "Validate - Speed tests and coverage mapping",
        "Go-Live - Documentation and handoff"
      ]
    },
    why: [
      "Coverage and capacity planned upfront",
      "Labeled cables, organized racks, and future-ready layouts",
      "Segmentation and policy control from day one",
      "Optimized for AV, CCTV, VoIP, and cloud apps"
    ],
    cta: {
      title: "Build a network that won't slow you down.",
      primary: "Request Service",
      secondary: "Schedule Consultation"
    },
    addOns: [
      "Redundant internet with failover or load balancing",
      "Cloud-managed networking",
      "Guest Wi-Fi portals and analytics",
      "Ongoing managed network services"
    ],
    faqs: [
      {
        question: "Do you replace existing cabling?",
        answer: "Only if needed. Otherwise we certify and reuse what is viable."
      },
      {
        question: "Will Wi-Fi cover the entire space?",
        answer: "Yes. Coverage is based on site survey data and proper AP density."
      },
      {
        question: "Can you secure guest access?",
        answer: "Yes. We isolate guest access with VLANs and controlled policies."
      },
      {
        question: "How long does deployment take?",
        answer: "Typically 1-5 days depending on scope."
      }
    ]
  },
  {
    slug: "fiber-optics-dedicated-internet",
    icon: "fiber",
    kicker: "Scale",
    title: "Fiber Optics & Dedicated Internet",
    text: "Carrier-grade fiber infrastructure and DIA circuits for guaranteed bandwidth, low latency, and uptime.",
    detail:
      "Intelismart designs, installs, and activates fiber infrastructure and Dedicated Internet Access circuits for mission-critical operations.",
    bullets: [
      "Symmetrical DIA bandwidth",
      "Fiber builds, splicing, and testing",
      "Carrier sourcing and turn-up",
      "Failover and redundancy design"
    ],
    image: `${serviceImagePath}Fiber-Optics-Dedicated Internet.png`,
    alt: "Fiber optic cables glowing in a dark technical environment",
    sections: [
      {
        title: "What You Get",
        items: [
          "Symmetrical Speeds - True up/down bandwidth from 100 Mbps to 10 Gbps",
          "Guaranteed Performance - SLAs for uptime, latency, jitter, and packet loss",
          "Private, Non-Shared Circuit - Consistent throughput regardless of neighborhood congestion",
          "Fast Failover - Secondary circuit or LTE/5G backup with automatic switchover",
          "Clean Handoff - Proper demarc, optics, and routing into your network"
        ]
      },
      {
        title: "Core Capabilities",
        items: [
          "Fiber Builds - Single-mode runs, conduit, termination, labeling, and certification",
          "Splicing & Testing - Fusion splicing, OTDR, and light-level validation",
          "Carrier Coordination - Site surveys, LOA/CFA, construction management, and turn-up",
          "DIA Procurement - Sourcing best-fit carriers such as AT&T, Comcast, and Lumen",
          "Edge Configuration - Routers, BGP where applicable, QoS, and traffic shaping",
          "Redundancy Design - Diverse paths, dual carriers, SD-WAN, and failover"
        ]
      },
      {
        title: "When DIA Makes Sense",
        items: [
          "VoIP & UCaaS - Stable call quality with low jitter and latency",
          "Live Streaming & AV - Consistent upload bandwidth",
          "Cloud Workloads - Predictable performance to SaaS and IaaS",
          "Multi-Site Operations - Site-to-site VPNs and centralized apps",
          "High Availability Needs - When downtime has revenue impact"
        ]
      },
      {
        title: "Our Scope",
        items: [
          "Assessment - Bandwidth, uptime targets, and building pathways",
          "Design - Fiber path, demarc location, and redundancy strategy",
          "Carrier Sourcing - Quotes, contract alignment, and SLA review",
          "Installation - Conduit, pulls, splicing, rack, and patch panels",
          "Turn-Up - Circuit activation, IP addressing, and routing",
          "Validation - Throughput, latency, and failover testing",
          "Support - Monitoring and escalation with carriers"
        ]
      }
    ],
    workflow: {
      title: "Typical Workflow",
      items: [
        "Discovery - Requirements, timelines, and budget",
        "Feasibility - Serviceability check and construction scope",
        "Design & Order - Carrier selection and network design",
        "Build - Fiber install/splice and demarc setup",
        "Activation - Circuit turn-up and router config",
        "Go-Live - Testing and documentation"
      ]
    },
    why: [
      "Vendor-neutral carrier sourcing",
      "Proper fiber management, labeling, and documentation",
      "SLA alignment with your real workloads",
      "Designed for multi-gig upgrades without rework"
    ],
    cta: {
      title: "Get reliable, guaranteed internet performance.",
      primary: "Request Service",
      secondary: "Schedule Consultation"
    },
    addOns: [
      "Dual-carrier redundancy with diverse paths",
      "SD-WAN for intelligent traffic routing",
      "Managed edge router and monitoring",
      "24/7 alerting and carrier escalation"
    ],
    faqs: [
      {
        question: "How is DIA different from broadband?",
        answer: "DIA is dedicated, symmetrical, and SLA-backed. Broadband is shared and best-effort."
      },
      {
        question: "What speeds are available?",
        answer: "Typically 100 Mbps to 10 Gbps, with higher speeds available on request."
      },
      {
        question: "How long does install take?",
        answer: "Usually 30-90 days depending on construction."
      },
      {
        question: "Can you provide backup internet?",
        answer: "Yes. We support dual circuits and LTE/5G failover."
      }
    ]
  },
  {
    slug: "security-surveillance",
    icon: "security",
    kicker: "Protect",
    title: "Security & Surveillance",
    text: "Video surveillance, access control, and monitoring systems built on secure, reliable infrastructure.",
    detail:
      "Protect people, property, and operations with integrated security solutions that work when it matters.",
    bullets: [
      "IP cameras, NVR, and VMS setup",
      "Access control and intercom systems",
      "Smart alerts and analytics",
      "Secure remote access and storage"
    ],
    image: `${serviceImagePath}Security-Surveillance-1.png`,
    alt: "Exterior security camera mounted on a building",
    images: [
      {
        src: `${serviceImagePath}Security-Surveillance-2.png`,
        alt: "Security operators reviewing camera feeds"
      }
    ],
    sections: [
      {
        title: "What You Get",
        items: [
          "Clear, Usable Footage - Proper camera selection, placement, and lighting for identification",
          "24/7 Visibility - Live view and remote access from web or mobile",
          "Controlled Access - Manage who enters, when, and where",
          "Smart Alerts - Motion, intrusion, and event-based notifications",
          "Secure Storage - On-site NVR or cloud retention with defined policies",
          "Network-Hardened - Segmented VLANs, secure remote access, and audit logs"
        ]
      },
      {
        title: "Core Capabilities",
        items: [
          "IP Video Surveillance - Dome, bullet, PTZ, and LPR cameras",
          "Recording Systems - NVR/VMS setup, retention planning, and backups",
          "Access Control - Badge readers, keypads, mobile credentials, and door hardware",
          "Intercom & Entry Systems - Video door stations and remote unlock",
          "Analytics - Motion zones, people/vehicle detection, and alerts",
          "Cabling & Power - PoE switching and UPS-backed critical devices"
        ]
      },
      {
        title: "Use Cases",
        items: [
          "Offices & Warehouses - Entrances, docks, and inventory areas",
          "Churches & Campuses - Entrances, children's areas, and parking lots",
          "Retail & Hospitality - POS zones, loss prevention, and after-hours monitoring",
          "Multi-Site - Centralized visibility across locations"
        ]
      },
      {
        title: "Our Scope",
        items: [
          "Assessment - Risk areas, coverage goals, and lighting conditions",
          "Design - Camera count, placement, fields of view, and storage sizing",
          "Installation - Mounting, structured cabling, and rack/NVR build",
          "Configuration - Recording schedules, alerts, and user roles",
          "Testing - Night/day verification, playback quality, and failover",
          "Training & Support - User onboarding, maintenance, and upgrades"
        ]
      }
    ],
    workflow: {
      title: "Typical Workflow",
      items: [
        "Discovery - Threat model, compliance needs, and budget",
        "Design & Proposal - Coverage maps and bill of materials",
        "Install - Cameras, cabling, and NVR/VMS",
        "Commissioning - Focus, exposure, and alert tuning",
        "Go-Live - Access setup and documentation"
      ]
    },
    why: [
      "Coverage-first design to reduce blind spots",
      "Proper lenses, WDR, and low-light performance",
      "Isolated networks, strong auth, and remote access controls",
      "Labeled runs, protected pathways, and serviceable racks"
    ],
    cta: {
      title: "Secure your facility with confidence.",
      primary: "Request Service",
      secondary: "Schedule Consultation"
    },
    addOns: [
      "Off-site/cloud backups for critical footage",
      "Redundant recording with failover NVR",
      "License plate recognition",
      "Integration with alarms and building systems",
      "Ongoing monitoring and health alerts"
    ],
    faqs: [
      {
        question: "How long is footage stored?",
        answer: "Typically 15-90 days based on storage design."
      },
      {
        question: "Can I view cameras remotely?",
        answer: "Yes. We configure secure mobile and web access."
      },
      {
        question: "Will cameras work at night?",
        answer: "Yes. We use IR and low-light options with proper placement."
      },
      {
        question: "Can you integrate access control?",
        answer: "Yes. We can unify door and video management."
      }
    ]
  },
  {
    slug: "managed-it-services",
    icon: "managed",
    kicker: "Operate",
    title: "Managed IT Services",
    text: "Proactive IT monitoring, support, security, backup, and cloud management that keeps teams productive.",
    detail:
      "Intelismart manages, monitors, and secures your systems so problems are prevented, not just fixed.",
    bullets: [
      "24/7 monitoring and alerts",
      "Endpoint and network management",
      "Helpdesk and on-site escalation",
      "Security, backup, and Microsoft 365 support"
    ],
    image: `${serviceImagePath}Managed-IT-Services-1.png`,
    alt: "Network operations dashboard wall",
    images: [
      {
        src: `${serviceImagePath}Managed-IT-Services-2.png`,
        alt: "Helpdesk agents wearing headsets"
      }
    ],
    sections: [
      {
        title: "What You Get",
        items: [
          "24/7 Monitoring & Alerts - Servers, networks, and endpoints watched continuously",
          "Proactive Maintenance - Patching, updates, and performance tuning",
          "Fast Support - Remote helpdesk with on-site escalation when needed",
          "Security-First Approach - Endpoint protection, MFA, backups, and policies",
          "Predictable Costs - Flat monthly pricing with defined scope",
          "Scalable Stack - Grow users, devices, and locations without friction"
        ]
      },
      {
        title: "Core Capabilities",
        items: [
          "Endpoint Management - PCs, Macs, mobile devices, and asset tracking",
          "Server & Network Management - Health checks, firmware, and capacity planning",
          "Helpdesk & Support - Ticketing, SLA-driven response, and user support",
          "Backup & Disaster Recovery - Automated backups and tested restores",
          "Cybersecurity - EDR/XDR, email security, MFA, and vulnerability management",
          "Cloud & Microsoft 365 - Tenant management, licensing, and migrations"
        ]
      },
      {
        title: "Service Tiers",
        items: [
          "Essential - Monitoring, patching, and basic support",
          "Standard - Adds helpdesk, backups, and endpoint security",
          "Advanced - Full stack security suite, compliance, priority SLAs, and vCIO"
        ]
      },
      {
        title: "Use Cases",
        items: [
          "Small-Mid Businesses - Outsource IT with predictable costs",
          "Churches & Nonprofits - Support staff, volunteers, and AV integrations",
          "Schools & Daycares - Reliable user, device, and network support",
          "Multi-Site - Centralized management across locations",
          "Compliance-Driven - Security controls for healthcare, finance, and similar environments"
        ]
      },
      {
        title: "Our Scope",
        items: [
          "Onboarding - Network discovery, documentation, and baseline hardening",
          "Standardization - Device policies, naming, and patch cadence",
          "Operations - Monitoring, tickets, and maintenance",
          "Security - Hardening, backups, and user access control",
          "Reporting - Monthly health, incidents, and recommendations",
          "Roadmap - Quarterly planning and upgrades"
        ]
      }
    ],
    workflow: {
      title: "Typical Workflow",
      items: [
        "Assessment - Current environment, risks, and gaps",
        "Onboarding - Agents, backups, policies, and documentation",
        "Stabilize - Patch, clean up, and baseline security",
        "Operate - Monitor, support, and maintain",
        "Optimize - Improve performance and reduce risk"
      ]
    },
    why: [
      "Issues resolved before users notice",
      "MFA, backups, and least-privilege access by default",
      "Defined response and resolution targets",
      "Works seamlessly with your network, AV, and cloud"
    ],
    cta: {
      title: "Let us handle IT so you can focus on your business.",
      primary: "Request Service",
      secondary: "Schedule Consultation"
    },
    addOns: [
      "24/7 helpdesk coverage",
      "Compliance packages for HIPAA and PCI-oriented controls",
      "Advanced email security and phishing protection",
      "Co-managed IT to augment your internal team"
    ],
    faqs: [
      {
        question: "Do you replace our internal IT?",
        answer: "Optional. We support fully managed and co-managed models."
      },
      {
        question: "What's the response time?",
        answer: "SLA-based, typically same-day or faster for critical issues."
      },
      {
        question: "Are backups included?",
        answer: "Yes, with routine test restores."
      },
      {
        question: "Can you support multiple locations?",
        answer: "Yes. We centralize management across sites."
      }
    ]
  },
  {
    slug: "datacenter-support-services",
    icon: "datacenter",
    kicker: "Maintain",
    title: "Datacenter Support Services",
    text: "Remote hands, rack builds, cabling, hardware swaps, audits, and documented datacenter execution.",
    detail:
      "Intelismart provides on-demand and ongoing datacenter support to keep infrastructure running without delays.",
    bullets: [
      "Remote hands on demand",
      "Rack and stack execution",
      "Copper and fiber patching",
      "Photo-backed documentation"
    ],
    image: `${serviceImagePath}Datacenter-Support-Services-1.png`,
    alt: "Datacenter aisle with server racks",
    images: [
      {
        src: `${serviceImagePath}Datacenter-Support-Services-2.png`,
        alt: "Technician working on rack patch panel cabling"
      },
      {
        src: `${serviceImagePath}Datacenter-Support-Services-3.png`,
        alt: "Close-up of structured network cabling and switch ports"
      }
    ],
    sections: [
      {
        title: "What You Get",
        items: [
          "Remote Hands On-Demand - Dispatch for installs, swaps, and urgent tasks",
          "Clean Rack Builds - Structured, labeled, serviceable cabinets",
          "Accurate Cabling - Copper and fiber patching with documentation",
          "Fast Turnaround - Same-day or scheduled support windows",
          "Change Control Discipline - Work performed to your SOPs and tickets",
          "Detailed Reporting - Before/after photos, port maps, and notes"
        ]
      },
      {
        title: "Core Capabilities",
        items: [
          "Rack & Stack - Servers, storage, network gear, rails, and PDUs",
          "Cabling & Cross-Connects - Cat6/6A, SM/MM fiber, MPO, and LOA/CFA coordination",
          "Hardware Services - Swap drives, NICs, PSUs, and add/remove devices",
          "Power & Cooling Checks - Load balancing, PDU mapping, and airflow best practices",
          "Console & Access - KVM/console access, BIOS, and firmware tasks",
          "Inventory & Audits - Asset tagging, port mapping, and documentation"
        ]
      },
      {
        title: "Use Cases",
        items: [
          "Colocation Sites - Ongoing remote hands without sending your team onsite",
          "Multi-Region Deployments - Standardized installs across locations",
          "Urgent Incidents - Failed hardware replacement and cable tracing",
          "Expansions & Migrations - New racks, re-cabling, and equipment refresh"
        ]
      },
      {
        title: "Our Scope",
        items: [
          "Pre-Work Review - Runbooks, MOPs, and access approvals",
          "Execution - Install, cable, label, and verify",
          "Validation - Link lights, connectivity checks, and burn-in as required",
          "Documentation - Rack elevations, port maps, and photo reports",
          "Handover - Sign-off against ticket or MOP"
        ]
      }
    ],
    workflow: {
      title: "Typical Workflow",
      items: [
        "Request - Ticket with scope, site, and window",
        "Plan - Confirm MOP, parts, and access",
        "Execute - Onsite work per runbook",
        "Verify - Functional checks and sign-off",
        "Report - Photos, notes, and updated docs"
      ]
    },
    why: [
      "Clean labeling and consistent standards",
      "Rapid dispatch and efficient execution",
      "Photo evidence and detailed reports",
      "Vendor-agnostic familiarity with major OEM hardware and DC environments"
    ],
    cta: {
      title: "Extend your team into the datacenter on demand.",
      primary: "Request Service",
      secondary: "Schedule Consultation"
    },
    addOns: [
      "24/7 remote hands SLA",
      "Staging and pre-configuration",
      "Spare parts management",
      "Ongoing maintenance contracts"
    ],
    faqs: [
      {
        question: "Do you support specific datacenters?",
        answer: "Yes. We support colo and enterprise facilities where access is available."
      },
      {
        question: "How fast can you dispatch?",
        answer: "Same-day in many markets, with scheduled windows available."
      },
      {
        question: "Do you follow our runbooks?",
        answer: "Yes. We strictly follow your MOP and SOP."
      },
      {
        question: "Do you provide documentation?",
        answer: "Yes. We provide photos, port maps, and completion notes."
      }
    ]
  },
  {
    slug: "training-enablement",
    icon: "training",
    kicker: "Enable",
    title: "Training & Enablement",
    text: "Role-based, hands-on training that helps teams operate, optimize, and fully use the systems they own.",
    detail:
      "Intelismart training goes beyond support by turning users into confident operators and owners.",
    bullets: [
      "Hands-on training with real systems",
      "Role-based tracks",
      "Scenario drills and recovery exercises",
      "Playbooks, SOPs, and recorded modules"
    ],
    image: "/intelismart-training.png",
    heroImagePosition: "center top",
    alt: "Monitoring dashboard used for systems operations training",
    sections: [
      {
        title: "The Value",
        items: [
          "Unlock Full Feature Use - Move beyond basic operation to advanced functionality",
          "Reduce Dependency - Less reliance on external support for everyday tasks",
          "Increase ROI - Get the performance you paid for from your systems",
          "Faster Decision-Making - Teams can adjust, troubleshoot, and optimize in real time",
          "Operational Confidence - Users act with clarity, not hesitation"
        ]
      },
      {
        title: "What This Training Covers",
        items: [
          "AV - Mixing, routing, scene presets, and live streaming workflows",
          "Network - VLAN basics, Wi-Fi tuning, and device prioritization",
          "Security - Camera optimization, playback, alerts, and incident handling",
          "Digital Systems - Content management, scheduling, and automation",
          "Advanced Use Cases - Peak load, failures, live events, and feature deep-dives",
          "Operational Intelligence - How systems behave under stress and how to prevent issues"
        ]
      },
      {
        title: "How We Deliver",
        items: [
          "Hands-On Training - Real systems and real scenarios",
          "Role-Based Tracks - Operators, admins, and power users",
          "Scenario Drills - Live troubleshooting and recovery exercises",
          "Playbooks & SOPs - Repeatable processes for daily and critical tasks",
          "Recorded Modules - Ongoing onboarding and refreshers"
        ]
      },
      {
        title: "Who This Is For",
        items: [
          "Teams with existing systems not fully utilized",
          "Organizations scaling operations or complexity",
          "Churches, businesses, and facilities with mixed skill levels",
          "Anyone tired of using only a fraction of what they bought"
        ]
      }
    ],
    why: [
      "We train on your environment, not generic labs",
      "We focus on capability, not just support",
      "We bridge technical systems and real-world use",
      "We turn users into operators, and operators into owners"
    ],
    cta: {
      title: "Maximize what you already have.",
      primary: "Schedule Training",
      secondary: "Request Consultation"
    },
    faqs: [
      {
        question: "Is this only for new systems?",
        answer: "No. Training is especially useful for existing systems that are underused or misunderstood."
      },
      {
        question: "Can training be role-based?",
        answer: "Yes. We separate operator, admin, and power-user tracks where needed."
      },
      {
        question: "Can you provide SOPs?",
        answer: "Yes. Playbooks and SOPs are part of the delivery model."
      }
    ]
  },
  {
    slug: "system-evaluation",
    icon: "evaluation",
    kicker: "Evaluate",
    title: "Request a System Evaluation",
    text: "Find redundant, misconfigured, or outdated systems and replace them with a simpler, faster, lower-cost setup.",
    detail:
      "Most environments are overspending and underperforming. Intelismart identifies what should change and what it should cost.",
    bullets: [
      "Network and infrastructure audit",
      "Cost analysis and savings opportunities",
      "Performance findings",
      "Consolidation plan and upgrade roadmap"
    ],
    image: `${serviceImagePath}System-Evaluation-1.png`,
    alt: "Two professionals reviewing infrastructure in a server room",
    images: [
      {
        src: `${serviceImagePath}System-Evaluation-2.png`,
        alt: "Field technician auditing an outdoor network cabinet"
      }
    ],
    sections: [
      {
        title: "Where We Typically Find Savings",
        items: [
          "Multiple Modems / ISPs - Consolidate into a single, properly designed segmented network",
          "Overpriced Internet Contracts - Reduce monthly spend with current market options and better circuit design",
          "Underutilized Equipment - Tune systems already installed before recommending replacement",
          "Inefficient Layouts - Redesign poor cabling, unmanaged switches, and ad-hoc expansions for stability and scale"
        ]
      },
      {
        title: "What You Get",
        items: [
          "Network & Infrastructure Audit - Topology, cabling, devices, and bandwidth usage",
          "Cost Analysis - Current vs optimized monthly spend for internet, hardware, and support",
          "Performance Findings - Bottlenecks, coverage gaps, and failure points",
          "Consolidation Plan - Where to merge services and eliminate redundancy",
          "Upgrade Roadmap - Prioritized actions with clear ROI"
        ]
      },
      {
        title: "Real Outcomes",
        items: [
          "Fewer devices and lower monthly bills",
          "Faster, more stable connectivity across all users",
          "Centralized control instead of fragmented systems",
          "Reduced downtime and support calls"
        ]
      },
      {
        title: "No-Risk Approach",
        items: [
          "If we do not identify meaningful improvements or savings, we will tell you directly."
        ]
      }
    ],
    workflow: {
      title: "How It Works",
      items: [
        "Discovery - Quick call and site review",
        "Assessment - On-site or remote audit",
        "Report - Findings, savings, and recommendations",
        "Decision - Implement now or phase over time"
      ]
    },
    why: [
      "We look for savings before recommending new spend",
      "We consolidate fragmented infrastructure",
      "We prioritize performance, simplicity, and ROI",
      "We can implement the roadmap or help phase it over time"
    ],
    cta: {
      title: "Find out what your system should be costing and how it should perform.",
      primary: "Request a System Evaluation",
      secondary: "Schedule Consultation"
    },
    faqs: [
      {
        question: "What will you evaluate?",
        answer: "Network topology, cabling, devices, internet costs, performance, redundancy, and support model."
      },
      {
        question: "Can this reduce monthly costs?",
        answer: "Often yes. The source brief notes many opportunities in the 20-50% reduction range."
      },
      {
        question: "Do we have to implement everything at once?",
        answer: "No. We can phase the roadmap based on budget, risk, and ROI."
      }
    ]
  },
  {
    slug: "voip-intercom-solutions",
    icon: "voice",
    kicker: "Communicate",
    title: "VoIP & Intercom Solutions",
    text: "Cloud VoIP, on-premise PBX, hybrid voice, paging, and intercom systems for real operational communication.",
    detail:
      "Intelismart delivers voice systems that fit how your organization operates, from cloud VoIP to intercom and paging.",
    bullets: [
      "Hosted, on-premise, and hybrid voice",
      "Intercom and paging systems",
      "QoS and network optimization",
      "Call routing, analytics, and support"
    ],
    image: `${serviceImagePath}VoIP-Intercom-Solutions-1.png`,
    alt: "Desk phone and headset on an office desk",
    images: [
      {
        src: `${serviceImagePath}VoIP-Intercom-Solutions-2.png`,
        alt: "Construction worker using field communication equipment"
      }
    ],
    sections: [
      {
        title: "What You Get",
        items: [
          "Reliable Call Quality - Optimized over your network with QoS and proper routing",
          "Flexible Deployment - Hosted cloud or on-premise options",
          "Scalable Systems - Add users, sites, and devices without disruption",
          "Unified Communication - Voice, mobile apps, and desk phones working together",
          "Cost Control - Lower telecom spend with modern architectures"
        ]
      },
      {
        title: "Hosted VoIP",
        items: [
          "Best for flexibility, remote work, and multi-site organizations",
          "No on-site PBX hardware",
          "Users can take calls from desk phones, laptops, or mobile apps",
          "Features include auto-attendant, call routing, voicemail-to-email, and call recording",
          "Ideal for SMBs, multi-location organizations, and remote or hybrid teams"
        ]
      },
      {
        title: "On-Premise / Hybrid VoIP",
        items: [
          "Best for organizations that want control or have strict network requirements",
          "Local PBX with optional cloud integration",
          "Greater control over call routing and internal traffic",
          "Internal calling can stay up when internet is unstable",
          "Ideal for large organizations, internal-heavy facilities, and compliance-focused environments"
        ]
      },
      {
        title: "Intercom & Paging Systems",
        items: [
          "Overhead paging systems with zones, all-call, and emergency broadcast",
          "Door intercoms with audio/video entry and remote unlock",
          "Warehouse and factory floor communication",
          "Integration with existing PA or security systems",
          "Ideal for factories, warehouses, construction sites, schools, offices, hotels, and campuses"
        ]
      },
      {
        title: "Our Scope",
        items: [
          "Assessment - Call flow, usage patterns, and facility layout",
          "Design - Hosted, on-prem, intercom, device selection, and architecture",
          "Installation - Phones, cabling, paging systems, and network optimization",
          "Configuration - Call routing, IVR, extensions, and zones",
          "Testing - Call quality, failover, and coverage",
          "Training & Support - User onboarding and ongoing maintenance"
        ]
      }
    ],
    why: [
      "Voice quality starts with proper infrastructure",
      "Vendor-neutral matching to the right platform",
      "Flexible cloud, on-prem, or hybrid architecture",
      "Built for offices, hotels, industrial sites, schools, churches, and public-sector environments"
    ],
    cta: {
      title: "Upgrade how your organization communicates.",
      primary: "Request Service",
      secondary: "Schedule Consultation"
    },
    faqs: [
      {
        question: "Can we keep our existing numbers?",
        answer: "Yes. Number porting is supported."
      },
      {
        question: "Will call quality depend on internet?",
        answer: "For hosted VoIP, yes. We optimize your network to ensure stability."
      },
      {
        question: "Do you support paging without VoIP?",
        answer: "Yes. Standalone intercom and PA systems are available."
      },
      {
        question: "Can this scale across locations?",
        answer: "Yes. It is designed for single-site to multi-site deployments."
      }
    ],
    faqGroups: [
      {
        title: "Deployment & Architecture",
        items: [
          {
            question: "Which option is right for us?",
            answer: "It depends on call volume, number of sites, internet reliability, and control requirements."
          },
          {
            question: "Can we run a hybrid setup?",
            answer: "Yes. For example, on-prem for internal calling with cloud for external lines and remote users."
          },
          {
            question: "Can you integrate with our existing PBX?",
            answer: "Often yes through SIP trunks or phased migration."
          }
        ]
      },
      {
        title: "Features & Functionality",
        items: [
          {
            question: "Do you provide auto-attendants and call queues?",
            answer: "Yes. We support IVR menus, ring groups, hunt groups, overflow routing, and time-based rules."
          },
          {
            question: "Can calls be recorded?",
            answer: "Yes. Recording can be on-demand or automatic with retention policies."
          },
          {
            question: "Can users make and receive calls on mobile or laptops?",
            answer: "Yes. Softphone apps can provide full extension functionality."
          }
        ]
      },
      {
        title: "Reliability, Security & Support",
        items: [
          {
            question: "What happens if internet goes down?",
            answer: "Options include backup ISP/LTE failover, mobile forwarding, or on-prem internal calling continuity."
          },
          {
            question: "Is VoIP secure?",
            answer: "Yes. We use TLS/SRTP encryption, strong authentication, segmented networks, and access controls."
          },
          {
            question: "Do you handle E911 requirements?",
            answer: "Yes. We help with location mapping and emergency services compliance."
          }
        ]
      }
    ]
  }
];

export const whyIntelismart = [
  "Network, AV, VoIP, security, and support planned as one system",
  "Clean installations with professional cable management and documentation",
  "Scalable solutions for single sites and multi-site rollouts",
  "Fast response with monitoring, maintenance, and practical support",
  "Cost-aware recommendations that reduce waste and improve performance"
];

export const industries = [
  {
    slug: "offices-small-businesses",
    icon: "office" as const,
    title: "Offices & Small Businesses",
    text: "Network, Wi-Fi, security, VoIP, and managed support for everyday business operations.",
    story:
      "We start by finding where daily work slows down: unreliable Wi-Fi, scattered vendors, unsupported devices, rising internet costs, or security gaps. Then we consolidate the infrastructure into a cleaner operating foundation your team can trust.",
    image: `${serviceImagePath}Managed-IT-Services-2.png`,
    alt: "Modern corporate office interior"
  },
  {
    slug: "churches-campuses",
    icon: "church" as const,
    title: "Churches & Campuses",
    text: "AV, streaming, network, security, and training designed for staff and volunteer teams.",
    story:
      "We design around the people actually running the systems: staff, volunteers, media teams, security teams, and leadership. The goal is dependable services, simpler Sunday operations, and technology that supports ministry instead of distracting from it.",
    image: `${serviceImagePath}church-1.png`,
    alt: "Church auditorium with stage lighting and large display"
  },
  {
    slug: "retail-restaurants",
    icon: "retail" as const,
    title: "Retail & Restaurants",
    text: "POS connectivity, guest Wi-Fi, CCTV, digital displays, and communications.",
    story:
      "We connect the systems that protect revenue at the counter and on the floor: POS, cameras, menu boards, guest Wi-Fi, inventory workflows, and phones. When one location works, we standardize it so every site can run with the same confidence.",
    image: `${serviceImagePath}Digital-Menu-Board-Solutions.png`,
    alt: "Retail interior with customers and displays"
  },
  {
    slug: "warehouses-industrial",
    icon: "property" as const,
    title: "Warehouses & Industrial",
    text: "Intercom, paging, security, network, and connectivity for facility operations.",
    story:
      "We map the facility before recommending equipment: docks, yards, production areas, offices, blind spots, cable paths, and communication dead zones. From there, we build infrastructure that keeps teams coordinated and operations visible.",
    image: `${serviceImagePath}VoIP-Intercom-Solutions-2.png`,
    alt: "Construction worker using field communication equipment"
  },
  {
    slug: "hotels-hospitality",
    icon: "smb" as const,
    title: "Hotels & Hospitality",
    text: "Guest Wi-Fi, VoIP, surveillance, paging, and back-office infrastructure.",
    story:
      "We treat the property as one connected guest experience. Guest Wi-Fi, staff communication, phones, surveillance, access control, and back-office systems all need to work together quietly so service stays smooth.",
    image: `${serviceImagePath}VoIP-Intercom-Solutions-1.png`,
    alt: "Hotel lobby with warm lighting"
  },
  {
    slug: "government-public-sector",
    icon: "healthcare" as const,
    title: "Government & Public Sector",
    text: "Structured communication, secure networks, access control, and high-availability systems.",
    story:
      "We help public-facing teams reduce technology uncertainty with documented networks, controlled access, reliable communications, and security systems that are easier to support, audit, and scale.",
    image: `${serviceImagePath}Security-Surveillance-2.png`,
    alt: "Professional public-sector meeting room"
  }
];

export type IndustryStory = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  pain: string;
  help: string;
  outcomes: string;
  services: string[];
};

export const industryStories: IndustryStory[] = [
  {
    slug: "healthcare-medical-practices",
    eyebrow: "Healthcare",
    title: "Healthcare & Medical Practices",
    summary:
      "Clinical teams need networks that protect patient data, keep EHR access stable, and support care without adding friction.",
    image: "/images/industries/healthcare-medical-practices.jpg",
    alt: "Medical team reviewing patient information in a clinical environment",
    pain:
      "In a medical practice, a slow workstation or exposed endpoint is not just an IT inconvenience. It can interrupt scheduling, billing, imaging access, or patient flow while also creating avoidable HIPAA and ransomware exposure.",
    help:
      "Intelismart separates clinical systems from general business traffic, hardens remote access, tightens identity and endpoint protection, and stabilizes the network and Wi-Fi that EHR, billing, phones, and imaging depend on every day.",
    outcomes:
      "The practice gets a calmer technology environment: fewer security blind spots, more dependable uptime for patient-critical systems, and infrastructure that is easier to document, support, and prepare for audits.",
    services: ["Managed IT", "Network Infrastructure", "Security & Surveillance", "System Evaluation"]
  },
  {
    slug: "legal-professional-services",
    eyebrow: "Professional Services",
    title: "Legal & Professional Services",
    summary:
      "Firms depend on fast document access, secure remote work, and confidentiality that clients can trust.",
    image: "/images/industries/legal-professional-services.jpg",
    alt: "Professional services team working in a conference room",
    pain:
      "Professional firms live inside documents, deadlines, and client confidentiality. When file access is slow, permissions are loose, or remote work is improvised, the risk shows up as lost time and reduced client confidence.",
    help:
      "Intelismart builds secure access around the way attorneys, accountants, consultants, and staff actually work. We support cloud or hybrid document systems, tighten MFA and endpoint monitoring, and make remote access controlled instead of chaotic.",
    outcomes:
      "Teams can move faster without loosening control. Documents are easier to reach, sensitive data is better protected, and leadership has clearer visibility into who can access what.",
    services: ["Managed IT", "Cybersecurity", "Network Infrastructure", "Cloud & Access"]
  },
  {
    slug: "construction-field-operations",
    eyebrow: "Field Operations",
    title: "Construction & Field Operations",
    summary:
      "Project sites need connectivity and communication that can move as the work moves, from temporary trailers to finished spaces.",
    image: "/images/industries/construction-field-operations.jpg",
    alt: "Construction team coordinating work from a job site",
    pain:
      "On a job site, connectivity problems become coordination problems. Field teams lose time when trailers, temporary offices, cameras, tablets, and project managers cannot stay connected to the office or each other.",
    help:
      "Intelismart deploys mobile and temporary networks, connects sites back to the office through secure access, and sets up field-ready voice, camera, and connectivity equipment that can move as the project changes.",
    outcomes:
      "The office gets better visibility into the field, crews communicate with fewer delays, and the same infrastructure approach can scale from one project to the next instead of being rebuilt from scratch.",
    services: ["Fiber & Dedicated Internet", "Network Infrastructure", "VoIP & Intercom", "Security & Surveillance"]
  },
  {
    slug: "manufacturing-industrial",
    eyebrow: "Industrial",
    title: "Manufacturing & Industrial",
    summary:
      "Industrial environments need uptime, visibility, and separation between business IT and operational systems.",
    image: "/images/industries/manufacturing-industrial.jpg",
    alt: "Industrial facility with production equipment and technical systems",
    pain:
      "Industrial environments often run on a mix of legacy equipment, business systems, cameras, phones, and operational technology. When everything sits on the same fragile network, a small issue can become downtime or production loss.",
    help:
      "Intelismart segments IT and OT systems, adds monitoring and alerting, improves network paths, and plans upgrades around uptime so the facility can modernize without unnecessary disruption to production.",
    outcomes:
      "Operations become more visible and resilient. Leadership can see where risk lives, support teams can respond faster, and production systems are better protected from everyday IT failures and cyber exposure.",
    services: ["Network Infrastructure", "Datacenter Support", "Security & Surveillance", "System Evaluation"]
  },
  {
    slug: "hospitality-hotels",
    eyebrow: "Hospitality",
    title: "Hotels & Hospitality",
    summary:
      "Guest experience depends on invisible infrastructure: Wi-Fi that works, phones that route correctly, and security systems that stay online.",
    image: "/images/industries/hospitality-hotels.jpg",
    alt: "Hospitality environment with guest-facing technology infrastructure",
    pain:
      "In hospitality, guests rarely notice the network until it fails. Poor Wi-Fi, disconnected phone systems, weak camera coverage, or back-office interruptions quickly become service issues for staff and reputation issues for ownership.",
    help:
      "Intelismart treats the property as one connected environment. We tune high-density Wi-Fi, modernize voice and intercom workflows, and connect surveillance, access control, staff systems, and back-office infrastructure into a more reliable foundation.",
    outcomes:
      "Guests experience fewer technology frustrations, staff communicate more clearly, and ownership gets stronger visibility across rooms, common areas, service zones, and operations.",
    services: ["Network Infrastructure", "VoIP & Intercom", "Security & Surveillance", "Managed IT"]
  },
  {
    slug: "retail-multi-location",
    eyebrow: "Retail",
    title: "Retail & Multi-Location Businesses",
    summary:
      "Stores need consistent systems across locations so POS, inventory, guest Wi-Fi, cameras, and displays keep revenue moving.",
    image: "/images/industries/retail-multi-location.jpg",
    alt: "Retail environment with digital systems and customer-facing displays",
    pain:
      "For retail and restaurant teams, technology failures show up immediately in revenue. POS downtime, menu board issues, camera gaps, guest Wi-Fi complaints, or inconsistent store setups make every location harder to manage.",
    help:
      "Intelismart standardizes the network, Wi-Fi, POS connectivity, surveillance, displays, and voice systems so each site follows a repeatable model. Multi-location monitoring then gives owners and support teams one clearer view.",
    outcomes:
      "Stores become easier to open, manage, and support. Registers stay connected, customer-facing systems are more consistent, and leaders can scale operations without reinventing the technology stack at every location.",
    services: ["Digital Menu Boards", "Network Infrastructure", "Security & Surveillance", "Managed IT"]
  },
  {
    slug: "churches-nonprofits",
    eyebrow: "Community",
    title: "Churches & Nonprofits",
    summary:
      "Mission-driven teams need reliable services, broadcasts, networks, and AV systems that volunteers can operate confidently.",
    image: "/images/industries/churches-nonprofits.jpg",
    alt: "Church auditorium with production and worship technology",
    pain:
      "Churches and nonprofits often rely on volunteers to run systems that were built a piece at a time. Streaming, AV, Wi-Fi, cameras, and security may all work separately until a service, event, or broadcast puts pressure on them.",
    help:
      "Intelismart designs around the actual team: staff, volunteers, media operators, facilities teams, and leadership. We tune AV, streaming, network, Wi-Fi, and security together, then train people so the system is easier to operate.",
    outcomes:
      "Services and events run with fewer surprises, volunteers feel more confident, and limited budgets go toward infrastructure that supports the mission instead of adding complexity.",
    services: ["Audio Visual & Media", "Network Infrastructure", "Training & Enablement", "Security & Surveillance"]
  },
  {
    slug: "small-medium-businesses",
    eyebrow: "Business Operations",
    title: "Small & Medium Businesses",
    summary:
      "Growing businesses need a practical IT foundation that reduces waste, closes security gaps, and scales without surprise costs.",
    image: "/images/industries/small-medium-businesses.jpg",
    alt: "Small business team working in a modern office",
    pain:
      "Small and medium businesses often inherit a stack of tools, vendors, internet plans, old hardware, and quick fixes. Costs rise, accountability gets blurry, and security gaps remain because no one is looking at the full system.",
    help:
      "Intelismart starts with an assessment, then consolidates what can be simplified. We align managed support, internet, phones, cloud tools, devices, security, and monitoring into one practical operating plan.",
    outcomes:
      "The business gets clearer accountability, more predictable performance, and a foundation that can scale. In many environments, consolidation also exposes unnecessary spend that can be reduced or redirected.",
    services: ["System Evaluation", "Managed IT", "VoIP & Intercom", "Cybersecurity"]
  }
];

export const buildoutStory = {
  eyebrow: "Build-out & Renovation",
  title: "A building is not truly finished until it is operational.",
  summary:
    "Intelismart partners with general contractors and owners early in the build-out process so low-voltage infrastructure is designed before walls close and teams move in.",
  image: "/images/industries/buildout-low-voltage.jpg",
  alt: "Commercial build-out team reviewing site infrastructure plans",
  problems: [
    "IT becomes an afterthought and causes rework, delays, or cost overruns",
    "Poor cable planning creates weak coverage, bottlenecks, and future limitations",
    "General contractors, electricians, IT, and specialty vendors work in silos"
  ],
  difference: [
    "Pre-wire planning aligned with operations, not only blueprint compliance",
    "Coordination with general contractors, electricians, and other trades",
    "Clean, labeled, documented installs for long-term maintainability",
    "Scalable design for future expansion instead of day-one-only needs"
  ],
  outcomes: [
    "Sites are operational on opening day",
    "No retrofitting or tearing into finished walls",
    "Optimized network performance from day one",
    "Lower long-term infrastructure cost"
  ],
  idealProjects: [
    "Retail store buildouts",
    "Offices and commercial spaces",
    "Restaurants and hospitality venues",
    "Warehouses and industrial sites",
    "Churches and multi-use facilities"
  ]
};

export const approach = [
  {
    number: "01",
    title: "Request Evaluation",
    text: "Start with the systems, costs, pain points, and goals that matter most."
  },
  {
    number: "02",
    title: "Assess Systems",
    text: "We review infrastructure, performance, redundancy, contracts, and support requirements."
  },
  {
    number: "03",
    title: "Plan & Price",
    text: "You get a clear plan, prioritized recommendations, and pricing tied to real outcomes."
  },
  {
    number: "04",
    title: "Implement & Support",
    text: "We deploy, document, train, monitor, and continue improving the environment."
  }
];

export const contact = {
  email: "sales@intelismart.com",
  phone: "1-979-999-1901",
  phoneLink: "+19799991901"
};

export const navGroups = {
  about: [
    { label: "About Us", href: "/about-intelismart" },
    { label: "Our Approach", href: "/about" }
  ],
  industries: industries.map((industry) => ({
    label: industry.title,
    href: `/industries#${industry.slug}`
  })),
  services: services.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`
  }))
};
