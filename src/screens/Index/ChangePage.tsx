import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Portfolios from "../Portfolios/Portfolios";
import Resume from "../Resume/Resume";

const ChangePage = (page: number) => {
  switch (page) {
    case 0:
      return <Home />;
    case 1:
      return <About />;
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
