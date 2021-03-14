import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from '../app/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
