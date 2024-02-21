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
      <p>{day.icon}</p>
      <p>
        {day.tempmax}°C/{day.tempmin}°C
      </p>
    </li>
  );
};

WeatherDay.propTypes;
