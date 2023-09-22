import React from 'react';
import { FooterContainer, SeeMapButton } from './style'
import Grid from "@mui/material/Grid"
import { P1 } from '../../fonts';
import {cefast, cefet} from '../../shared/images/logo_patrocinadores'

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
          <div className="cefast-btn" onClick={()=> {window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}}>
          <img src={cefast} alt="cefast aero" width={160} height={160} />
          </div>
        </Grid>
        <Grid item xs>
          <img src={cefet} alt="cefet mg" width={160} height={160} />
        </Grid>
        <Grid item xs>
          <Grid container direction="column" justifyContent="flex-end" className='map-container' spacing={2}>
            <Grid item xs>
              <P1>Av. Amazonas, 7675 - Nova Gameleira, Belo Horizonte - MG, 30510-000</P1>
            </Grid>
            <Grid item xs={12}>
              <SeeMapButton variant='contained'>Ver no mapa</SeeMapButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer
