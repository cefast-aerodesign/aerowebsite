import styled from "@emotion/styled";
import colors from "../../shared/colors";
import Button from "@mui/material/Button";

const FooterContainer = styled.div`
  background-color: ${colors.black};
  padding: 16px 72px;
  height: 100%;
  margin: 0;
  color: ${colors.pale_gray};
  .map-container {
    text-align: end;
  }
  .redirect {
    color: ${colors.pale_gray};
    text-decoration: none;
  }
`;

const SeeMapButton = styled(Button)`
  color: ${colors.gray_dark};
  text-transform: capitalize;
  min-width: 180px;
  background-color: ${colors.pale_gray};
  .MuiButtonBase-root-MuiButton-root:hover {
    background-color: ${colors.gray_medium};
  }
`;

const socialIcon = styled.div`
  color: ${colors.pale_gray};
  padding-right: 2px;
  padding-left: 2px;
`;

export { FooterContainer, SeeMapButton, socialIcon };
