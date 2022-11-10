import React from "react";
import "../styles/contact.css";
import GithubIcon from "../svg/icons8-github.svg";
import LinkedInIcon from "../svg/iconmonstr-linkedin-3.svg";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <div id="contact-info">
        <div id="location">
          <p>San Francisco Bay Area</p>
        </div>
        <div id="phone">
          <p>(925)-890-3951</p>
        </div>
        <div id="email">
          <p>
            <a href="mailto: joshuamguillen@gmail.com">
              joshuamguillen@gmail.com
            </a>
          </p>
        </div>
        <div id="social-links">
          <p>
            {" "}
            <a href="https://github.com/jmgcito" target="_blank">
              <img id="github-icon" src={GithubIcon}></img>{" "}
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/joshuamguillen/"
              target="_blank"
            >
              {" "}
              <img id="linkedin-icon" src={LinkedInIcon}></img>{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
