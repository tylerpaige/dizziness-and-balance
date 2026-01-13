import clsx from "clsx";
import { ReactNode } from "react";
import { missingMarginClass } from "../../../lib";

interface SubheadingProps {
  children: ReactNode;
  className?: string;
}

export function Subheading({ children, className }: SubheadingProps) {
  return (
    <h3
      className={clsx(
        "text-2",
        "text-center",
        "font-extended",
        "sm:text-left",
        missingMarginClass(className) && "mb-1em",
        className
      )}
    >
      {children}
    </h3>
  );
}
