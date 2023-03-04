import Typography from '@material-ui/core/Typography'
import ExperienceIcon from '@material-ui/icons/RadioButtonUnchecked'
import useStyles from './styles/Experience.styles'
import React from 'react'
interface ExperienceProps {
  year: string
  jobTitle: string
  company: string
  desc: string
}
const Experience: React.FC<ExperienceProps> = ({
  year,
  jobTitle,
  company,
  desc
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.yearContainer}>
        <ExperienceIcon className={classes.icon} />
        <Typography variant="h6">{year}</Typography>
      </div>
      <div className={classes.descContainer}>
        <Typography variant="h5" className={classes.title}>
          {jobTitle}
        </Typography>
        <Typography variant="body1" className={classes.company}>
          {company}
        </Typography>
        <Typography variant="body1" className={classes.desc}>
          {desc}
        </Typography>
      </div>
    </div>
  )
}
export default Experience
