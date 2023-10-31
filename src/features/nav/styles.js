import styled from "@emotion/styled";
import colors from "../../shared/colors";

const NavContainer = styled.div`
  margin: ${(props) => ( (props.$isScrolled  && props.$isDownCard) ? '0' :'0 24px')};
  padding: ${(props) => ( (props.$isScrolled  && props.$isDownCard) ? '0 24px' :'0')};
  z-index: 3;
  position: fixed;
  width: ${(props) => ( (props.$isScrolled  && props.$isDownCard) ? '100%' :  'calc(100% - 48px)')};
  border-radius: ${(props) => (props.$isScrolled || (!props.$isScrolled  && props.$isDownCard) ? 'unset' : '16px 16px 0 0')};
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
