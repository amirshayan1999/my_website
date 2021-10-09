import React from "react";
import theme from "./themes/theme";
import {
  ThemeProvider,
  StylesProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import IndexScreen from "./screens/Index/index";
import { create } from "jss";
import rtl from "jss-rtl";
import { getDirection } from "./localization/index";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return getDirection() === "ltr" ? (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <IndexScreen />
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <IndexScreen />
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
