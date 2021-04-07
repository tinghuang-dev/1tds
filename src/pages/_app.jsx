import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from '../app/Header';
import '../styles/global.css';
import '../styles/ZCOOLKuaile.css';
import MessageProvider from '../app/MessageProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MessageProvider>
          <Header />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
          <div id="modal-root" />
          <div id="message-root" />
        </MessageProvider>
      </ThemeProvider>
      <script
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmb4QkQfvFvCYiiAyfSAJXfFBBn_4ty4g&&language=en&libraries=places"
      />
    </>
  );
}

export default MyApp;
