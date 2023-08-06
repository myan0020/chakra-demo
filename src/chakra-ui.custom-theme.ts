import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const breakpoints = {
  sm: "300px",
  md: "700px",
  lg: "900px",
  xl: "1200px",
  "2xl": "1500px",
};

export const chakraCustomTheme = extendTheme({
  config,
  breakpoints,
  semanticTokens: {
    colors: {
      error: "red.500",
      text: {
        default: "yellow",
        _light: "red",
        _dark: "green",
      },
    },
  },
});
