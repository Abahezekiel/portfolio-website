import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import RecentProjects from "./Components/RecentProjects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div><Skills /></div>
      <div ref={projectsRef}><RecentProjects /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;
