import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    padding: '10px 20px 10px 20px'
  },
  image: {
    maxWidth: '100%',
    cursor: 'pointer',
    backfaceVisibility: 'hidden',
    verticalAlign: 'top'
  },
  title: {
    transition: '300ms',
    '&:hover': {
      color: 'rgb(229,39,100)',
      cursor: 'pointer'
    }
  },
  container: {
    margin: 15
  },
  portfolioPic: {
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0
  },
  overlay21: {
    top: 0,
    left: 0
  },
  overlay22: {
    width: '100%',
    height: 0,
    position: 'absolute',
    backgroundColor: 'rgba(229, 39, 100, 0.3)',
    overflow: 'hidden',
    bottom: 0,
    left: 0
  }
})
export default useStyles
