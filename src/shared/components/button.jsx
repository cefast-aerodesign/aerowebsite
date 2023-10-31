import React from "react";
import { ButtonGenericStyled } from "./styles";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ButtonGeneric = ({ disabled, loading, children, ...props }) => (
  <ButtonGenericStyled {...props} disabled={disabled || loading}>
    {loading ? (
      <Box sx={{ display: "flex" }}>
        <CircularProgress size={25}/>
      </Box>
    ) : (
      children
    )}
  </ButtonGenericStyled>
);

export default ButtonGeneric;
