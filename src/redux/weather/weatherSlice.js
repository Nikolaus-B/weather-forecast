import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: [],
  },
  reducers: {},
});

export const weatherReducer = weatherSlice.reducer;
