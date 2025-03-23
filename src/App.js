import React, { useState, useRef } from "react";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

const App = () => {
  const [hide, setHide] = useState(false);
  return hide ? (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <ContactMe />
      <Footer />
    </main>
  ) : (
    <Welcome onComplete={() => setHide(true)} />
  );
};

export default App;
