const NODE_POSITIONS = [16, 50, 84];

export default function SectionSpine({
  side = "left",
  branch = "out",
}: {
  side?: "left" | "right";
  branch?: "out" | "in" | "none";
}) {
  const sideClass = side === "left" ? "left-[6%]" : "right-[6%]";
  const branchSign = branch === "in" ? -1 : 1;
  const branchOrigin = side === "left" ? "left" : "right";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 ${sideClass} hidden w-px lg:block`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green/20 to-transparent" />
      {NODE_POSITIONS.map((top, i) => (
        <div key={top} className="absolute -left-[2px]" style={{ top: `${top}%` }}>
          <span className="block h-[4px] w-[4px] rounded-full bg-green-light/60" />
          {branch !== "none" && (
            <span
              className="absolute top-[1.5px] block h-px w-8 bg-green/20"
              style={{
                left: branchOrigin === "left" ? "2px" : undefined,
                right: branchOrigin === "right" ? "2px" : undefined,
                transform: `rotate(${branchSign * (i % 2 === 0 ? 20 : -20)}deg)`,
                transformOrigin: branchOrigin,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
