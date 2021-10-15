import { getTranslate } from "../../localization";
import Title from "../../components/Title/Title";
import aboutMePic from "../../assets/images/aboutMePic.jpg";
import { Button, Grid, Typography } from "@material-ui/core";
import Service from "../../components/Service/Service";
import PaletteIcon from "@material-ui/icons/Palette";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CodeIcon from "@material-ui/icons/Code";
import useStyles from "./styles/About.styles";
function About() {
  const classes = useStyles();
  const translate = getTranslate();
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `cv.jpg`;
    link.href = "../../public/files/cv.jpg";
    link.click();
  };
  return (
    <Grid container className={classes.root}>
      <Title text={translate.aboutMe} />
      <Grid container direction="row">
        <Grid item={true} xs={12} lg={6} className={classes.picContainer}>
          <img
            src={aboutMePic}
            alt="aboutMePicture"
            className={classes.aboutMePic}
          />
        </Grid>
        <Grid item={true} xs={12} lg={6} className={classes.textContainer}>
          <Typography variant="h3" className={classes.marginBottom}>
            {translate.hi1}
            <span className={classes.name}>{translate.name}</span>
            {translate.hi2}
          </Typography>
          <Typography
            variant="body1"
            className={`${classes.info} ${classes.marginBottom}`}
          >
            {translate.homeDesc}
          </Typography>
          <Typography variant="body1" className={classes.info}>
            <b className={classes.bold}>{translate.fullName}</b>:{" "}
            {translate.name}
          </Typography>
          <Typography variant="body1" className={classes.info}>
            <b className={classes.bold}>{translate.age}</b>: 20{" "}
            {translate.years}
          </Typography>
          <Typography variant="body1" className={classes.info}>
            <b className={classes.bold}>{translate.nationality}</b>:{" "}
            {translate.iranian}
          </Typography>
          <Typography variant="body1" className={classes.info}>
            <b className={classes.bold}>{translate.languages}</b>:{" "}
            {translate.persian}, {translate.english}, {translate.german}
          </Typography>
          <Typography variant="body1" className={classes.info}>
            <b className={classes.bold}>{translate.phone}</b>: (+98)9115647432
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              name="Download"
              onClick={onDownload}
              variant="outlined"
              className={classes.cvButton}
            >
              {translate.downloadcv}
            </Button>
          </div>
        </Grid>
      </Grid>
      <Title text={translate.services} />
      <Grid container direction="row" className={classes.servicesContainer}>
        <Service
          title={translate.webDesign}
          desc={translate.designDesc}
          icon={<PaletteIcon className={classes.icon} />}
        />
        <Service
          title={translate.webDevelopment}
          desc={translate.developDesc}
          icon={<CodeIcon className={classes.icon} />}
        />
        <Service
          title={translate.mobileApplication}
          desc={translate.mobileAppDesc}
          icon={<PhoneIphoneIcon className={classes.icon} />}
        />
      </Grid>
    </Grid>
  );
}

export default About;
