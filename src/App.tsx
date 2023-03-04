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
  return getDirection() === 'ltr' ? (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
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
        <Routes />
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
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
        <Routes />
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
