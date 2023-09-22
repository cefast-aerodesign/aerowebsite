import styled from "@emotion/styled";
import colors from "../../shared/colors";
import { Button } from "@mui/material";

const ButtonGenericStyled = styled(Button)`
  height: 100%;
  min-width: 300px;
  background: ${colors.orange_common};
  color: ${colors.white};
  margin-top: 8px;
`;

export { ButtonGenericStyled };
