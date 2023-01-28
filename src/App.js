import React, { Fragment } from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
    </Fragment>
  );
};

export default App;
