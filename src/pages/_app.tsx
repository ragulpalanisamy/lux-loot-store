import getConfig from 'next/config';
import App from 'next/app';
import Head from 'next/head';
import Navbar from '@/app/layouts/Nav/Navbar';

const { publicRuntimeConfig } = getConfig();
const { applicationEnvironment } = publicRuntimeConfig;

import '../app/globals.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Ragul Bazaar</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}

        {/* Go Top Button */}
        {/* <GoTop scrollStepInPx="100" delayInMs="15.50" /> */}
      </>
    );
  }
}
