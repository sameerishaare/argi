import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agrity Crop Science",
  description:
    "Agrity Crop Science - Supplier for Bio Insecticide, Pesticides, Herbicides and Plant Growth Promoters for Seed Treatment from Dhoraji, Gujarat, India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-adsense-account" content="ca-pub-4249776601215136"></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4249776601215136"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
