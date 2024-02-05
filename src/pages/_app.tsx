import App from 'next/app';

import Navbar from '@/app/layouts/Nav/Navbar';
import Footer from '@/app/layouts/Footer';

import '../app/globals.css';

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
