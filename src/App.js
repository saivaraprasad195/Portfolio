import React, { useState, useRef } from "react";
import Header from "./Components/Header";
// import Welcome from "./Components/Welcome";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

const App = () => {
  const skillsRef = useRef(null);
  // const [hide, setHide] = useState(true);
  // return hide ? (
  //   <>
  //     <Header /> <Hero />
  //   </>
  // ) : (
  //   <Welcome onComplete={() => setHide(true)} />
  // );

  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <ContactMe />
      <Footer />
    </main>
  );
};

export default App;
