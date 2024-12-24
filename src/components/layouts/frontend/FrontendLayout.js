import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const FrontendLayout = ({ children }) => {
  return (
    <>
      {/* header section  */}
      <Header />

      {/* main content section  */}
      <div>{children}</div>

      {/* footer section  */}
      <Footer />
    </>
  );
};

export default FrontendLayout;
