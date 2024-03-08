import Link from "next/link";
import TopHeader from "./TopHeader";
import Image from "next/image";
import React, { memo } from "react";
import Germany from "../public/germany.png";
import DropdownComponent from "./DropdownComponent";
import { _subNavItems } from "@/constants";

const Header = memo(function Header() {
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
              <DropdownComponent id="helpHeader" label="Help" options={[{ label: "Contact Us" }]} />
            </div>
          </div>
          <div className="flex gap-3">
            <DropdownComponent label="English, USD" id="languageheader" options={[{ label: "Nepali, Rs" }]} />
            <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className=" text-base text-[#2F394A] inline-flex gap-2 items-center p-2 text-center" type="button">
              Ship to <Image src={Germany} width="20" height="20" /> <i className="fa-solid fa-angle-down text-[#8B96A5] text-sm mt-1" suppressHydrationWarning></i>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Nepal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
});
export default Header;
