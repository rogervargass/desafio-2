import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MenuSideBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FluxStation Front Challenge",
  description: "Challenge Front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-1`}>
        <MenuSideBar />
        {children}
      </body>
    </html>
  );
}
