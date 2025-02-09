// src/app/layout.tsx

import { Header } from "./sections/Header";
import Footer from "./sections/Footer";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Load DM Sans font from Google Fonts
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "NOVELBYTE AI",
  description: "NOVELBYTE AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={`${dmSans.className} antialiased bg-[#0f172a]`}>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
