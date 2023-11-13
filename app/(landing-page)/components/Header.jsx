import clsx from "clsx";

export function Header() {
  return (
    <header>
        <section
          className={clsx(
            "bg-lilac",
            "text-kelly-green",
            "px-3/2em",
            "py-1/2em",
            "font-extended"
          )}
        >
          <h1 className={clsx()}>
            Center for Dizziness and Balance
          </h1>
        </section>
        <section
          className={clsx("bg-yellow", "px-3/2em", "pt-1/2em", "pb-1em", "markdown")}
        >
          <p>
            This is the teaching portal for{" "}
            <a href="https://tylerpaige.com" className="underline">Tyler Paige</a>. I will list all of
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
  )
}