import clsx from "clsx";
import { Header } from "./components/Header";
import { Resources } from "./components/Resources";
import { CourseHistory } from "./components/CourseHistory";

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
        "sm:max-w-lg",
      )}
    >
      <Header />
      <main className="">
        <Resources />
        <CourseHistory />
      </main>
    </div>
  );
}
