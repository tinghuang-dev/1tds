import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from '../app/Header';
import '../styles/global.css';
import '../styles/ZCOOLKuaile.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <div id="modal-root" />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
