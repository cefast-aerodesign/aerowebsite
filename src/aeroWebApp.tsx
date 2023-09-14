import React from 'react'
import { useEffect } from 'react'
import WebFont from 'webfontloader';
import Home from './features/home/index';
  
const AeroWebApp = () => 
{
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Rubik']
          }
        });
       }, []);
    return (
      <Home/>
    );

}

export default AeroWebApp