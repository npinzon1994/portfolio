import React, {useState} from "react";
import ThemeContext from "./theme-context";

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const themeContext = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
