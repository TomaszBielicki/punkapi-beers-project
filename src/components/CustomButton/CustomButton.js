import React from "react";
import { ButtonCustom, AddFavBeerBtt } from "./CustomButton.styled";

function CustomButton({ isFavButton = false, onClick, children, isActive }) {
  return isFavButton ? (
    <AddFavBeerBtt isActive={isActive} onClick={onClick}>
      {children}
    </AddFavBeerBtt>
  ) : (
    <ButtonCustom onClick={onClick}>{children}</ButtonCustom>
  );
}

export default CustomButton;
