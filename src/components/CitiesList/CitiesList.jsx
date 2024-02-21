import { useSelector } from "react-redux";
import { selectCities } from "../../redux/cities/citiesSelectors";
import { City } from "../City/City";
import { uid } from "uid";
import { useState } from "react";

import { ModalForm } from "../ModalForm/ModalForm";

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
    <div>
      <ul>
        {cities.map((city) => {
          return (
            <City key={uid()} city={city} selectCity={changeSelectedCity} />
          );
        })}
      </ul>
      <button onClick={openModal}>
        +<br />
        Add trip
      </button>
      <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

CitiesList.propTypes;
