import clsx from "clsx";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Technology B",
  description: "Course materials for a class about technology and power, held at the Pratt Institute.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx("font-normal", "m-0")}>
        {children}
      </body>
    </html>
  );
}
