// App.js
// Principal component of the app

// External dependencies
import React from "react";
import { ThemeProvider } from "styled-components";

// Intenal dependencies
import MainLayout from "components/MainLayout";
import theme from "theme";
import LocalWeather from "components/LocalWeather";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <LocalWeather />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
