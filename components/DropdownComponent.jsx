import React from "react";

const DropdownComponent = ({ label, id, options }) => {
  return (
    <React.Fragment>
      <button id={`dropdownElement${id}`} data-dropdown-toggle={`dropdownToggle${id}`} className=" text-base text-[#2F394A] inline-flex gap-2 items-center p-2 text-center" type="button">
        {label} <i className="fa-solid fa-angle-down text-[#8B96A5] text-sm mt-1" suppressHydrationWarning />
      </button>

      {/* <!-- Dropdown menu --> */}
      <div id={`dropdownToggle${id}`} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`dropdownElement${id}`}>
          {options?.map((_option) => {
            return (
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  {_option?.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default DropdownComponent;
