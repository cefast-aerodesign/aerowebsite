import styled from "@emotion/styled";
import colors from "../../shared/colors";

const NavContainer = styled.div`
  padding: 24px;
  z-index: 3;
  position: absolute;
  width: calc(100% - 48px);

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
