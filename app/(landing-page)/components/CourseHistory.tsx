import clsx from "clsx";
import Link from "next/link";
import { Course } from "../types";
import { Subheading } from "./Subheading";

interface CourseHistoryProps {
  courses: Course[];
}

export function CourseHistory({ courses }: CourseHistoryProps) {
  const rowClasses = clsx("block", "mb-3/2em", "sm:mb-1em");
  const cellClasses = clsx("inline", "align-top");
  const bodyCellClasses = clsx("after:inline-block", "after:w-1em");
  return (
    <section className={clsx("")}>
      <Subheading>Course History</Subheading>
      <table className={clsx("border-collapse")}>
        <thead>
          <tr className={clsx(rowClasses)}>
            <th className={clsx(cellClasses)}>Place,</th>
            <th className={clsx(cellClasses)}>Title,</th>
            <th className={clsx(cellClasses)}>Objective,</th>
            <th className={clsx(cellClasses)}>When</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={`course-${index}`} className={clsx(rowClasses)}>
              <td className={clsx(cellClasses, bodyCellClasses)}>
                {course.place}
              </td>
              <td className={clsx(cellClasses, bodyCellClasses)}>
                {course.url ? (
                  <Link href={course.url} className="underline">
                    "{course.title}"
                  </Link>
                ) : (
                  <span>"{course.title}"</span>
                )}
              </td>
              <td
                className={clsx(
                  cellClasses,
                  bodyCellClasses,
                  "font-bold",
                  "text-lavender"
                )}
              >
                {course.objective}
              </td>
              <td className={clsx(cellClasses)}>{course.dates.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
