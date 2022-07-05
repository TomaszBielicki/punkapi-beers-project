import styled from "styled-components";

export const BeersList = styled.ul`
  position: relative;
  width: auto;
  margin: 15px 10px 0;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
`;

export const BeerTile = styled.li`
  display: flex;
  background-color: rgba(91, 91, 87, 0.8);
  color: white;
  font-size: 20px;

  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px 0;
  transition: 0.5s;

  :hover {
    transform: scale(1.06);
    background-color: rgba(103, 103, 93, 1);
    margin: 10px;
  }
`;

export const Title = styled.span`
  margin-left: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const BeerImage = styled.img`
  margin-right: 20px;
  min-height: 35px;
  min-width: 30px;
  height: 100px;
`;
