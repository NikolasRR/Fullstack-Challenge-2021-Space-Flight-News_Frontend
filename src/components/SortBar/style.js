import styled from 'styled-components';
import { BsChevronExpand } from 'react-icons/bs';

export const Container = styled.section`
  margin: 0 10px;
  @media (min-width: 650px) {
    height: 35px;
  }
`;

export const SortBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  height: 24px;
  width: 100px;
  border: 1px solid rgba(48, 46, 83, 0.3);
  border-radius: 2px;
  cursor: pointer;
  @media (min-width: 650px) {
    height: 30px;
    width: 120px;
  }
`;

export const SortTypeActive = styled.p`
  color: #1e2022;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const UpDownIcon = styled(BsChevronExpand)`
  color: #1e2022;
`;

export const OptionsBox = styled.div`
  border: 1px solid rgba(48, 46, 83, 0.3);
  border-radius: 2px;
  margin-top: 3px;
`;

export const Option = styled.div`
  height: 24px;
  width: 100px;
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  align-items: center;
  padding-left: 5px;
  color: #1e2022;
  cursor: pointer;
  @media (min-width: 650px) {
    height: 30px;
    width: 120px;
  }
`;