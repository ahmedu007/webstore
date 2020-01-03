import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";

export const theme = {
  ...createMuiTheme({
    palette: {
      primary: {
        light: lightGreen[300],
        main: lightGreen[500],
        dark: lightGreen[700],
      },
      secondary: {
        light: blueGrey[300],
        main: blueGrey[500],
        dark: blueGrey[700],
      },
      type: "dark",
    },
  }),
};
