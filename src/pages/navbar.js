import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div id="navbar" className="underline">
      <div>
        <a href="#about">about me</a> • <a href="#projects">projects</a> •{" "}
        <a href="#contact">contact</a> • <a href="/?">?</a>
      </div>
    </div>
  );
};

export default Navbar;
