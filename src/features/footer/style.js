import styled from "@emotion/styled";
import colors from "../../shared/colors";
import Button from "@mui/material/Button";

const FooterContainer = styled.div`
  background-color: ${colors.black};
  padding: 16px 72px;
  height: 100%;
  margin: 0;
  color: ${colors.pale_gray};
  a {
    :hover {
      color: ${colors.orange_alternative};
    }
  }
   .icons {
    :hover path {
      color: ${colors.orange_alternative};
    }
  }
  .map-container {
    text-align: end;
  }
  .redirect {
    color: ${colors.pale_gray};
    text-decoration: none;
  }
  .cefast-btn {
    cursor: pointer;
  }
`;

const SeeMapButton = styled(Button)`
  color: ${colors.gray_dark};
  text-transform: capitalize;
  min-width: 180px;
  background-color: ${colors.pale_gray};
  :hover {
    background-color: ${colors.gray_medium};
  }
`;

export { FooterContainer, SeeMapButton };
