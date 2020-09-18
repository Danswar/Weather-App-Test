// getTodayWeather.js
// Function to normalize the data for current weather from response

const getTime = (timestamp) => {
  if (!timestamp) return {};

  const daysLabels = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
  const date = new Date(timestamp * 1000);

  return {
    dayOfWeek: daysLabels[date.getDay()],
  };
};

const normalizeItem = (item) => {
  const {
    temp,
    weather: [{ main, icon }],
    dt,
  } = item;

  const time = getTime(dt);

  return {
    temperature: temp,
    description: main,
    srcIcon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    time,
  };
};

// Function to export
export default (data) => {
  if ((!data, !Array.isArray(data))) return [];
  const normalizedData = data.map((item) => normalizeItem(item));
  return normalizedData;
};
