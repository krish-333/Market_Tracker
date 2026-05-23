import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Equity Market Intelligence Tracker",
  description:
    "Institutional investor & IPO intelligence dashboard for Indian equity markets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
