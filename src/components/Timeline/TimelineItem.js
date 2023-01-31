import React, { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import classes from "./TimelineItem.module.css";

const TimelineItem = (props) => {
  const themeContext = useContext(ThemeContext);
  const {theme} = themeContext;
  
  return (
    <li className={classes["list-item"]}>
      <div className={classes["info-container"]}>
        <span className={`${classes.year} ${theme === 'dark' ? classes['dark-year'] : ''}`}>{props.year}</span>
        <span className={classes.title}>{props.title}</span>
        <span className={classes.duration}>{props.duration}</span>
      </div>
      <div>
        <span className={`${classes.description} ${theme === 'dark' ? classes['dark-description'] : ''}`}>{props.description}</span>
      </div>
    </li>
  );
};

export default TimelineItem;
