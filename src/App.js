import "./styles/styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
function App() {
  return (
    <div className="App">
      <div id="component-container">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <footer>
        <a href="#">joshua m. guillen</a>
      </footer>
    </div>
  );
}

export default App;
