type IconName = "self" | "skill" | "team" | "business" | "capital";

/** Classical fine-line Arc icons — Home elevation v2 exact */
export function StageIcon({
  name,
  color = "currentColor",
  size = 28,
}: {
  name: IconName | string;
  color?: string;
  size?: number;
}) {
  const resolved = (["self", "skill", "team", "business", "capital"].includes(name)
    ? name
    : "self") as IconName;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (resolved) {
    case "self":
      /* Classical bust on pedestal */
      return (
        <svg {...common}>
          <ellipse cx="24" cy="15" rx="7.5" ry="8.5" />
          <path d="M19 22.5c1.2 2.8 3.2 4.5 5 4.5s3.8-1.7 5-4.5" />
          <path d="M16 40c1-8 4.5-12.5 8-12.5S31 32 32 40" />
          <path d="M14 40h20" />
          <path d="M21 13.5c.6-1 1.8-1.8 3-1.8s2.4.8 3 1.8" />
        </svg>
      );
    case "skill":
      /* Ionic column */
      return (
        <svg {...common}>
          <path d="M13 11h22" />
          <path d="M15 11c0 2.5 2 4 4 4h10c2 0 4-1.5 4-4" />
          <path d="M17 15v20M24 15v20M31 15v20" />
          <path d="M14 35h20" />
          <path d="M12 39h24" />
          <path d="M14 35v4M34 35v4" />
        </svg>
      );
    case "team":
      return (
        <svg {...common}>
          <circle cx="24" cy="12" r="5" />
          <circle cx="11" cy="16" r="4" />
          <circle cx="37" cy="16" r="4" />
          <path d="M7 37c1-5.5 4.2-8.5 8.5-8.5" />
          <path d="M32.5 28.5c4.3 0 7.5 3 8.5 8.5" />
          <path d="M15 37c1.6-6 5.2-9 9-9s7.4 3 9 9" />
        </svg>
      );
    case "business":
      /* Classical pediment facade */
      return (
        <svg {...common}>
          <path d="M7 20 L24 9 L41 20" />
          <path d="M9 20v18M39 20v18" />
          <path d="M7 38h34" />
          <path d="M9 20h30" />
          <path d="M15 38V24h3.5v14M22.25 38V24h3.5v14M29.5 38V24h3.5v14" />
        </svg>
      );
    case "capital":
      /* Branching tree */
      return (
        <svg {...common}>
          <path d="M24 40 V20" />
          <path d="M24 34c-7-1.5-11-7-10-13 5 0 8.5 4 10 8" />
          <path d="M24 34c7-1.5 11-7 10-13-5 0-8.5 4-10 8" />
          <path d="M24 22c-3.5-5-2.5-10 .5-12 2.5 2.2 3.5 7-.5 12" />
          <path d="M24 22c3.5-4.5 5-9 2-12-3.5 1.5-4.5 6.5-2 12" />
          <path d="M17 40h14" />
        </svg>
      );
  }
}
