import { Grid } from "@mui/material";
import React from "react";
import { NavContainer } from "./styles";
import { cefast } from "../../shared/images";
import { navList } from "../../shared/enums";
import { P2 } from "../../fonts";

const Nav = () => (
  <NavContainer>
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item xs={6}>
        <a href="/home">
          <img
            src={cefast}
            width={160}
            height={60}
            alt="logo cefast aerodesign"
          />
        </a>
      </Grid>
      <Grid item xs>
        <Grid container justifyContent="center" spacing={6} alignItems="center">
          {navList.map((item) => (
            <Grid item xs="auto" key={item.text}>
              <a className="nav-text" href={item.link}>
                <P2>{item.text}</P2>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </NavContainer>
);

export default Nav;
