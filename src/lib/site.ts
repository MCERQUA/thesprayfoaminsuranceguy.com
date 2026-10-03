// Centralized site data — used across nav, footer, schema, CTAs
// The Spray Foam Insurance Guy — personal brand, expert positioning

export const SITE = {
  name: "The Spray Foam Insurance Guy",
  legalName: "The Spray Foam Insurance Guy (by Contractors Choice Agency)",
  domain: "thesprayfoaminsuranceguy.com",
  url: "https://thesprayfoaminsuranceguy.com",
  tagline: "The Spray Foam Insurance Expert. That's It.",
  description:
    "Josh Cotner is the spray foam insurance guy — 20 years specializing in GL, off-ratio coverage, contractor pollution liability, workers' comp, and commercial auto for spray foam contractors. Get your quote in 15 minutes.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Rd, Suite #104",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Spray Foam Guy",
  brandSub: "Insurance Expert",
  nicheShort: "spray foam contractor",
  nicheShortCap: "Spray Foam Contractor",
  nichePlural: "spray foam contractors",
  nichePluralCap: "Spray Foam Contractors",
  operator: "spray foam operation",
  operatorCap: "Spray Foam Operation",
  industry: "spray foam contracting",
  industryCap: "Spray Foam Contracting",
  audience: "spray foam contractors",
  audienceCap: "Spray Foam Contractors",
  ownerTitle: "spray foam contractor",
  regionPill: "Texas · Southeast · National",
  serviceSuffix: "Spray Foam Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability",
    short: "The foundation every spray foam contractor needs",
    description:
      "General liability is the first policy every spray foam contractor gets asked for — and the one that covers third-party bodily injury, property damage, and completed-operations claims from your spray foam work. I place GL programs built for the foam trade, not generic contractor policies.",
    icon: "ShieldCheck",
    keywords: ["spray foam contractor general liability", "spray foam GL insurance", "spray polyurethane foam liability coverage", "SPF contractor insurance"],
  },
  {
    slug: "off-ratio-coverage",
    title: "Off-Ratio Coverage",
    short: "The exclusion that kills most spray foam policies",
    description:
      "Off-ratio foam is the #1 claim exclusion in standard contractor GL — and most agents don't even know to ask about it. I place coverage that actually responds when an off-ratio application causes adhesion failure, moisture intrusion, or property damage.",
    icon: "Gauge",
    keywords: ["off-ratio spray foam insurance", "spray foam off-ratio coverage", "B-side ratio foam insurance", "spray foam adhesion failure coverage"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "For isocyanate, off-gassing, and chemical exposure claims",
    description:
      "Standard GL has a pollution exclusion — and courts have ruled that isocyanates and foam off-gassing qualify as pollutants. Contractor pollution liability closes that gap for spray foam operations handling MDI, TDI, and blowing agents on every job.",
    icon: "Droplets",
    keywords: ["spray foam pollution liability", "isocyanate insurance coverage", "contractor pollution liability spray foam", "foam off-gassing insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For crews running guns every day",
    description:
      "Spray foam crews face real chemical exposure, respiratory risks, and equipment hazards on every job. I make sure your workers' comp is class-coded correctly for spray foam operations — not lumped under a generic painting or insulation code that inflates your premium.",
    icon: "HardHat",
    keywords: ["spray foam workers compensation", "spray foam crew insurance", "SPF workers comp class codes", "spray foam employee coverage"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    short: "Rigs, trailers, and spray foam equipment trucks",
    description:
      "Your spray rigs are your business. Commercial auto for spray foam operations covers the trucks, trailers, and specialty rigs you run between jobs — including hired and non-owned auto when your crew drives their own vehicles for the company.",
    icon: "Truck",
    keywords: ["spray foam truck insurance", "commercial auto spray foam", "spray rig insurance", "foam contractor vehicle coverage"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment",
    short: "Spray rigs, proportioners, and hose sets",
    description:
      "A Graco proportioner or reactor can run $30,000–$80,000. Standard contractor policies exclude tools and equipment entirely or cap coverage at a fraction of real value. I place inland marine coverage that reflects what your spray equipment actually costs to replace.",
    icon: "Wrench",
    keywords: ["spray foam equipment insurance", "proportioner insurance", "spray rig equipment coverage", "foam contractor tools insurance"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella",
    short: "Extra limits above GL, auto, and workers' comp",
    description:
      "When a completed-operations claim or job-site injury exceeds your primary policy limits, a commercial umbrella is what stands between you and a judgment. I size umbrella limits to your real exposure — not a generic $1M default that won't be enough.",
    icon: "Umbrella",
    keywords: ["spray foam umbrella insurance", "contractor umbrella policy", "commercial umbrella spray foam", "excess liability foam contractor"],
  },
  {
    slug: "bonds",
    title: "Contractor Bonds",
    short: "License, permit, and performance bonds",
    description:
      "Many states and municipalities require spray foam contractors to carry a license or permit bond before they can legally operate. I handle contractor bonds fast — so a bonding requirement doesn't slow down a job or cost you a contract.",
    icon: "FileCheck",
    keywords: ["spray foam contractor bond", "license bond spray foam", "performance bond foam contractor", "contractor surety bond SPF"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas-southwest", name: "Texas & Southwest", region: "TX · AZ · NM · NV", blurb: "The booming Texas construction market drives massive spray foam demand. I write programs for Texas spray foam contractors handling residential open-cell, commercial closed-cell, and new-build energy packages — with the GL, off-ratio, and pollution coverage the state requires." },
  { slug: "southeast", name: "Southeast", region: "FL · GA · AL · SC · NC · TN", blurb: "Hot, humid Southeast climate makes spray foam essential for moisture and energy management. I cover spray foam contractors across Florida, Georgia, and the Carolinas — including the elevated completed-operations exposure from high-humidity coastal jobs." },
  { slug: "midwest", name: "Midwest", region: "OH · IN · IL · MI · MO · KS", blurb: "Midwest contractors run open-cell attic work and closed-cell commercial jobs across an extreme temperature range. I place programs for Midwest spray foam operations with the off-ratio and equipment coverage most regional agents overlook." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · CT · MA · VT", blurb: "The Northeast's energy codes and older housing stock create steady spray foam demand. I know the certificate requirements, union exclusion issues, and off-ratio exposure that come with Northeast commercial and residential foam jobs." },
  { slug: "california", name: "California", region: "CA — all regions", blurb: "California's strict energy and building codes push spray foam onto nearly every commercial project. I cover California spray foam contractors with GL, pollution, and off-ratio coverage built for the state's permitting, OSHA, and chemical-handling environment." },
  { slug: "mountain-states", name: "Mountain States", region: "CO · UT · ID · MT · WY", blurb: "Mountain-state contractors handle cold-climate closed-cell work in high-altitude and remote job conditions. I write programs for Colorado, Utah, and Idaho spray foam operations — including the chemical and equipment exposure that comes with extreme weather jobs." },
  { slug: "mid-atlantic", name: "Mid-Atlantic", region: "MD · VA · DC · DE", blurb: "Mid-Atlantic contractors work in dense urban and suburban markets with strict oversight and high liability exposure. I place GL, off-ratio, and pollution coverage for spray foam contractors in Virginia, Maryland, and the DC metro area." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "WA · OR", blurb: "Washington and Oregon contractors face wet-climate adhesion issues, strict environmental rules, and aggressive tort exposure on foam jobs. I know the Pacific Northwest spray foam market and place coverage that actually responds when a moisture or off-ratio claim hits." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Spray foam specialist — not a generalist", icon: "Flame" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Spray foam contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years specializing in spray foam insurance", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

