import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rescue.anthony-hayward.com"),
  title: "48-Hour Web Rescue Sprint · Anthony Hayward",
  description:
    "One production React, Next.js, or Node problem fixed in a scheduled 48-hour sprint. $600 fixed, eight-hour cap, one revision, seven-day regression warranty. Written scope before any payment.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "One stuck problem, fixed in forty-eight hours.",
    description:
      "A $600 fixed-scope rescue sprint for React, Next.js, and Node production issues, run in writing by full-time software engineer Anthony Hayward. Capped hours, seven-day regression warranty.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable}`}>
        {children}
      </body>
    </html>
  );
}
