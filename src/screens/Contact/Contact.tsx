import React from 'react'
import { getTranslate } from '../../localization'
import Title from '../../components/Title/Title'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import '../../assets/CSS/contactMe.css'
import InfoBox from '../../components/InfoBox/InfoBox'

import useStyles from './styles/Contact.styles'
import { Form, Formik } from 'formik'
import contactValidationSchema from './validationSchema'
import { toast } from 'react-toastify'
function Contact() {
  const classes = useStyles()
  const translate = getTranslate()
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
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
          <Formik
            validationSchema={contactValidationSchema}
            initialValues={initialValues}
            onSubmit={async ({ name, email, message, subject }, args) => {
              const response = await fetch(
                `https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_TELE_ID}&text=${name} (${email})%0A%0A${subject}%0A%0A${message}`
              )
              response.json().then((res) => {
                if (res.ok) {
                  toast.success(translate.messageSent)
                }
              })
              args.resetForm()
            }}>
            {({
              values,
              handleBlur,
              isSubmitting,
              handleChange,
              errors,
              touched
            }) => (
              <Form>
                <TextField
                  color="primary"
                  className={classes.input}
                  name="name"
                  aria-label="name"
                  aria-valuetext={values.name}
                  value={values.name}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  required
                  fullWidth
                  label={translate.enterYourName}
                  variant="outlined"
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  className={classes.input}
                  aria-label="email"
                  aria-valuetext={values.email}
                  required
                  fullWidth
                  label={translate.enterYourEmail}
                  variant="outlined"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  type="email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  className={classes.input}
                  aria-label="subject"
                  aria-valuetext={values.subject}
                  required
                  fullWidth
                  label={translate.enterYourSubject}
                  variant="outlined"
                  name="subject"
                  value={values.subject}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  error={touched.subject && Boolean(errors.subject)}
                  helperText={touched.subject && errors.subject}
                />
                <TextField
                  className={classes.input}
                  label={translate.enterYourMessage}
                  aria-label="message"
                  aria-valuetext={values.message}
                  multiline
                  fullWidth
                  minRows={5}
                  variant="outlined"
                  name="message"
                  value={values.message}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
                <Button
                  variant="outlined"
                  aria-label="send-message"
                  className={classes.sendBtn}
                  fullWidth
                  name="send-message"
                  type="submit">
                  {translate.send}
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>

        <Grid item xs={12} lg={6} className={classes.infoContainer}>
          <InfoBox
            title={translate.phone}
            desc={translate.phoneNumbers}
            icon={<PhoneIcon className={classes.icon} />}
          />
          <InfoBox
            title={translate.email}
            desc={translate.emailAddress}
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
  )
}

export default Contact
