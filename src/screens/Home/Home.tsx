import React from 'react'
import { IconButton, Typography } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import TelegramIcon from '@material-ui/icons/Telegram'
import { getTranslate } from '../../localization'

import useStyles from './styles/Home.styles'

const Home = () => {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <div className={classes.root}>
      <div className={classes.homeBackround} />
      <Typography variant="h1" className={classes.title}>
        {translate.hi1}
        <span className={classes.name}>{translate.name}</span>
        {translate.hi2}
      </Typography>
      <Typography variant="body1" className={classes.desc}>
        {translate.homeDesc}
      </Typography>
      <div className={classes.btnContainer}>
        <a
          href="https://github.com/amirshayan1999"
          target="_blank"
          rel="noreferrer">
          <IconButton className={classes.iconBTN} name="GitHubButton">
            <GitHubIcon className={classes.Icon} />
          </IconButton>
        </a>

        <a href="https://t.me/domigenic" target="_blank" rel="noreferrer">
          <IconButton className={classes.iconBTN} name="TelegramButton">
            <TelegramIcon className={classes.Icon} />
          </IconButton>
        </a>
      </div>
    </div>
  )
}

export default Home
