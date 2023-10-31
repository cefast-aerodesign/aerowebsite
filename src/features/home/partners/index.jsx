import { Grid } from "@mui/material";
import React, { useMemo } from "react";
import { PartnersSectionContainer } from "./styles";
import { H2, P2 } from "../../../shared/fonts";
import partnersList from "./partners.data";
import ButtonGeneric from "../../../shared/components/button";
import { partnersTextHome } from "../../../shared/images";
import PartnerCarousel from "./partner-carousel";
import propostaParceria from "../../../shared/documents/proposta-parceria.pdf"

const PartnersSection = () => {
  const partnerSubLists = useMemo(() => {
    const partnersMatrix = [];
    partnersMatrix.push(partnersList.slice(0, 5));
    partnersMatrix.push(partnersList.slice(5, 10));
    partnersMatrix.push(partnersList.slice(10, 15));
    partnersMatrix.push(partnersList.slice(15, 20));
    return partnersMatrix;
  }, []);

  return (
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
              <a
                href={propostaParceria }
                target="_blank"
              >
                <ButtonGeneric>Seja nosso parceiro</ButtonGeneric>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs="auto">
          <Grid container spacing={2}>
            {partnerSubLists?.map((partnerSublist, index) => (
              <Grid item xs="auto">
                <PartnerCarousel
                  partnerSubList={partnerSublist}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PartnersSectionContainer>
  );
};

export default PartnersSection;
