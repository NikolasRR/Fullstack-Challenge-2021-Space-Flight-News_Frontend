import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LoadMoreButton = styled.button`
  margin-bottom: 50px;
  border: 1px solid #302e53;
  background-color: white;
  color: #302e53;
  border-radius: 5px;
  width: 80px;
  cursor: pointer;
  @media (min-width: 650px) {
    width: 160px;
    height: 40px;
    border-radius: 8px;
  }
`;

export const End = styled.p`
  margin-bottom: 50px;
  color: #1e2022;
`;