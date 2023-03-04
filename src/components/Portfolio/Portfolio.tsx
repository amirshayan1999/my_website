import React from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles/Portfolio.styles'
interface PortfolioProps {
  imgSrc: string
  title: string
  language: string
}
const Portfolio: React.FC<PortfolioProps> = ({ imgSrc, title, language }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.portfolioPic}>
          <img src={imgSrc} className={classes.image} alt="portfolio" />
          <div className={classes.overlay21} />
          <div className={classes.overlay22} />
        </div>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body1">{language}</Typography>
      </div>
    </div>
  )
}

export default Portfolio
