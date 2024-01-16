"use client";

import clsx from "clsx";
import data from "../data.json";
import { FormatTag, TypeTag } from "./Tag";
import { useCallback, useState } from "react";

export function Legend() {
  const [selection, setSelection] = useState({
    title: null,
    description: null,
  });
  const handleSelection = useCallback(
    (title, description) => {
      if (title === selection.title) {
        setSelection({ title: null, description: null });
      } else {
        setSelection({ title, description });
      }
    },
    [selection]
  );

  return (
    <section
      className={clsx(
        "bg-kelly-green",
        "text-lilac",
        "px-3/2em",
        "pb-1em",
        "pt-1/2em",
        "overflow-auto"
      )}
    >
      <div className="-text-1">
        <h3 className={clsx("font-extended", "mb-1/2em")}>Legend</h3>
        <div className={clsx("flex", "flex-wrap", "gap-2px")}>
          {Object.entries(data.legend.types).map(([type, description]) => (
            <TypeTag
              component="button"
              onClick={() => handleSelection(type, description)}
              key={`legend-type-${type}`}
              type={type}
              selected={selection.title === type}
            />
          ))}
          {Object.entries(data.legend.formats).map(([format, description]) => (
            <FormatTag
              component="button"
              onClick={() => handleSelection(format, description)}
              key={`legend-format-${format}`}
              format={format}
              selected={selection.title === format}
            />
          ))}
        </div>
        <div className={clsx(selection?.title ? "block" : "hidden", "mt-1em")}>
          {selection.title && <p>{selection.description}</p>}
        </div>
      </div>
    </section>
  );
}
