import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const containerContent = (): JSX.Element => {
  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Button>beije Menstrüel Ped</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>beije Günlük Ped</Button>
        </Grid>
        <Grid item xs={4}>
          <Button>beije Tampon</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default containerContent;
