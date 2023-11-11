import clsx from "clsx";
import { missingMarginClass } from "../utilities/class-names";

export function Subheading({ children, className }) {
  return (
    <h3
      className={clsx(
        "text-2",
        "text-center",
        "font-extended",
        "sm:text-left",
        missingMarginClass(className) && "mb-em",
        className
      )}
    >
      {children}
    </h3>
  );
}
