import clsx from "clsx";

function Tag({ children, className, component = "span", ...props }) {
  const Component = props.href ? "a" : component;
  return (
    <Component
      className={clsx(
        "-text-2",
        "md:-text-3",
        "font-bold",
        "uppercase",
        "px-1em",
        "pt-3/4em",
        "pb-5/8em",
        "inline-block",
        "text-center",
        className
      )}
      {...(component === "button" ? { type: "button" } : {})}
      {...props}
    >
      {children}
    </Component>
  );
}

export function TypeTag({ type, selected = false, className, ...props }) {
  const classNames = {
    default: [],
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
        classNames[type] || classNames.default,
        outlineClasses,
        selected && "outline",
        "focus-visible:outline-dashed",
        className
      )}
      {...props}
    >
      {type}
    </Tag>
  );
}

export function FormatTag({ format, selected = false, className, ...props }) {
  return (
    <Tag
      className={clsx(
        "rounded",
        "border-px",
        selected
          ? ["border-kelly-green", "bg-black"]
          : ["border-black", "bg-kelly-green"],
        "focus-visible:outline focus-visible:outline-current focus-visible:outline-1px focus-visible:-outline-offset-1px",
        "text-lilac",
        className
      )}
      {...props}
    >
      {format}
    </Tag>
  );
}
