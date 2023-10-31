import React from "react";
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import Home from "./features/home";
import Footer from "./features/footer";
import Nav from "./features/nav";
import styled from "@emotion/styled";

const AeroWebContainer = styled.div`
  background-color: #1c1c1c;
  padding-top: 24px;
  padding-top: ${(props) => (props.$isScrolled ? "0" : "24px")};
`;

const AeroWebApp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDownCard, setIsDownCard] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik"],
      },
    });
  }, []);

  const handleScroll = () => {
    setIsScrolled(window.scrollY !== 0);
    setIsDownCard(window.scrollY > 500);
  };

  useEffect(() => {
    handleScroll();
    console.log(isScrolled);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const redirectTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
  }

  return (
    <AeroWebContainer  $isScrolled={isScrolled}>
      <Nav redirectTo={redirectTo} isDownCard={isDownCard} isScrolled={isScrolled} />
      <Home redirectTo={redirectTo}/>
      <Footer />
    </AeroWebContainer>
  );
};

export default AeroWebApp;
