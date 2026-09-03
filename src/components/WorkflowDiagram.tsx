type Node = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  icon: "clock" | "sheet" | "code" | "route" | "mail";
};

const W = 860;
const H = 380;

const NODES: Node[] = [
  { id: "trigger", x: 70, y: 190, w: 120, h: 62, label: "Daily 9am", sub: "trigger", icon: "clock" },
  { id: "read", x: 258, y: 190, w: 130, h: 62, label: "Read Invoices", sub: "Google Sheet", icon: "sheet" },
  { id: "filter", x: 458, y: 190, w: 130, h: 62, label: "Filter Overdue", sub: "code", icon: "code" },
  { id: "route", x: 646, y: 190, w: 96, h: 96, label: "Route by Tier", sub: "", icon: "route" },
  { id: "friendly", x: 800, y: 70, w: 132, h: 58, label: "Friendly", sub: "7 days", icon: "mail" },
  { id: "firm", x: 800, y: 190, w: 132, h: 58, label: "Firm", sub: "14 days", icon: "mail" },
  { id: "final", x: 800, y: 310, w: 132, h: 58, label: "Final", sub: "30 days", icon: "mail" },
];

const LINES: [string, string][] = [
  ["trigger", "read"],
  ["read", "filter"],
  ["filter", "route"],
  ["route", "friendly"],
  ["route", "firm"],
  ["route", "final"],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

function Icon({ type }: { type: Node["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "var(--green-light)",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "clock":
      return (
        <svg {...common} className="h-4 w-4">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "sheet":
      return (
        <svg {...common} className="h-4 w-4">
          <rect x="4" y="4" width="16" height="16" rx="1.5" />
          <path d="M4 9.5h16M9.5 4v16" />
        </svg>
      );
    case "code":
      return (
        <svg {...common} className="h-4 w-4">
          <path d="M9 6c-2 0-2 2-2 3.5S5 12 5 12s2 .5 2 2.5S7 18 9 18" />
          <path d="M15 6c2 0 2 2 2 3.5S19 12 19 12s-2 .5-2 2.5S17 18 15 18" />
        </svg>
      );
    case "route":
      return (
        <svg {...common} className="h-5 w-5">
          <path d="M5 6h4l4 6h6" />
          <path d="M13 12l4 6h6" />
          <path d="M13 12l4-6h6" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} className="h-4 w-4">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
  }
}

function edgePoint(from: Node, to: Node): { x: number; y: number } {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const halfW = from.w / 2;
  const halfH = from.h / 2;
  if (dx === 0) return { x: from.x, y: from.y + Math.sign(dy) * halfH };
  const slope = dy / dx;
  let x = Math.sign(dx) * halfW;
  let y = slope * x;
  if (Math.abs(y) > halfH) {
    y = Math.sign(dy || 1) * halfH;
    x = dy === 0 ? x : y / slope;
  }
  return { x: from.x + x, y: from.y + y };
}

export default function WorkflowDiagram() {
  return (
    <div className="overflow-x-auto">
      <div
        className="relative mx-auto"
        style={{ width: W, minWidth: 640, maxWidth: "100%", aspectRatio: `${W} / ${H}` }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {LINES.map(([a, b]) => {
            const from = byId[a];
            const to = byId[b];
            const p1 = edgePoint(from, to);
            const p2 = edgePoint(to, from);
            return (
              <line
                key={`${a}-${b}`}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="rgba(255,255,255,0.14)"
                strokeWidth={1.5}
              />
            );
          })}
          {NODES.map((n) => (
            <circle key={n.id} cx={n.x} cy={n.y} r={2.5} fill="var(--green-light)" opacity={0.7} />
          ))}
        </svg>

        {NODES.map((n) => (
          <div
            key={n.id}
            className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-xl border border-border bg-bg-3 px-3 text-center ${
              n.id === "route" ? "rounded-full" : ""
            }`}
            style={{
              left: `${(n.x / W) * 100}%`,
              top: `${(n.y / H) * 100}%`,
              width: `${(n.w / W) * 100}%`,
              height: `${(n.h / H) * 100}%`,
            }}
          >
            <Icon type={n.icon} />
            <div className="leading-tight">
              <div className="text-[0.7rem] font-medium text-text-primary sm:text-xs">{n.label}</div>
              {n.sub && <div className="text-[0.6rem] text-text-muted sm:text-[0.65rem]">{n.sub}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
