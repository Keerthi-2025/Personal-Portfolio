import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

import Service from "./components/Skills";
import Testimonal from "./components/Testimonal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work/>
      <Skills/>
      <Testimonal />
      <Projects/>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
