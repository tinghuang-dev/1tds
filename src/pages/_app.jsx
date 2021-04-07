import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from '../app/Header';
import '../styles/global.css';
import '../styles/ZCOOLKuaile.css';
import MessageProvider from '../app/MessageProvider';
import Footer from '../app/Footer';
import Box from '../components/Box';
import Flex from '../components/Flex';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MessageProvider>
        <Flex minHeight="100vh" flexDirection="column">
          <Header />
          <Box flex="1">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Box>
          <Footer height="180px" />
        </Flex>
        <div id="modal-root" />
        <div id="message-root" />
      </MessageProvider>
    </ThemeProvider>
  );
}

export default MyApp;
