import React, { memo } from "react";
import BrandImage from "../public/brandlogo.png";
import AppStoreImage from "../public/appstore.png";
import PlayStoreImage from "../public/playstore.png";
import Image from "next/image";
import Link from "next/link";
import { _midFooterContents, _socialMediaOptions } from "@/constants";
import UsaFlag from "../public/usa.png";

const Footer = memo(function Footer() {
  return (
    <div className="bg-white px-4 xl:px-0">
      <div className="max-w-7xl mx-auto flex gap-16 justify-between py-6">
        <section className="space-y-4 max-w-72">
          <Image src={BrandImage} width="150" height="100" suppressHydrationWarning />
          <h6 className="text-semilight">Best information about the company gies here but now lorem ipsum is</h6>
          <div className="space-x-[10px]">
            {_socialMediaOptions?.map((_social) => (
              <span key={_social?.icon} className="bg-[#40597A] rounded-full w-[30px] h-[30px] inline-flex items-center justify-center" suppressHydrationWarning>
                <i className={`${_social?.icon} !text-white`} suppressHydrationWarning />
              </span>
            ))}
          </div>
        </section>
        <section className="flex-1">
          <div className="grid grid-cols-5">
            {_midFooterContents?.map((_content) => (
              <div className="space-y-3" key={_content?.header}>
                <header className="text-[#040507] font-medium">{_content?.header}</header>
                {_content?.children?.map((_child) => (
                  <Link href={_child?.href} className="text-semilight block" key={_child?.label}>
                    {_child?.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="space-y-3">
              <header className="text-[#040507] font-medium">Get app</header>
              <Image src={AppStoreImage} width="124" height="42" suppressHydrationWarning />
              <Image src={PlayStoreImage} width="124" height="42" suppressHydrationWarning />
            </div>
          </div>
        </section>
      </div>
      <div className="text-[#606060] max-w-7xl mx-auto mt-[60px] mb-6 flex justify-between">
        <span>© 2023 Ecommerce. </span>
        <span className="flex items-center gap-2">
          <Image src={UsaFlag} width={20} height={20} /> <span>English</span> <i className="fa-solid fa-angle-up" suppressHydrationWarning />
        </span>
      </div>
    </div>
  );
});

export default Footer;
