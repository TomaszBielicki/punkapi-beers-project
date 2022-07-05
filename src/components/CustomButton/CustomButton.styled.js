import styled from "styled-components";

export const ButtonCustom = styled.button`
  background-color: rgba(14, 100, 62, 1);
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 2px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  min-width: 20%;
  margin-left: 5px;
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.8);
  &:hover {
    cursor: pointer;
  }
`;

export const AddFavBeerBtt = styled.button`
  background-color: ${({ isActive }) =>
    isActive ? "rgba(219, 192, 5, 1)" : "rgba(255, 255, 255, 0.5)"};
  color: black;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  font-size: 20px;
  margin-left: 5px;
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
