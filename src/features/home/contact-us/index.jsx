import { HomeContactUsContainer } from "./styles";
import Grid from "@mui/material/Grid/Grid";
import ButtonGeneric from "../../../shared/components/button";
import { H2, H4 } from "../../../shared/fonts";
import InputGeneric from "../../../shared/components/input";
import FormControl from "@mui/material/FormControl";
import { inputData } from "./contact-us-data";

const HomeContactUs = () => {
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
              {inputData.map((inputItem) => (
                <Grid item key={inputItem.id} >
                  <InputGeneric
                    fullWidth
                    id={inputItem.id}
                    label={inputItem.label}
                    placeholder={inputItem.placeholder}
                    inputProps={{ maxLength: inputItem.maxChar}}
                  />
                </Grid>
              ))}
            <Grid item xs={12}>
              <a href="/historia">
                <ButtonGeneric fullWidth className="btn-body" variant="contained">
                  Enviar
                </ButtonGeneric>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </HomeContactUsContainer>
  );
};

export default HomeContactUs;
