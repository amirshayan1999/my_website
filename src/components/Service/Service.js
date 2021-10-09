import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import useStyles from "./styles/Sernice.styles";
function Service({ icon, title, desc }) {
  const classes = useStyles();
  return (
    <Grid container lg={4} md={6} xs={12} className={classes.root}>
      <Grid className={classes.service}>
        {icon}
        <Typography variant={"h5"} className={classes.title}>
          {title}
        </Typography>
        <Typography variant={"body1"} className={classes.desc}>
          {desc}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Service;
