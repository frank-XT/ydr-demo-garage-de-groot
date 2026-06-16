import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage De Groot",
  description: "Garage De Groot helpt klanten met kwaliteit en service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
