import { useEffect } from "react";
import './loader.css'

export function ProgressCircle() {

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  // const progress = loaded
  //   ? circumference - (loaded / total) * circumference
  //   : circumference;
  // useEffect(() => {
  //   console.log(total);
  // }, [total]);

  
  return (
    <div className=" h-20 w-20">
      <svg
        viewBox="0 0 50 50"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative h-15 w-15  fill-none stroke-current animate-[spin_2s_infinite_linear] scale-150"
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
          strokeDashoffset={circumference/2*1.5}
          className={`animate-dash  stroke-amber-500 stroke-[3]  ${`transition-[stroke-dashoffset]`} ease-linear`}
          pathLength={circumference}
        />
      </svg>
    </div>
  );
}
