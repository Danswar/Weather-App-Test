import { setAppLoading, setCurrentCity } from "store/reducers/appSlice";

export const getWeather = (city) => (dispatch) => {
  dispatch(setCurrentCity(city));
  dispatch(setAppLoading(true));

  // make the request

  dispatch(setAppLoading(false));
};
