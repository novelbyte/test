// src/app/layout.tsx

import { Header } from "./sections/Header";
import Footer from "./sections/Footer";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Load DM Sans font from Google Fonts
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "NOVELBYTE AI",
  description: "NOVELBYTE AI AUTOMATYZACJA CHATBOTY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="relative">
      <head>
        {/* Favicon link */}
        <link rel="icon" href="/favicon-32x32.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />

        {/* Open Graph meta tags */}
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:title" content="NOVELBYTE AI" />
        <meta property="og:description" content="NOVELBYTE AI AUTOMATYZACJA CHATBOTY" />
        <meta property="og:url" content="https://www.novelbyte.pl" />
        

      </head>
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
