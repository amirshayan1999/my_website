import React, { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles/InfoBox.styles'
interface InfoBoxProps {
  icon: ReactNode
  title: string
  desc: string[]
}
const InfoBox: React.FC<InfoBoxProps> = ({ icon, title, desc }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.service}>
        {icon}
        <div className={classes.infoContainer}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {desc.map((item) => (
            <Typography variant="body1" className={classes.desc} key={item}>
              {item}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoBox
