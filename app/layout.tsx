import type { Metadata } from "next";
import { Cinzel, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Pristine Clean & Solutions | Premium Property Care",
  description:
    "Hospital-grade sanitization, eco-friendly formulations, and white-glove property care for homes and workplaces. Licensed, bonded & insured.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${cinzel.variable}`}>
      <head>
        {/* Icon font must block-render, otherwise ligature names flash as plain text. */}
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
