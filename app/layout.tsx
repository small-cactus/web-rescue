import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://rescue.anthony-hayward.com"),
    title: "48-Hour Web Rescue Sprint · Anthony Hayward",
    description:
      "One production React, Next.js, or Node problem fixed in a scheduled 48-hour sprint. $600 fixed, eight-hour cap, one revision, seven-day regression warranty. Written scope before any payment.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "One stuck problem, fixed in 48 hours.",
      description:
        "$600 fixed-scope rescue sprint for React, Next.js, and Node production issues, run by full-time software engineer Anthony Hayward. Written scope, capped hours, seven-day warranty.",
      images: ["/og.png"],
    },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
