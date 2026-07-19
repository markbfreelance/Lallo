interface WaveDividerProps {
  flip?: boolean;
  className?: string;
  colorFrom?: string;
  colorTo?: string;
}

export default function WaveDivider({
  flip = false,
  className = "",
  colorFrom = "var(--color-sand-50)",
  colorTo = "var(--color-river-950)",
}: WaveDividerProps) {
  return (
    <div
      className={`wave-divider ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`wave-grad-${flip ? "flip" : "normal"}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>
        <path
          d="M0,0 C150,50 350,0 500,30 C650,60 800,10 1000,40 C1100,55 1150,20 1200,30 L1200,60 L0,60 Z"
          fill={colorFrom}
        />
        <path
          d="M0,20 C200,50 400,5 600,35 C800,65 950,15 1200,45 L1200,60 L0,60 Z"
          fill={colorTo}
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
