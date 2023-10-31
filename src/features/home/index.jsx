import React from "react";
import { useEffect } from "react";
import WebFont from "webfontloader";
import HeaderHome from "./header";
import PartnersSection from "./partners";
import HomeBody from "./body";
import { HomeContainer } from "./styles";
import HomeContactUs from "./contact-us";

const Home = ({ redirectTo }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik"],
      },
    });
  }, []);

  return (
    <HomeContainer>
      <HeaderHome handleRedirect={() => redirectTo("about-us")} />
      <HomeBody />
      <PartnersSection />
      <HomeContactUs />
    </HomeContainer>
  );
};

export default Home;
