import { CitiesList } from "../CitiesList/CitiesList";
import { Searchbar } from "../Searchbar/Searchbar";
import { WeatherList } from "../WeatherList/WeatherList";

export const WeatherContainer = ({ changeSelectedCity }) => {
  return (
    <section>
      <Searchbar />
      <CitiesList changeSelectedCity={changeSelectedCity} />
      <WeatherList />
    </section>
  );
};

WeatherContainer.propTypes;
