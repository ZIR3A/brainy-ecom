import React from "react";
import ProductsListingComponent from "@/components/ProductsListingComponent";
import PaginationComponent from "@/components/PaginationComponent";
import ContentWrapper from "@/components/ContentWrapper";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import EmailComponent from "@/components/EmailComponent";
import { _brandsOptions, _categoriesOptions, _conditionOptions, _featureOptions } from "@/constants";
import ListingFiltersComponent from "@/components/ListingFiltersComponent";
import Image from "next/image";
import Link from "next/link";

async function getData(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const products = await res.json();
  return products;
}
async function getAdsData() {
  const adsApi = await fetch(`https://ads.rozilshrestha.com.np/adserve?zone_id=13&type=json`);
  const adResponse = await adsApi.json();
  return adResponse;
}

const Lists = async (props) => {
  const {
    searchParams: { search },
  } = props;
  const products = await getData(search);
  const adsData = await getAdsData(search);
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
      {adResponse &&
        <div className={`mx-auto mb-4 h-40 relative`}>
          <Link href={adsData?.redirect_url} target={adsData?.target}>
            <Image className="absolute rounded-md" src={adsData?.image_url} fill objectFit="contain" />
          </Link>
        </div>
      }
      <EmailComponent />
    </ContentWrapper>
  );
};

export default Lists;
