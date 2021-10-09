import AboutScreen from "../About/AboutScreen";
import Contact from "../Contact/contactScreen";
import Home from "../Home/homeScreen";
import Portfolios from "../Portfolios/portfoliosScreen";
import Resume from "../resumeScreen";

const ChangePage = (page: number) => {
  switch (page) {
    case 0:
      return <Home />;
    case 1:
      return <AboutScreen />;
    case 2:
      return <Resume />;
    case 3:
      return <Portfolios />;
    case 4:
      return <Contact />;
    default:
      return <Home />;
  }
};

export default ChangePage;
