import React from 'react';
import { FooterContainer, SeeMapButton, socialIcon } from './style'
import Grid from "@mui/material/Grid"
import { P1 } from '../../fonts';
import {cefast, cefet} from '../../shared/images/logo_patrocinadores'
import { BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'

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
              <P1>+55 31 98794-3331</P1>
            </Grid>
            <Grid item xs>
              <Grid container paddingRight='4px' direction="rows">
                <Grid item xs>
                  <a href="https://www.instagram.com/cefastaerodesign/" target="_blank" rel="noopener noreferrer"> 
                    <BsInstagram />
                  </a>
                </Grid>
                <Grid item xs>
                  <a href="https://www.facebook.com/CefastAerodesign/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                    <AiFillFacebook />
                  </a>
                </Grid>
                <Grid item xs>
                  <a href="https://br.linkedin.com/company/cefast-aerodesign" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin />
                  </a>
                </Grid>
                <Grid item xs>
                  <a href="https://www.youtube.com/channel/UCcaH33-qxJOOLscglBONCKg" target="_blank" rel="noopener noreferrer">
                    <BsYoutube />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <img src={cefast} alt="cefast aero" width={160} height={160} />
        </Grid>
        <Grid item xs>
          <a href='https://www.cefetmg.br' target='_blank'><img src={cefet} alt="cefet mg" width={160} height={160} /></a>
        </Grid>
        <Grid item xs>
          <Grid container direction="column" justifyContent="flex-end" className='map-container' spacing={2}>
            <Grid item xs>
              <P1>Av. Amazonas, 7675 - Nova Gameleira, Belo Horizonte - MG, 30510-000</P1>
            </Grid>
            <Grid item xs={12}>
              <a href='https://www.google.com.br/maps/place/CEFET-MG+-+Campus+Nova+Gameleira/@-19.9387516,-44.0013638,766m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6973f497f73a5:0x72e85b0a73d210a1!8m2!3d-19.9387567!4d-43.9987835!16s%2Fg%2F11rdznbr_n?entry=ttu'>
                <SeeMapButton variant='contained'>Ver no mapa</SeeMapButton>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer
