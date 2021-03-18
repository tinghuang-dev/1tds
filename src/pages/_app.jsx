import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from '../app/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap" rel="stylesheet" />
      </Head>
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
