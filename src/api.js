import axios from "axios";

const ApiKey = "JLXVNKVZVMDKA9H7LRGU6HL66";
axios.defaults.baseURL = `
 https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

export const fetchCityWeather = async (city) => {
  const response = await axios.get(
    `/${city}/today?unitGroup=metric&include=days&key=${ApiKey}&contentType=json`
  );
  return response.data;
};

export const fetchCityWeekWeather = async (city, startDate, endDate) => {
  const response = await axios.get(
    `/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${ApiKey}&contentType=json`
  );
  return response.data;
};
