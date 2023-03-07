import React, { useState, createContext } from "react";
export const ThemeContext = createContext(false);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("#F0D4D9");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "#F0D4D9" ? "#441d24" : "#F0D4D9"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
