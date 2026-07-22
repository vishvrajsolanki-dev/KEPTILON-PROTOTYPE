export type VentureId = "destiny" | "academy" | "talentx" | "cofwaf" | "venture";

export type Venture = {
  id: VentureId;
  name: string;
  href: string;
  stage: string;
  desire: string;
  who: string;
  oneLiner: string;
  accent: string;
  cta: string;
  ctaHref: string;
  statusNote?: string;
};

export const ARC_ORDER: VentureId[] = [
  "destiny",
  "academy",
  "talentx",
  "cofwaf",
  "venture",
];

export const ventures: Record<VentureId, Venture> = {
  destiny: {
    id: "destiny",
    name: "Destiny",
    href: "/destiny",
    stage: "Self",
    desire: "I want direction.",
    who: "Student / Seeker",
    oneLiner: "Astrology and wellness that stay until you act.",
    accent: "#C9A227",
    cta: "Begin your reading",
    ctaHref: "/destiny#enroll",
  },
  academy: {
    id: "academy",
    name: "Academy",
    href: "/academy",
    stage: "Skill",
    desire: "I want to grow.",
    who: "Professional",
    oneLiner: "Executive education built for Monday, not certificates.",
    accent: "#2F7DD1",
    cta: "Join the waitlist",
    ctaHref: "/academy#waitlist",
    statusNote: "Not open to the public yet — an early conversation, not a checkout.",
  },
  talentx: {
    id: "talentx",
    name: "TalentX",
    href: "/talentx",
    stage: "Team",
    desire: "I want talent.",
    who: "Hiring Manager",
    oneLiner: "Capability measured directly, then matched and held.",
    accent: "#7C6BC4",
    cta: "Talk to us",
    ctaHref: "/contact?venture=talentx",
    statusNote: "Taking on first partners — early conversation, not a checkout.",
  },
  cofwaf: {
    id: "cofwaf",
    name: "CofWaf",
    href: "/cofwaf",
    stage: "Business",
    desire: "I want full tables.",
    who: "Restaurant Owner",
    oneLiner: "Restaurant systems that outlast the consultant.",
    accent: "#9B2D2D",
    cta: "Talk on WhatsApp",
    ctaHref:
      "https://wa.me/919974406111?text=Hi%20Keptilon%20CofWaf%0A%0AI%20came%20from%20keptilon.com%20and%20I%20would%20like%20to%20talk%20about%20my%20restaurant.",
  },
  venture: {
    id: "venture",
    name: "Venture",
    href: "/venture",
    stage: "Capital",
    desire: "I want to build.",
    who: "Entrepreneur",
    oneLiner: "Capital with direction — and a partner through the build.",
    accent: "#0F8A74",
    cta: "Talk to us",
    ctaHref: "/contact?venture=venture",
    statusNote: "Onboarding founders and investors now.",
  },
};

export const arcVentures = ARC_ORDER.map((id) => ventures[id]);

export const WHATSAPP_COFWAF =
  "https://wa.me/919974406111?text=Hi%20Keptilon%20CofWaf%0A%0AI%20came%20from%20keptilon.com%20and%20I%20would%20like%20to%20talk%20about%20my%20restaurant.";

export const CONTACT_EMAIL = "hello@keptilon.com";
