import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import "../../assets/CSS/bgEffect.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import { getTranslate } from "../../localization";

import useStyles from "./styles/Home.styles";

function Home() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <div className={classes.root}>
      <div className="bg" />
      <Typography variant="h1" classNbgame={classes.title}>
        {translate.hi1}
        <span className={classes.name}>{translate.name}</span>
        {translate.hi2}
      </Typography>
      <Typography variant="body1" className={classes.desc}>
        {translate.homeDesc}
      </Typography>
      <div className={classes.btnContainer}>
        <a
          href="https://www.linkedin.com/in/nastaran-jalali-559722200/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton className={classes.iconBTN}>
            <LinkedInIcon className={classes.Icon} />
          </IconButton>
        </a>

        <a
          href="https://github.com/nastaranjalali"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton className={classes.iconBTN}>
            <GitHubIcon className={classes.Icon} />
          </IconButton>
        </a>

        <a href="https://t.me/Notnastarann" target="_blank" rel="noreferrer">
          <IconButton className={classes.iconBTN}>
            <TelegramIcon className={classes.Icon} />
          </IconButton>
        </a>
      </div>
    </div>
  );
}

export default Home;
