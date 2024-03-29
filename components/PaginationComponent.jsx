const PaginationComponent = ({ pages = 1, active }) => {
  return (
    <div className="flex justify-between py-4">
      <div>
        <form className="max-w-sm mx-auto">
          <select id="countries" className="bg-white border border-gray-300 text-lightbluish text-sm rounded-lg focus:ring-[#5676FF] focus:border-[#5676FF] focus:outline-none block w-full p-1.5 ">
            <option selected>Show 10</option>
          </select>
        </form>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
              <span class="sr-only">Previous</span>
              <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>
          {[...new Array(pages)].map((_page, _index) => {
            return (
              <li key={_index}>
                <a href="#" class={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${active === _index + 1 ? "bg-[#DEE2E7]" : ""}`}>
                  {_index + 1}
                </a>
              </li>
            );
          })}
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
              <span class="sr-only">Next</span>
              <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationComponent;
