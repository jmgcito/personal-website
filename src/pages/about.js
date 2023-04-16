import React from "react";
import Contact from "./contact";
import ProfilePic from "../pics/shoe.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about">
      <div id="about-container">
        <div id="about-body">
          <img
            id="profile-pic"
            src={ProfilePic}
            alt="Image of Joshua Guillen"
            height="300px"
            width="400px"
          ></img>
          <div id="about-items">
            <Contact />
            <p id="about-paragraph">
              I am a cognitive scientist, programmer, and life-long student.{" "}
              <br></br>
              <br></br>Throughout my years in college and my time post-grad
              self-teaching I have learned much about computers from a
              theoretical perspective as well as in practice with the goal of
              uncovering the mechanics behind human cognition. <br></br>
              <br></br>I’ve dipped my nose into several technologies related to
              computer programming. <i>C, C++, and Unix</i> for my fundamentals
              in programming. <i>Python, Tensorflow, and Pandas</i> for Machine
              Learning. And most recently,{" "}
              <i>
                Javascript, HTML, CSS, Node.js, React, Webpack, and Firebase
              </i>{" "}
              for web development. <br></br>
              <br></br>Much of my time is also spent working industry-standard
              events as an Event Coordinator and Special Event Technician at the
              Exploratorium – a museum that blends science and art to facilitate
              curiosity based learning. Some of the clients I've worked events
              for include Apple, Google, Chan Zuckerberg Biohub, the AICP
              Awards, and Stanford University.
            </p>
          </div>

          <br></br>
        </div>
      </div>
    </div>
  );
};

export default About;
