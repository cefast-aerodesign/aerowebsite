import React from 'react'
import { useEffect } from 'react'
import WebFont from 'webfontloader';
import Footer from './features/footer';

const AeroWebApp = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rubik']
      }
    });
  }, []);
  return (
    <Footer />
  );

}

export default AeroWebApp
