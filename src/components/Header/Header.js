import SearchBar from "../SearchBar/SearchBar";
import SortBar from "../SortBar/SortBar";
import {
  Actions,
  HeaderBox,
  IconDiv,
  RocketIcon,
  Title,
  TitleSpace,
} from "./style";

function Header() {

  return (
    <HeaderBox>
      <Actions>
        <SearchBar />
        <SortBar />
      </Actions>
      <TitleSpace>
        <IconDiv>
          <RocketIcon />
        </IconDiv>
        <Title>Space Flight News</Title>
      </TitleSpace>
    </HeaderBox>
  )
}

export default Header;