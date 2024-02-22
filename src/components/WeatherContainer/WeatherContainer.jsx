import { CitiesList } from "../CitiesList/CitiesList";
import { Searchbar } from "../Searchbar/Searchbar";
import { WeatherList } from "../WeatherList/WeatherList";
import { WeatherSection, Week } from "./WeatherContainer.styled";

export const WeatherContainer = ({ changeSelectedCity }) => {
  return (
    <WeatherSection>
      <Searchbar />
      <CitiesList changeSelectedCity={changeSelectedCity} />
      <Week>Week</Week>
      <WeatherList />
    </WeatherSection>
  );
};

WeatherContainer.propTypes;
