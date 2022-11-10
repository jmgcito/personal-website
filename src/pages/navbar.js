import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  function scrollToElement(element) {
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
  }
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
          <a id="projects-link" onClick={() => scrollToElement("projects")}>
            Projects
          </a>{" "}
          • <a onClick={() => scrollToElement("about")}>About Me</a> •{" "}
          <a onClick={() => scrollToElement("contact")}>Contact</a> •{" "}
          <a href="/?">?</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
