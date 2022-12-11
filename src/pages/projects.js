import React from "react";
import "../styles/projects.css";
import PixcassoGif from "../gifs/pixcasso.gif";
import BattleshipGif from "../gifs/battleship.gif";
import BudgeterGif from "../gifs/Budgeter.gif";
import GetWeatherGif from "../gifs/getWeather demo.gif";
import TriangleGif from "../gifs/Impossible Triangle.gif";
import KeyboardGif from "../gifs/keyboard demo.gif";

const gifs = [
  {
    gif: PixcassoGif,
    url: "https:github.com/jmgcito/Pixcasso",
    name: "Pixcasso",
    description: "This is a description of the project",
  },
  {
    gif: GetWeatherGif,
    url: "https://github.com/jmgcito/getWeather",
    name: "getWeather",
    description: "This is a description of the project",
  },
  {
    gif: KeyboardGif,
    url: "https://github.com/jmgcito/virtual-keyboard",
    name: "Virtual Keyboard",
    description: "This is a description of the project",
  },
  {
    gif: BattleshipGif,
    url: "https://github.com/jmgcito/battleship",
    name: "Battleship",
    description: "This is a description of the project",
  },
  {
    gif: BudgeterGif,
    url: "https://github.com/jmgcito/budgeter",
    name: "Budgeter",
    description: "This is a description of the project",
  },
  {
    gif: TriangleGif,
    url: "https://github.com/jmgcito/impossible-triangle",
    name: "Impossible Triangle",
    description: "This is a description of the project",
  },
];

const Project = (props) => {
  console.log(props.url);
  return (
    <div className="project">
      <a href={props.url} target="_blank">
        <img className="gif" src={props.gif}></img>
        <div className="top-left hidden-until-hover">
          <span>{props.name}</span>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  const thumbnails = gifs.map((g) => (
    <Project
      gif={g.gif}
      url={g.url}
      name={g.name}
      description={g.description}
    />
  ));
  return (
    <div id="projects">
      <div id="project-thumbnails">{thumbnails}</div>
      {/* <a>
        <button>More Projects</button>
      </a> */}
    </div>
  );
};

export default Projects;
