import styled from "@emotion/styled";
import colors from "../../../shared/colors";

const HomeContactUsContainer = styled.div`
  margin: 48px;
  padding: 36px 80px;
  border-radius: 16px;
  background-color: #101010;
  background: linear-gradient(220deg, #212121 13.05%, #131313 48.21%, #101010 77.78%);
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
