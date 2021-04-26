import React from "react";

const Page = ({ children, pageType }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Page;
