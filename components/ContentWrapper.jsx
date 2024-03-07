import React from "react";

const ContentWrapper = function ContentWrapper({ className, children }) {
  return <main className={`min-h-[calc(100vh-300px)] ${className ? className : ""}`}>{children}</main>;
};

export default ContentWrapper;
