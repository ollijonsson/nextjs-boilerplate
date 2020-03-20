import React from 'react';
import { Provider } from 'react-redux';
import App, { AppContext } from 'next/app';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';

class MyApp extends App<any, any> {

  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await
      Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  }
}

export default withRedux(initStore)(MyApp);