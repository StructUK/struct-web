export default function GlowBloom({
  className = "",
  size = 420,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-green/10 blur-[110px] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
