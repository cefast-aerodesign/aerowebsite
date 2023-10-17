import ReactPlayer from "react-player";
import { BodyContainer } from "./style";
import Grid from "@mui/material/Grid/Grid";
import { H3, P1 } from "../../../shared/fonts";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { bodyContent } from "./body.data";
import ButtonGeneric from "../../../shared/components/button";
import React from "react";
import Carousel from 'react-material-ui-carousel'

const HomeBody = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(setIsLoading(false), 5000);
  }, [setIsLoading]);

  return (
    <BodyContainer>
      <Grid container wrap="nowrap" alignItems="center" spacing={4}>
        <Grid item xs>
          {isLoading ? (
            <Skeleton variant="rectangular" width={600} height={320} />
          ) : (
            <Carousel strictIndexing={false}>
                  <ReactPlayer url={bodyContent.urlVideo1} controls={true} />
                  <ReactPlayer url={bodyContent.urlVideo2} controls={true} />
            </Carousel>
          )}
        </Grid>
        <Grid item xs>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <H3 className="title">{bodyContent.title}</H3>
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
