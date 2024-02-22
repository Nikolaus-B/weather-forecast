export const WeatherDay = ({ day }) => {
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
    <li>
      <p>{days[new Date(day.datetime).getDay()]}</p>

      <svg width="32">
        <use href={`./assets/weather-icons/${day.icon}.svg`}></use>
      </svg>
      <p>
        {day.tempmax}°C/{day.tempmin}°C
      </p>
    </li>
  );
};

WeatherDay.propTypes;
