import React from "react";
import classes from "../Portfolio/PortfolioItem.module.css";

const PortfolioItem = (props) => {
  const languages = props.languages.map((language) => (
    <span className={classes.language}>{language}</span>
  ));

  return (
    <li className={classes.container}>
      <div className={classes["img-container"]}>
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className={classes["info-container"]}>
        <span className={classes.title}>{props.title}</span>
        <div className={classes["language-container"]}>{languages}</div>
      </div>
    </li>
  );
};

export default PortfolioItem;
