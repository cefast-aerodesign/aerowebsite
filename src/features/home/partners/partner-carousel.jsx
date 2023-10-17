import React from "react";
import {
  PartnerListContainer,
  PartnerCard,
  PartnerList,
  PartnerListPositive,
  PartnerListNegative,
} from "./styles";

const PartnerItem = ({partnerItem}) => (
  <PartnerCard>
    <a target="_blank" href={partnerItem.urlPage}>
      <img width={120} height={120} src={partnerItem.image} />
    </a>
  </PartnerCard>
);

const PartnerCarousel = ({partnerSubList, index}) => {
  const PartnerListOriented =
    index % 2 === 0 ? PartnerListPositive : PartnerListNegative;
  return (
    <PartnerListContainer>
      <PartnerListOriented>
        {partnerSubList.map((partnerItem) => (
          <PartnerItem partnerItem={partnerItem} />
        ))}
        {partnerSubList.map((partnerItem) => (
          <PartnerItem partnerItem={partnerItem} />
        ))}
        
      </PartnerListOriented>
    </PartnerListContainer>
  );
};
export default PartnerCarousel;
