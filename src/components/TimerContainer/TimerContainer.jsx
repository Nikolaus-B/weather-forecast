import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/cities/citiesSelectors";
import { Timer } from "../Timer/Timer";
import {
  CurrentDay,
  CurrentLocation,
  CurrentTemp,
  TimerSection,
} from "./TimerContainer.styled";

export const TimerContainer = () => {
  const currentWeather = useSelector(selectCurrentWeather);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <TimerSection>
      <div>
        <CurrentDay>
          {currentWeather.firstRender
            ? days[new Date(currentWeather.days[0].datetime).getDay()]
            : "none"}
        </CurrentDay>
        <div>
          <p className="icon">
            {currentWeather.firstRender ? currentWeather.days[0].icon : "none"}
          </p>
          <CurrentTemp>
            {currentWeather.firstRender ? currentWeather.days[0].temp : "none"}
            °C
          </CurrentTemp>
        </div>
        <CurrentLocation>
          {currentWeather.firstRender ? currentWeather.address : "none"}
        </CurrentLocation>
      </div>
      <Timer
        startDate={
          currentWeather.firstRender ? currentWeather.days[0].datetime : "none"
        }
      />
    </TimerSection>
  );
};
