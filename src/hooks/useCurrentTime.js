// useCurrentTime.js
// Hook to get current time

// External dependencies
import { useState, useEffect } from "react";
import moment from "moment";

export default (format = "MMMM Do YYYY, h:mm:ss a") => {
  const [time, setTime] = useState("");
  const refreshTime = () => setTime(moment().format(format));
  const timerID = setInterval(() => refreshTime(), 1000);

  useEffect(() => {
    return () => clearInterval(timerID);
  }, [timerID]);

  return time;
};
