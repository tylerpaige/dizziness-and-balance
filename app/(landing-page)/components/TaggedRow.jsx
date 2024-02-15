import clsx from "clsx";
import { TypeTag, FormatTag } from "./Tag";

export function TaggedRow({
  type,
  format,
  children,
  className,
  typeTag = {},
  formatTag = {},
  ...props
}) {
  return (
    <tr className={clsx(className)} {...props}>
      <td className={clsx("block", "sm:table-cell", "sm:align-top")}>
        <div
          className={clsx(
            "flex",
            "nowrap",
            "gap-px",
            "sm:pb-1/4em",
            "sm:justify-start",
            "sm:translate-y-[-7%]"
          )}
        >
          {type && <TypeTag type={type} {...typeTag} />}
          {format && <FormatTag format={format} {...formatTag} />}
        </div>
      </td>
      <td
        className={clsx(
          "block",
          "mb-2em",
          "sm:mb-0",
          "sm:table-cell",
          "sm:align-top",
          "sm:pl-1/2em",
          "sm:pb-1/4em"
        )}
      >
        {children}
      </td>
    </tr>
  );
}
