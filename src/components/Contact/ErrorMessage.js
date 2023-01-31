import React, { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import classes from "../Contact/ErrorMessage.module.css";

const ErrorMessage = (props) => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  const isDarkTheme = theme === "dark";

  return (
    <span
      className={`${classes.invalid} ${
        isDarkTheme ? classes["dark-invalid"] : ""
      }`}
    >
      {props.message}
    </span>
  );
};

export default ErrorMessage;
