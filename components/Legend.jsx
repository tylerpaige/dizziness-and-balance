import clsx from "clsx";
import { Subheading } from "./Subheading";
import { TaggedRow } from "./TaggedRow";
import data from "../data.json";

export function Legend() {
  return (
    <section
      className={clsx(
        "bg-kelly-green",
        "text-lilac",
        "border-b-1",
        "border-b-blue",
        "px-1",
        "pb-1",
        "overflow-auto"
      )}
    >
      <Subheading className={clsx("my-em")}>Legend</Subheading>
      <table>
        <tbody>
          {Object.entries(data.legend.types).map(
            ([type, description], index) => (
              <TaggedRow type={type} key={`legend-type-${index}`}>
                {description}
              </TaggedRow>
            )
          )}
          {Object.entries(data.legend.formats).map(
            ([format, description], index) => (
              <TaggedRow format={format} key={`legend-format-${index}`}>
                {description}
              </TaggedRow>
            )
          )}
        </tbody>
      </table>
    </section>
  );
}
