import { makeStyles } from '@material-ui/core/styles'
import { getDirection } from '../../../localization'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 120,
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative',
    marginBottom: 40
  },
  title: {
    margin: '50px 0 0 40px',
    [theme.breakpoints.down('sm')]: {
      fontSize: getDirection() === 'rtl' ? 33 : 35
    },
    '&::before': {
      content: "''",
      width: 150,
      height: 5,
      backgroundColor: '#e52764',
      position: 'absolute',
      left: 0,
      bottom: -10,
      margin: '30px 0 0 50px',
      borderRadius: 5
    },
    '&:hover': {
      '&::before': {
        content: "''",
        width: '180px',
        height: '5px',
        backgroundColor: '#e52764',
        position: 'absolute',
        left: 0,
        bottom: -10,
        margin: '30px 0 0 35px',
        borderRadius: 5
      }
    }
  }
}))
export default useStyles
