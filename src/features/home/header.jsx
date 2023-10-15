import { Grid } from "@mui/material";
import React from "react";
import { HeaderHomeContainer, HeaderHomeContent, ButtonKnowMore } from "./styles";
import { H1, H4, P1 } from "../../shared/fonts";
import { airPlaneHeaderHome } from "../../shared/images";

const HeaderHome = () => {
  
  return (
    <HeaderHomeContainer>
      <img src={airPlaneHeaderHome} alt="avião monoplano" />
      <HeaderHomeContent>
        <Grid wrap="nowrap" container direction="column" spacing={3}>
          <Grid item xs>
            <H1 className="title highlight">CEFAST </H1>
            <H1 className="title">AERODESIGN</H1>
          </Grid>
          <Grid item xs>
            <Grid container wrap="nowrap" direction="column" spacing={2}>
              <Grid item xs>
                <H4>Design, engenharia e qualidade no mesmo lugar</H4>
              </Grid>
              <Grid item xs>
                <P1>
                  Criada em 1999 e formada por alunos das mais diversas áreas de
                  engenharia, a equipe representa o Centro Federal de Educação
                  Tecnológica de Minas Gerais (CEFET-MG) em competições
                  nacionais e internacionais da SAE, vinculada ao Núcleo de
                  Engenharia Aplicada a Competições (NEAC) da instituIção.
                </P1>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <a href="/historia">
              <ButtonKnowMore variant="contained">
                Saiba mais
              </ButtonKnowMore>
            </a>
          </Grid>
        </Grid>
      </HeaderHomeContent>
    </HeaderHomeContainer>
  );
};

export default HeaderHome;
