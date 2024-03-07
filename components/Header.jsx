import Link from "next/link";
import TopHeader from "./TopHeader";
import Image from "next/image";
import { memo } from "react";
import Germany from "../public/germany.png";

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
      <TopHeader />
      <header className="border-t border-b border-[#C1D0E0] bg-white shadow-md px-4 xl:px-0">
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
export default Header;
