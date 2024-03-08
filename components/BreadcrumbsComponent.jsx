import Link from "next/link";

const BreadcrumbsComponent = () => {
  return (
    <nav className="flex py-6 text-graylight" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-base text-graylight font-normal">
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg className="rtl:rotate-180 w-2 h-2 text-graylight mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <a href="#" className="ms-1 text-base text-graylight md:ms-2 font-normal">
              Search Results
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadcrumbsComponent;
