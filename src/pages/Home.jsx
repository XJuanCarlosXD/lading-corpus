import React from "react";
import Carucel from "../Components/Carucel";
import About from "../Components/About";
import Service from "../Components/Service";
import Planes from "../Components/Planes";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = (props) => {
  return (
    <div>
      <Carucel />
      <About />
      <Service />
      <Planes />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
