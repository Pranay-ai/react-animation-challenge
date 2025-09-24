export default function AnimatedArc() {
  return (
    <div className="df-root arc">
      <div className="diagonal-box left">
        <div className="fill-layer" />
        <div className="overlay-circle" />
      </div>
      <div className="diagonal-box right">
        <div className="fill-layer" />
        <div className="overlay-circle-right" />
      </div>

      <style>{`
        .df-root {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          background: black;
          margin: 0;
        }
        .diagonal-box {
          position: relative;
          width: 200px;
          height: 200px;
          background: black;
          overflow: hidden;
        }
        .fill-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top right, white 50%, transparent 50%);
          background-size: 200% 200%;
          background-position: top right;
          animation: diagonalFill 1s ease-out forwards;
        }
        .left .fill-layer {
          animation-delay: 0.5s; /* starts at 0.5s */
        }
        .right .fill-layer {
          animation-delay: 1s; /* starts at 1s */
        }
        @keyframes diagonalFill {
          to {
            background-position: bottom left;
          }
        }
        .overlay-circle {
          position: absolute;
          width: 200%;
          height: 200%;
          bottom: 0;
          left: 0;
          transform: translate(-50%, 50%);
          border-radius: 50%;
          background: black;
          pointer-events: none;
          z-index: 1;
        }
        .overlay-circle::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid white;
          clip-path: inset(0 0 50% 50%); 
          opacity: 0;
          animation: revealBorderRightToTop 0.5s ease-out forwards;
          animation-delay: 0s;
        }
        .overlay-circle-right {
          position: absolute;
          width: 200%;
          height: 200%;
          bottom: 0;
          right: 0;
          transform: translate(50%, 50%);
          border-radius: 50%;
          background: black;
          pointer-events: none;
          z-index: 1;
        }
        .overlay-circle-right::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px solid white;
          clip-path: inset(0 50% 50% 0);
          opacity: 0;
          animation: revealBorderLeftToTop 0.5s ease-out forwards;
          animation-delay: 0s;
        }
        @keyframes revealBorderRightToTop {
          0% {
            opacity: 1;
            clip-path: inset(0 0 50% 50%);
            transform: rotate(90deg);
          }
          100% {
            opacity: 1;
            clip-path: inset(0 0 50% 50%);
            transform: rotate(0deg);
          }
        }
        @keyframes revealBorderLeftToTop {
          0% {
            opacity: 1;
            clip-path: inset(0 50% 50% 0);
            transform: rotate(-90deg);
          }
          100% {
            opacity: 1;
            clip-path: inset(0 50% 50% 0);
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
