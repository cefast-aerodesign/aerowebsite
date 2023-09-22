import React from "react";
import Grid from "@mui/material/Grid";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import colors from "../../shared/colors";

const SocialNetworkIcons = () => {
  const socialNetworkList = [
    {
      link: "https://www.instagram.com/cefastaerodesign/",
      icon: <BsInstagram color={colors.white} />,
    },
    {
      link: "https://www.facebook.com/CefastAerodesign/?locale=pt_BR",
      icon: <AiFillFacebook color={colors.white} />,
    },
    {
      link: "https://br.linkedin.com/company/cefast-aerodesign",
      icon: <BsLinkedin color={colors.white} />,
    },
    {
      link: "https://www.youtube.com/channel/UCcaH33-qxJOOLscglBONCKg",
      icon: <BsYoutube color={colors.white} />,
    },
  ];

  return socialNetworkList.map((socialNetworkItem) => (
    <Grid item xs="auto" key={socialNetworkItem.link}>
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
