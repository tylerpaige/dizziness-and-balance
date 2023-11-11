import clsx from "clsx";
import { Legend } from "../components/Legend";
import { Resources } from "../components/Resources";
import { CourseHistory } from "../components/CourseHistory";
import Head from "next/head";

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
        "sm:rotate-[0.3deg]"
      )}
    >
      <header>
        <section
          className={clsx(
            "bg-lilac",
            "text-kelly-green",
            "px-1",
            "py-2",
            "font-extended"
          )}
        >
          <h1 className={clsx("text-3", "text-center", "sm:text-left")}>
            Center for Dizziness and Balance
          </h1>
        </section>
        <section
          className={clsx("bg-yellow", "px-1", "py-3", "markdown", "sm:py-2")}
        >
          <p>
            This is the teaching portal for{" "}
            <a href="https://tylerpaige.com">Tyler Paige</a>. I will list all of
            my teaching materials here, like syllabi, workshops, and lectures.
          </p>
          <p>
            The throughline between my teaching and my creative practice is to
            find useful disorientations: misheard phrases that spark interest;
            quick glances at the clock when a second feels strangely longer;
            sudden vividness when a truism feels deep. Therefore, the name here
            is taken from a rehabilitation center seen driving 65mph down the
            Garden State Parkway—the center between dizziness and balance.
          </p>
        </section>
      </header>
      <main className="">
        <Legend />
        <Resources />
        <CourseHistory />
      </main>
    </div>
  );
}
