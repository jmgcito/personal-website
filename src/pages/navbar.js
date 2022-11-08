import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div id="navbar" className="underline">
      <div>
        <a href="#about">About Me</a> • <a href="#projects">Projects</a> •{" "}
        <a href="#contact">Contact</a> • <a href="/?">?</a>
      </div>
    </div>
  );
};

export default Navbar;
