import { useSelector } from "react-redux";
import { selectWeather } from "../../redux/cities/citiesSelectors";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import { uid } from "uid";
import { WeatherListStyled } from "./WeatherList.styled";

export const WeatherList = () => {
  const weather = useSelector(selectWeather);
  const limitedWeather = weather.slice(0, 7);
  return (
    <WeatherListStyled>
      {limitedWeather.map((day) => {
        return <WeatherDay key={uid()} day={day} />;
      })}
    </WeatherListStyled>
  );
};
