import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

import { DayWeatherContnainer, DayIcon, DayName } from "../styles";

const DayWeather = ({ day }) => {
  return (
    <Tooltip
      title={
        <div>
          <p>min: 30 c°</p>
          <p>max: 20 c°</p>
          <p>max: 20 c°</p>
        </div>
      }
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 300 }}
      placement="top"
    >
      <DayWeatherContnainer>
        <DayIcon src="http://openweathermap.org/img/wn/10d@2x.png" />
        <DayName>{day}</DayName>
      </DayWeatherContnainer>
    </Tooltip>
  );
};

export default DayWeather;
