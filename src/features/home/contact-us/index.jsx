import React, { useState } from "react";
import { HomeContactUsContainer } from "./styles";
import Grid from "@mui/material/Grid/Grid";
import ButtonGeneric from "../../../shared/components/button";
import { H2, H4 } from "../../../shared/fonts";
import InputGeneric from "../../../shared/components/input";
import { inputData } from "./contact-us-data";
import emailjs from "@emailjs/browser";
import SnackBarToast from "../../../shared/components/snackbar";

const HomeContactUs = () => {
  const [formListControl, setFormListControl] = useState(Array(4).fill(""));
  const [openToast, setOpenToast] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (formListControl.every((item) => item.value !== "")) {
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
        .then(() => {
          setOpenToast(true);
        })
        .catch(() => {
          setError(true);
          setOpenToast(true);
        })
        .finally(() => {
          setFormListControl([]);
          setLoading(false);
        });
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
    <HomeContactUsContainer id="contact-us">
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
                disabled={formListControl.some((item) => !item)}
                loading={loading}
              >
                Enviar
              </ButtonGeneric>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SnackBarToast
        open={openToast}
        onClose={() => setOpenToast(false)}
        messsage={
          error
            ? "Houve um erro ao enviar o formulário, por favor tente novamente."
            : "Formulário enviado com sucesso!"
        }
      />
    </HomeContactUsContainer>
  );
};

export default HomeContactUs;
