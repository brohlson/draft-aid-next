import type { Metadata } from "next";
import { Inter } from "next/font/google";
import papaparse from "papaparse";

import AppProvider from "@/context";
import "./globals.css";
import { formatRawData } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draft Aid - Underdog Fantasy Rankings",
  description: "Draft aid tool using data from Underdog Fantasy rankings",
};

async function fetchLiveData() {
  try {
    const response = await fetch(
      `https://underdogfantasy.com/rankings/download/230c2bd5-5fb4-4d6d-a0f4-e2dac0ec81ff/ccf300b0-9197-5951-bd96-cba84ad71e86/9e62863e-1b29-53e8-8aca-2aae06aaac5f`
    );
    const data = await response.text();
    const parsed = papaparse.parse(data, { header: true });
    return formatRawData(parsed?.data || []);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const liveData = await fetchLiveData();
  return (
    <AppProvider liveData={liveData}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
