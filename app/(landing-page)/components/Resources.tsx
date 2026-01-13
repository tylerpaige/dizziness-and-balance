"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Resource, ResourceType, Data } from "../types";
import { Subheading } from "./Subheading";
import { TaggedRow } from "./TaggedRow";
import { FilterPanel } from "./FilterPanel";

interface ResourcesProps {
  resources: Resource[];
  legend: Data["legend"];
}

export function Resources({ resources: allResources, legend }: ResourcesProps) {
  const [filter, setFilter] = useState<ResourceType | null>(null);
  const [resources, setResources] = useState<Resource[]>(allResources);
  useEffect(() => {
    if (filter) {
      setResources(allResources.filter((resource) => resource.type === filter));
    } else {
      setResources(allResources);
    }
  }, [filter, allResources]);
  const handleFilterChange = useCallback((filter: ResourceType | null) => {
    setFilter(filter);
  }, []);

  return (
    <section className={clsx("mb-3")}>
      <Subheading className="mt-2em mb-1/2em">Resources</Subheading>
      <FilterPanel
        types={legend.types}
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
