import React from "react";
import { ButtonGenericStyled } from "./styles";

const ButtonGeneric = ({ children, ...props }) => (
  <ButtonGenericStyled {...props}>{children}</ButtonGenericStyled>
);

export default ButtonGeneric;
