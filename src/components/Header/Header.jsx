// Header.js
// Component for header of app

// External dependencies
import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// Internal dependencies
import InputSearch from "components/InputSearch";
import logo from "assets/pngwave.png";
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  AppTitle,
  LocationContainer,
} from "./styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo src={logo} />
      <AppTitle>WeatherApp</AppTitle>
    </LogoContainer>
    <InputSearch />
    <LocationContainer>
      <div>
        <p>Buenos aires</p>
        <p>16 septiempre 13:51</p>
      </div>
      <LocationOnIcon />
    </LocationContainer>
  </HeaderContainer>
);

export default Header;
