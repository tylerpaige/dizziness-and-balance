"use client";

import clsx from "clsx";
import Link from "next/link";
import { Subheading } from "./Subheading";
import { TaggedRow } from "./TaggedRow";
import data from "../data.json";
import { FilterPanel } from "./FilterPanel";
import { useEffect, useState, useCallback } from "react";
import { Resource, ResourceType, Data } from "../types";

const typedData = data as Data;

export function Resources() {
  const [filter, setFilter] = useState<ResourceType | null>(null);
  const [resources, setResources] = useState<Resource[]>(typedData.resources);
  useEffect(() => {
    if (filter) {
      setResources(
        typedData.resources.filter((resource) => resource.type === filter)
      );
    } else {
      setResources(typedData.resources);
    }
  }, [filter]);
  const handleFilterChange = useCallback((filter: ResourceType | null) => {
    setFilter(filter);
  }, []);

  return (
    <section className={clsx("mb-3")}>
      <Subheading className="mt-2em mb-1/2em">Resources</Subheading>
      <FilterPanel
        onChange={handleFilterChange}
        className="mb-3/2em text-gray"
      />
      <table>
        <tbody>
          {resources.map((resource, index) => (
            <TaggedRow type={resource.type} key={`resource-${index}`}>
              <>
                <Link
                  href={resource.url}
                  className={clsx(
                    "text-kelly-green",
                    "visited:text-dark-green",
                    "underline"
                  )}
                >
                  {resource.title}
                </Link>
                {resource.description && (
                  <span className="text-gray">
                    &nbsp;&nbsp;&nbsp;{resource.description}
                  </span>
                )}
              </>
            </TaggedRow>
          ))}
        </tbody>
      </table>
    </section>
  );
}
