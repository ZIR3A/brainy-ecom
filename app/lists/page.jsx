import React from "react";
import ProductsListingComponent from "@/components/ProductsListingComponent";
import PaginationComponent from "@/components/PaginationComponent";
import ContentWrapper from "@/components/ContentWrapper";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import EmailComponent from "@/components/EmailComponent";
import { _brandsOptions, _categoriesOptions, _conditionOptions, _featureOptions } from "@/constants";
import ListingFiltersComponent from "@/components/ListingFiltersComponent";

async function getData(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const products = await res.json();
  return products;
}

const Lists = async (props) => {
  const {
    searchParams: { search },
  } = props;
  const products = await getData(search);
  return (
    <ContentWrapper className="">
      <div className="max-w-7xl mx-auto">
        <BreadcrumbsComponent />
        <div className="flex gap-5">
          <ListingFiltersComponent />
          <ProductsListingComponent products={products} search={search} />
        </div>
        <PaginationComponent pages={3} active={1} />
      </div>
      <EmailComponent />
    </ContentWrapper>
  );
};

export default Lists;
