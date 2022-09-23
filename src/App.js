import "./styles/styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
function App() {
  return (
    <div className="App">
      <Router>
        <header></header>
        <div>
          <div id="center-card">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
        <footer>
          <a href="#">joshua m. guillen</a>
        </footer>
      </Router>
    </div>
  );
}

export default App;
