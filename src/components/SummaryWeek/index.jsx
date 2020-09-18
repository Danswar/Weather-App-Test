// SummaryWeek.jsx
// Component to show the weather for next 5 days

// External dependencies
import React from "react";
import { useSelector } from "react-redux";

// Internal dependencies
import DayWeather from "./components/DayWeather";
import { SummaryWeekContainer } from "./styles";

const SummaryWeek = () => {
  const { week } = useSelector((state) => state.weather);

  const DaysWeather = week
    .slice(1, 6)
    .map(({ temperature, description, srcIcon, time }) => (
      <DayWeather
        temperature={temperature}
        description={description}
        srcIcon={srcIcon}
        time={time}
      />
    ));

  return <SummaryWeekContainer>{DaysWeather}</SummaryWeekContainer>;
};

export default SummaryWeek;
