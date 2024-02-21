import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/cities/citiesSelectors";
import { Timer } from "../Timer/Timer";

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
    <section>
      <h1>timer</h1>
      <div>
        <p>
          {currentWeather.firstRender
            ? days[new Date(currentWeather.days[0].datetime).getDay()]
            : "none"}
        </p>
        <div>
          <p className="icon">
            {currentWeather.firstRender ? currentWeather.days[0].icon : "none"}
          </p>
          <p>
            {currentWeather.firstRender ? currentWeather.days[0].temp : "none"}
            °C{" "}
          </p>
        </div>
        <p>{currentWeather.firstRender ? currentWeather.address : "none"}</p>
      </div>
      <Timer
        startDate={
          currentWeather.firstRender ? currentWeather.days[0].datetime : "none"
        }
      />
    </section>
  );
};
