type IconName = "self" | "skill" | "team" | "business" | "capital";

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
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (resolved) {
    case "self":
      return (
        <svg {...common}>
          <circle cx="24" cy="16" r="7" />
          <path d="M10 40c2.5-8 9-12 14-12s11.5 4 14 12" />
          <path d="M24 26v6M21 30h6" />
        </svg>
      );
    case "skill":
      return (
        <svg {...common}>
          <path d="M10 14h12c4 0 6 2 6 5v17c0-2.5-2-4-5-4H10V14z" />
          <path d="M38 14H26c-4 0-6 2-6 5v17c0-2.5 2-4 5-4h13V14z" />
        </svg>
      );
    case "team":
      return (
        <svg {...common}>
          <circle cx="24" cy="14" r="5" />
          <circle cx="12" cy="18" r="4" />
          <circle cx="36" cy="18" r="4" />
          <path d="M8 38c1.5-6 5.5-9 10-9M30 29c4.5 0 8.5 3 10 9M16 38c2-6 6-9 8-9s6 3 8 9" />
        </svg>
      );
    case "business":
      return (
        <svg {...common}>
          <path d="M10 38V18l14-8 14 8v20" />
          <path d="M18 38V26h12v12" />
          <path d="M22 30h4M16 22h4M28 22h4" />
        </svg>
      );
    case "capital":
      return (
        <svg {...common}>
          <path d="M24 8v6M24 40v-4" />
          <path d="M16 14c0 6 3.5 9 8 12 4.5-3 8-6 8-12 0-4-3.5-6-8-6s-8 2-8 6z" />
          <path d="M14 40h20M18 36h12" />
        </svg>
      );
  }
}
