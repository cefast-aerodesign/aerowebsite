import styled from "@emotion/styled";
import { H2 } from "../../fonts";
import colors from "../../shared/colors";

const HeaderHomeContainer = styled.div`
  width: 100%;
  background-color: ${colors.gray_light};
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  img {
    position: absolute;
    width: 100vw;
  }
  .title {
    display: inline;
  }
  .cefast {
    color: ${colors.orange_common};
  }
  .btn-know-more {
    width: 300px;
    background: #fe5600;
  }
`;

const HeaderHomeContent = styled.div`
  color: ${colors.white};
  position: relative;
  max-width: 40%;
  top: 12%;
  left: 8%;
  z-index: 2;
`;
export { HeaderHomeContainer, HeaderHomeContent };
