// Location.jsx
// Component to display the location and current time

// External dependencies
import React from "react";
import { useSelector } from "react-redux";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// Internal dependencies
import { LocationContainer, CityName, City, Time } from "../styles";
import useCurrentTime from "hooks/useCurrentTime";

const Location = () => {
  const name = useSelector((state) => state.app.currentCity.name);
  const time = useCurrentTime();

  return (
    <LocationContainer>
      <City>
        <LocationOnIcon />
        <CityName>{name}</CityName>
      </City>
      <Time>{time}</Time>
    </LocationContainer>
  );
};

export default Location;
