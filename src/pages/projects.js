import React from "react";
import "../styles/projects.css";
import PixcassoGif from "../gifs/pixcasso.gif";
import BattleshipGif from "../gifs/battleship.gif";
import BudgeterGif from "../gifs/Budgeter.gif";
import GetWeatherGif from "../gifs/getWeather demo.gif";
import TriangleGif from "../gifs/Impossible Triangle.gif";
import KeyboardGif from "../gifs/keyboard demo.gif";

const gifs = [
  { gif: PixcassoGif, url: "https:github.com/jmgcito/Pixcasso" },
  { gif: GetWeatherGif, url: "https://github.com/jmgcito/getWeather" },
  { gif: KeyboardGif, url: "https://github.com/jmgcito/virtual-keyboard" },
  { gif: BattleshipGif, url: "https://github.com/jmgcito/battleship" },
  { gif: BudgeterGif, url: "https://github.com/jmgcito/budgeter" },
  { gif: TriangleGif, url: "https://github.com/jmgcito/impossible-triangle" },
];

const Project = (props) => {
  console.log(props.url);
  return (
    <div className="project">
      <a href={props.url} target="_blank">
        <img className="gif" src={props.gif}></img>
      </a>
    </div>
  );
};

const Projects = () => {
  const thumbnails = gifs.map((g) => <Project gif={g.gif} url={g.url} />);
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
