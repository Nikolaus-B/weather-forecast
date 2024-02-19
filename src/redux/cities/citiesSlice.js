import { createSlice } from "@reduxjs/toolkit";

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
  },
  reducers: {},
});

export const citiesReducer = citiesSlice.reducer;
