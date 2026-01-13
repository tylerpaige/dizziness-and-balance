import clsx from "clsx";
import { Header } from "./components/Header";
import { Resources } from "./components/Resources";
import { CourseHistory } from "./components/CourseHistory";
import data from "./data.json";
import { Data } from "./types";

const typedData = data as Data;

export const metadata = {
  title: "Center for Dizziness and Balance",
  description: "Teaching portal for Tyler Paige",
};

export default function Home() {
  return (
    <div
      className={clsx(
        "text-0",
        "bg-black",
        "text-kelly-green",
        "font-narrow",
        "m-0",
        "p-1",
        "sm:max-w-lg"
      )}
    >
      <Header />
      <main className="">
        <Resources
          resources={typedData.resources}
          legend={typedData.legend}
        />
        <CourseHistory courses={typedData.courses} />
      </main>
    </div>
  );
}
