import { useEffect, useState } from "react";

interface Props {
  max: number;
  value: number;
}
export function ProgressCircle({ max, value }: Props) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = value
    ? circumference - (value / max) * circumference
    : circumference;
  useEffect(() => {
    console.log(circumference + "---" + progress);
    console.log();
  }, [progress]);
  return (
    <div>
      <svg
        viewBox="0 0 50 50"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative h-15 w-15 rotate-90 fill-none stroke-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r={radius}
          className="stroke-current stroke-[3]"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          className={`stroke-amber-500 stroke-[3] transition-[stroke-dashoffset] ease-linear`}
          pathLength={circumference}
        />
      </svg>
    </div>
  );
}
