import React from 'react';
import { FooterContainer, SeeMapButton} from './style'
import  Grid from "@mui/material/Grid"
import { P1 } from '../../fonts/fonts';
import cefast from './cefast-logo.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container direction="row" alignItems="center" spacing={9}>
        <Grid item xs>
          <Grid container direction="column" spacing={2}>
              <Grid item xs>
                <P1>cefastaeroadm@gmail.com</P1>
              </Grid>
              <Grid item xs>
              <P1>cefastaeromkt@gmail.com</P1>
                </Grid>
                <Grid item xs>
                  <a>
                <P1>(31) 98794-3331</P1>
                  </a>
                </Grid>
                <Grid item xs>
                    icones
                </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <img src={cefast} alt="cefast aero" width={160} height={160}/>
        </Grid>
        <Grid item xs>
          <img src={cefast} alt="cefet mg" width={160} height={160}/>
        </Grid>
        <Grid item xs>
        <Grid container direction={'column'} spacing={2}>
              <Grid item xs>
                <P1>Av. Amazonas, 7675 - Nova Gameleira, Belo Horizonte - MG, 30510-000</P1>
              </Grid>
              <Grid item xs>
                <SeeMapButton variant='contained'>Ver no mapa</SeeMapButton>
                </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FooterContainer>  
  );
};

export default Footer
