// App.js
// Principal component of the app

// External dependencies
import React from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";

// Intenal dependencies
import MainLayout from "components/MainLayout";
import theme from "theme";
import LocalWeather from "components/LocalWeather";
import SummaryWeek from "components/SummaryWeek";
import { changeCity } from "store/thunks/changeCity";

const App = () => {
  const dispatch = useDispatch();

  dispatch(
    changeCity({
      name: "Ciudad Autónoma de Buenos Aires",
      lon: -58.450001,
      lat: -34.599998,
    })
  );

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
