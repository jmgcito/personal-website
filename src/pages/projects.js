import React from "react";
import "../styles/projects.css";
import PixcassoGif from "../gifs/pixcasso.gif";

const Project = () => {
  return (
    <div className="project">
      <img className="gif" src={PixcassoGif}></img>

      {/* <p>
        <strong>Project title</strong>
        <br></br>
        short description of this thing
      </p> */}
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div id="project-thumbnails">
        {" "}
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
