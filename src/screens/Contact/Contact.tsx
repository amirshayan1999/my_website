import React from "react";
import { getTranslate } from "../../localization";
import Title from "../../components/Title/Title";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../../assets/CSS/contactMe.css";
import InfoBox from "../../components/InfoBox/InfoBox";

import useStyles from "./styles/Contact.styles";
function Contact() {
  const classes = useStyles();
  const translate = getTranslate();
  return (
    <Grid className={classes.root}>
      <Title text={translate.contact} />
      <Grid container direction="row">
        <Grid xs={12} lg={6} className={classes.formContainer}>
          <Typography variant="h4" className={classes.title}>
            {translate.getInTouch}
          </Typography>
          <TextField
            color="primary"
            className={classes.input}
            required
            label={translate.enterYourName}
            defaultValue=""
            variant="outlined"
            placeholder=" "
          />

          <TextField
            className={classes.input}
            required
            label={translate.enterYourEmail}
            defaultValue=""
            variant="outlined"
            placeholder=" "
          />

          <TextField
            className={classes.input}
            required
            label={translate.enterYourSubject}
            defaultValue=""
            variant="outlined"
            placeholder=" "
          />
          <TextField
            className={classes.input}
            label={translate.enterYourMessage}
            multiline
            rows={5}
            defaultValue=""
            variant="outlined"
            placeholder=" "
          />
          <Button variant="outlined" className={classes.sendBtn} name="Send">
            {translate.send}
          </Button>
        </Grid>
        <Grid xs={12} lg={6} className={classes.infoContainer}>
          <InfoBox
            title={translate.phone}
            desc={["(+98)9115647432", "(+98)9116074349"]}
            icon={<PhoneIcon className={classes.icon} />}
          />
          <InfoBox
            title={translate.email}
            desc={[translate.emailAddress]}
            icon={<EmailIcon className={classes.icon} />}
          />
          <InfoBox
            title={translate.address}
            desc={[translate.addressDesc]}
            icon={<LocationOnIcon className={classes.icon} />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
