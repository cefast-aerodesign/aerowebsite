import styled from "@emotion/styled";
import colors from "../../shared/colors";
import { Button, TextField } from "@mui/material";

const ButtonGenericStyled = styled(Button)`
  height: 100%;
  min-width: 300px;
  background: ${colors.primary_orange_common};
  :hover{
  background: ${colors.primary_orange_variant};
  }
  :disabled {
    background: ${colors.gray_medium};

  }
  color: ${colors.white};
  margin-top: 8px;
  text-transform: capitalize;
  font-weight: 600;
`;

const InputGenericStyled = styled(TextField)`
  border-radius: 8px;
  input {
    color: ${colors.white};
    :focus {
      color: ${colors.white};
      border-color: ${colors.white}; !important
    margin-color: ${colors.white} !important;
      
    }
    
  .Mui-focused {
    color: ${colors.white} !important;
    border-color: ${colors.white} !important;
    margin-color: ${colors.white} !important;
  }
    
  }

  label {
    color: ${colors.white};
  }

  background: ${colors.gray_variant};

  .Mui-focused {
    color: ${colors.white} !important;
    border-color: ${colors.white} !important;
    margin-color: ${colors.white} !important;
    
  }
`;

export { ButtonGenericStyled, InputGenericStyled };
