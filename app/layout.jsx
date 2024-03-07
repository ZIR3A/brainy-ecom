import { Inter } from "next/font/google";
import "./globals.css";


// Script component
import Script from "next/script";
import { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brany Ecommerce",
  description: "Ecom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary flex flex-col justify-between`}>
        {/* //Header */}
        <Header />
        {/* childrens */}
        <div className="px-4 xl:px-0">{children}</div>
        {/* footers */}
        <div className="bg-white">footer</div>
        <Script as="style" rel="stylesheet preload prefetch" src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" integrity="sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Ck0G81D+eO63BaqHaJ3YZX9wuqjwgfcV/MrB2PhaVX9DkYVhbFpStnqpQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </body>
    </html>
  );
}
