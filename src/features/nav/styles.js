import styled from "@emotion/styled";
import colors from "../../shared/colors";

const NavContainer = styled.div`
  margin: 0 24px;
  z-index: 3;
  position: fixed;
  width: calc(100% - 48px);
  border-radius: 16px 16px 0 0;
  background-color: ${colors.primary_orange_common};
  .nav-text {
    color: ${colors.pale_gray};
    text-decoration: none;
  }
  .nav-text :hover {
    font-weight: 500;
  }

  .title {
    display: inline;
  }
  .cefast {
    color: ${colors.primary_orange_common};
  }
`;

export { NavContainer };
