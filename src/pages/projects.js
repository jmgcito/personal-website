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
    description:
      "A pixel art drawing tool in the style of a classic Etch-a-sketch. ",
  },
  {
    gif: GetWeatherGif,
    url: "https://github.com/jmgcito/getWeather",
    name: "getWeather",
    description: "A web app that displays the real-time weather for any city.",
  },
  {
    gif: KeyboardGif,
    url: "https://github.com/jmgcito/virtual-keyboard",
    name: "Virtual Keyboard",
    description:
      "A synthesizer with functioning octave control playable with mouse or keyboard.",
  },
  {
    gif: BattleshipGif,
    url: "https://github.com/jmgcito/battleship",
    name: "Battleship",
    description: "A playable in-browser version of the board game, Battleship",
  },
  {
    gif: BudgeterGif,
    url: "https://github.com/jmgcito/budgeter",
    name: "Budgeter",
    description:
      "A web app that budgets monthly income by category and percentages.",
  },
  {
    gif: TriangleGif,
    url: "https://github.com/jmgcito/impossible-triangle",
    name: "Impossible Triangle",
    description:
      "An interactive webpage illustrating how the Penrose Triangle illusion tricks us.",
  },
];

const Project = (props) => {
  console.log(props.url);
  return (
    <div className="project">
      <a href={props.url} target="_blank">
        <img className="gif" src={props.gif}></img>
        <div className="top-left hidden-until-hover">
          <div className="project-text-container">
            <span className="project-name">{props.name}</span>
            <p className="project-description">{props.description}</p>
          </div>
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
