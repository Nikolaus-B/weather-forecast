import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Container, GlobalStyle } from "./components/GlobalStyle";
import { TimerContainer } from "./components/TimerContainer/TimerContainer";
import { WeatherContainer } from "./components/WeatherContainer/WeatherContainer";
import { selectCities } from "./redux/cities/citiesSelectors";
import { useEffect, useState } from "react";
import {
  fetchCityWeather,
  fetchCurrentWeather,
} from "./redux/cities/operations";

function App() {
  const cities = useSelector(selectCities);
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const changeSelectedCity = (city) => {
    setSelectedCity(city);
  };
  useEffect(() => {
    dispatch(fetchCityWeather(selectedCity));
    dispatch(fetchCurrentWeather(selectedCity.address));
  }, [dispatch, selectedCity]);

  return (
    <Container>
      <WeatherContainer changeSelectedCity={changeSelectedCity} />
      <TimerContainer />
      <GlobalStyle />
    </Container>
  );
}

export default App;
