import { setAppLoading, setCurrentCity } from "store/reducers/appSlice";
import { setTodayWeather, setWeekWeather } from "store/reducers/weatherSlice";
import normalizeFromResponse from "utils/normalizeFromResponse";
import requestWeather from "utils/requestWeather";

export const changeCity = (city) => async (dispatch) => {
  dispatch(setCurrentCity(city));
  dispatch(setAppLoading(true));

  // make the request
  const { lat, lon } = city;
  const data = await requestWeather({ lat, lon });

  if (data) {
    const [todayWeather] = normalizeFromResponse([data.current]);
    dispatch(setTodayWeather(todayWeather));

    const weekWeather = normalizeFromResponse(data.daily);
    dispatch(setWeekWeather(weekWeather));
  } else {
    // Put error
  }

  dispatch(setAppLoading(false));
};
