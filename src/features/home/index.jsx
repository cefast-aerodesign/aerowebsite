import React from "react";
import { useEffect } from "react";
import WebFont from "webfontloader";
import HeaderHome from "./header";
import HomeBody from "./body";
import {HomeContainer} from './styles';
import {HomeMailSender} from './mail';

const AeroWebApp = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik"],
      },
    });
  }, []);
  return (
    <HomeContainer>
      <HeaderHome />
      <HomeBody />
      <HomeMailSender />
    </HomeContainer>
  );
};

export default AeroWebApp;
