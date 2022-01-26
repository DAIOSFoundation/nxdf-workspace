import { AppProps } from 'next/app';
import Head from 'next/head';
import Banner from '../components/header';
import Footer from '../components/footer';
import './styles.css';
import { GlobalStyle } from './globalstyle';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Head>
        <title>Welcome to artistella!</title>
      </Head>
      <Banner/>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  );
}

export default CustomApp;
