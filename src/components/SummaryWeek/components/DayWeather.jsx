// DayWeather.js
// Component for weather summary of a single day

// External dependencies
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

// Internal dependencies
import { DayWeatherContnainer, DayIcon, DayName } from "../styles";

const DayWeather = ({ temperature, description, srcIcon, time }) => {
  const { min, max, day } = temperature;
  const { dayOfWeek } = time || {};

  return (
    <Tooltip
      title={
        <div>
          <p>{`min: ${min} c°`}</p>
          <p>{`max: ${max} c°`} </p>
          <p>{`day: ${day} c°`} </p>
        </div>
      }
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 300 }}
      placement="top"
    >
      <DayWeatherContnainer>
        <DayIcon src={srcIcon} />
        <p>{description}</p>
        <DayName>{dayOfWeek}</DayName>
      </DayWeatherContnainer>
    </Tooltip>
  );
};

export default DayWeather;
