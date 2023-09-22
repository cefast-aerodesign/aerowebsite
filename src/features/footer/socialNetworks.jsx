import React from "react";
import { SocialIcon } from "./style";
import Grid from "@mui/material/Grid";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

const SocialNetworkIcons = () => {
  const socialNetworkList = [
    {
      link: "https://www.instagram.com/cefastaerodesign/",
      icon: <BsInstagram />,
    },
    {
      link: "https://www.facebook.com/CefastAerodesign/?locale=pt_BR",
      icon: <AiFillFacebook />,
    },
    {
      link: "https://br.linkedin.com/company/cefast-aerodesign",
      icon: <BsLinkedin />,
    },
    {
      link: "https://www.youtube.com/channel/UCcaH33-qxJOOLscglBONCKg",
      icon: <BsYoutube />,
    },
  ];

  return socialNetworkList.map((socialNetworkItem) => (
    <Grid item xs>
      <a
        href={socialNetworkItem.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {socialNetworkItem.icon}
      </a>
    </Grid>
  ));
};

export default SocialNetworkIcons;
