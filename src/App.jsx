import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
