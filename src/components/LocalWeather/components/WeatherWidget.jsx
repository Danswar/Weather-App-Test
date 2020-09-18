// WeatherWidget.js
// Component to display tempeture and state of weather

// External dependencies
import React from "react";
import { useSelector } from "react-redux";

// Internal dependencies
import {
  ImageWidget,
  WeatherWidgetContainer,
  Temperature,
  Title,
  WeatherState,
} from "../styles";

const WeatherWidget = () => {
  const { temperature, description, srcIcon } = useSelector(
    (state) => state.weather.today
  );

  return (
    <WeatherWidgetContainer>
      <Temperature>
        <ImageWidget src={srcIcon} />
        <Title>{`${temperature}° c`}</Title>
      </Temperature>
      <WeatherState>{description}</WeatherState>
    </WeatherWidgetContainer>
  );
};

export default WeatherWidget;
