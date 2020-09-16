// LocalWeather.js
// Component to display wheather data for current day on current location

// External dependencies
import React from "react";

// Internal dependencies
import WeatherWidget from "./components/WeatherWidget";
import Location from "./components/Location";
import { LocalWeatherContainer } from "./styles";

const LocalWeather = () => {
  return (
    <LocalWeatherContainer>
      <Location />
      <WeatherWidget />
    </LocalWeatherContainer>
  );
};

export default LocalWeather;
