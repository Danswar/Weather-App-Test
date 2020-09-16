// SummaryWeek.jsx
// Component to show the weather for next 5 days

// External dependencies
import React from "react";

// Internal dependencies
import DayWeather from "./components/DayWeather";
import { SummaryWeekContainer } from "./styles";

const days = ["lun.", "mar.", "mier.", "jue.", "vie."];

const SummaryWeek = () => {
  return (
    <SummaryWeekContainer>
      {days.map((day) => (
        <DayWeather day={day} />
      ))}
    </SummaryWeekContainer>
  );
};

export default SummaryWeek;
