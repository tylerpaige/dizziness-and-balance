import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import "./globals.css";

export const metadata = {
  title: "Center for Dizziness and Balance",
  description: "Teaching portal for Tyler Paige",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx("font-normal", "bg-black", "m-0")}>{children}</body>
      <GoogleAnalytics gaId="G-24GL3E5F1J" />
    </html>
  );
}
