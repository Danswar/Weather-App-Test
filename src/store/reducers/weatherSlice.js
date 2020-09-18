import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    today: {},
    week: {},
  },
  reducers: {
    setTodayWeather: (state, action) => {
      state.today = action.payload;
      return state;
    },
    setWeekWeather: (state, action) => {
      state.week = action.payload;
      return state;
    },
  },
});

export const { setTodayWeather, setWeekWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
