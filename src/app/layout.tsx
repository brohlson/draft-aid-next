import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProvider from "@/context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draft Aid - Underdog Fantasy Rankings",
  description: "Draft aid tool using data from Underdog Fantasy rankings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
