import React from "react";

const BasicInput = ({ type = "text", onChange, className, placeHolder, required = false, ...others }) => {
  return <input type={type} id="default-search" className={`h-12 block w-full px-4 py-3 text-base text-[#6587AB] border border-gray-300 rounded-xl bg-white focus:ring-[#5676FF] focus:border-[#5676FF] focus:outline-none ${className ? className : ""}`} onChange={onChange} placeholder={placeHolder} required={required} {...others} />;
};

export default BasicInput;
