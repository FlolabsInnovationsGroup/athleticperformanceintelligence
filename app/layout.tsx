import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MoodChanger | Athletic Performance Intelligence",
    template: "%s | MoodChanger",
  },
  description:
    "Hardware-agnostic sports performance intelligence for organizations. MoodChanger, powered by FloBrain, unifies mental, physical, and contextual athlete data into actionable readiness, load, recovery, risk, and performance insight.",
  keywords: [
    "sports performance",
    "athlete intelligence",
    "FloBrain",
    "MoodChanger",
    "readiness",
    "load management",
    "enterprise sports analytics",
  ],
  openGraph: {
    title: "MoodChanger | Athletic Performance Intelligence",
    description:
      "The intelligence layer that turns fragmented athlete data into structured performance insight: with or without wearables.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full antialiased font-sans">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-[160%] rounded-lg bg-accent px-4 py-2 text-sm font-medium text-slate-950 shadow-lg transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
