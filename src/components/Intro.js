import React from "react";
import classes from "./Intro.module.css";
import pfp from '../assets/temporary-headshot.jpg';

const Intro = () => {
  return (
    <div className={classes.container}>
      <img src={pfp} alt="Nikki Pinzon headshot"/>
      <h1>Nikki</h1>
      <h3>Front-End Web Developer</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

export default Intro;
