import clsx from "clsx";
import { ReactNode, HTMLAttributes } from "react";
import { TypeTag, FormatTag } from "./Tag";
import { ResourceType, FormatType } from "../types";

interface TaggedRowProps extends HTMLAttributes<HTMLTableRowElement> {
  type?: ResourceType;
  format?: FormatType;
  children: ReactNode;
  className?: string;
  typeTag?: Partial<Omit<React.ComponentProps<typeof TypeTag>, "type">>;
  formatTag?: Partial<Omit<React.ComponentProps<typeof FormatTag>, "format">>;
}

export function TaggedRow({
  type,
  format,
  children,
  className,
  typeTag = {},
  formatTag = {},
  ...props
}: TaggedRowProps) {
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
