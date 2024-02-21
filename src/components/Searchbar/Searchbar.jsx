import { search } from "react-icons-kit/icomoon/search";
import { Icon } from "react-icons-kit";
import {
  IconContainer,
  SearchConrainer,
  SearchHeader,
  SearchInput,
  SearchSpan,
} from "./Searchbar.styled";

export const Searchbar = () => {
  return (
    <SearchConrainer>
      <SearchHeader>
        Weather <SearchSpan>Forecast</SearchSpan>
      </SearchHeader>
      <IconContainer>
        <Icon icon={search} size={15} />
        <SearchInput type="text" placeholder="Search your trip" />
      </IconContainer>
    </SearchConrainer>
  );
};
