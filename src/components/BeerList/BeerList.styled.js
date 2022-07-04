import styled from "styled-components";

export const BeersList = styled.ul`
  position: relative;
  max-width: 1000px;
  width: auto;
  margin: 50px auto 0;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
`;

export const List = styled.li`
  display: flex;

  background-color: rgba(91, 91, 87, 0.8);
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px 0;
  transition: 0.5s;
`;

export const ListTile = styled.span`
  display: flex;
  align-items: center;
  width: 100%;

  justify-content: space-between;
`;

export const BeerImage = styled.img`
  min-height: 35px;
  min-width: 30px;
  height: 100px;
`;
