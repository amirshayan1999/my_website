import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import useStyles from "./styles/Experience.styles";
function Experience({ year, jobTitle, company, desc }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid className={classes.yearContainer}>
        <RadioButtonUncheckedIcon className={classes.icon} />
        <Typography variant="h6">{year}</Typography>
      </Grid>
      <Grid className={classes.descContainer}>
        <Typography variant="h5" className={classes.title}>
          {jobTitle}
        </Typography>
        <Typography variant="body1" className={classes.company}>
          {company}
        </Typography>
        <Typography variant="body1" className={classes.desc}>
          {desc}
        </Typography>
      </Grid>
    </Grid>
  );
}
export default Experience;
