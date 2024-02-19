import { createSlice } from "@reduxjs/toolkit";

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    firstCity: "Berlin",
    cities: [],
  },
  reducers: {},
});

export const citiesReducer = citiesSlice.reducer;
