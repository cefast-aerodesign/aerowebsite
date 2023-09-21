import ReactPlayer from "react-player";
import { BodyContainer } from "./style";
import Grid from "@mui/material/Grid/Grid";
import { H2, H4, P1 } from "../../../fonts";
import { Button, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import {bodyContent} from './body.data';

const HomeBody = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(setIsLoading(false), 5000);
  }, [setIsLoading]);

  return (
    <BodyContainer>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          {bodyContent.primaryTitleHighlight && <H2 className="title highlight">{bodyContent.primaryTitleHighlight} </H2>}
          <H2 className="title">{bodyContent.primaryTitle}</H2>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs>
              {isLoading ? (
                <Skeleton variant="rectangular" width={600} height={320} />
              ) : (
                <ReactPlayer
                  url={bodyContent.urlVideo}
                  controls={true}
                />
              )}
            </Grid>
            <Grid item xs>
              <Grid container spacing={2}>
                <Grid item>
                  <H4>{bodyContent.secondaryTitle}</H4>
                </Grid>
                <Grid item>
                  <P1>
                   {bodyContent.description} </P1>
                </Grid>
                <Grid item>
                  <a href="/historia">
                    <Button className="btn-know-more" variant="contained">
                      {bodyContent.buttonDescription}
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BodyContainer>
  );
};

export default HomeBody;
