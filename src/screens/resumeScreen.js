import { makeStyles } from "@material-ui/core/styles";
import theme from "../themes/theme";
import { getTranslate } from "../localization";
import Title from "../components/Title/Title";
import { Grid, Typography } from "@material-ui/core";
import Skill from "../components/Skill/Skill";
import Experience from "../components/Experience/Experience";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  experienceContainer: {
    paddingLeft: 40,
    paddingBottom: 60,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 15,
    },
  },
  icon: {
    fontSize: "2.4rem",
  },
  experienceTitle: {
    marginLeft: 15,
  },
});

function ResumeScreen() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <Grid className={classes.root}>
      <Title text={translate.mySkills} />
      <Grid container direction="row">
        <Grid xs={12} lg={6}>
          <Skill title={translate.html5} val={76} />
          <Skill title={translate.js} val={78} />
          <Skill title={translate.reactJS} val={83} />
          <Skill title={translate.materialUI} val={53} />
        </Grid>
        <Grid xs={12} lg={6}>
          <Skill title={translate.css3} val={80} />
          <Skill title={translate.jquery} val={19} />
          <Skill title={translate.bootstrap} val={39} />
          <Skill title={translate.photoshop} val={20} />
        </Grid>
      </Grid>
      <Title text={translate.resume} />
      <Grid container direction="row" className={classes.experienceContainer}>
        <WorkIcon className={classes.icon} />
        <Typography className={classes.experienceTitle} variant="h4">
          {translate.workExperience}
        </Typography>
        <Experience
          year={translate.jobFirstYear}
          company={translate.jobFirstCompany}
          jobTitle={translate.jobFirstTitle}
          desc={translate.jobFirstDesc}
        />
        <Experience
          year={translate.jobSecondYear}
          company={translate.jobSecondCompany}
          jobTitle={translate.jobSecondTitle}
          desc={translate.jobSecondDesc}
        />
      </Grid>
      <Grid container direction="row" className={classes.experienceContainer}>
        <SchoolIcon className={classes.icon} />
        <Typography className={classes.experienceTitle} variant="h4">
          {translate.educationalQualification}
        </Typography>
        <Experience
          year={translate.firstDegreeYear}
          company={translate.firstDegree}
          jobTitle={translate.firstSchoolName}
          desc={translate.firstLocation}
        />
        <Experience
          year={translate.secondDegreeYear}
          company={translate.secondDegree}
          jobTitle={translate.secondSchoolName}
          desc={translate.secondLocation}
        />
      </Grid>
    </Grid>
  );
}

export default ResumeScreen;
