export const SITE_NAME = "Asbestos Services Hampshire";
export const SITE_URL = "https://www.asbestosserviceshampshire.uk";
export const PHONE_NUMBER = "023 8000 0000";
export const PHONE_HREF = "tel:+442380000000";
export const EMAIL = "info@asbestosserviceshampshire.uk";

export const HAMPSHIRE_CITIES = [
  { name: "Southampton", lat: 50.9097, lng: -1.4044 },
  { name: "Portsmouth", lat: 50.8198, lng: -1.0880 },
  { name: "Winchester", lat: 51.0632, lng: -1.3080 },
  { name: "Basingstoke", lat: 51.2667, lng: -1.0876 },
  { name: "Andover", lat: 51.2113, lng: -1.4908 },
  { name: "Farnborough", lat: 51.2920, lng: -0.7536 },
  { name: "Aldershot", lat: 51.2485, lng: -0.7638 },
  { name: "Eastleigh", lat: 50.9690, lng: -1.3508 },
  { name: "Fareham", lat: 50.8518, lng: -1.1783 },
  { name: "Havant", lat: 50.8518, lng: -0.9842 },
  { name: "Gosport", lat: 50.7948, lng: -1.1243 },
  { name: "Fleet", lat: 51.2835, lng: -0.8463 },
  { name: "Petersfield", lat: 51.0038, lng: -0.9365 },
  { name: "Waterlooville", lat: 50.8800, lng: -1.0300 },
] as const;

export const SERVICES = [
  {
    title: "Asbestos Surveys",
    slug: "asbestos-surveys",
    shortDesc: "Comprehensive management, refurbishment, and demolition surveys conducted by BOHS-qualified surveyors in full compliance with HSG264.",
    icon: "ClipboardCheck",
  },
  {
    title: "Asbestos Removal",
    slug: "asbestos-removal",
    shortDesc: "Licensed and non-licensed asbestos removal by HSE-licensed contractors, ensuring safe extraction and full regulatory compliance.",
    icon: "HardHat",
  },
  {
    title: "Asbestos Encapsulation",
    slug: "asbestos-encapsulation",
    shortDesc: "Professional encapsulation treatments to safely manage asbestos-containing materials in situ where removal is not required.",
    icon: "ShieldCheck",
  },
  {
    title: "Asbestos Sampling",
    slug: "asbestos-sampling",
    shortDesc: "Accurate bulk sampling and air monitoring conducted to UKAS-accredited laboratory standards for reliable identification.",
    icon: "FlaskConical",
  },
  {
    title: "Asbestos Testing",
    slug: "asbestos-testing",
    shortDesc: "UKAS-accredited laboratory analysis of suspected asbestos-containing materials with rapid turnaround and detailed reporting.",
    icon: "Microscope",
  },
  {
    title: "Asbestos Disposal",
    slug: "asbestos-disposal",
    shortDesc: "Environment Agency licensed disposal of asbestos waste at approved hazardous waste facilities with full consignment tracking.",
    icon: "Truck",
  },
] as const;

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Hampshire", href: "/hampshire" },
  { label: "Compliance", href: "/compliance-licensing" },
  { label: "Health & Safety", href: "/health-safety" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];
