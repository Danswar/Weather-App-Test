// WeatherWidget.js
// Component to display tempeture and state of weather

// External dependencies
import React from "react";

// Internal dependencies
import weatherImg from "assets/sun-with-cloud.png";
import {
  ImageWidget,
  WeatherWidgetContainer,
  Temperature,
  Title,
  WeatherState,
} from "../styles";

const WeatherWidget = () => {
  return (
    <WeatherWidgetContainer>
      <Temperature>
        <ImageWidget src={weatherImg} />
        <Title>16° c</Title>
      </Temperature>
      <WeatherState>Soleado</WeatherState>
    </WeatherWidgetContainer>
  );
};

export default WeatherWidget;
