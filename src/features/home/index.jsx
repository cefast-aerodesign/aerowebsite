import React from 'react'
import { useEffect } from 'react'
import WebFont from 'webfontloader';
import HeaderHome from './header';

const AeroWebApp = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rubik']
      }
    });
  }, []);
  return (
    <HeaderHome />
    
  );

}

export default AeroWebApp
