import React, { useMemo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import dynamic from 'next/dynamic';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

import './styles.css';

// const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;
const SOLANA_NETWORK = WalletAdapterNetwork.Devnet;
const network = SOLANA_NETWORK;

const WalletProvider = dynamic(
  async () => {
    const { WalletProvider } = await import('@nxdf/shared/services');
    return WalletProvider;
  },
  {
    ssr: false,
  }
);

function CustomApp({ Component, pageProps }: AppProps) {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider>
          <Head>
            <title>Welcome to soldrops!</title>
          </Head>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default CustomApp;
