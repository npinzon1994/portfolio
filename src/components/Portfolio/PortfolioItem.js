import React, { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import classes from "../Portfolio/PortfolioItem.module.css";

const PortfolioItem = (props) => {
  const themeContext = useContext(ThemeContext);
  const {theme} = themeContext;
  
  const languages = props.languages.map((language) => (
    <span className={`${classes.language} ${theme === 'dark' ? classes['dark-language'] : ''}`}>{language}</span>
  ));

  return (
    <li className={`${classes.container} ${theme === 'dark' ? classes['dark-container'] : ''}`}>
      <img src={props.img.src} alt={props.img.alt} className={classes.image} />
      <div className={classes["info-container"]}>
        <span className={classes.title}>{props.title}</span>
        <div className={classes["language-container"]}>{languages}</div>
      </div>
    </li>
  );
};

export default PortfolioItem;
