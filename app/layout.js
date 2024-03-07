import { Inter } from "next/font/google";
import "./globals.css";
import Germany from "../public/germany.png";

// Script component
import Script from "next/script";
import { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brany Ecommerce",
  description: "Ecom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary min-h-screen`}>
        <Header />
        {/* //Header */}
        <div className="px-4 xl:px-0 mt-36">{children}</div>
        <div className="">footer</div>
        {/* footers */}
        <Script as="style" rel="stylesheet preload prefetch" src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" integrity="sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Ck0G81D+eO63BaqHaJ3YZX9wuqjwgfcV/MrB2PhaVX9DkYVhbFpStnqpQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </body>
    </html>
  );
}

const Header = memo(function Header() {
  const _subNavItems = [
    {
      label: "All category",
      href: "/",
    },
    {
      label: "Hot offers",
      href: "/",
    },
    {
      label: "Gift boxes",
      href: "/",
    },
    {
      label: "Projects",
      href: "/",
    },
    {
      label: "Menu item",
      href: "/",
    },
  ];
  return (
    <div className="">
      <header className="bg-white px-4 xl:px-0">
        <div className="max-w-7xl mx-auto h-16 flex items-center">bbasdbsa</div>
      </header>
      <header className="border-t border-[#C1D0E0] bg-white shadow-md px-4 xl:px-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-bars" suppressHydrationWarning></i>
            <div className="space-x-5">
              {_subNavItems?.map((_submenu) => (
                <Link href={_submenu.href} className="text-base text-[#2F394A]">
                  {_submenu.label}
                </Link>
              ))}
              <span className="text-base text-[#2F394A] inline-flex gap-2 items-center">
                Help <i class="fa-solid fa-angle-down text-[#8B96A5] text-sm mt-1" suppressHydrationWarning></i>
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-base text-[#2F394A] inline-flex gap-2 items-center">
              English, USD <i class="fa-solid fa-angle-down text-[#8B96A5] text-sm mt-1" suppressHydrationWarning></i>
            </span>
            <span className="text-base text-[#2F394A] inline-flex gap-2 items-center">
              Ship to <Image src={Germany} width="20" height="20" /> <i class="fa-solid fa-angle-down text-[#8B96A5] text-sm mt-1" suppressHydrationWarning></i>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
});
