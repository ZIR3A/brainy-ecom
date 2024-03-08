import React from "react";

const ContentWrapper = function ContentWrapper({ className, children }) {
  return <main className={`px-4 xl:px-0 min-h-[calc(100vh-400px)] ${className ? className : ""}`}>{children}</main>;
};

export default ContentWrapper;
