import React from "react";
import { FooterContainer, SeeMapButton } from "./style";
import Grid from "@mui/material/Grid";
import { P1 } from "../../fonts";
import { cefast, cefet } from "../../shared/images";
import SocialNetworkIcons from "./socialNetworks";

const Footer = () => {
  const contactData = {
    primaryEmail: "cefastaeroadm@gmail.com",
    secondaryEmail: "cefastaeromkt@gmail.com",
    tel: "+55 31 98794-3331",
  };
  return (
    <FooterContainer>
      <Grid container alignItems="center" direction="row" spacing={9}>
        <Grid item xs>
          <Grid container direction="column" spacing={2}>
            <Grid item xs>
              <a className="redirect" href={contactData.primaryEmail}>
                <P1>{contactData.primaryEmail}</P1>
              </a>
            </Grid>
            <Grid item xs>
              <a className="redirect" href={contactData.secondaryEmail}>
                <P1>{contactData.secondaryEmail}</P1>
              </a>
            </Grid>
            <Grid item xs>
              <a className="redirect" href={'tel:' + contactData.tel}>
                <P1>{contactData.tel}</P1>
              </a>
            </Grid>
            <Grid item xs>
              <Grid container spacing={4} direction="rows">
                <SocialNetworkIcons />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <div className="cefast-btn" onClick={()=> {window. scrollTo({ top: 0, left: 0, behavior: 'smooth' })}}>
          <img src={cefast} alt="cefast aero" width={160} height={160} />
          </div>
        </Grid>
        <Grid item xs>
          <a href="https://www.cefetmg.br" target="_blank" rel="noopener noreferrer">
            <img src={cefet} alt="cefet mg" width={160} height={160} />
          </a>
        </Grid>
        <Grid item xs>
          <a
            className="redirect"
            href="https://www.google.com.br/maps/place/CEFET-MG+-+Campus+Nova+Gameleira/@-19.9387516,-44.0013638,766m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6973f497f73a5:0x72e85b0a73d210a1!8m2!3d-19.9387567!4d-43.9987835!16s%2Fg%2F11rdznbr_n?entry=ttu"
          >
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              className="map-container"
              spacing={2}
            >
              <Grid item xs>
                <P1 className="redirect">
                  Av. Amazonas, 7675 - Nova Gameleira, Belo Horizonte - MG,
                  30510-000
                </P1>
              </Grid>
              <Grid item xs={12}>
                <SeeMapButton variant="contained">Ver no mapa</SeeMapButton>
              </Grid>
            </Grid>
          </a>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
