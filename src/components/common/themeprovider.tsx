import React, { createContext, useContext, useState, useEffect } from "react";
import { PrimeReactContext } from "primereact/api"; // Import the context

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { changeTheme } = useContext(PrimeReactContext);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const getThemeFromLocalStorage = () => {
    const linkId = "theme-link";
    console.log("current theme is : ", theme);
    changeTheme("md-light-deeppurple", `md-${theme}-deeppurple`, linkId);
  };
  useEffect(() => {
    getThemeFromLocalStorage();
  }, [changeTheme, getThemeFromLocalStorage]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
