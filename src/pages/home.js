import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div id="home-container">
      <div id="home-flex">
        <span id="welcome1" className="welcome">
          Hello!{" "}
        </span>
        <span id="welcome2" className="welcome">
          Hello!{" "}
        </span>
        <a href="https://github.com/jmgcito/personal-website" target="_blank">
          <p className="hover-hidden">*I made this website from scratch :3</p>
          <p className="hidden-until-hover">Check out the code!</p>
        </a>
      </div>
    </div>
  );
};

window.onload = function () {
  const elts = {
    text1: document.getElementById("welcome1"),
    text2: document.getElementById("welcome2"),
  };

  const texts = [
    "Hello!",
    "Hola!",
    "Ola!",
    "Welcome!",
    "Bienvenido!",
    "Bem-vindo!",
  ];

  const morphTime = 1;
  const cooldownTime = 2;

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  }

  function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 90)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.8) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 5, 10)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.8) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  }

  function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
  }

  function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }

      doMorph();
    } else {
      doCooldown();
    }
  }

  animate();
};
export default Home;
