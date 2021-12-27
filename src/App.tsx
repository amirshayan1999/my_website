import React from "react";
import theme from "./themes/theme";
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { create } from "jss";
import rtl from "jss-rtl";
import { getDirection } from "./localization/index";
import Routes from "./routes/index";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  return getDirection() === "ltr" ? (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <Routes />
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <Routes />
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
