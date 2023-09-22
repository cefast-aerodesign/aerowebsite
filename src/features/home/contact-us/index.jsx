import { Grid } from "@mui/material";
import React from "react";
import { ContactUsContainer } from "./styles";
import { cefast } from "../../shared/images";
import { ContactUsList } from "../../shared/enums";
import { P2 } from "../../fonts";

const ContactUs = () => (
  <ContactUsContainer>
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item xs={4}>
       
      </Grid>
      <Grid item xs>
        <Grid container justifyContent="center" spacing={6} alignItems="center">
          {ContactUsList.map((item) => (
            <Grid item xs="auto" key={item.text}>
              <a className="ContactUs-text" href={item.link}>
                <P2>{item.text}</P2>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </ContactUsContainer>
);

export default ContactUs;
