import clsx from "clsx";
import Link from "next/link";
import { Subheading } from "./Subheading";
import { TaggedRow } from "./TaggedRow";
import data from "../data.json";

export function Resources() {
  return (
    <section className={clsx("mb-3")}>
      <Subheading className="mt-2em mb-1em">Resources</Subheading>
      <table>
        <tbody>
          {data.resources.map((resource, index) => (
            <TaggedRow
              type={resource.type}
              format={resource.format}
              key={`resource-${index}`}
            >
              <>
                <Link
                  href={resource.url}
                  className={clsx("text-kelly-green", "visited:text-dark-green", "underline")}
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
