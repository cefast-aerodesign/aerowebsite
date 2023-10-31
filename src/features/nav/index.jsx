import { Grid } from "@mui/material";
import React from "react";
import { NavContainer } from "./styles";
import { cefastTextLogo } from "../../shared/images";
import { navList } from "../../shared/enums";
import { P2 } from "../../shared/fonts";
import { Route, Link, Routes, useLocation } from "react-router-dom";

const Nav = ({ isScrolled, isDownCard, redirectTo }) => {
  const location = useLocation();

  const redirectHome = () => {
    if (location.pathname == "/" || location.pathname == "/home") {
      window.scrollTo(0);
    }
  };
  return (
    <NavContainer
      className="nav-fixed"
      $isScrolled={isScrolled}
      $isDownCard={isDownCard}
    >
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={6}>
          <a onClick={redirectHome}>
            <img
              src={cefastTextLogo}
              width={160}
              height={60}
              alt="logo cefast aerodesign"
            />
          </a>
        </Grid>
        <Grid item xs>
          <Grid
            container
            justifyContent="center"
            spacing={8}
            alignItems="center"
          >
            {navList.map((item) => (
              <Grid item xs="auto" key={item.text}>
                <a
                  onClick={() => redirectTo(item.idRedirect)}
                  className="nav-text"
                >
                  <P2>{item.text}</P2>
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </NavContainer>
  );
};

export default Nav;
