import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  console.log(theme);

  const themeContext = { theme, setTheme };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
