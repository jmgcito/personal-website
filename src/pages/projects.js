import React from "react";
import "../styles/projects.css";
import PixcassoGif from "../gifs/pixcasso.gif";

const Project = () => {
  return (
    <div className="project">
      <img src={PixcassoGif}></img>

      <p>
        <strong>Project title</strong>
        <br></br>
        short description of this thing
      </p>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="center-card">
      <h1>Projects</h1>
      <hr></hr>
      <Project />
      <hr></hr>
      <Project />
      <hr></hr>
      <Project />
    </div>
  );
};

export default Projects;
