import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // width: "100%",
    flex: 1,
    height: '100vh'
  },
  experienceContainer: {
    paddingLeft: 40,
    paddingBottom: 60,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15
    }
  },
  icon: {
    fontSize: '2.4rem'
  },
  experienceTitle: {
    marginLeft: 15
  }
}))
export default useStyles
