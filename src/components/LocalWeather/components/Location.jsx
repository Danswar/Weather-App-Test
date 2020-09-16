// Location.jsx
// Component to display the location and current time

// External dependencies
import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// Internal dependencies
import { LocationContainer, CityName, City, Time } from "../styles";

const Location = () => {
  return (
    <LocationContainer>
      <City>
        <LocationOnIcon />
        <CityName>Buenos aires</CityName>
      </City>
      <Time>miercoles, 16 septiempre 13:51</Time>
    </LocationContainer>
  );
};

export default Location;
