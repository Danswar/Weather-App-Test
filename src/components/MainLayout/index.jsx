// MainLayout.jsx
// Component for renders the main layout of app

// External dependencies
import React from "react";
import { oneOfType, arrayOf, node } from "prop-types";

// Internal dependencies
import Header from "components/Header";
import styled from "./styles";

const MainLayout = ({ children }) => {
  return (
    <styled.LayoutContainer>
      <Header data-test="header" />
      <styled.ContentContainer>{children}</styled.ContentContainer>
    </styled.LayoutContainer>
  );
};

MainLayout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default MainLayout;
