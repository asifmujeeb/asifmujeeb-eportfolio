import { PropsWithChildren } from "react";

interface HeroOrbitProps {
  size: number;
  rotation: number;
  animate?: boolean; // Added a prop to control animation
}

export const HeroOrbit = ({
  children,
  size,
  rotation,
  animate = true, // Default to true if not provided
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={`${
          animate ? "animate-spin [animation-duration:60s]" : ""
        }`}
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="inline-flex animate-spin [animation-duration:5s]">
          {children}
        </div>
      </div>
    </div>
  );
};
