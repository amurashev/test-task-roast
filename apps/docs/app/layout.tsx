import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

const font = IBM_Plex_Sans({ subsets: ["latin"], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: "Docs",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
