import bg from "./assets/bg7.png"; // adjust the path if needed
import Body from "./components/Body"; // or wherever Body is
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css"
import Projects from "./components/Project";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className='bg-gray-900 scrollbar-hide'>
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
