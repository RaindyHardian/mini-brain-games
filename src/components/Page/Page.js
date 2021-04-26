import React from "react";
import { Link } from "react-router-dom";

import "./page.css";

const Page = ({ children, pageType }) => {
  if (pageType !== "home") {
    return (
      <div>
        <nav className="page__nav">
          <Link to="/" className="page__nav_back">
            {"<"} Back to Home
          </Link>
        </nav>
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Page;
