import { Divide } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
interface Props {
  path: string;
  text: string;
  fontSize?: string;
  isMain?: boolean;
  icon?: React.ReactNode;
  fontWeight?:
    | "font-semibold"
    | "font-bold"
    | "font-extrabold"
    | "font-light"
    | "font-medium";
  className?: string;
}
export function ComponentLoad({
  path,
  text,
  icon,
  isMain = true,
  fontWeight = "font-semibold",
  fontSize = "text-lg",
  className,
}: Props) {
  return (
    <li className={`${className} ${!isMain && `max-sm:hidden`} `}>
      <Link to={path}>
        <div className={` ${icon && "gap-1.5"} flex items-center`}>
          {icon && icon}
          <h1 className={`${fontWeight} ${fontSize} text-neutral-500`}>
            {text}
          </h1>
        </div>
      </Link>
    </li>
  );
}
