import { Button, Grid } from '@mui/material';
import React from 'react'
import {  HeaderHomeContainer , HeaderHomeContent } from './styles';
import { H2, H4, P1 } from '../../fonts';
import { bannerHeaderHome } from '../../shared/images/logo_patrocinadores';

const HeaderHome = () => {
  return (
    <HeaderHomeContainer>
    <img src={bannerHeaderHome} alt="b"   />
    <HeaderHomeContent>
     <Grid container direction="column" spacing={2}>
      <Grid item>
        <H2 className='title cefast'>CEFAST </H2>
        <H2 className='title'>AERODESIGN</H2>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <H4>LOREM IPSUM</H4>
          </Grid>
          <Grid item>
            <P1>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</P1>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button className='btn-know-more' variant="contained">Saiba mais</Button>
      </Grid>
    </Grid>
      </HeaderHomeContent>
    </HeaderHomeContainer>

  );
}

export default HeaderHome;