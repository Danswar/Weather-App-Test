import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    currentCity: {
      name: "",
      lat: 0,
      log: 0,
    },
    appLoading: false,
  },
  reducers: {
    setAppLoading: (state, action) => (state.appLoading = action.payload),
    setCurrentCity: (state, action) => (state.currentCity = action.payload),
  },
});

export const { setAppLoading, setCurrentCity } = appSlice.actions;

export default appSlice.reducer;
