import React from "react";
import classes from "./Intro.module.css";
import pfp from "../../assets/professional-headshot.jpg";
import Skills from "./Skills";

const Intro = () => {
  return (
    <div className={classes.container}>
      <img src={pfp} alt="Nikki Pinzon headshot" className={classes.headshot} />
      <h1>Nikki</h1>
      <h3>Front-End Web Developer</h3>
      <Skills />
      <p>
        I'm an independent Front-End Web Developer looking to ease the lives of
        everyone around me through code. My passion for clean, component-driven
        design and problem solving are what drive me to create the best products
        possible.
      </p>
    </div>
  );
};

export default Intro;
