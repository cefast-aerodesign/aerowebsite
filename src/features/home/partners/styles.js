import styled from "@emotion/styled";
import colors from "../../../shared/colors";

const PartnersSectionContainer = styled.div`
  margin: 72px;
  background-color: ${colors.white}; 
  .primary-title {
    color: ${colors.orange_common};
  }

  .secondary-title {
    color: ${colors.dark_gradient};
  }
  .swiper-slide{
    padding: 12px;
  }
`;

const PartnerCard = styled.div`
`;

export { PartnersSectionContainer , PartnerCard};
