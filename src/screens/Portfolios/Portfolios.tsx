import React from 'react'
import { getTranslate } from '../../localization'
import Title from '../../components/Title/Title'
import { Grid } from '@material-ui/core'
import Portfolio from '../../components/Portfolio/Portfolio'
import photo from '../../assets/images/portfolio.png'
import dongyab from '../../assets/images/dongyab.png'
import useStyles from './styles/Portfolios.styles'
const Portfolios = () => {
  const classes = useStyles()
  const translate = getTranslate()
  return (
    <Grid className={classes.root}>
      <Title text={translate.portfolios} />
      <Grid container direction="row">
        <Grid className={classes.portfolioContainer}>
          <Grid item xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={dongyab}
              title="Dong Yab"
              language="react JS"
              onClick={() =>
                window.open('http://dongyab.arsham79.ir/', '_blank')
              }
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Portfolio
              imgSrc={photo}
              title="portfolio sample"
              language="react JS"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolios
