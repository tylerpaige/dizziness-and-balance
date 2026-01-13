"use client";

import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { ResourceType } from "../types";
import { TypeTag } from "./Tag";

interface FilterPanelProps {
  types: Record<ResourceType, string>;
  onChange?: (filter: ResourceType | null) => void;
  className?: string;
}

export function FilterPanel({
  types,
  onChange = () => {},
  className = "",
}: FilterPanelProps) {
  const [selection, setSelection] = useState<{
    title: ResourceType | null;
    description: string | null;
  }>({
    title: null,
    description: null,
  });
  useEffect(() => {
    onChange(selection.title);
  }, [selection, onChange]);
  const handleSelection = useCallback(
    (title: ResourceType, description: string) => {
      if (title === selection.title) {
        setSelection({ title: null, description: null });
      } else {
        setSelection({ title, description });
      }
    },
    [selection]
  );

  return (
    <section className={clsx(className)}>
      <div className="text-neg-1 flex flex-row nowrap gap-1em">
        <h3 className={clsx("font-extended", "mb-1/2em")}>Filter:</h3>
        <div>
          <div className={clsx("flex", "flex-wrap", "gap-2px")}>
            {Object.entries(types).map(([type, description]) => (
              <TypeTag
                component="button"
                onClick={() =>
                  handleSelection(type as ResourceType, description)
                }
                key={`legend-type-${type}`}
                type={type as ResourceType}
                selected={selection.title === type}
              />
            ))}
          </div>
          <div
            className={clsx(selection?.title ? "block" : "hidden", "mt-1/2em")}
          >
            {selection.title && <p>{selection.description}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
