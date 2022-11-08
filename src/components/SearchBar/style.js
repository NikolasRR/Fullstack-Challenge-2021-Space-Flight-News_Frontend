import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  width: 150px;
  border: ${({ warning }) => warning ? "1px solid red" : "1px solid rgba(48, 46, 83, 0.3)"};
  border-radius: 2px;
  @media (min-width: 650px) {
    height: 30px;
    width: 180px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 120px;
  padding-left: 3px;
  &:focus {
    outline: none;
  }
  @media (min-width: 650px) {
    height: 28px;
    width: 180px;
    font-size: 14px;
  }
`;

export const SearchIcon = styled(MdOutlineSearch)`
  color: white;
  background-color: #302E53;
  font-size: 20px;
  cursor: pointer;
  margin-right: 3px;
`;
