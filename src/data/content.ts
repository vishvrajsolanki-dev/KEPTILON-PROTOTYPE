import type { VentureId } from "./ventures";

export const siteStats = [
  { value: "5", label: "Specialised ventures" },
  { value: "1", label: "Unified house" },
  { value: "24×7", label: "Guidance that stays" },
];

export const homeProof = [
  {
    title: "Operators on the floor",
    body: "CofWaf systems are proven at The Krater before they reach a client kitchen.",
  },
  {
    title: "Guides through the decision",
    body: "Destiny stays after the reading — until a choice becomes action.",
  },
  {
    title: "Honest before engaged",
    body: "If we are the wrong people for the problem, we will say so first.",
  },
];

export const cofwafExtras = {
  kitchen: {
    title: "Vegetarian, reimagined.",
    body: "At CofWaf, we transform Indian and international cuisine into distinctive vegetarian dining experiences — authentic flavours, modern creativity, thoughtful presentation, nutritional balance, and operational practicality.",
    points: [
      "Signature dish development",
      "Profitable menu engineering",
      "Culinary concept refinement",
      "Kitchen efficiency with guest satisfaction",
    ],
  },
  shubh: [
    { title: "Muhurat", body: "An auspicious launch date and hour for the opening." },
    { title: "Name numerology", body: "A read on the name before it goes on the board." },
    { title: "Founder timing", body: "When to sign, hire and expand — read for you personally." },
    { title: "Vastu guidance", body: "Practical layout adjustments, not a rebuild." },
  ],
  elsewhere: [
    ["A slide deck, and a bill.", "Systems installed on your floor that outlast us."],
    ["Advice from people who never ran a kitchen.", "Operators who run The Krater, our own restaurant."],
    ["One fix, and the other two problems left standing.", "Product, insight and finance, worked as one plate."],
    ["A retainer that quietly never ends.", "One WhatsApp message, and an honest answer first."],
  ],
  chips: [
    "Menu engineering",
    "Food-cost control",
    "SOPs your staff follow",
    "Licences & kitchen layout",
    "Opening playbook",
    "Supplier renegotiation",
    "Review discipline",
    "Instagram cadence",
    "Delivery-platform growth",
    "Staff retention",
    "Second-outlet readiness",
    "Seasonal campaigns",
  ],
};

export const destinyElsewhere = [
  ["A reading, and then silence.", "A reading, and a person who stays until you have acted."],
  ["A prediction you are told to accept.", "A decision that is yours to make — and ours to help you make."],
  ["Astrology in one room, wellness in another.", "Both branches on one path, priced as one."],
  ["Your details, loosely held.", "One practitioner, complete discretion, nothing shared."],
];

export const ventureImages: Record<VentureId, string> = {
  cofwaf: "/images/visual-cofwaf-hero.jpg",
  destiny: "/images/visual-destiny-hero.jpg",
  academy: "/images/visual-academy.jpg",
  talentx: "/images/visual-talentx.jpg",
  venture: "/images/visual-venture.jpg",
};

export const faqHome = [
  {
    q: "What is Keptilon?",
    a: "A house of five specialised ventures covering self, skill, team, business and capital — united by guidance that does not stop at advice.",
  },
  {
    q: "Which venture should I choose?",
    a: "Start on The Arc. Pick the stage that sounds like you — or contact us and we will route you honestly.",
  },
  {
    q: "Is Keptilon an AI product?",
    a: "No. AI and tools support the work behind the scenes. Operators and guides lead every engagement.",
  },
];
