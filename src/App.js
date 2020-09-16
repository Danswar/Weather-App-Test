// App.js
// Principal component of the app

// External dependencies
import React from "react";
import { ThemeProvider } from "styled-components";

// Intenal dependencies
import MainLayout from "components/MainLayout";
import theme from "theme";
import LocalWeather from "components/LocalWeather";
import SummaryWeek from "components/SummaryWeek";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <LocalWeather />
        <SummaryWeek />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
