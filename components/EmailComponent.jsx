const EmailComponent = () => {
  return (
    <div className="bg-[#DEE6EF]">
      <div className="max-w-7xl mx-auto py-10">
        <div className="text-center mb-[20px]">
          <h1 className=" font-semibold text-xl">Subscribe on our newsletter</h1>
          <span className="text-base text-[#40597A]">Get daily news on upcoming offers from many suppliers all over the world</span>
        </div>
        <form className="flex items-center max-w-sm mx-auto">
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1667 2.50002C19.1667 1.49169 18.3417 0.666687 17.3333 0.666687H2.66668C1.65834 0.666687 0.833344 1.49169 0.833344 2.50002V13.5C0.833344 14.5084 1.65834 15.3334 2.66668 15.3334H17.3333C18.3417 15.3334 19.1667 14.5084 19.1667 13.5V2.50002ZM17.3333 2.50002L10 7.08335L2.66668 2.50002H17.3333ZM17.3333 13.5H2.66668V4.33335L10 8.91669L17.3333 4.33335V13.5Z" fill="#6587AB" />
              </svg>
            </div>
            <input type="text" id="simple-search" className="h-11 block w-full ps-8 px-4 py-2 text-sm text-[#6587AB] border border-gray-300 rounded-xl bg-white focus:ring-[#5676FF] focus:border-[#5676FF] focus:outline-none" placeholder="Email" required />
          </div>
          <button type="submit" className="p-2 px-3 ms-2 h-10 text-sm font-medium text-white bg-[#0C0EFF] rounded-xl border border-[#0C0EFF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <span className="font-light">Subscribe</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailComponent;
