import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    currentCity: {
      name: "",
      lat: 0,
      lon: 0,
    },
    appLoading: false,
  },
  reducers: {
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
      return state;
    },
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
      return state;
    },
  },
});

export const { setAppLoading, setCurrentCity } = appSlice.actions;

export default appSlice.reducer;
