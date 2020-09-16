// App.js
// Principal component of the app

// External dependencies
import React from "react";
import { ThemeProvider } from "styled-components";

// Intenal dependencies
import MainLayout from "components/MainLayout";
import theme from "theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <h1>Hello app</h1>
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
