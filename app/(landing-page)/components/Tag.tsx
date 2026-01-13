import clsx from "clsx";
import { ReactNode, ComponentType, HTMLAttributes } from "react";

interface TagProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  component?: ComponentType<any> | string;
  href?: string;
}

function Tag({ children, className, component = "span", ...props }: TagProps) {
  const Component = (props.href ? "a" : component) as ComponentType<any>;
  const componentProps =
    component === "button" ? { type: "button" as const, ...props } : props;
  return (
    <Component
      className={clsx(
        "text-neg-2",
        "md:text-neg-3",
        "font-bold",
        "uppercase",
        "px-1em",
        "pt-3/4em",
        "pb-5/8em",
        "inline-block",
        "text-center",
        className
      )}
      {...componentProps}
    >
      {children}
    </Component>
  );
}

interface TypeTagProps extends Omit<TagProps, "type" | "children"> {
  type: "reference" | "exercise" | "assignment" | "lecture";
  selected?: boolean;
  children?: ReactNode;
}

export function TypeTag({
  type,
  selected = false,
  className,
  children,
  ...props
}: TypeTagProps) {
  const classNames: Record<string, string[]> = {
    reference: selected
      ? ["bg-bright-green", "text-blue"]
      : ["bg-blue", "text-bright-green"],
    exercise: selected
      ? ["bg-gold", "text-purple"]
      : ["bg-purple", "text-gold"],
    assignment: selected
      ? ["bg-pale-blue", "text-violet"]
      : ["bg-violet", "text-pale-blue"],
    lecture: selected ? ["bg-white", "text-red"] : ["bg-red", "text-white"],
  };
  const outlineClasses = clsx(
    "outline-2px",
    "-outline-offset-3px",
    "outline-current"
  );
  return (
    <Tag
      className={clsx(
        classNames[type],
        outlineClasses,
        selected ? "outline-solid" : "outline-none",
        "focus-visible:outline-dashed",
        className
      )}
      {...props}
    >
      {children ?? type}
    </Tag>
  );
}

interface FormatTagProps extends Omit<TagProps, "children"> {
  format: string;
  selected?: boolean;
  children?: ReactNode;
}

export function FormatTag({
  format,
  selected = false,
  className,
  children,
  ...props
}: FormatTagProps) {
  return (
    <Tag
      className={clsx(
        "rounded-sm",
        "border-px",
        selected
          ? ["border-kelly-green", "bg-black"]
          : ["border-black", "bg-kelly-green"],
        "focus-visible:outline-solid focus-visible:outline-current focus-visible:outline-1px focus-visible:-outline-offset-1px",
        "text-lilac",
        className
      )}
      {...props}
    >
      {children ?? format}
    </Tag>
  );
}
