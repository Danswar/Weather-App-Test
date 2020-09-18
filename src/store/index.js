// store/index.js
// Script to create a redux store

// External dependencies
import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducers/weatherSlice";

// Internal dependencies
import appSlice from "./reducers/appSlice";

export default configureStore({
  reducer: {
    app: appSlice,
    weather: weatherSlice,
  },
});
