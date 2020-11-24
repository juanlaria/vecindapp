import * as React from 'react';
import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion';

import { globalStyles } from '../shared/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1148C2',
    },
    secondary: {
      main: '#E12424',
    },
  },
});

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          {globalStyles}
          <Component {...pageProps} />
        </CacheProvider>
      </ThemeProvider>
    );
  }
}
