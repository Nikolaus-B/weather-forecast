import { useSelector } from "react-redux";
import { selectCities } from "../../redux/cities/citiesSelectors";
import { City } from "../City/City";
import { uid } from "uid";
import { useState } from "react";
import { ModalForm } from "../ModalForm/ModalForm";
import { AddCityButton, Cities, CitiesContainer } from "./CitiesList.styled";

export const CitiesList = ({ changeSelectedCity }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const cities = useSelector(selectCities);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <CitiesContainer>
      <Cities>
        {cities.map((city) => {
          return (
            <City key={uid()} city={city} selectCity={changeSelectedCity} />
          );
        })}
      </Cities>

      <AddCityButton onClick={openModal}>
        +<br />
        Add trip
      </AddCityButton>
      <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </CitiesContainer>
  );
};

CitiesList.propTypes;
