import clsx from "clsx";

function Tag({ children, className }) {
  return (
    <span
      className={clsx(
        "-text-2",
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

export function TypeTag({ type }) {
  const classNames = {
    default: [],
    reference: ["bg-blue", "text-bright-green"],
    exercise: ["bg-purple", "text-gold"],
    lecture: ["bg-red", "text-white"],
  };
  return (
    <Tag className={clsx(classNames[type] || classNames.default)}>{type}</Tag>
  );
}

export function FormatTag({ format }) {
  return (
    <Tag
      className={clsx(
        "rounded",
        "border-px",
        "border-black",
        "bg-kelly-green",
        "text-lilac"
      )}
    >
      {format}
    </Tag>
  );
}
