import dynamic from "next/dynamic";

//make client side rendering for cards component
const Cards = dynamic(() => import("@/components/Cards"), { ssr: false });

const ProductsListingComponent = ({ products, search }) => {
  return (
    <section className="w-3/4 space-y-3">
      <div className="flex justify-between items-center border border-[#C1D0E0] rounded-xl p-3">
        <span>
          {products?.total} items in <span className="font-semibold">{search}</span>
        </span>
        <div className="flex gap-2">
          <select id="countries" className="p-2 text-black bg-white border border-[#C1D0E0] text-sm rounded-lg w-56 focus:ring-none focus:border-[#C1D0E0] focus:outline-none block ">
            <option selected>Featured</option>
          </select>
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-[#C1D0E0] rounded-s-lg  focus:z-10">
              <i className="fa-solid fa-table" suppressHydrationWarning></i>
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 border border-[#C1D0E0] rounded-e-lg  focus:z-10">
              <i className="fa-solid fa-bars" suppressHydrationWarning></i>
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-10">{products?.products?.length > 0 ? products?.products?.map((product) => <Cards data={product} key={product?.id} />) : <span className="text-[#505050]">Products not available.</span>}</div>
    </section>
  );
};

export default ProductsListingComponent;
