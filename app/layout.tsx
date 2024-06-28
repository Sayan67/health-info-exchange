import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const Open = Open_Sans({ subsets: ["latin"],weight:["300","400","500","600","700","800"]});

export const metadata: Metadata = {
  title: "MedSafe",
  description: "Health exchange for sharing private medical record to all over the world without sharing your personal informaiton.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Open.className}>{children}</body>
    </html>
  );
}
