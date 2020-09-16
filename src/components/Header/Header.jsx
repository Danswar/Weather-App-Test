// Header.js
// Component for header of app

// External dependencies
import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import PropTypes from "prop-types";

// Internal dependencies
import citys from "assets/citys.json";
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
    <div style={{ width: "45%" }}>
      <Autocomplete
        freeSolo
        options={citys.map(({ name }) => name)}
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            variant="outlined"
            style={{ background: "white" }}
          />
        )}
      />
    </div>
    <LocationContainer>
      <div>
        <p>Buenos aires</p>
        <p>16 septiempre 13:51</p>
      </div>
      <LocationOnIcon />
    </LocationContainer>
  </HeaderContainer>
);

Header.propTypes = {};

export default Header;
