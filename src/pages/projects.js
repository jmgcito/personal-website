import React from "react";
import "../styles/projects.css";

const Project = () => {
  return (
    <div className="project">
      <img src="https://media0.giphy.com/media/zfYpmAfrcVOAE/giphy.gif"></img>

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
      <h1>projects</h1>
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
