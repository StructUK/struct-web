export type IconShape = {
  rect?: boolean;
  rects?: { x: number; y: number; width: number; height: number; rx: number }[];
  path?: string;
  circle?: { cx: number; cy: number; r: number };
  circles?: { cx: number; cy: number; r: number }[];
};

export default function ServiceIcon({ shape }: { shape: IconShape }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="var(--green-light)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {shape.rect && <rect x="3" y="5" width="18" height="14" rx="2" />}
      {shape.rects?.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.width} height={r.height} rx={r.rx} />
      ))}
      {shape.path && <path d={shape.path} />}
      {shape.circle && <circle cx={shape.circle.cx} cy={shape.circle.cy} r={shape.circle.r} />}
      {shape.circles?.map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
      ))}
    </svg>
  );
}
