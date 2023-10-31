import styled from "@emotion/styled";
import colors from "../../../shared/colors";

const BodyContainer = styled.div`
  margin-top: 48px;
  padding: 0 72px 48px;
  color: ${colors.pale_gray};
  .title {
    color: ${colors.primary_orange_variant};
  }
  iframe{
    border-radius: 16px;
  }
  .btn-body{
    width: 50%;
    background-color: ${colors.primary_orange_common};

    :hover {   
      background-color: ${colors.primary_orange_variant};
    }
  }
  
`;

export { BodyContainer };
