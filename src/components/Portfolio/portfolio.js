import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import useStyles from "./styles/portfolio.styles";
function Portfolio({ imgSrc, title, language }) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <div className={classes.portfolioPic}>
          <img src={imgSrc} className={classes.image} alt="portfolio" />
          <div className={classes.overlay21} />
          <div className={classes.overlay22} />
        </div>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1">{language}</Typography>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
