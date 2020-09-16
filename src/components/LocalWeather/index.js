// LocalWeather.js
// Component to display wheather data for current day on current location

// External dependencies
import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PropTypes from "prop-types";

// Internal dependencies
import {
  LocalWeatherContainer,
  LocationContainer,
  ImageWidget,
  WeatherWidgetContainer,
  Temperature,
  Title,
  WeatherState,
} from "./styles";
import weatherImg from "assets/sun-with-cloud.png";

const LocalWeather = (props) => {
  return (
    <LocalWeatherContainer>
      <LocationContainer>
        <p>
          <LocationOnIcon />
          Buenos aires
        </p>
        <p>miercoles, 16 septiempre 13:51</p>
      </LocationContainer>

      <WeatherWidgetContainer>
        <Temperature>
          <ImageWidget src={weatherImg} />
          <Title>16° c</Title>
        </Temperature>
        <WeatherState>Soleado</WeatherState>
      </WeatherWidgetContainer>
    </LocalWeatherContainer>
  );
};

LocalWeather.propTypes = {};

export default LocalWeather;
