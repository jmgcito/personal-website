import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div id="contact" className="center-card">
      <h1>contact</h1>
      <div id="contact-info">
        <div id="location">
          <h2>location</h2>
          San Francisco Bay Area
        </div>
        <div id="phone">
          <h2>phone</h2>
          (925)-890-3951
        </div>
        <div id="email">
          <h2>email</h2>
          <a href="mailto: joshuamguillen@gmail.com">
            joshuamguillen@gmail.com
          </a>
        </div>
        <div id="social-links">
          <h2>socials</h2>
          <a href="https://github.com/jmgcito">Github</a> •{" "}
          <a href="https://www.linkedin.com/in/joshuamguillen/">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
