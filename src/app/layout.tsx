import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--Inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--Caveat" });

export const metadata: Metadata = {
  title: "Fit-Solutions: We Help Fitness Brands Scale.",
  description:
    "Claim a FREE custom-coded landing page (an $825 value!) for your brand when you participate in our marketing research study (only takes 15 minutes). ",
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
