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

  @keyframes slidePositive {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }

  @keyframes slideNegative {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const PartnerListContainer = styled.div`
  max-height: 280px;
  overflow: hidden;
  position: relative  
  :hover {
    animation-play-state: paused;
  }
  
`;

const PartnerListPositive = styled.div`
  animation: 30s linear  0s infinite slidePositive;
  :hover {
    animation-play-state: paused;
  }
`;

const PartnerListNegative = styled.div`
  animation: 30s linear 0s infinite slideNegative;
`;

const PartnerCard = styled(Card)`
  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    background: linear-gradient();
    content: "";
    z-index: 4;

  }



  white-space: nowrap;
  width: min-content;
  margin-top: 12px;
  background-color: ${colors.white};
  
  img {
    position: relative;
    heigth: 114px;
    width: 140px;
  }
`;

export {
  PartnersSectionContainer,
  PartnerCard,
  PartnerListContainer,
  PartnerListPositive,
  PartnerListNegative,
};
