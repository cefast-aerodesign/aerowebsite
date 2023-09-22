import { Grid } from "@mui/material";
import React from "react";
import { PartnersSectionContainer } from "./styles";
import { P2 } from "../../fonts";
import partnersList from "./partners.data";
import { H2, H3 } from "../../../fonts";
import ButtonGeneric from "../../../shared/components/button";

const PartnersSection = () => (
  <PartnersSectionContainer>
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <H3 className="primary-title">PARCEIROS</H3>
          </Grid>
          <Grid item>
            <H2 className="secondary-title">CONHEÇA NOSSOS PARCEIROS</H2>
          </Grid>
          <Grid item>
            <ButtonGeneric>
              Seja nosso parceiro
            </ButtonGeneric>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Grid container justifyContent="center" spacing={6} alignItems="center">
          {partnersList.map((item) => (
            <Grid item xs="auto" key={item.text}>
              <a className="" href={item.link}>
                <P2>{item.text}</P2>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </PartnersSectionContainer>
);

export default PartnersSection;
