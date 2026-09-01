export default function HeroBackground() {
  return (
    <svg
      className="absolute inset-0 z-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid-fine" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid-major" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="0.5" />
        </pattern>
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0c0c0c" stopOpacity="0" />
          <stop offset="75%" stopColor="#0c0c0c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0c0c0c" stopOpacity="0.92" />
        </radialGradient>
        <radialGradient id="grid-fade" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0.2" />
        </radialGradient>
        <mask id="grid-mask">
          <rect width="100%" height="100%" fill="url(#grid-fade)" />
        </mask>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid-fine)" mask="url(#grid-mask)" />
      <rect width="100%" height="100%" fill="url(#grid-major)" mask="url(#grid-mask)" />

      <rect x="12%" y="10%" width="55%" height="76%" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <rect x="22%" y="22%" width="34%" height="52%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.75" />
      <rect x="72%" y="18%" width="18%" height="62%" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />

      <line x1="8%" y1="50%" x2="92%" y2="50%" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="4 8" />

      <g stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none">
        <line x1="48" y1="40" x2="72" y2="40" />
        <line x1="48" y1="40" x2="48" y2="64" />
      </g>
      <g stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" style={{ transform: "translate(100%,100%)" }}>
        <line x1="-48" y1="-40" x2="-72" y2="-40" />
        <line x1="-48" y1="-40" x2="-48" y2="-64" />
      </g>
      <g stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" style={{ transform: "translate(100%,0)" }}>
        <line x1="-48" y1="40" x2="-72" y2="40" />
        <line x1="-48" y1="40" x2="-48" y2="64" />
      </g>
      <g stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" style={{ transform: "translate(0,100%)" }}>
        <line x1="48" y1="-40" x2="72" y2="-40" />
        <line x1="48" y1="-40" x2="48" y2="-64" />
      </g>

      <line x1="68%" y1="8%" x2="94%" y2="38%" stroke="rgba(255,255,255,0.04)" strokeWidth="0.75" />
      <line x1="74%" y1="8%" x2="94%" y2="28%" stroke="rgba(255,255,255,0.03)" strokeWidth="0.75" />

      <rect width="100%" height="100%" fill="url(#vignette)" />
    </svg>
  );
}
