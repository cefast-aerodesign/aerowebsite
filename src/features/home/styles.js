import styled from "@emotion/styled";
import colors from "../../shared/colors";
import ButtonGeneric from "../../shared/components/button";

const HeaderHomeContainer = styled.div`
  border-radius: 16px;
  padding: 64px 0;
  margin: 0 24px;
  background: ${colors.primary_orange_common};
  width: calc(100% - 48px);
  height: 100%;
  img {
    position: absolute;
    top: 24px;
    right: 24px;
  }

  .highlight {
    color: ${colors.secondary_dark_black};
  }
  .title {
    display: inline;
  }
`;

const HeaderHomeContent = styled.div`
  color: ${colors.pale_gray};
  position: relative;
  left: 6%;
  max-width: 40%;
`;

const HomeContainer = styled.div`
`;

const ButtonKnowMore = styled(ButtonGeneric)`
  background-color: ${colors.secondary_dark_black};
  :hover {
    background-color: ${colors.gray_light};
  }
`;

export {
  HeaderHomeContainer,
  HeaderHomeContent,
  HomeContainer,
  ButtonKnowMore,
};
