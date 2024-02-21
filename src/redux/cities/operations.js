import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ApiKey = "JLXVNKVZVMDKA9H7LRGU6HL66";
axios.defaults.baseURL = `
 https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

export const fetchCityWeather = createAsyncThunk(
  "city/fetchCityWeather",
  async ({ address, startDate, endDate }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/${address}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${ApiKey}&contentType=json`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentWeather = createAsyncThunk(
  "city/fetchCurrentWeather",
  async (address, thunkAPI) => {
    try {
      const response = await axios.get(
        `/${address}/today?unitGroup=metric&include=days&key=${ApiKey}&contentType=json`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
