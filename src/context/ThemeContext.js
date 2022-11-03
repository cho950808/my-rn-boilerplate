import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
// import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [ThemeMode, setThemeMode] = useState("light");
  const theme = ThemeMode === "light" ? lightTheme : darkTheme;
  const values = { ThemeMode, setThemeMode };

  return (
    <ThemeContext.Provider value={values}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem("theme");
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  };

  const toggleTheme = useCallback(() => {
    let selectTheme;
    if (ThemeMode === "light") {
      selectTheme = "dark";
    } else {
      selectTheme = "light";
    }
    setThemeMode(selectTheme);
    AsyncStorage.setItem("theme", selectTheme);
  }, [ThemeMode]);

  return { ThemeMode, toggleTheme };
};
