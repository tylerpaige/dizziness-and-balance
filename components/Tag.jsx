import clsx from "clsx";

function Tag({ children, className }) {
  return (
    <span
      className={clsx(
        "-text-2",
        "md:-text-3",
        "font-bold",
        "uppercase",
        "px-em",
        "pt-3em/4",
        "pb-5em/8",
        "inline-block",
        "text-center",
        className
      )}
    >
      {children}
    </span>
  );
}

export function TypeTag({ type, selected = false }) {
  const classNames = {
    default: [],
    reference: selected
      ? ["bg-bright-green", "text-blue"]
      : ["bg-blue", "text-bright-green"],
    exercise: selected
      ? ["bg-gold", "text-purple"]
      : ["bg-purple", "text-gold"],
    lecture: selected ? ["bg-white", "text-red"] : ["bg-red", "text-white"],
  };
  return (
    <Tag className={clsx(classNames[type] || classNames.default)}>{type}</Tag>
  );
}

export function FormatTag({ format, selected = false }) {
  return (
    <Tag
      className={clsx(
        "rounded",
        "border-px",
        selected
          ? ["border-kelly-green", "bg-black"]
          : ["border-black", "bg-kelly-green"],
        "text-lilac"
      )}
    >
      {format}
    </Tag>
  );
}
