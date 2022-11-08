import styled from 'styled-components';
import { IoIosRocket } from 'react-icons/io';

export const HeaderBox = styled.header`
  height: 300px;
  border-bottom: 1px solid #D07017;
`;

export const Actions = styled.section`
  height: 70px;
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
`;

export const TitleSpace = styled.section`
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const IconDiv = styled.div`
  height: 120px;
  width: 120px;
  border: 1px solid #1E2022;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RocketIcon = styled(IoIosRocket)`
  font-size: 50px;
  color: #1E2022;
`;

export const Title = styled.h1`
  margin-top: 20px;
  color: #1E2022;
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
`;