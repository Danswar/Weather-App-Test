// MainLayout.jsx
// Component for renders the main layout of app

// External dependencies
import React from "react";
import { oneOfType, arrayOf, node } from "prop-types";

// Internal dependencies
import Header from "components/Header";
import Footer from "components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header data-test="header" />
      {children}
      <Footer data-test="footer" />
    </>
  );
};

MainLayout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default MainLayout;
