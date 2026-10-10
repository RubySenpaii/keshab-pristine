import type { StaticImageData } from "next/image";
import residentialImg from "@/public/images/residential.jpg";
import commercialImg from "@/public/images/commercial.jpg";
import turnoverImg from "@/public/images/turnover.jpg";
import specialtyImg from "@/public/images/specialty.jpg";

export const company = {
  name: "Pristine Clean & Solutions",
  legalName: "Pristine Clean & Solutions LLC",
  motto: "Clean Spaces. Smart Solutions. Better Living.",
  phoneDisplay: "(800) 555-CLEAN",
  phoneHref: "tel:8005552532",
  email: "care@pristinecleansolutions.com",
  hours: "Mon - Sat: 7:00 AM - 8:00 PM",
};

export const navLinks = [
  { label: "Services", href: "#solutions" },
  { label: "Estimator", href: "#estimator" },
  { label: "Standards", href: "#standards" },
  { label: "Reviews", href: "#reviews" },
];

export const trustBadges = [
  { icon: "verified_user", title: "$2M Policy", caption: "Licensed, Bonded & Insured" },
  { icon: "star", title: "5.0 Stars", caption: "850+ Verified Reviews", filled: true },
  { icon: "eco", title: "GreenSeal®", caption: "Eco-Conscious Chemistry" },
  { icon: "badge", title: "Vetted Team", caption: "100% Background-Checked" },
];

export const pillars = [
  {
    icon: "medical_services",
    title: "Hospital-Grade Precision",
    body: "Four-stage HEPA vacuums capturing 99.97% of airborne allergens down to 0.3 microns. Microfiber cloths color-coded by hygienic zones eliminate kitchen-to-bathroom cross-contamination.",
    footerIcon: "done_all",
    footer: "Multi-Point Zone Protocol",
  },
  {
    icon: "eco",
    title: "Eco-Safe & Pet-Approved",
    body: "Zero volatile organic compounds (VOCs), caustic bleach fumes, or artificial scents. Formulations derived from renewable plant extracts that are safe for crawling infants and sensitive pets.",
    footerIcon: "pets",
    footer: "Pet Safety Certified",
  },
  {
    icon: "phonelink_ring",
    title: "Technology & Transparency",
    body: "Real-time digital checklists, verified GPS arrival times, and timestamped before-and-after photographic records uploaded straight to your private client portal.",
    footerIcon: "verified",
    footer: "Direct Client Portal Access",
  },
];

export type Solution = {
  tag: string;
  title: string;
  body: string;
  features: string[];
  price: string;
  priceUnit: string;
  cta: string;
  image: StaticImageData;
  imageAlt: string;
};

export const solutions: Solution[] = [
  {
    tag: "Residential Focus",
    title: "Residential Regular & Deep Care",
    body: "Meticulous sanitization of kitchens, bathrooms, fixtures, and baseboards. Recurring plans keep your living sanctuary effortlessly spotless week after week.",
    features: ["Grout & tile polishing", "Upholstery steaming", "Appliance interior resets", "Linen renewal service"],
    price: "From $149",
    priceUnit: "/ visit",
    cta: "Book Schedule",
    image: residentialImg,
    imageAlt: "Immaculate modern living room and kitchen with polished white marble counters and sunlit hardwood floors",
  },
  {
    tag: "Commercial & Medical",
    title: "Commercial & Medical Office Facilities",
    body: "EPA-compliant pathogen reduction, touchpoint sterilization, and high-traffic floor preservation suited for corporate headquarters, clinics, and professional law offices.",
    features: ["High-touch disinfection", "Nightly off-hours shifts", "OSHA sanitation log", "Restroom multi-point audit"],
    price: "Custom RFPs",
    priceUnit: "/ billed monthly",
    cta: "Request Bid",
    image: commercialImg,
    imageAlt: "Spotless corporate conference room with glass partitions and a minimalist boardroom table",
  },
  {
    tag: "Property Turnovers",
    title: "Turnover & Real Estate Staging Cleans",
    body: "Comprehensive 64-point checklists guaranteeing 100% security deposit returns and maximum appeal for luxury real estate showings and immediate new occupant move-ins.",
    features: ["Oven & fridge deep restore", "Interior cabinet wipe-down", "Baseboard & trim detail", "Realtor sign-off report"],
    price: "From $289",
    priceUnit: "/ flat package",
    cta: "Select Reset",
    image: turnoverImg,
    imageAlt: "Empty modern apartment with clean hardwood floors, white walls, and sparkling windows overlooking the city",
  },
  {
    tag: "Specialty Detailing",
    title: "Specialty Window, Tile & Architectural Care",
    body: "High-reach streak-free pure water window washing, stone sealing, hard surface extraction, and post-renovation drywall dust elimination.",
    features: ["Deionized window tech", "Travertine & marble polish", "Chandelier delicate wash", "Fine woodwork nourishment"],
    price: "Custom Quote",
    priceUnit: "/ scoped",
    cta: "Request Inspection",
    image: specialtyImg,
    imageAlt: "Streak-free floor-to-ceiling glass windows overlooking a serene garden",
  },
];

export const testimonials = [
  {
    quote:
      "After hiring three separate cleaning companies who cut corners on our hardwood and shower tile, Pristine Clean felt like night and day. The air actually smells fresh, not like fake perfume or bleach.",
    initials: "EM",
    name: "Elena Montgomery",
    role: "Homeowner • Bi-Weekly Recurring Client",
  },
  {
    quote:
      "We manage a 14,000 sq ft biotech office. Pristine's team complies with every protocol, provides verified digital completion check-ins, and our staff constantly remarks on how spotless our conference hubs remain.",
    initials: "DR",
    name: "David Rosenthal",
    role: "Facility Director, Horizon BioLabs",
  },
  {
    quote:
      "As a real estate broker, staging and move-in cleanliness makes or breaks listing offers. Pristine Clean is my secret weapon. They turn post-construction chaos into immaculate show-ready marvels overnight.",
    initials: "ST",
    name: "Sarah Townsend",
    role: "Principal Broker, Townsend Luxury Group",
  },
];

export const ctaPerks = [
  { icon: "bolt", label: "Same-Week Availability" },
  { icon: "shield", label: "Fully Bonded & $2M Insured" },
  { icon: "credit_card_off", label: "Zero Upfront Deposit" },
];

export const footerColumns = [
  {
    heading: "Credentials & Guarantees",
    items: [
      "State License: #PC-99482-CLEAN",
      "General Liability: $2,000,000 Insured",
      "OSHA & EPA Certified Sanitization",
      "100% Reclean Satisfaction Guarantee",
    ],
  },
  {
    heading: "Primary Service Areas",
    items: [
      "Metropolitan Core & Financial District",
      "North Suburbs & Executive Estates",
      "South Bay Residential Communities",
      "East Valley Commercial Parks",
    ],
  },
];
