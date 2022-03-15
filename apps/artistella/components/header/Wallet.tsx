import React, { FC, ReactNode, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { WalletDiv } from './style';
import { ConnectionProvider } from '@nxdf/shared/services';
import { WalletAdapterNetwork } from '@nxdf/shared/services';
import {
    WalletModalProvider,
    WalletMultiButton
} from '@nxdf/shared/services';
import { clusterApiUrl } from '@nxdf/shared/services';

const Wallet: FC=()=>{
  return(
    <Context>
      <Content/>
    </Context>
  )
}
const Context: FC<{children: ReactNode}> = ({children}) => {
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    
    const WalletProvider = dynamic(
      async () => {
        const { WalletProvider } = await import('@nxdf/shared/services');
        return WalletProvider;
      },
      {
        ssr: false,
      }
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Content: FC = () => {
  return (
  <WalletDiv>
    <WalletMultiButton />
  </WalletDiv>
  )
};

export default Wallet;