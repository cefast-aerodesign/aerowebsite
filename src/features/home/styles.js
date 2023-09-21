import styled from "@emotion/styled";
import colors from "../../shared/colors";

const HeaderHomeContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 564px;
  background-color: ${colors.gray_light};
  img {
    position: absolute;
    width: 100%;
  }
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

const HeaderHomeContent = styled.div`
  color: ${colors.pale_gray};
  position: absolute;
  max-width: 40%;
  top: 20%;
  z-index: 2;
  padding-left: 72px;
  `;

const HomeContainer = styled.div`
`

export { HeaderHomeContainer, HeaderHomeContent , HomeContainer  };
