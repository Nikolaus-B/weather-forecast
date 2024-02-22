import styled from "styled-components";

export const CityItem = styled.li`
  width: 250px;
  border: 2px solid #f3f4f8;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 2px solid #93abae;
  }
`;

export const CityImage = styled.img`
  width: 100%;
  height: 180px;
`;

export const CityTextContainer = styled.div`
  padding: 20px 10px 10px 10px;
`;

export const CityText = styled.h4``;

export const CityDates = styled.p``;
