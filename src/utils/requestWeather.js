// requestWeather.js
// DRY to request data to API

const TOKEN = "0ccb4d2f93f48697be06f288c107ecab";
const URL_WEATHER_API = `https://api.openweathermap.org/data/2.5/onecall?&appid=${TOKEN}&units=metric`;

const makeRequestForWeather = ({ lat, lon }) =>
  fetch(`${URL_WEATHER_API}&lat=${lat}&lon=${lon}`);

// Function to export
export default async (location) => {
  const res = await makeRequestForWeather(location);
  if (res.ok) return await res.json();
  return null;
};
