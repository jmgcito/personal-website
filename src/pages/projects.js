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
      <div className="under-construction">
        <span>
          This section is currently under construction. :,(<br></br> Pretty
          please come back another day.
        </span>
      </div>
      <div id="project-thumbnails">
        {" "}
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      {/* <a>
        <button>More Projects</button>
      </a> */}
    </div>
  );
};

export default Projects;
