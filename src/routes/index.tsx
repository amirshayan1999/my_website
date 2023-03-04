import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import About from "../screens/About/About";
import Contact from "../screens/Contact/Contact";
import Home from "../screens/Home/Home";
import ResponsiveDrawer from "../screens/Index";
import Portfolios from "../screens/Portfolios/Portfolios";
import Resume from "../screens/Resume/Resume";

const RoutesMain = () => {
  return (
    <Router>
      <Route path="/">
        <ResponsiveDrawer />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
      <Route exact path="/portfolios">
        <Portfolios />
      </Route>
      <Redirect to="/home" />
    </Router>
  );
};
export default RoutesMain;
