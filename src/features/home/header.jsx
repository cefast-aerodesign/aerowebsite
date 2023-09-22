import { Button, Grid } from "@mui/material";
import React from "react";
import { HeaderHomeContainer, HeaderHomeContent } from "./styles";
import { H1, H4, P1 } from "../../fonts";
import { bannerHeaderHome } from "../../shared/images";

const HeaderHome = () => {
  return (
    <HeaderHomeContainer>
      <img src={bannerHeaderHome} alt="b" />
      <HeaderHomeContent>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <H1 className="title highlight">CEFAST </H1>
            <H1 className="title">AERODESIGN</H1>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <H4>Design, engenharia e qualidade no mesmo lugar</H4>
              </Grid>
              <Grid item>
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
          <Grid item>
            <a href="/historia">
            <Button className="btn-know-more" variant="contained">
              Saiba mais
            </Button>
            </a>
          </Grid>
        </Grid>
      </HeaderHomeContent>
    </HeaderHomeContainer>
  );
};

export default HeaderHome;
