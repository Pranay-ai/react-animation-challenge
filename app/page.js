import { StarSVG } from "./components/StartSVG";
import AnimatedArc from "./components/AnimatedArc";

export default function Home() {
  return (
    <div className="bg-black h-screen grid place-items-center">
      {/* whole sequence container */}
      <div className="flex flex-col gap-9 items-center sequence-seq">
        <StarSVG />
        <AnimatedArc />
        {/* appears at the very end */}
        <div className="elevate-text text-white text-9xl tracking-[0.3em] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          ELEVATE
        </div>
      </div>
    </div>
  );
}
