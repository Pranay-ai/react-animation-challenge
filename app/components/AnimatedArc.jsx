export default function AnimatedArc() {
  return (
    <div className="relative w-[220px] h-[110px]">
      {/* Left tile */}
      <div className="absolute left-0 top-0 w-[110px] h-[110px] overflow-hidden">
        {/* animated white fill left to right */}
        <div className="absolute inset-0 bg-white animate-[growX_2s_linear_forwards]" />
        {/* clipped black shape */}
        <div className="relative w-full h-full bg-black [clip-path:ellipse(100%_100%_at_0%_100%)]" />
      </div>

      {/* Right tile */}
      <div className="absolute right-0 top-0 w-[110px] h-[110px] overflow-hidden">
        {/* animated white fill bottom to top */}
        <div className="absolute inset-0 bg-white animate-[growY_2s_linear_forwards]" />
        {/* clipped black shape */}
        <div className="relative w-full h-full bg-black [clip-path:ellipse(100%_100%_at_100%_100%)]" />
      </div>

      {/* Border on top of both tiles */}
      <svg
        className="absolute inset-0 pointer-events-none"
        viewBox="0 0 440 220"
        fill="none"
      >
        <path
          d="M0 0 H440"
          stroke="white"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 0 A220 220 0 0 1 220 220"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M440 0 A220 220 0 0 0 220 220"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
