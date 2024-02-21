import { createSlice } from "@reduxjs/toolkit";
import { fetchCityWeather, fetchCurrentWeather } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [
      {
        address: "London",
        startDate: new Date().toISOString().split("T", 1)[0],
        endDate: new Date(new Date().setDate(new Date().getDate() + 7))
          .toISOString()
          .split("T", 1)[0],
      },
    ],
    cityWeather: [],
    currentWeather: { firstRender: false },
    isLoading: false,
    error: null,
  },
  reducers: {
    addCity: (state, action) => {
      state.cities.push({
        address: action.payload.address,
        startDate: action.payload.days[0].datetime,
        endDate: action.payload.days[action.payload.days.length - 1].datetime,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityWeather.pending, handlePending)
      .addCase(fetchCityWeather.fulfilled, (state, action) => {
        state.cityWeather = action.payload.days;
      })
      .addCase(fetchCityWeather.rejected, handleRejected)
      .addCase(fetchCurrentWeather.pending, handlePending)
      .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
        state.currentWeather = { ...action.payload, firstRender: true };
      })
      .addCase(fetchCurrentWeather.rejected, handleRejected);
  },
});

export const { addCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
