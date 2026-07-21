import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rescue.anthony-hayward.com"),
  title: "48-Hour Web Rescue Sprint · Anthony Hayward",
  description:
    "One broken website problem fixed in a scheduled 48-hour window for a flat $600. Written scope before any payment, an eight-hour cap, one revision, and a seven-day regression warranty. Run by full-time software engineer Anthony Hayward.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "I fix broken websites for small businesses.",
    description:
      "One problem, a scheduled 48-hour window, a flat $600 agreed in writing before you pay anything. Run by software engineer Anthony Hayward.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
