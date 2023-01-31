import React from "react";
import classes from "./LoadingSpinner.module.css";
import loadingSpinner from "../assets/loading-spinner.gif";

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <span className={classes.sending}>Sending Email... </span>
      <img
        src={loadingSpinner}
        alt="loading spinner"
        className={classes["loading-spinner"]}
      />
    </div>
  );
};

export default LoadingSpinner;
