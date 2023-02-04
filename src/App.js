import React, { useContext, useEffect } from "react";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import "./DarkMode.css";
import ThemeContext from "./store/theme-context";

const App = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button className={`${theme === 'light' ? 'theme-toggle' : 'dark-theme-toggle'}`} onClick={toggleTheme} type="button" />
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
