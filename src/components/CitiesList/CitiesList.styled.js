import styled from "styled-components";

export const CitiesContainer = styled.div`
  display: flex;
  max-width: 750px;
  margin-bottom: 40px;

  gap: 30px;
`;

export const Cities = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 30px;
`;

export const AddCityButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border: none;
  font-weight: 600;
  background-color: #f3f4f8;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #93abae;
  }
`;
