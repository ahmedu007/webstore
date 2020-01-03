import NextApp from "next/app";
import React from "react";
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { theme } from "../theme";

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <CssBaseline />
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
