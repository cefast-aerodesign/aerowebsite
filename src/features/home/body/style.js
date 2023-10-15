import styled from "@emotion/styled";
import colors from "../../../shared/colors";

const BodyContainer = styled.div`
  margin-top: 48px;
  padding: 0 72px 48px;
  background-color: ${colors.gray_light};
  color: ${colors.pale_gray};
  .title {
    display: inline;
  }
  .highlight {
    color: ${colors.primary_orange_common};
  }
`;

export { BodyContainer };
