import styled from "@emotion/styled";
import colors from "../../../shared/colors";

const BodyContainer = styled.div`
  padding: 0 72px 48px;
  background-color: ${colors.gray_light};
  color: ${colors.pale_gray};
  .title {
    display: inline;
  }
  .highlight {
    color: ${colors.orange_common};
  }
  .btn-know-more {
    width: 300px;
    background: #fe5600;
    margin-top: 8px;
  }
`;

export { BodyContainer };
