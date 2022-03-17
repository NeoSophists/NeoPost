import { typography, Typography } from "./typography";

export const navbarHeight = "10rem";

export interface Theme {
  name: string;
  textColor: string;
  background1: string;
  background2: string;
  typography: Typography;
}

export const themes = {
  light: {
    name: "light",
    textColor: "white",
    background1: "black",
    background2: "grey",
    typography,
  },
  dark: {
    name: "dark",
    textColor: "black",
    background1: "black",
    background2: "grey",
    typography,
  },
};
