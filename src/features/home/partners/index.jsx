import { Grid } from "@mui/material";
import React from "react";
import { PartnersSectionContainer } from "./styles";
import { H3 } from "../../../shared/fonts";
import partnersList from "./partners.data";
import ButtonGeneric from "../../../shared/components/button";
import SwiperGeneric from "../../../shared/components/swiper";
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , Autoplay} from 'swiper/modules';

import 'swiper/css/autoplay'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PartnersSection = () => (
  <PartnersSectionContainer>
    <Grid container direction="row" justifyContent="space-around" alignItems="center">
      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item>
            <H3 className="primary-title">PARCEIROS</H3>
          </Grid>
          <Grid item>
            <H3 className="secondary-title">CONHEÇA NOSSOS PARCEIROS</H3>
          </Grid>
          <Grid item>
            <ButtonGeneric>Seja nosso parceiro</ButtonGeneric>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <SwiperGeneric
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={3}
          
        >
          {partnersList.map((partnerItem) => (
            <SwiperSlide >
              <a target="_blank" href={partnerItem.urlPage}>
               <img width={240} height={240} src={partnerItem.image}/>
              </a>
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </Grid>
    </Grid>
  </PartnersSectionContainer>
);

export default PartnersSection;
