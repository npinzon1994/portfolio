import React from "react";
import classes from "../Contact/EmailStatus.module.css";

const EmailStatus = (props) => {
  return (
    <div className={classes.container}>
      <span className={props.className}>{props.status}</span>
      <img
        src={props.img.src || ''}
        alt={props.img.alt || ''}
        className={props.img.className}
      />
    </div>
  );
};

export default EmailStatus;
