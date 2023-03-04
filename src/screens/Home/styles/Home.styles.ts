import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    flex: 1,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  '@keyframes slide': {
    '0%': {
      transform: 'translateX(-45%)'
    },
    '100%': {
      transform: 'translateX(25%)'
    }
  },
  homeBackround: {
    animation: '$slide 5s ease-in-out infinite alternate',
    backgroundImage:
      'linear-gradient(-20deg, rgba(27, 27, 47, 0.5) 50%, #0f0f24 50%)',
    bottom: 0,
    left: '-100%',
    opacity: 0.5,
    position: 'fixed',
    right: '-50%',
    top: 0,
    zIndex: -1
  },
  title: {
    marginBottom: '15px'
  },
  name: {
    color: '#e52764',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  desc: {
    marginBottom: '15px',
    width: '60%',
    [theme.breakpoints.down('xs')]: {
      width: '85%'
    }
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  iconBTN: {
    borderRadius: '50%',
    border: '2px solid #37374e',
    color: '#37374e',
    margin: '10px',
    transition: ' 200ms ease',
    '&:hover': {
      borderColor: '#e52764',
      transition: ' 500ms ease',
      color: '#e52764'
    }
  },
  Icon: {
    fontSize: '2rem',
    color: 'inherit'
  }
}))
export default useStyles
