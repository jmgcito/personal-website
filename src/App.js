import "./styles/styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
function App() {
  return (
    <div className="App">
      <header></header>
      <div>
        <Home />
        <About />
        <Projects />
      </div>
      <footer>
        <a href="#">joshua m. guillen</a>
      </footer>
    </div>
  );
}

export default App;
