import clsx from "clsx";
import { TypeTag, FormatTag } from "./Tag";

export function TaggedRow({ type, format, children, className, ...props }) {
  return (
    <tr className={clsx(className)} {...props}>
      <td className={clsx("block", "sm:table-cell", "sm:align-top")}>
        <div
          className={clsx(
            "flex",
            "nowrap",
            "gap-px",
            "sm:pb-em/4",
            "sm:justify-start",
            "sm:translate-y-[-7%]"
          )}
        >
          {type && <TypeTag type={type} />}
          {format && <FormatTag format={format} />}
        </div>
      </td>
      <td
        className={clsx(
          "block",
          "mb-2em",
          "sm:mb-0",
          "sm:table-cell",
          "sm:align-top",
          "sm:pl-em/2",
          "sm:pb-em/4"
        )}
      >
        {children}
      </td>
    </tr>
  );
}
