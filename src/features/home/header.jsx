

import { Button, Grid } from '@mui/material';
import React from 'react'
import { HeaderTitle } from './styles';
import { H2, H4, P1 } from '../../fonts';

const HeaderHome = () => {
  return (
    <Grid container direction={'column'} spacing={2}>
      <Grid item>
        <HeaderTitle>CEFAST</HeaderTitle>
        <H2>AERODESIGN</H2>
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
        <Button>Saiba mais</Button>
      </Grid>
    </Grid>
  );
}

export default HeaderHome;