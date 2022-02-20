import { useRouter } from 'next/router';
import styled from 'styled-components';
import {useEffect, useState} from "react";
import {useWallet} from "@solana/wallet-adapter-react";
import {useConnection, WalletMultiButton} from "@nxdf/shared/services";
import {useIsMobile} from "../../../hooks/useIsMobile";
import Main from "../../../components/Lotto/Main";
import Header from "../../../components/Lotto/Header";
import LotteryBuyers from "../../../components/Lotto/LotteryBuyers";
import About from "../../../components/Lotto/About";
import Winners from "../../../components/Lotto/Winners";
import Footer from "../../../components/Lotto/Footer";

/* eslint-disable-next-line */
export interface LottoProps {};

export const CONTAINER_WIDTH = '1100px';

export function Lotto(props: LottoProps) {
  const router = useRouter();
  const isMobile = useIsMobile();
  const { publicKey } = useWallet();

  const [userId, setUserId] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if(!router.isReady || !router.query.user_id) return;
    setUserId(router.query.user_id.toString());
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (publicKey) {
      setAddress(publicKey.toString());
    }
  }, [publicKey]);

  return (
    <div>
      <Header/>
      <Main userId={userId}/>
      <LotteryBuyers/>
      <About/>
      <Winners/>
      <Footer/>
    </div>
  )
}

export default Lotto;
