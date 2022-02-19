import styled from "styled-components";
import LotteryBox from "./LotteryBox";

import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const Div=styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:black;
  background-color:#453C70;
`
const LotteryApp = () => {
    // const { connection } = useConnection();
    // const { publicKey } = useWallet();

    const buyTicket = async () => {
        const mintAddress = 'Au6EdrSDubCUc34awy9c6iQAg5GSos9pPBXyZQtyZewV'; //nxdf
        const decimals = 10**6;

        const toAddress = '';
        const amount = 100;
        
        alert('buyTicket');
        // await SendSPLTransaction(connection, publicKey, signTransaction, mintAddress, toAddress, amount, decimals);
    }

    return (
        <Div>
            <h1 id="title">Lotto Draw</h1>
            <LotteryBox buyTicket={buyTicket}/>
        </Div>
    );
}

export default LotteryApp;