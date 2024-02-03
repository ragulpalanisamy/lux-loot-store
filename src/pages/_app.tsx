import App from 'next/app';
import getConfig from 'next/config';

import Navbar from '@/app/layouts/Nav/Navbar';

import Footer from '@/app/layouts/Footer';

import '../app/globals.css';

/* getting application environment */
const { publicRuntimeConfig } = getConfig();
const { applicationEnvironment } = publicRuntimeConfig;

/* Main App class */
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
