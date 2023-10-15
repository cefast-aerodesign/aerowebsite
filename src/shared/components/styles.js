import styled from "@emotion/styled";
import colors from "../../shared/colors";
import { Button, TextField } from "@mui/material";

const ButtonGenericStyled = styled(Button)`
  height: 100%;
  min-width: 300px;
  background: ${colors.primary_orange_common};
  color: ${colors.white};
  margin-top: 8px;
`;

const InputGenericStyled = styled(TextField)`
  border-radius: 8px;

  background: ${colors.gray_variant};
  :focus {
  color: ${colors.white};
  }
  label {
    color: ${colors.white};

  }
  .Mui-focused{
    color: ${colors.white} !important;
  }

`;

export { ButtonGenericStyled, InputGenericStyled };
