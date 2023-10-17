import React, { useState} from "react";
import { HomeContactUsContainer } from "./styles";
import Grid from "@mui/material/Grid/Grid";
import ButtonGeneric from "../../../shared/components/button";
import { H2, H4 } from "../../../shared/fonts";
import InputGeneric from "../../../shared/components/input";
import { inputData } from "./contact-us-data";
import emailjs from "@emailjs/browser";

const HomeContactUs = () => {
  const [formListControl, setFormListControl] = useState(["", "", "", ""]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formListControl.every((item) => !!item.value)) {
      const templateParams = {
        from_name: formListControl[0],
        tel: formListControl[1],
        email: formListControl[2],
        message: formListControl[3],
      };
      emailjs
        .send(
          "service_ckulzci",
          "template_wuerdkm",
          templateParams,
          "udtumW2BU5UEFF4NR"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormListControl([]);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const onChangeFormInput = (index, value) => {
    // if(index === 2){
    // maskTel()
    // }
    const copy = [...formListControl];
    copy[index] = value;
    setFormListControl(copy);
  };

  return (
    <HomeContactUsContainer>
      <Grid
        container
        wrap="nowrap"
        justifyContent={"space-around"}
        alignItems="flex-start"
      >
        <Grid item xs={5}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <H2 className="title">ENTRE EM CONTATO COM A NOSSA EQUIPE</H2>
            </Grid>
            <Grid item>
              <H4 className="subtitle">
                Gostou do fazemos? Mande uma mensagem que entraremos em contato
                com você!
              </H4>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container direction="column" spacing={2}>
            {inputData.map((inputItem, index) => (
              <Grid item key={inputItem.id}>
                <InputGeneric
                  fullWidth
                  id={inputItem.id}
                  type={inputItem.type}
                  label={inputItem.label}
                  placeholder={inputItem.placeholder}
                  value={formListControl[index] || ""}
                  inputProps={{ maxLength: inputItem.maxChar }}
                  onChange={(ev) => onChangeFormInput(index, ev.target.value)}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <ButtonGeneric
                fullWidth
                className="btn-body"
                variant="contained"
                onClick={handleSubmit}
                disabled={
                  formListControl.some((item) => !item)
                }
              >
                Enviar
              </ButtonGeneric>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </HomeContactUsContainer>
  );
};

export default HomeContactUs;
