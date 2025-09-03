import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Footer2 from "../../Component/Footer2";

export default function Layout({ children }) {
  const location = useLocation();

  // List of paths where Footer should be hidden
  const hideFooterPaths = ["/wallet"];

  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <div className="bg-grayBg">
      <Header />
      {children}
      {!shouldHideFooter && (
        <div className=" sticky bottom-0">
          <div className="md:hidden">
            {" "}
            <Footer />
          </div>
          <div className="hidden md:block lg:hidden">
            {" "}
            <Footer2 />
          </div>
        </div>
      )}
    </div>
  );
}
