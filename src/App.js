import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Blog from "./components/Blog"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
