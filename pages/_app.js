import NextApp from "next/app";
import React from "react";
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeProvider as MaterialThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";

const theme = {
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

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </MaterialThemeProvider>
      </StyledThemeProvider>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {}
`;
