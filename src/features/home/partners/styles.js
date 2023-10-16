import styled from "@emotion/styled";
import colors from "../../../shared/colors";
import { Card } from "@mui/material";

const PartnersSectionContainer = styled.div`
  margin: 48px;
  padding: 36px 72px;
  border-radius: 16px;
  background-color: ${colors.secondary_dark_black_variant};
  color: ${colors.white};
  position: relative;

  img {
    position: absolute;
    left: 0;
    top: 0;
  }

  .title {
    font-weight: 900;
  }
  .highlight {
    color: ${colors.primary_orange_common};
  }

`;

const PartnerCard = styled(Card)`
  border-radius: 8px;
  background-color: ${colors.white}
  min-width: 280px;
`;

export { PartnersSectionContainer, PartnerCard };
