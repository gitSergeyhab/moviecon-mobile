export const darkTheme = {
  background: {
    primary: "#2b2121",
    secondary: "#1e1e1e",
    tertiary: "#a3a0a0",
  },
  buttonBg: {
    primary: "#FFF",
    secondary: "#d18006",
    tertiary: "#1b0902",
  },
  border: {
    primary: "#000",
    secondary: "#1b0902",
    tertiary: "#FFF",
    accent: "#d18006",
  },
  buttonBgActive: {
    primary: "#beb9ad",
    secondary: "#d18006",
    tertiary: "#0f0501",
  },
  text: {
    primary: "#FFF",
    secondary: "#999595",
    tertiary: "#351204",
    accent: "#f08306",
  },
  buttonText: {
    primary: "#000",
    secondary: "#1b0902",
    tertiary: "#FFF",
  },
  boxShadow: {
    primary: "rgba(0, 0, 0, 0.2)",
    secondary: "rgba(0, 0, 0, 0.3)",
  },
};

export const lightTheme: ColorTheme = {
  background: {
    primary: "#FFF",
    secondary: "#f5f5f5",
    tertiary: "#221515",
  },
  buttonBg: {
    primary: "#351204",
    secondary: "#885304",
    tertiary: "#999595",
  },
  border: {
    primary: "#FFF",
    secondary: "#999595",
    tertiary: "#351204",
    accent: "#d18006",
  },
  buttonBgActive: {
    primary: "#0f0501",
    secondary: "#664512",
    tertiary: "#beb9ad",
  },

  text: {
    primary: "#000",
    secondary: "#1b0902",
    tertiary: "#FFF",
    accent: "#d18006",
  },
  buttonText: {
    primary: "#FFF",
    secondary: "#999595",
    tertiary: "#351204",
  },
  boxShadow: {
    primary: "rgba(0, 0, 0, 0.2)",
    secondary: "rgba(0, 0, 0, 0.3)",
  },
};

export type ColorTheme = typeof darkTheme;

export const colorTheme: Record<"light" | "dark", ColorTheme> = {
  light: lightTheme,
  dark: darkTheme,
};
