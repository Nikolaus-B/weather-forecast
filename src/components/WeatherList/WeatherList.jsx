import { useSelector } from "react-redux";
import { selectWeather } from "../../redux/cities/citiesSelectors";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import { uid } from "uid";

export const WeatherList = () => {
  const weather = useSelector(selectWeather);

  return (
    <div>
      <ul>
        {weather.map((day) => {
          return <WeatherDay key={uid()} day={day} />;
        })}
      </ul>
    </div>
  );
};
