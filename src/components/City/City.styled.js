import styled from "styled-components";

export const CityItem = styled.li`
  width: 190px;
  border: 2px solid #f3f4f8;

  transition: border 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 2px solid #93abae;
  }
`;

export const CityImage = styled.img`
  width: 186px;
  height: 180px;
`;

export const CityTextContainer = styled.div`
  padding: 20px 10px 10px 10px;
`;

export const CityText = styled.h4``;

export const CityDates = styled.p``;
