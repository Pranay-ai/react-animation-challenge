export function StarSVG() {
  return (
    // A parent container is required to position both halves together.
    // The final shape will be 110px wide and 110px tall.
    <div className="relative w-[110px] h-[110px]">
      {/* Top Half of the Star (Your first component) */}
      <div className="absolute top-0 left-0 w-[110px] h-[55px]">
        {/* Left tile */}
        <div className="absolute left-0 top-0 w-[55px] h-[55px] overflow-hidden">
          <div className="absolute inset-0 bg-white " />
          <div className="relative w-full h-full bg-black [clip-path:ellipse(100%_100%_at_0%_0%)]" />
        </div>

        {/* Right tile */}
        <div className="absolute right-0 top-0 w-[55px] h-[55px] overflow-hidden">
          <div className="absolute inset-0 bg-white " />
          <div className="relative w-full h-full bg-black [clip-path:ellipse(100%_100%_at_100%_0%)]" />
        </div>
      </div>

      {/* Bottom Half of the Star (Your commented-out component) */}
      <div className="absolute bottom-0 left-0 w-[110px] h-[55px]">
        {/* Left tile */}
        <div className="absolute left-0 top-0 w-[55px] h-[55px] overflow-hidden">
          <div className="absolute inset-0 bg-white " />
          <div className="relative w-full h-full bg-black [clip-path:ellipse(100%_100%_at_0%_100%)]" />
        </div>

        {/* Right tile */}
        <div className="absolute right-0 top-0 w-[55px] h-[55px] overflow-hidden">
          <div className="absolute inset-0 bg-white " />
          <div className="relative w-full h-full bg-black [clip-path:ellipse(100%_100%_at_100%_100%)]" />
        </div>
      </div>
    </div>
  );
}
