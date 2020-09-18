import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import weatherSlice from "./reducers/weatherSlice";
import appSlice from "./reducers/appSlice";

export default configureStore({
  reducer: {
    app: appSlice,
    counter: counterReducer,
    weather: weatherSlice,
  },
});
