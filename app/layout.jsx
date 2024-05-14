import { Inter } from "next/font/google";
import "./globals.css";

// Script component
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import brandImage from '../public/brandlogo.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saran Ecommerce",
  description: "Ecom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={brandImage.src} type="image/png" sizes="32x32"/>
      </head>
      <body className={`${inter.className} bg-primary flex flex-col justify-between`}>
        {/* Header */}
        <Header />
        {/* childrens */}
        {children}
        {/* footers */}
        <Footer />
        {/* include scripts */}
        <Script as="style" rel="stylesheet preload prefetch" src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" integrity="sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Ck0G81D+eO63BaqHaJ3YZX9wuqjwgfcV/MrB2PhaVX9DkYVhbFpStnqpQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
