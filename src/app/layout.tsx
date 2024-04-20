import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-black min-h-screen text-white md:grid grid-cols-4">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-2">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
