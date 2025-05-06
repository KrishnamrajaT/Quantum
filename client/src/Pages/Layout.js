import React from "react";
import "./Layout.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      {/* Main Content */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Layout;
