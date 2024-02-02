import getConfig from 'next/config';
import App from 'next/app';
import Head from 'next/head';

import Navbar from '@/app/layouts/Nav/Navbar';

import '../app/globals.css';
import Footer from '@/app/layouts/Footer';

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

        {/* Go Top Button */}
        {/* <GoTop scrollStepInPx="100" delayInMs="15.50" /> */}
      </>
    );
  }
}
