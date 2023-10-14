import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--Inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--Caveat" });

export const metadata: Metadata = {
  title: "FitScale - We Scale Fitness Brands",
  description: "",
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
