import CheckboxInput from "@/shared/Forms/CheckboxInput";
import React, { memo } from "react";
import RenderRatingOptions from "./RenderRatingOptions";
import BasicInput from "@/shared/Forms/BasicInput";
import { _brandsOptions, _categoriesOptions, _conditionOptions, _featureOptions } from "@/constants";

const ListingFiltersComponent = memo(function ListingFiltersComponent(props) {
  return (
    <aside className="w-1/4 bg-white rounded-xl border border-[#C1D0E0] p-6">
      <div id="categories" className="">
        <h3 className="font-semibold py-1">
          Category <i class="fa-solid fa-chevron-up mt-1 float-end text-[#8B96A5]" suppressHydrationWarning />
        </h3>
        {_categoriesOptions?.map((_category) => (
          <span className="text-[#505050] block py-1">{_category?.label}</span>
        ))}
        <span className="text-[#0D6EFD] block py-1">See all</span>
      </div>
      <div id="brands" className="space-y-2 mt-[10px]">
        <h3 className="font-semibold py-2">
          Brands <i class="fa-solid fa-chevron-up mt-1 float-end text-[#8B96A5]" suppressHydrationWarning />
        </h3>
        {_brandsOptions?.map((_brand) => (
          <span className="text-[#1C1C1C] block">
            <CheckboxInput label={_brand?.label} />
          </span>
        ))}
        <span className="text-[#0D6EFD] block py-2">See all</span>
      </div>
      <div id="brands" className="space-y-2 mt-[10px]">
        <h3 className="font-semibold py-2">
          Features <i class="fa-solid fa-chevron-up mt-1 float-end text-[#8B96A5]" suppressHydrationWarning />
        </h3>
        {_featureOptions?.map((_feature) => (
          <span className="text-[#1C1C1C] block">
            <CheckboxInput label={_feature?.label} />
          </span>
        ))}
        <span className="text-[#0D6EFD] block py-2">See all</span>
      </div>
      <div id="price-range" className="space-y-2 mt-[10px]">
        <h3 className="font-semibold py-2">
          Price range <i class="fa-solid fa-chevron-up mt-1 float-end text-[#8B96A5]" suppressHydrationWarning />
        </h3>
        <div className="mb-6">
          <label for="labels-range-input" class="sr-only">
            Labels range
          </label>
          <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        </div>
        <div className="mt-3 flex gap-2 justify-between">
          <div>
            <span class="text-sm text-gray-500 block mb-1">Min</span>
            <BasicInput className="h-7 rounded-lg" placeHolder="0" min={0} />
          </div>
          <div>
            <span class="text-sm text-gray-500 block mb-1">Max</span>
            <BasicInput className="h-7 rounded-lg" placeHolder="99999" max={99999} />
          </div>
        </div>
        <button type="button" class="text-[#0D6EFD] hover:text-white border border-[#DEE2E7] hover:bg-[#0D6EFD] focus:ring-4 focus:outline-none focus:ring-[#DEE2E7] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full mt-3">
          Apply
        </button>
      </div>
      <div id="brands" className="space-y-2 mt-[10px]">
        <h3 className="font-semibold py-2">
          Condition <i class="fa-solid fa-chevron-up mt-1 float-end text-[#8B96A5]" suppressHydrationWarning />
        </h3>
        {_conditionOptions?.map((_feature) => (
          <span className="text-[#1C1C1C] block">
            <CheckboxInput label={_feature?.label} type="radio" />
          </span>
        ))}
      </div>
      <div id="brands" className="space-y-2 mt-[10px]">
        <h3 className="font-semibold py-2">
          Ratings <i class="fa-solid fa-chevron-up mt-1 float-end text-[#8B96A5]" suppressHydrationWarning />
        </h3>
        {[...new Array(5)]?.map((_feature, _index, { length }) => {
          let _length = length - (_index + 1);
          return (
            <span className="text-[#1C1C1C] flex">
              <CheckboxInput label={_feature?.label} /> <RenderRatingOptions limit={5} length={_length} />
            </span>
          );
        })}
      </div>
    </aside>
  );
});

export default ListingFiltersComponent;
