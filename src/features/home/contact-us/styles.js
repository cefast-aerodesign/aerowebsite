import styled from "@emotion/styled";
import colors from "../../../shared/colors";

const HomeContactUsContainer = styled.div`
  margin: 48px;
  padding: 36px 80px;
  border-radius: 16px;
  background-color: ${colors.secondary_dark_black_variant};
  
  .subtitle {
    color: ${colors.primary_orange_common};
  }
  .title{
    color: ${colors.white};
  }

  input {
    height: 16px;
  }
  #message {
    height: 60px;
  }
`;

export { HomeContactUsContainer };
