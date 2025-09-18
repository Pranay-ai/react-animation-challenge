import { StarSVG } from "./components/StartSVG";
import AnimatedArc from "./components/AnimatedArc";

export default function Home() {
  return (
    <div className="bg-black h-screen grid place-items-center">
      {/* whole sequence container */}
      <div className="flex flex-col gap-9 items-center shift-down-seq sequence-root">
        <div className="star-wrapper">
          <StarSVG />
        </div>

        <AnimatedArc />

        {/* appears at the very end */}
        <div className="elevate-text text-white text-7xl">ELEVATE</div>
      </div>
    </div>
  );
}
