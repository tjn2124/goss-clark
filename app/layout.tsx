import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "./fonts/CormorantGaramond-VariableFont_wght.ttf",
  variable: "--font-display",
  weight: "400 700",
  style: "normal",
});

const sans = localFont({
  src: "./fonts/LibreFranklin-VariableFont_wght.ttf",
  variable: "--font-sans",
  weight: "300 600",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Goss Clark | Mystery & Crime Fiction",
  description: "Pacific Northwest mystery and crime fiction by Goss Clark.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
