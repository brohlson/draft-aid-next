import type { Metadata } from "next";
import { Inter } from "next/font/google";
import papaparse from "papaparse";

import AppProvider from "@/context";
import { formatRawData, rawData } from "@/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draft Aid - Underdog Fantasy Rankings",
  description: "Draft aid tool using data from Underdog Fantasy rankings",
};

async function fetchLiveData() {
  try {
    const response = await fetch(
      `https://underdogfantasy.com/rankings/download/8d0b005a-00e7-4752-8800-4cb803085350/ccf300b0-9197-5951-bd96-cba84ad71e86/100fec91-ff4f-4368-bbee-c7fcc07307d2`,
      { next: { revalidate: 3600 } }
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
    <AppProvider liveData={rawData}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
