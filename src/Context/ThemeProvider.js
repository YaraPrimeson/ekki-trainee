import React from "react";
import { createContext } from "react";

export const ThemeContext = createContext({});
const ThemeProvider = ({ children }) => {
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };

  return (
    <ThemeContext.Provider value={{ themes }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
