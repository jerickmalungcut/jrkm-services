import Homepage from "./components/hero/Homepage";
import Parallax1 from "./components/parallaxCustom/Parallax1";
import Services from "./components/ourService/Services";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Homepage />
      <Parallax1 type="services" />
      <Services />
      <Parallax1 type="portfolio" />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
