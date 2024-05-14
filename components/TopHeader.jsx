import React from "react";
import BrandImage from "../public/brandlogo.png";
import Image from "next/image";
import BasicInput from "@/shared/Forms/BasicInput";
import { _profileOptions } from "@/constants";
import Link from "next/link";

const TopHeader = () => {
  return (
    <header className="bg-white px-4 xl:px-0">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        {/* Brand image component */}
        <Link href={"/"}>
          <Image src={BrandImage} width="150" height="100" />
        </Link>
        {/* search component */}
        <div className="">
          <form className="max-w-lg mx-auto">
            <div className="flex w-full">
              <BasicInput id="search-dropdown" className="!h-9 w-full lg:min-w-96 z-20 text-sm text-semilight bg-white rounded-lg border-2 border-e-0 rounded-e-none !border-blue" placeHolder="Search..." required />
              <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 h-9 z-10 inline-flex items-center py-2.5 px-4 text-sm text-center text-gray-900 bg-white border-2 rounded-s-none border-blue focus:outline-none focus:ring-gray-100" type="button">
                All category
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                      Phones
                    </button>
                  </li>
                </ul>
              </div>
              <button type="submit" className="h-9 p-2.5 flex items-center text-sm font-medium text-white bg-blue-header rounded-e-lg focus:outline-none focus:ring-blue-300">
                <span className="">Search</span>
              </button>
            </div>
          </form>
        </div>
        {/* cart component */}
        <div className="flex space-x-4 text-semilight">
          {_profileOptions?.map((_option) => (
            <div className="text-center" key={_option?.label}>
              <i className={_option?.icon} suppressHydrationWarning />
              <h3 className="text-xs">{_option?.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
