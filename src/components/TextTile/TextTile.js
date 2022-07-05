import React from "react";
import { TileText } from "./TextTile.styled";

function TextTile({ children }) {
  return <TileText>{children}</TileText>;
}

export default TextTile;
