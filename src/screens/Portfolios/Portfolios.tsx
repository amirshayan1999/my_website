import React from "react";
import { getTranslate } from "../../localization";
import Title from "../../components/Title/Title";
import { Grid } from "@material-ui/core";
import Portfolio from "../../components/Portfolio/Portfolio";
import photo from "../../assets/images/portfolio.png";
import useStyles from "./styles/Portfolios.styles";
const Portfolios = () => {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <Grid className={classes.root}>
      <Title text={translate.portfolios} />
      <Grid container direction="row">
        <Grid className={classes.portfolioContainer}>
          <Grid xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolios;
