import Image from "next/image";
import React from "react";
import Link from "next/link";

const Cards = ({ data: { title, description, images, price, rating, stock } }) => {
  return (
    <div className="bg-white rounded-xl p-8">
      <div className="flex gap-x-4 relative">
        <div className="relative min-w-[185px] h-[185px]">
          <Image className="absolute top-0 left-0 w-full h-full rounded-xl" src={images[0]} alt={title} fill objectFit="cover" />
        </div>
        <div className="flex">
          <div className="">
            <h2 className="text-base font-semibold">{title}</h2>
            <h3 className="flex items-center mt-3">
              <span className="font-semibold text-[20px]">${price}</span> <span className="ms-2 text-base text-[#40597A]">${price}</span>
            </h3>
            <div className="flex items-center gap-x-[6px] mt-[4px]">
              {[...new Array(5)].map((_star, _index) => {
                return <i className={`fa-solid fa-star  ${_index + 1 <= Math.floor(rating) ? "text-[#E27C00]" : "text-[#6587AB]"}`} suppressHydrationWarning />;
              })}
              <span className="text-[#E27C00] text-base">{rating}</span>
              <i className="fa-solid fa-circle text-[#C1D0E0] w-[6px] h-[6px]" suppressHydrationWarning />
              <span className="text-[#6587AB] text-base">154 orders</span>
              <i className="fa-solid fa-circle text-[#C1D0E0] w-[6px] h-[6px]" suppressHydrationWarning />
              <span className={`${stock > 0 ? "text-[#4C8435]" : "text-red-500"} text-base`}>{stock > 0 ? "Free Shipping" : "Out Of Stock"}</span>
            </div>
            <div className="mt-3 mb-2">
              <p className="text-base text-[#40597A]">{description}</p>
            </div>
            <Link className="text-[#0C0EFF] font-semibold" href="/">
              View details
            </Link>
          </div>
          <i class="fa-regular fa-heart absolute top-0 right-0 border border-[#C1D0E0] text-[#5676FF] p-2 rounded-[6px] float-end" suppressHydrationWarning />
        </div>
      </div>
    </div>
  );
};

export default Cards;
