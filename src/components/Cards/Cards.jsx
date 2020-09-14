import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = (props) => {
  console.log("Cards>>", props);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varaint="h5">REAL DATA</Typography>
            <Typography color="textSecondary">REAL DATA</Typography>
            <Typography varaint="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
          <Grid />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
