
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Banner from "./Banner";
import Experience from "./Experience";

import Skills from "./Skills";

const Home = () => {
  return (
    <div className="text-white">
      {/* Banner  */}
      <Banner />
      {/* about  */}
      <About/>
      {/* skills  */}
      <Skills />
      {/* experience */}
      <Experience />
      {/* contact  */}
      <Contact/>
      {/* footer  */}
      <Footer/>
    </div>
  );
};

export default Home;
