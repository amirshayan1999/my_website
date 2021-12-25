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
        <Grid item xs={12} lg={6} className={classes.formContainer}>
          <div className={classes.titleContainer}>
            <Typography variant="h4" className={classes.title}>
              {translate.getInTouch}
            </Typography>
          </div>
          <TextField
            color="primary"
            className={classes.input}
            required
            fullWidth
            label={translate.enterYourName}
            variant="outlined"
          />
          <TextField
            className={classes.input}
            required
            fullWidth
            label={translate.enterYourEmail}
            variant="outlined"
          />
          <TextField
            className={classes.input}
            required
            fullWidth
            label={translate.enterYourSubject}
            variant="outlined"
          />
          <TextField
            className={classes.input}
            label={translate.enterYourMessage}
            multiline
            fullWidth
            rows={5}
            variant="outlined"
          />

          <Button variant="outlined" className={classes.sendBtn} fullWidth>
            {translate.send}
          </Button>
        </Grid>
        <Grid item xs={12} lg={6} className={classes.infoContainer}>
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
