import { useSelector } from "react-redux";
import { selectWeather } from "../../redux/cities/citiesSelectors";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import { uid } from "uid";
import { WeatherListStyled } from "./WeatherList.styled";

export const WeatherList = () => {
  const weather = useSelector(selectWeather);

  return (
    <WeatherListStyled>
      {weather.map((day) => {
        return <WeatherDay key={uid()} day={day} />;
      })}
    </WeatherListStyled>
  );
};
