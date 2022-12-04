import styled from 'styled-components';

export const Container = styled.section`
  width: 340px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
  @media (min-width: 650px) {
    width: 600px;
    height: 170px;
  }
`;

export const ArticleImg = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 5px;
  object-fit: fill;
  @media (min-width: 650px) {
    width: 250px;
    height: 170px;
  }
`;

export const ArticleInfo = styled.section`
  width: 170px;
  height: 100px;
  @media (min-width: 650px) {
    width: 320px;
    height: 170px;
  }
`;

export const Title = styled.h3`
  font-size: 13px;
  height: 15px;
  font-weight: bold;
  text-overflow: ellipsis;  
  white-space: nowrap;
  overflow: hidden;
  color: #1e2022;
  @media (min-width: 650px) {
    font-size: 25px;
    height: 25px;
  }
`;

export const DateAndSite = styled.div`
  height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 6px;
  color: #1e2022;
  margin: 5px 0;
  @media (min-width: 650px) {
    font-size: 10px;
    height: 16px;
  }
`;

export const Date = styled.p`
`;

export const Site = styled.span`
  border: 1px solid #302e53;
  background-color: #d07017;
  width: 30px;
  height: 8px;
  line-height: 8px;
  padding-left: 1px;
  vertical-align: middle;
  text-overflow: ellipsis;  
  white-space: nowrap;
  overflow: hidden;
  @media (min-width: 650px) {
    width: 60px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    padding-left: 3px;
  }
`;

export const Summary = styled.p`
  font-size: 8px;
  line-height: 12px;
  height: 50px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  white-space: pre-wrap;
  color: #1e2022;
  margin-bottom: 1px;
  @media (min-width: 650px) {
    font-size: 14px;
    height: 70px;
    line-height: 18px;
  }
`;

export const MoreButton = styled.button`
  height: 22px;
  width: 55px;
  font-size: 9px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: #d07017;
  background-color: #302e53;
  @media (min-width: 650px) {
    font-size: 14px;
    height: 35px;
    width: 80px;
    border-radius: 5px;
    margin-top: 13px;
  }
`;