import React from "react";
import "../styles/projects.css";

const Project = () => {
  return (
    <div className="project">
      <img src="https://media0.giphy.com/media/zfYpmAfrcVOAE/giphy.gif"></img>
      <strong>Project title</strong>
      <p>short description of this thing</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="center-card">
      <div id="projects-header">
        <a>projects</a>
      </div>
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
