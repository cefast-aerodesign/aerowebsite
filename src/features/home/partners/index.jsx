import { Grid } from "@mui/material";
import React from "react";
import { PartnersSectionContainer, PartnerCard } from "./styles";
import { H2, P2 } from "../../../shared/fonts";
import partnersList from "./partners.data";
import ButtonGeneric from "../../../shared/components/button";
import Carousel from "react-material-ui-carousel";
import { partnersTextHome } from "../../../shared/images";

const PartnersSection = () => (
  <PartnersSectionContainer>
    <img src={partnersTextHome} alt="nossos parceiros" />
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid item>
            <H2 className="title highlight">NOSSOS </H2>
            <H2 className="title">PARCEIROS</H2>
          </Grid>
          <Grid item>
            <P2>
              Gostaria de ser nosso parceiro também? Entre em contato conosco!
            </P2>
          </Grid>
          <Grid item>
            <ButtonGeneric>Seja nosso parceiro</ButtonGeneric>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Carousel autoPlay swipe cycleNavigation animation="slide">
          {partnersList.map((partnerItem) => (
            <PartnerCard>
              <a target="_blank" href={partnerItem.urlPage}>
                <img width={240} height={240} src={partnerItem.image} />
              </a>
            </PartnerCard>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  </PartnersSectionContainer>
);

export default PartnersSection;
