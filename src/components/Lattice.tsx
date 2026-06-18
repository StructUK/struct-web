const HERO_NODES = [
  { x: 180, y: 120, delay: 0 },
  { x: 420, y: 80, delay: 0.4 },
  { x: 600, y: 160, delay: 0.8 },
  { x: 820, y: 90, delay: 1.2 },
  { x: 1040, y: 150, delay: 1.6 },
  { x: 420, y: 220, delay: 0.2 },
  { x: 600, y: 40, delay: 1.0 },
  { x: 820, y: 240, delay: 1.4 },
  { x: 180, y: 260, delay: 0.6 },
  { x: 1040, y: 40, delay: 1.8 },
];

const HERO_LINES = [
  [180, 120, 420, 80],
  [420, 80, 600, 160],
  [600, 160, 820, 90],
  [820, 90, 1040, 150],
  [420, 80, 420, 220],
  [600, 160, 600, 40],
  [820, 90, 820, 240],
  [180, 120, 180, 260],
  [1040, 150, 1040, 40],
];

const PAGE_NODES = [
  { x: 260, y: 80, delay: 0 },
  { x: 480, y: 50, delay: 0.3 },
  { x: 700, y: 110, delay: 0.6 },
  { x: 940, y: 60, delay: 0.9 },
  { x: 480, y: 160, delay: 0.2 },
  { x: 700, y: 20, delay: 1.1 },
];

const PAGE_LINES = [
  [260, 80, 480, 50],
  [480, 50, 700, 110],
  [700, 110, 940, 60],
  [480, 50, 480, 160],
  [700, 110, 700, 20],
];

export default function Lattice({ variant = "hero" }: { variant?: "hero" | "page" }) {
  const nodes = variant === "hero" ? HERO_NODES : PAGE_NODES;
  const lines = variant === "hero" ? HERO_LINES : PAGE_LINES;
  const viewBox = variant === "hero" ? "0 0 1200 600" : "0 0 1200 360";
  const className = variant === "hero" ? "hero-lattice" : "page-hero-lattice";
  const opacity = variant === "hero" ? 0.5 : 0.35;

  return (
    <svg
      className={`${className} absolute inset-0 z-0`}
      style={{ opacity }}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      <g stroke="#2a9d2a" strokeWidth="1" opacity="0.5">
        {lines.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <g fill="#3dbf3d">
        {nodes.map((n, i) => (
          <circle
            key={i}
            className="lattice-node"
            cx={n.x}
            cy={n.y}
            r={variant === "hero" ? 3.5 : 3}
            style={{ animationDelay: `${n.delay}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
