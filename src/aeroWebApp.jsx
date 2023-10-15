import React from "react";
import { useEffect } from "react";
import WebFont from "webfontloader";
import Home from "./features/home";
import Footer from "./features/footer";
import Nav from "./features/nav";
import styled from "@emotion/styled";

const AeroWebContainer = styled.div`
  background-color: #1C1C1C;
  padding-top: 24px;
`;

const AeroWebApp = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik"],
      },
    });
  }, []);
  return (
    <AeroWebContainer>
        <Nav />
        <Home />
       <Footer />
    </AeroWebContainer >
  );
};

export default AeroWebApp;
