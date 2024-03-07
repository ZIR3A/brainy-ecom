import React, { Suspense } from "react";
import CheckboxInput from "@/shared/Forms/CheckboxInput";
import ProductsListingComponent from "@/components/ProductsListingComponent";
import BasicInput from "@/shared/Forms/BasicInput";
import RenderRatingOptions from "@/components/RenderRatingOptions";
import PaginationComponent from "@/components/PaginationComponent";
import Link from "next/link";

async function getData(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const products = await res.json();
  return products;
}

const _brandsOptions = [
  {
    label: "Nokia",
  },
  {
    label: "Samsung",
  },
  {
    label: "Micromax",
  },
  {
    label: "Apple",
  },
  {
    label: "Huawei",
  },
];

const _categoriesOptions = [
  {
    label: "Mobile accessory",
  },
  {
    label: "Electronics",
  },
  {
    label: "Smartphones",
  },
  {
    label: "Modern tech",
  },
];
const _featureOptions = [
  {
    label: "Metalic",
  },
  {
    label: "Plastic cover",
  },
  {
    label: "8GB ram",
  },
  {
    label: "Super power",
  },
  {
    label: "pubg",
  },
];
const _conditionOptions = [
  {
    label: "Refurbished",
  },
  {
    label: "Brand new",
  },
  {
    label: "old items",
  },
];

const Lists = async (props) => {
  const {
    searchParams: { search },
  } = props;
  const products = await getData(search);
  console.log(products, "@@");
  return (
    <div className="max-w-7xl mx-auto">
      <BreadcrumbsComponent/>
      <div className="flex gap-5">
        <aside className="w-1/4 bg-white rounded-xl border border-[#C1D0E0] p-6">
          <div id="categories" className="space-y-2">
            <h3 className="font-semibold py-2">Category</h3>
            {_categoriesOptions?.map((_category) => (
              <span className="text-[#505050] block py-2">{_category?.label}</span>
            ))}
            <span className="text-[#0D6EFD] block py-2">See all</span>
          </div>
          <div id="brands" className="space-y-2 mt-[10px]">
            <h3 className="font-semibold py-2">Brands</h3>
            {_brandsOptions?.map((_brand) => (
              <span className="text-[#505050] block">
                <CheckboxInput label={_brand?.label} />
              </span>
            ))}
            <span className="text-[#0D6EFD] block py-2">See all</span>
          </div>
          <div id="brands" className="space-y-2 mt-[10px]">
            <h3 className="font-semibold py-2">Features</h3>
            {_featureOptions?.map((_feature) => (
              <span className="text-[#505050] block">
                <CheckboxInput label={_feature?.label} />
              </span>
            ))}
            <span className="text-[#0D6EFD] block py-2">See all</span>
          </div>
          <div id="price-range" className="space-y-2 mt-[10px]">
            <h3 className="font-semibold py-2">Price range</h3>
            <div class="mb-6">
              <label for="labels-range-input" class="sr-only">
                Labels range
              </label>
              <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            </div>
            <div className="mt-3 flex gap-2 justify-between">
              <div>
                <span class="text-sm text-gray-500 block mb-1">Min</span>
                <BasicInput className="h-9 rounded-lg" placeHolder="0" min={0} />
              </div>
              <div>
                <span class="text-sm text-gray-500 block mb-1">Max</span>
                <BasicInput className="h-9 rounded-lg" placeHolder="99999" max={99999} />
              </div>
            </div>
            <button type="button" class="text-[#0D6EFD] hover:text-white border border-[#DEE2E7] hover:bg-[#0D6EFD] focus:ring-4 focus:outline-none focus:ring-[#DEE2E7] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full mt-3">
              Apply
            </button>
          </div>
          <div id="brands" className="space-y-2 mt-[10px]">
            <h3 className="font-semibold py-2">Condition</h3>
            {_conditionOptions?.map((_feature) => (
              <span className="text-[#505050] block">
                <CheckboxInput label={_feature?.label} type="radio" />
              </span>
            ))}
          </div>
          <div id="brands" className="space-y-2 mt-[10px]">
            <h3 className="font-semibold py-2">Ratings</h3>
            {[...new Array(5)]?.map((_feature, _index, { length }) => {
              let _length = length - (_index + 1);
              return (
                <span className="text-[#505050] flex">
                  <CheckboxInput label={_feature?.label} /> <RenderRatingOptions limit={5} length={_length} />
                </span>
              );
            })}
          </div>
        </aside>
        <ProductsListingComponent products={products} search={search} />
      </div>
      <div className="flex justify-between py-4">
        <div>
          <form class="max-w-sm mx-auto">
            <select id="countries" className="bg-white border border-gray-300 text-[#6587AB] text-sm rounded-lg focus:ring-[#5676FF] focus:border-[#5676FF] focus:outline-none block w-full p-1.5 ">
              <option selected>Show 10</option>
            </select>
          </form>
        </div>
        <PaginationComponent pages={3} active={1} />
      </div>
    </div>
  );
};

export default Lists;

const BreadcrumbsComponent = () => {
  return (
    <nav class="flex py-6 text-[#8B96A5]" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <Link href="/" class="inline-flex items-center text-base text-[#8B96A5] font-normal">
            Home
          </Link>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <a href="#" class="ms-1 text-base text-[#8B96A5] md:ms-2 font-normal">
              Search Results
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};
