// getTodayWeather.js
// Function to normalize the data for current weather from response

const normalizeItem = (item) => {
  const {
    temp,
    weather: [{ main, icon }],
  } = item;

  return {
    temperature: temp,
    description: main,
    srcIcon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
  };
};

// Function to export
export default (data) => {
  if ((!data, !Array.isArray(data))) return [];
  const normalizedData = data.map((item) => normalizeItem(item));
  return normalizedData;
};
