import React from "react";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Home from "./features/home";
import Footer from "./features/footer";
import { Grid } from "@mui/material";

const AeroWebApp = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik"],
      },
    });
  }, []);
  return (
        <Home />
        // <Footer />
  );
};

export default AeroWebApp;
