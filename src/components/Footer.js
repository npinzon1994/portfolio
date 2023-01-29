import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <div className={classes["social-links"]}>
        <a href="https://github.com/npinzon1994" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/W_.svg"
            title="github icon"
            alt="github logo"
            className={classes.github}
          />
        </a>
        <a href="https://www.linkedin.com/in/nikkipinzon/" target="_blank" rel="noreferrer">
          <img
            src="https://svgshare.com/i/Ng.svg"
            title="linkedin"
            alt="linkedin logo"
            className={classes.linkedin}
          />
        </a>
      </div>
      <div className={classes.copyright}>&#169; 2023 Nikki Pinzon</div>
    </div>
  );
};

export default Footer;
