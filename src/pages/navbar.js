import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div id="navbar" className="underline">
      <div id="navbar-items">
        <div id="name-container">
          <a id="name" href="#">
            Joshua M. Guillen
          </a>
          <p id="name-description">cognitive science, developer</p>
        </div>
        <div id="navlinks">
          <a href="#projects">Projects</a> • <a href="#about">About Me</a> •{" "}
          <a href="#contact">Contact</a> • <a href="/?">?</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
