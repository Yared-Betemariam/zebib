import type { Metadata } from "next";
import "./globals.css";
import { font } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Zebib's Ebook Center",
    template: "%s | Zebib",
  },
  description: "Best Islamic Ebook Center in Ethiopia",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
