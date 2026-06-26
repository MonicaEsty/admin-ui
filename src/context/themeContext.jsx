import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const themes = [
    {
      name: "theme-green",
      color: "#299D91",
      bgcolor: "bg-[#299D91]",
    },
    {
      name: "theme-blue",
      color: "#1E90FF",
      bgcolor: "bg-[#1E90FF]",
    },
    {
      name: "theme-purple",
      color: "#6A5ACD",
      bgcolor: "bg-[#6A5ACD]",
    },
    {
      name: "theme-pink",
      color: "#DB7093",
      bgcolor: "bg-[#DB7093]",
    },
    {
      name: "theme-brown",
      color: "#8B4513",
      bgcolor: "bg-[#8B4513]",
    },
  ];

  const [theme, setTheme] = useState(themes[0]);

  return (
    <ThemeContext.Provider value={{ themes, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};