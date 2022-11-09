import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about">
      <div id="about-container">
        <h1>About Me</h1>
        <div id="about-body">
          <img
            src="https://cdn.myminifactory.com/assets/object-assets/5d33a23e8f0b4/images/720X720-grimace.jpg"
            alt="Image of Joshua Guillen"
            height="300px"
            width="400px"
          ></img>
          <p>
            Hi! I’m Joshua Guillen and welcome to my website. I am a 23 year old
            cognitive scientist / programmer / life-long student. <br></br>
            <br></br>Throughout my years in college and my time post-grad
            self-teaching I have learned much about computers from a theoretical
            perspective as well as from a practical aspect with the goal of
            uncovering the mechanics behind human cognition. <br></br>
            <br></br>I’ve dipped my nose into several technologies related to
            computer programming. <i>C, C++, and Unix</i> for my fundamentals in
            programming. <i>Python and Pandas</i> for Machine Learning. And most
            recently,{" "}
            <i>Javascript, HTML, CSS, Node.js, React, Webpack, and Firebase</i>{" "}
            for web development. <br></br>
            <br></br>Much of my time these days is spent working events as an
            Event Coordinator and Special Event Technician at the Exploratorium
            – a museum that blends science and art to facilitate curiosity based
            learning. Although I consider the Exploratorium a second home, I
            feel now has come the time to move on and pursue my passion for
            computers.
          </p>

          <br></br>
        </div>
      </div>
    </div>
  );
};

export default About;
