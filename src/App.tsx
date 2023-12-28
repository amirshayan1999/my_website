import theme from './themes/theme'
import {
  ThemeProvider,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { getDirection } from './localization/index'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {getDirection() === 'ltr' ? (
        <StylesProvider>
          <CssBaseline />
          <Routes />
        </StylesProvider>
      ) : (
        <StylesProvider jss={jss}>
          <CssBaseline />

          <Routes />
        </StylesProvider>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  )
}

export default App
