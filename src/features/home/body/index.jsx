import ReactPlayer from "react-player";
import { BodyContainer } from "./style";
import Grid from "@mui/material/Grid/Grid";
import { H2, P1 } from "../../../shared/fonts";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { bodyContent } from "./body.data";
import ButtonGeneric from "../../../shared/components/button";

const HomeBody = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(setIsLoading(false), 5000);
  }, [setIsLoading]);

  return (
    <BodyContainer>
      <Grid container wrap="nowrap" alignItems="center" spacing={4}>
        <Grid item>
          {isLoading ? (
            <Skeleton variant="rectangular" width={600} height={320} />
          ) : (
            <ReactPlayer
              url={bodyContent.urlVideo}
              controls={true}
            />
          )}
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <H2 className="title">{bodyContent.title}</H2>
            </Grid>
            <Grid item>
              <P1>{bodyContent.description} </P1>
            </Grid>
            <Grid item xs={12}>
              <a href="/historia">
                <ButtonGeneric className="btn-body" variant="contained">
                  {bodyContent.buttonDescription}
                </ButtonGeneric>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BodyContainer>
  );
};

export default HomeBody;
