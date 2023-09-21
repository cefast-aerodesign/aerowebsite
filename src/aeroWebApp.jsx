import React from "react";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Home from "./features/home";
import Footer from "./features/footer";
import Nav from "./features/nav";

const AeroWebApp = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik"],
      },
    });
  }, []);
  return (
    <>
        <Nav />
        <Home />
       <Footer />
    </>
  );
};

export default AeroWebApp;
